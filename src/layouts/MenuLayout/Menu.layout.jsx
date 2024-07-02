import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

import './menu.style.css'
import Logo from "../../components/logo/Logo";

const MenuLayout = () => {
  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <span className="menu__logo">
            <Logo />
          </span>
          <ul className="menu__list">
            <li className="menu__item">
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