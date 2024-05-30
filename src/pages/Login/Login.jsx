import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={Logo} alt="" className='login-logo' />
      <div className='login-from'>
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
<button>Sign in</button>
<div className='from-help'>
  <div className='remember'>
    <input type="checkbox" />
    <label htmlFor="">Remember mw</label>
  </div>
  <p>Need Help?</p>

</div>
        </form>

        <div className=  'from-switch'>
          <p>New to Netflix ? <span>Sing Up Now</span></p>
          <p>Alredy have Account ? <span>Sing In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login