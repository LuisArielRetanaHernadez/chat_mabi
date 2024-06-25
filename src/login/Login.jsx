import './login.css'
import { useState } from 'react'

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: null
  })
  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome back</h2>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
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
          <input type="text" placeholder='Username' name='usernanme' />
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login