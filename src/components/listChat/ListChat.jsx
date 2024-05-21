// font-awesome
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ListChat = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  )
}

export default ListChat