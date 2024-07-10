import { Link } from 'react-router-dom';
import './profile.style.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        <p>Username</p>
        <span>Conectados</span>
      </div>
      <ul>
        <li>Nombre de usuario</li>
        <li>Correo de usuario</li>
      </ul>
      <div>
        <h2>conexiones de user 1</h2>
        <span>Conexiones visbles</span>
        <span>109 conexiones</span>
        <ul>
          <li>
            <Link to="">
              <div>
                <img />
              </div>
              <div>
                <p>Name</p>
                <span>Contacto</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div>
                <img />
              </div>
              <div>
                <p>Name</p>
                <span>Hablamos?</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div>
                <img />
              </div>
              <div>
                <p>Name</p>
                <span>No me Hables</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button>Elimar cuenta</button>
      </div>
    </div>
  );
}

export default Profile;