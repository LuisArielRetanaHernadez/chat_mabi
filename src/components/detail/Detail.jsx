import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './detail.style.css'
import { faFileArrowDown, faGears, faInfo, faShare, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="https://images.pexels.com/photos/1302436/pexels-photo-1302436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h2>mabigod</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <FontAwesomeIcon icon={faGears} className='icon' />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <FontAwesomeIcon icon={faInfo} className='icon' />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <FontAwesomeIcon icon={faShareFromSquare} className='icon' />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <span className='icon'>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <span className='icon'>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <span className='icon'>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <span className='icon'>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <FontAwesomeIcon icon={faShare} className='icon' />
          </div>
        </div>
        <button >
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Detail