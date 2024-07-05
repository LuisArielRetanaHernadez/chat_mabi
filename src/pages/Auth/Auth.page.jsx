import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './auth.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__box">
        <div className="auth__login auth__section">
          <h2 className="auth__title">Entra a chatear!</h2>
          <form className="auth__form">
            <div className="auth__form-field">
              <input className="auth__form-input" type="email" placeholder='email' />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" placeholder='pasword' />
            </div>
            <button className="button auth__button-send">Entrar</button>
          </form>
        </div>
        <div className="auth__register auth__section">
          <form className="auth__form">
            <div className="auth__form-field">
              <img className="auth__form-image" src="" alt="" />
              <label htmlFor="image-profile" className="auth__label-image">
                Imagen
              </label>
              <input className="auth__input-image" type="file" style={{ display: 'none' }} id="image-profile" />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" placeholder='Username' />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="email" placeholder='email' />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" placeholder='pasword' />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" placeholder='pasword confirm' />
            </div>
            <button className="button auth__button-send">Unirse</button>
          </form>
        </div>
        <span className='button auth__button-next'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </div>
    </section>
  )
}

export default Auth