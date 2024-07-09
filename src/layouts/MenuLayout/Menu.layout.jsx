import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

import './menu.style.css'
import Logo from "../../components/logo/Logo";

import { useStore } from "../../lib/userStorage";
import { auth } from "../../lib/firebase";
import { useEffect } from "react";

const MenuLayout = () => {

  const { currentUser, fetchCurrentUser } = useStore()

  console.log('currentUser ', currentUser)

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
      if (user) {
        fetchCurrentUser(user.uid)
      }
    })

    return () => unSub();
  }, [])



  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <span className="menu__logo">
            <Logo />
          </span>
          <ul className="menu__list">
            <li className="menu__item">
              <Link to={`profile/${currentUser?.id}`} className="menu__link menu__profile-content-photo">
                <img className="menu__profile-photo" src={currentUser?.photoURL} />
              </Link>
            </li>
            <li className="menu__item">
              <FontAwesomeIcon icon={faEllipsisVertical} />
              <ul className="menu__sub-list">
                <li className="menu__item">Logout</li>
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