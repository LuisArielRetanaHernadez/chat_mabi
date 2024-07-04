

import "./listChat.style.css"
import { useEffect, useState } from 'react'
import { useStore } from "../../lib/userStorage"
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { useChatStore } from "../../lib/useChatStore"
import { Link } from "react-router-dom"

const ListChat = () => {
  const [chats, setChats] = useState([])

  const { currentUser } = useStore()
  const { changeChat } = useChatStore()

  useEffect(() => {
    console.log('currentUser ', currentUser)

    if (!currentUser) return

    // get chats
    const unSub = onSnapshot(doc(db, "userChats", currentUser?.id), async (res) => {

      const itemsChat = res.data().chats
      console.log('itemsChat ', itemsChat)

      // get user data
      const promisse = itemsChat.map(async (item) => {
        const userRef = doc(db, "users", item.receiverId)
        const userSnap = await getDoc(userRef)

        const user = userSnap.data()

        return { user, ...item }
      });

      const chatData = await Promise.all(promisse)
      console.log('chatData ', chatData)
      // setChats(chatData.sort((a, b) => {
      //   if (a.lastMessage && b.lastMessage) {
      //     return a.lastMessage.time - b.lastMessage.time
      //   }
      // }))

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));

      console.log('chats ', chats)

    });

    return () => {
      unSub();
    }
  }, [currentUser?.id])

  const handleSelect = async (chat) => {
    console.log('chat ', chat)

    // update isSeen  
    const userChats = chats.map((item) => {
      const { ...rest } = item;
      return rest;
    });

    console.log('userChats ', userChats)

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    console.log('chatIndex ', chatIndex)

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userChats", currentUser.id);
    console.log('userChatsRef ', userChatsRef)
    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    // <div className="chatList">
    //   <div className="search">
    //     <div className="searchBar">
    //       <span className="icon">
    //         <FontAwesomeIcon icon={faMagnifyingGlass} />
    //       </span>
    //       <input type="text" />
    //     </div>
    //     <span className="icon add" onClick={() => setAddMode(prev => !prev)}>
    //       <FontAwesomeIcon icon={faCirclePlus} />
    //     </span>
    //   </div>
    //   {chats.map((chat) => (
    //     <div className="item" key={chat.chatId} onClick={() => handleSelect(chat)}>
    //       <img src={chat.user.avatar} />
    //       <div className="texts">
    //         <span>{chat.user.username}</span>
    //         <p>{chat.lastMessage}</p>
    //       </div>
    //     </div> || <span>Sin chats</span>
    //   ))}
    //   {addMode && <AddUser />}
    // </div>

    <div className="list-chat">
      <div className="list-chat__search">
        {/* search bar */}
      </div>
      <ul className="list-chat__list">
        <li className="list-chat__item">
          <Link to="/chat/1" className="list-chat__user">
            <figure className="list-chat__content-image">
              <img className="list-chat__image" src="https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </figure>
            <div className="list-chat__about-user">
              <span className="list-chat__username">Name User</span>
              <p className="list-chat__last-message">Message</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ListChat