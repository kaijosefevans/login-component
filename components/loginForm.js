import { useState } from 'react'

export default function LoginForm(props, error) {
  const [details, setDetails] = useState({name: '', email: '', password: ''});

  function loginHandler(e) {
    e.preventDefault();
    props.handleSubmit(details);
  }


  return (
    <form onSubmit={loginHandler} className="login-form">
      <div className='form-group'>
        {(props.error) ? <div className='error'>{props.error}</div> : ''}
        <label htmlFor='name'>Name: </label>
        <input type='text' name="name" id='name' onChange={(e)=> setDetails({...details, name: e.target.value})} value={details.name} />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email: </label>
        <input type='email' name="email" id='email' onChange={(e)=> setDetails({...details, email: e.target.value})} value={details.email}/>
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password: </label>
        <input type='password' name="password" id='password' onChange={(e)=> setDetails({...details, password: e.target.value})} value={details.password}/>
      </div>

      <input type='submit' value='Submit'></input>
    </form>
  )
}