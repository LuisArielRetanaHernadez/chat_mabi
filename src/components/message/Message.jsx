
import './message.style.css'
const Message = () => {
  return (
    <div className="message">
      <div className="message__avatar"></div>
      <div className="message__message">
        <div className="message__username"></div>
        <div className="message__text"></div>
      </div>
      <div className="message__about">
        <div className="message__time"></div>
        <div className="message__status"></div>
      </div>

    </div>
  )
}

export default Message