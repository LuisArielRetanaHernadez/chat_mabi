import './login.style.css'
import { useState } from 'react'

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

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Register')
  }
  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome back</h2>
        <form>
          <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e, setDataLogin)} />
          <input type="password" placeholder='Password' name='email' onChange={(e) => handleChange(e, setDataLogin)} />
          <button>Sign In</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
        <h2>Create an Account</h2>
        <form>
          <label htmlFor='file'>
            <img src={avatar.url} />
            Upload file
          </label>
          <input type='file' id='file' onChange={(e) => setAvatar({ file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) })} hidden />
          <input type="text" placeholder='Username' name='usernanme' onChange={(e) => handleChange(e, setRegister)} />
          <input type="text" placeholder='Email' name='email' onChange={(e) => handleChange(e, setRegister)} />
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e, setRegister)} />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login