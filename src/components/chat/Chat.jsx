import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faCircleInfo, faFaceSmileWink, faMobileScreenButton, faVideo } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
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

        </div>
        <input type='text' placeholder='send message...' />
        <div className='emoji'>
          <span className='icon'>
            <FontAwesomeIcon icon={faFaceSmileWink} />
          </span>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat