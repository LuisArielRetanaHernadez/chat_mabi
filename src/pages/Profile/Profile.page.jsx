import { Link } from 'react-router-dom';
import './profile.style.css'
import { useStore } from '../../lib/userStorage';
const Profile = () => {

  const { currentUser } = useStore()

  console.log(currentUser)

  return (
    <div className='profile'>
      <div className='profile__header'>
        <img className='profile__image-header' src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <div className='profile__content-image-avatar'>
          <img className='profile__image-avatar' src='https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>

      <div className='profile__identify'>
        <p className='profile__username'>Username</p>
        <span className='profile__state'>Conectados</span>
      </div>
      <ul className='profile__list-informations'>
        <li className='profile__item-information'>Nombre de usuario</li>
        <li className='profile__item-information'>Correo de usuario</li>
      </ul>
      <div className='profile__connections'>
        <h2 className='profile__subtitle'>conexiones de user 1</h2>
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
      <div className='profile__content-button-delete'>
        <button className='button profile__button-delete'>Elimar cuenta</button>
      </div>
    </div>
  );
}

export default Profile;