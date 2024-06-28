// font-awesome
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./listChat.style.css"
import { useEffect, useState } from 'react'
import { useStore } from "../../lib/userStorage"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../lib/firebase"

const ListChat = () => {
  const [chats, setChats] = useState([])
  const [addMode, setAddMode] = useState(false)

  const { currentUser } = useStore()

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
      {chats.map((chat, index) => (
        <div className="item" key={index}>
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