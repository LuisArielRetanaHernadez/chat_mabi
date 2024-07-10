import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './menu.style.css'
import Logo from "../../components/logo/Logo";

import { auth } from "../../lib/firebase";
import { useStore } from "../../lib/userStorage";
import { useEffect } from "react";

const MenuLayout = () => {

  const { currentUser, fetchCurrentUser } = useStore()

  const navigate = useNavigate()

  const logout = () => {
    fetchCurrentUser(null)
    auth.signOut()
  }

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate('/auth')
  //   }
  // }, [currentUser])



  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <span className="menu__logo">
            <Logo />
          </span>
          <ul className="menu__list">
            <li className="menu__item">
              <Link to={`profile/${'jh'}`} className="menu__link menu__profile-content-photo">
                <img className="menu__profile-photo" src={currentUser?.photoURL} />
              </Link>
            </li>
            <li className="menu__item">
              <FontAwesomeIcon icon={faEllipsisVertical} />
              <ul className="menu__sub-list">
                <li className="menu__item" onClick={logout}>Logout</li>
              </ul>
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