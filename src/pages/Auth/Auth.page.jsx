const Auth = () => {
  return (
    <section>
      <div>
        <div>
          <form>
            <div>
              <input type="email" placeholder='email' />
            </div>
            <div>
              <input type="password" placeholder='pasword' />
            </div>
            <button>Entrar</button>
          </form>
        </div>
        <div>
          <form>
            <div>
              <img src="" alt="" />
              <label htmlFor="image-profile">
                Imagen
              </label>
              <input type="file" style={{ display: 'none' }} id="image-profile" />
            </div>
            <div>
              <input placeholder='Username' />
            </div>
            <div>
              <input type="email" placeholder='email' />
            </div>
            <div>
              <input type="password" placeholder='pasword' />
            </div>
            <div>
              <input type="password" placeholder='pasword confirm' />
            </div>
            <button>Unirse</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Auth