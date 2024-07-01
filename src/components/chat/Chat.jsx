import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faCircleInfo, faFaceSmileWink, faFileImage, faMicrophone, faMobileScreenButton, faVideo } from '@fortawesome/free-solid-svg-icons'

// emoji picker react
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { useChatStore } from '../../lib/useChatStore'
import { useStore } from '../../lib/userStorage'
// import { arrayUnion } from 'firebase/firestore'

const Chat = () => {
  const [showEmojis, setShowEmojis] = useState(false)
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState(null)

  const { chatId, user } = useChatStore()
  const { currentUser } = useStore()
  console.log('current user ', currentUser)

  const chatRef = useRef(null)

  useEffect(() => {
    // if (chatRef?.current) 
    if (chatRef.current) {
      // chatRef.current.scrollIntoView({ behavior: 'smooth' })
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chatRef?.current?.scrollHeight])

  useEffect(() => {
    if (!chatId) return
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      console.log(res.data())
      // set chat data
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId])

  const handleSendMessage = async () => {
    if (!message.trim()) return
    // send message to firebase
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: [...chat.messages, {
          text: message,
          senderId: currentUser.uid,
          imgSender: currentUser.avatar,
          createdAt: Date.now()
        }]
      })

      const userIDs = [currentUser.id, user.id]

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userChats", id)
        const userChatsSnapshot = await getDoc(userChatsRef)

        if (userChatsSnapshot.exists()) {
          // await updateDoc(userChatsRef, {
          //   chats: arrayUnion({
          //     chatId,
          //     lastMessage: message,
          //     receiverId: chat.users.find(user => user !== currentUser.uid),
          //     updatedAt: Date.now(),
          //   })
          // })

          const userChatsData = userChatsSnapshot.data()
          const chatIndex = userChatsData.chats.findIndex(chat => chat.chatId === chatId)
          if (chatIndex !== -1) {
            userChatsData.chats[chatIndex].lastMessage = message
            userChatsData.chats[chatIndex].updatedAt = Date.now()
            userChatsData.chats[chatIndex].isSeen = id === currentUser.id

            await updateDoc(userChatsRef, {
              chats: userChatsData.chats
            })
          }
        }
      })


    } catch (error) {
      console.log(error)
    }
    setMessage('')
  }

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='texts'>
            <span>Ahmad</span>
            <p>lorem inpurt rtext inpurt rtext lorem inpurt rtext </p>
          </div>
        </div>
        <div className='icons'>
          <span className='icon'>
            <FontAwesomeIcon icon={faMobileScreenButton} />
          </span>
          <span className='icon'>
            <FontAwesomeIcon icon={faVideo} />
          </span>
          <span className='icon'>
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>

        </div>
      </div>
      <div className='center' ref={chatRef}>
        {chat?.messages && chat?.messages?.map((message, index) => (
          <div key={index} className={`message ${message.senderId === currentUser.uid ? "own" : ""}`}>
            <div className='message__avatar-content'>
              <img className='message__avatar-image' src={message.imgSender}></img>
            </div>
            <div className='message__content'>
              <p className='message__text'>
                {message.text}
              </p>
              <span className='message__datetime'>{new Date(message.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='bottom'>
        <div className='icons'>
          <span className='icon'>
            <FontAwesomeIcon icon={faFileImage} />
          </span>
          <span className='icon'>
            <FontAwesomeIcon icon={faVideo} />
          </span>
          <span className='icon'>
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
        </div>
        <input type='text' onChange={e => setMessage(e.target.value)} value={message} placeholder='send message...' />
        <div className='emoji'>
          <span className='icon icon--emoji' onClick={() => setShowEmojis(prev => !prev)}>
            <FontAwesomeIcon icon={faFaceSmileWink} />
          </span>
          <div className='picker'>
            <EmojiPicker open={showEmojis} onEmojiClick={emoji => setMessage(prev => prev + emoji.emoji)} />
          </div>
        </div>
        <button className='sendButton' onClick={() => handleSendMessage()}>Send</button>
      </div>
    </div>
  )
}

export default Chat