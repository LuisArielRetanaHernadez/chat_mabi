

import "./listChat.style.css"
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Link } from "react-router-dom"
import Search from "../search/Search"
import { where } from 'firebase/firestore'
import { useSelector } from "react-redux"

const ListChat = () => {
  const [chats, setChats] = useState([])

  const currentUser = useSelector(state => state.user.user)

  useEffect(() => {

    if (!currentUser) return

    // get chats
    const unSub = onSnapshot(doc(db, "userChats", currentUser?.id), async (res) => {

      const itemsChat = res.data().chats

      // get user data
      const promisse = itemsChat.map(async (item) => {
        const userRef = doc(db, "users", item.receiverId)
        const userSnap = await getDoc(userRef)

        const user = userSnap.data()

        return { user, ...item }
      });

      const chatData = await Promise.all(promisse)
      // setChats(chatData.sort((a, b) => {
      //   if (a.lastMessage && b.lastMessage) {
      //     return a.lastMessage.time - b.lastMessage.time
      //   }
      // }))

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));

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

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userChats", currentUser.id);
    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const searchUsers = async (user) => {
    try {
      // get user data
      console.log('user ', user)
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", ">=", user));
      const querySnapShot = await getDocs(q);
      console.log('querySnapShot ', querySnapShot)
      if (!querySnapShot.empty) {
        // obtener todos los usuarios encontrados para set el estado chats
        const chats = querySnapShot.docs.map((doc) => doc.data());
        setChats(chats);
      }
    } catch (error) {
      console.log('error ', error);
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
        <Search setSearch={searchUsers} />
      </div>
      <ul className="list-chat__list">
        {chats?.length ? (
          chats.map((chat) => (
            <li className="list-chat__item" key={chat.id}>
              <Link to={`/chat/${chat.id}`} className="list-chat__user" onClick={() => handleSelect(chat)}>
                <figure className="list-chat__content-image">
                  <img className="list-chat__image" src={chat.photoURL} alt="avatar" />
                </figure>
                <div className="list-chat__about-user">
                  <span className="list-chat__username">{chat.username}</span>
                  <p className="list-chat__last-message">{chat?.lastMessage?.text}</p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <span className="list-chat__empty-list ">¿Quien para chatear?</span>
        )}

      </ul>
    </div>
  )
}

export default ListChat