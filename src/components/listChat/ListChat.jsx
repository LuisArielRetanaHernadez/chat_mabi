// font-awesome
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./listChat.style.css"
import { useEffect, useState } from 'react'
import { useStore } from "../../lib/userStorage"
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { useChatStore } from "../../lib/useChatStore"

const ListChat = () => {
  const [chats, setChats] = useState([])
  const [addMode, setAddMode] = useState(false)

  const { currentUser } = useStore()
  const { changeChat, chatId } = useChatStore()

  useEffect(() => {

    const unSub = onSnapshot(doc(db, "userChats", currentUser.id), async (doc) => {
      console.log("Current data: ", doc.data());

      const itemsChat = doc.data().chats
      const promisse = itemsChat.map(async (item) => {
        console.log(item)
        const userRef = doc(db, "users", item.receiverId)
        const userSnap = await getDoc(userRef)

        const user = userSnap.data()

        return { ...user, lastMessage: item.lastMessage }
      });

      const chatData = await Promise.all(promisse)
      setChats(chatData.sort((a, b) => {
        if (a.lastMessage && b.lastMessage) {
          return a.lastMessage.time - b.lastMessage.time
        }
      }))

    });

    return () => {
      unSub();
    }
  }, [currentUser.id])

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userchats", currentUser.id);

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
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <span className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="text" />
        </div>
        <span className="icon add">
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>
      </div>
      {chats.map((chat) => (
        <div className="item" key={chat.id} onClick={() => handleSelect}>
          <img src={chat.avatar} />
          <div className="texts">
            <span>{chat.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div> || <span>Sin chats</span>
      ))}
    </div>
  )
}

export default ListChat