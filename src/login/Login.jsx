import './login.style.css'
import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db, storage } from '../lib/firebase'
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'


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

  const uploadImageProfile = async () => {
    // const storageRef = ref(storage, `images/${avatar.file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, avatar.file);
    // await uploadTask;
    // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    // return downloadURL;


    const nameFile = new Date().getTime() + avatar.file.name;
    const storageRef = ref(storage, `images/${nameFile}`);

    const uploadTask = uploadBytesResumable(storageRef, avatar.file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
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

      await setDoc(doc(db, "chats", resposne.user.uid), {
        chats: []
      });
      await uploadImageProfile()
      toast('Register successfully')
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