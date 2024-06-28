// font-awesome
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./listChat.style.css"
import { useEffect, useState } from 'react'
import { useStore } from "../../lib/userStorage"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../lib/firebase"

const ListChat = () => {
  const [chats, setChats] = useState([])
  const [addMode, setAddMode] = useState(false)

  const { currentUser } = useStore()

  useEffect(() => {

    const unSub = onSnapshot(doc(db, "chats", currentUser.id), (doc) => {
      console.log("Current data: ", doc.data());
      setChats(doc.data().chats)
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
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ListChat