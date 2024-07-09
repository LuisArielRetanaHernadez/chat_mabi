import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './auth.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import uploadFile from '../../lib/uploadFile'
import { useStore } from '../../lib/userStorage'

import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [modeAuth, setModeAuth] = useState('login')
  const [dataForm, setDataForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [imageProfile, setImageProfile] = useState({
    file: '',
    url: ''
  })


  const loginRef = useRef(null)
  const registerRef = useRef(null)
  const buttonNextRef = useRef(null)

  const navigate = useNavigate()

  const { currentUser, fetchCurrentUser } = useStore()

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

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await signInWithEmailAndPassword(auth, dataForm.email, dataForm.password)
      const user = res.user
      fetchCurrentUser(user.uid)

    } catch (error) {
      // el parametro erro me arroja un strin pero quiero que sea un json o objeto 
      const stringError = JSON.stringify(error)
      const errorObject = JSON.parse(stringError)

      // validacion de errores
      if (errorObject.code === 'auth/invalid-credentia'
        || errorObject.code === 'auth/invalid-email'
        || errorObject.code === 'auth/invalid-password') {
        toast.error('credenciales invalidas', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
  }


  const handleRegister = async (e) => {
    e.preventDefault()
    if (dataForm.password !== dataForm.passwordConfirm) return toast.error('las contraseñas no coinciden')
    try {
      const res = await createUserWithEmailAndPassword(auth, dataForm.email, dataForm.password)
      const user = res.user
      const urlImageUpload = await uploadFile(imageProfile.file, `images/profiles/${user.uid}/photos/profile_pictures`)
      const dataRegister = {
        ...dataForm,
        id: user.uid,
        blocked: [],
        photoURL: urlImageUpload,
      }
      delete dataRegister.passwordConfirm
      await setDoc(doc(db, 'users', user.uid), {
        ...dataRegister
      })

      await setDoc(doc(db, 'userChats', user.uid), {
        chats: []
      })
      fetchCurrentUser(user.uid)
      toast.success('usuario creado correctamente', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } catch (error) {
      const stringError = JSON.stringify(error)
      const errorObject = JSON.parse(stringError)

      console.log('erro registro ', error)

      if (errorObject.code === 'auth/email-already-in-use') {
        toast.error('Usuario ya registrado', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
  }

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        // traer los datos del usuario
        console.log('user', user)
        // traer los datos del usuario
        fetchCurrentUser(user.uid)
      }
    })
    return () => {
      unSub()
    }
  }, [fetchCurrentUser])



  useEffect(() => {
    console.log(currentUser)
    // redireccionar si el usuario esta logeado
    if (currentUser !== null) {
      navigate('/')
    }
  }, [currentUser])

  return (
    <section className="auth">
      <div className="auth__box">
        <div className="auth__login auth__section" ref={loginRef}>
          <h2 className="auth__title">Entra a chatear!</h2>
          <form className="auth__form" onSubmit={handleLogin}>
            <div className="auth__form-field">
              <input className="auth__form-input" type="email" name="email" placeholder='email' onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" name="password" placeholder='pasword' onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <button className="button auth__button-send">Entrar</button>
          </form>
        </div>
        {/* -------- register --------- */}
        <div className="auth__register auth__section" ref={registerRef}>
          <h2 className="auth__title">Unete a chatear!</h2>
          <form className="auth__form" onSubmit={handleRegister}>
            <div className="auth__form-field auth__form-field--image">
              <img className="auth__form-image" src={imageProfile.url} alt="" />
              <label htmlFor="image-profile" className="auth__label auth__label--image">
                Imagen
              </label>
              <input id="image-profile" className="auth__input-image" style={{ display: 'none' }} type="file" name='file' onChange={e => setImageProfile({ file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) })} />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" placeholder='Username' name="username" onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="email" name="email" placeholder='email' onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" name="password" placeholder='pasword' onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <div className="auth__form-field">
              <input className="auth__form-input" type="password" name="passwordConfirm" placeholder='pasword confirm' onChange={e => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
            </div>
            <button className="button auth__button-send">Unirse</button>
          </form>
        </div>
        <span className='button auth__button-next' onClick={() => setModeAuth(prev => prev === 'login' ? 'register' : 'login')} ref={buttonNextRef}>
          {modeAuth === 'login' ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
        </span>
        <ToastContainer />

      </div>
    </section>
  )
}

export default Auth