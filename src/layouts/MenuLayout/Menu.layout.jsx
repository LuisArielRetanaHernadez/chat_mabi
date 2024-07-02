import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

const MenuLayout = () => {
  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <span>Logo</span>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </li>
          </ul>
        </nav>
      </div>
      <>
        <Outlet />
      </>
    </section>
  )
}

export default MenuLayout;