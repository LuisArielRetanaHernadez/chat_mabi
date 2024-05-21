import { faEllipsis, faPenToSquare, faVideo } from '@fortawesome/free-solid-svg-icons'
import './userInfo.style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic avatar user" />
        <h2>Mabi Lina</h2>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faVideo} />
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  )
}

export default UserInfo