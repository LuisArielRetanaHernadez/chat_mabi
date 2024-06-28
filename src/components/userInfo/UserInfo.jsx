import { faEllipsis, faPenToSquare, faVideo } from '@fortawesome/free-solid-svg-icons'
import './userInfo.style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStore } from '../../lib/userStorage'

const UserInfo = () => {
  const { currentUser } = useStore()
  return (
    <div className="userInfo">
      <div className="user">
        <img src={`${currentUser.avatar || 'https://images.pexels.com/photos/1302436/pexels-photo-1302436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}`} alt="pic avatar user" />
        <h2 className='user__name'>{currentUser.username || 'nunidefine'}</h2>
      </div>
      <div className="icons">
        <span className='icon'>
          <FontAwesomeIcon className='icon' icon={faVideo} />
        </span>
        <span className='icon'>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className='icon'>
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>
    </div>
  )
}

export default UserInfo