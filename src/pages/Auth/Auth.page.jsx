import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './auth.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

const Auth = () => {
  const [modeAuth, setModeAuth] = useState('login')
  const loginRef = useRef(null)
  const registerRef = useRef(null)
  const buttonNextRef = useRef(null)

  useEffect(() => {
    if (loginRef.current === null || registerRef.current === null) return
    if (modeAuth === 'login') {
      loginRef.current.style.right = '0%'
      registerRef.current.style.right = '0%'

      buttonNextRef.current.classList.remove('auth__button-next--register')
    } else {
      loginRef.current.style.right = '100%'
      registerRef.current.style.right = '100%'
      buttonNextRef.current.classList.add('auth__button-next--register')
    }
  }, [modeAuth])
  return (
    <section className="auth">
      <div className="auth__box">
        <div className="auth__login auth__section" ref={loginRef}>
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
        <div className="auth__register auth__section" ref={registerRef}>
          <h2 className="auth__title">Unete a chatear!</h2>
          <form className="auth__form">
            <div className="auth__form-field auth__form-field--image">
              <img className="auth__form-image" src="" alt="" />
              <label htmlFor="image-profile" className="auth__label auth__label--image">
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
        <span className='button auth__button-next' onClick={() => setModeAuth(prev => prev === 'login' ? 'register' : 'login')} ref={buttonNextRef}>
          {modeAuth === 'login' ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
        </span>
      </div>
    </section>
  )
}

export default Auth