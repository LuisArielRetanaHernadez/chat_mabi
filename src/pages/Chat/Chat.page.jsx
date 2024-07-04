
import './chat.style.css'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__messages">
        {/* box messages */}
      </div>
      <div className="chat__send-message">
        <div className='send-message'>
          <div className='send-message__message'>
            <input className='send-message__input-message' />
            <button className='button send-message__button-send'>Send</button>
          </div>
          <div className='send-message__icons'>
            <button className='icon send-message__icon-emoji'>Emoji</button>
            <button className='icon send-message__icon-file'>File</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
