import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faCircleInfo, faFaceSmileWink, faFileImage, faMicrophone, faMobileScreenButton, faVideo } from '@fortawesome/free-solid-svg-icons'

// emoji picker react
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Chat = () => {
  const [showEmojis, setShowEmojis] = useState(false)
  const [message, setMessage] = useState("")
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
      <div className='center'></div>
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
          <EmojiPicker open={showEmojis} onEmojiClick={emoji => setMessage(prev => prev + emoji.emoji)} />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat