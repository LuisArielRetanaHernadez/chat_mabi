
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faFaceLaughWink, faFileImport } from '@fortawesome/free-solid-svg-icons'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__messages">
        {/* box messages */}
      </div>
      <div className="chat__send-message">

        <div className='send-message'>
          <div className='send-message__icons'>
            <button className='icon send-message__icon-emoji'>
              <FontAwesomeIcon icon={faFaceLaughWink} />
            </button>
            <button className='icon send-message__icon-file'>
              <FontAwesomeIcon icon={faFileImport} />
            </button>
          </div>
          <div className='send-message__message'>
            <input className='send-message__input-message' />
            <button className='button send-message__button-send'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
