import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faCircleInfo, faFaceSmileWink, faFileImage, faMicrophone, faMobileScreenButton, faVideo } from '@fortawesome/free-solid-svg-icons'

// emoji picker react
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { useChatStore } from '../../lib/useChatStore'

const Chat = () => {
  const [showEmojis, setShowEmojis] = useState(false)
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState(null)

  const { chatId } = useChatStore()

  const chatRef = useRef(null)

  useEffect(() => {
    // if (chatRef?.current) 
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' })
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chatRef?.current?.scrollHeight])

  useEffect(() => {
    if (!chatId) return
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId])

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
        {chat?.messages?.map((message) => (
          <div key={message.createAt} className={`message ${message.from === "" ? "own" : ""}`}>
            <div className='message__avatar-content'>
              <img className='message__avatar-image' src={message.img}></img>
            </div>
            <div className='message__content'>
              <p className='message__text'>
                {message.text}
              </p>
              <span className='message__datetime'>{message.createdAt}</span>
            </div>
          </div>
        )) || <span>Chat vacio</span>}
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
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat