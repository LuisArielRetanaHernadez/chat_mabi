
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './message.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Message = () => {
  return (
    <div className="message">
      <div className="message__avatar">
        <img className='message__avatar-image' src='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </div>
      <div className='message__box'>
        <div className="message__username">Username</div>
        <div className='message__message'>
          Prueba del componente mensajeaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaa
        </div>
      </div>
      <div className="message__about">
        <div className="message__time">1/11/111 - 1:11 PM</div>
        <div className="message__status">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>

    </div>
  )
}

export default Message