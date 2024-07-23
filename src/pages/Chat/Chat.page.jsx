
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './chat.style.css'
import { faFaceLaughWink, faFileImport, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Message from '../../components/message/Message'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Chat = () => {
  const { id } = useParams()

  const user = useSelector(store => store.user.user)

  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
  }

  return (
    <div className="chat">
      <div className="chat__messages">
        {/* box messages */}
        <Message />
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
            <button className='button icon send-message__button-send'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
