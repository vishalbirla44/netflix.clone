import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={Logo} alt="" className='login-logo' />
      <div className='login-from'>
        <h1>{signState}</h1>
        <form>

          {signState === 'Sign Up' ? <input type="text" placeholder='Your Name' /> : <></>}
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
          <button>{signState}</button>
          <div className='from-help'>
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor="">Remember mw</label>
            </div>
            kjj
            <p>Need Help?</p>

          </div>
        </form>

        <div className='from-switch'>
          {signState === 'Sign In' ? <p>New to Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sing Up Now</span></p> :
            <p>Alredy have Account ? <span onClick={()=>{setSignState("Sign In")}}>Sing In Now</span></p>
          }

        </div>
      </div>
    </div>
  )
}

export default Login