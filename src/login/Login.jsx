import './login.style.css'
import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';


const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: null
  })

  const [dataLgoin, setDataLogin] = useState({
    username: '',
    password: ''
  })
  const [dataRegister, setRegister] = useState({
    username: '',
    password: '',
    email: ''
  })
  const handleChange = (e, callback) => {
    const { name, value } = e.target
    console.log(name, value)
    console.log(callback)
    if (typeof callback !== 'function') return
    callback((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login')
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const resposne = await createUserWithEmailAndPassword(auth, dataRegister.email, dataRegister.password)
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users", resposne.user.uid), {
        ...dataRegister,
        id: resposne.user.uid,
        blocked: [], // blocked: []
        avatar: avatar.url
      });
      toast.success('Register successfully')
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Username' value={dataLgoin.username} name='username' onChange={(e) => handleChange(e, setDataLogin)} />
          <input type="password" placeholder='Password' value={dataLgoin.password} name='email' onChange={(e) => handleChange(e, setDataLogin)} />
          <button>Sign In</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor='file'>
            <img src={avatar.url} />
            Upload file
          </label>
          <input type='file' id='file' onChange={(e) => setAvatar({ file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) })} hidden />
          <input type="text" placeholder='Username' value={dataRegister.username} name='usernanme' onChange={(e) => handleChange(e, setRegister)} />
          <input type="text" placeholder='Email' value={dataRegister.email} name='email' onChange={(e) => handleChange(e, setRegister)} />
          <input type="password" placeholder='Password' value={dataRegister.password} name='password' onChange={(e) => handleChange(e, setRegister)} />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login