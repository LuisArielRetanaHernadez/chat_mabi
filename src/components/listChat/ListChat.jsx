// font-awesome
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./listChat.style.css"

const ListChat = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <span className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="text" />
        </div>
        <span className="icon add">
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>
      </div>
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="texts">
          <span>Mabi Bella</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ListChat