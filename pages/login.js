import { useState } from 'react'
import Link from 'next/link'
import LoginForm from '../components/loginForm'

function Login() {
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  const adminUser = {
    email: 'daniel@example.com',
    password: 'daniel'
  }

  function handleSubmit(e) {
    console.log('this is e', e)

    return (e.email === adminUser.email && e.password === adminUser.password) ? setUser({...user, name: e.name}) : setError('Invalid Info');
  }

  function logOut() {
    setUser({name: '', email: ''});
  }

  return (
    <div className='login-container'>
      {(!user.name) ? <LoginForm handleSubmit={handleSubmit} error={error}/> :
      <div>
        <p>Welcome, {user.name}</p>
        <button onClick={() => logOut()}>Logout</button>
      </div>}
    </div>
  )
}

export default Login;