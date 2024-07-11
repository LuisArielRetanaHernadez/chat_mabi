import { Link } from 'react-router-dom';
import './profile.style.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Profile = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams()


  useEffect(() => {
    if (id) return
    async () => {
      const userRef = doc(db, "users", id)
      const docSnap = await getDoc(userRef)
      if (docSnap.exists()) {
        setUser(docSnap.data())
      }
    }

  }, [id])



  return (
    <div className='profile'>
      <div className='profile__header'>
        <img className='profile__image-header' src={user?.photoURL} />
        <div className='profile__content-image-avatar'>
          <img className='profile__image-avatar' src={user?.photoURL} />
        </div>
      </div>

      <div className='profile__identify'>
        <p className='profile__username'>{user?.username}</p>
        <span className='profile__state'></span>
      </div>
      <ul className='profile__list-informations'>
        <li className='profile__item-information'>{user?.username}</li>
        <li className='profile__item-information'>{user?.email}</li>
      </ul>
      <div className='profile__connections'>
        <h2 className='profile__subtitle'>Conexiones del usuario</h2>
        <div>
          <span className='profile__visible-connections'>Conexiones visbles</span>
          <span className='profile__connections-total'>109 conexiones</span>
        </div>
        <ul className='profile__list-connections'>
          <li className='profile__item-connections'>
            <Link to="" className='profile__link-connection'>
              <div className='profile__content-image'>
                <img className='profile__image' src='https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              </div>
              <div className='profile__content-information-connection'>
                <p className='profile__username profile__username--connection'>Name</p>
                <span className='profile__state profile__state-connnection'>Contacto</span>
              </div>
            </Link>
          </li>
          <li className='profile__item-connections'>
            <Link to="" className='profile__link-connection'>
              <div className='profile__content-image'>
                <img className='profile__image' src='https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              </div>
              <div className='profile__content-information-connection'>
                <p className='profile__username profile__username--connection'>Name</p>
                <span className='profile__state profile__state-connnection'>Contacto</span>
              </div>
            </Link>
          </li>
          <li className='profile__item-connections'>
            <Link to="" className='profile__link-connection'>
              <div className='profile__content-image'>
                <img className='profile__image' src='https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              </div>
              <div className='profile__content-information-connection'>
                <p className='profile__username profile__username--connection'>Name</p>
                <span className='profile__state profile__state-connnection'>Contacto</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='profile__content-buttons'>
        <button className='button profile__button-delete'>
          <p className='profile__button-delete-text'>
            Eliminar cuenta
          </p>
          <span className='icon icon--delete'>
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </button>
      </div>

    </div>
  );
}

export default Profile;