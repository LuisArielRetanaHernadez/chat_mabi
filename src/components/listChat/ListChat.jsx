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
    </div>
  )
}

export default ListChat