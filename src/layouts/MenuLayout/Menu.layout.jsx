import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './menu.style.css'
import Logo from "../../components/logo/Logo";

import { auth } from "../../lib/firebase";
import { useEffect } from "react";

import useAuthFirebase from "../../hooks/useAuthFirebase";

const MenuLayout = () => {

  const authUser = useAuthFirebase();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate('/auth')
    }
  }, [authUser])

  const logout = () => {
    auth.signOut()
  }



  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <span className="menu__logo">
            <Logo />
          </span>
          <ul className="menu__list">
            <li className="menu__item">
              <Link to={`profile/${authUser?.id}`} className="menu__link menu__profile-content-photo">
                <img className="menu__profile-photo" src={authUser?.photoURL} />
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