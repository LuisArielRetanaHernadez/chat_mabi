import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './menu.style.css'
import Logo from "../../components/logo/Logo";

import { auth } from "../../lib/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogoutUser } from "../../features/user/userSlice";

const MenuLayout = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuth, user } = useSelector(state => state.user)

  const logout = async () => {
    await dispatch(fetchLogoutUser().unwrap())
    auth.signOut()
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth')
    }
  }, [isAuth])



  return (
    <section className="page">
      <div className="menu">
        <nav className="menu__nav">
          <Link to='/' className="menu__logo menu__link">
            <Logo />
          </Link>
          <ul className="menu__list">
            <li className="menu__item">
              <Link to={`profile/${user?.id}`} className="menu__link menu__profile-content-photo">
                <img className="menu__profile-photo" src={user?.photoURL} />
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