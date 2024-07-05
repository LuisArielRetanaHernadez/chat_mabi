import './auth.style.css'

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__box">
        <div className="auth__login">
          <form className="auth__form">
            <div className="auth__form-field">
              <input type="email" placeholder='email' />
            </div>
            <div className="auth__form-field">
              <input type="password" placeholder='pasword' />
            </div>
            <button className="button auth__button-send">Entrar</button>
          </form>
        </div>
        <div className="auth__register">
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
      </div>
    </section>
  )
}

export default Auth