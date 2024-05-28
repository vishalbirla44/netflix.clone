import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfieImg from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>


      <div className="navbar-right">
        <img src={SearchIcon} alt="" className='icons'/>
        <p>Children</p>
        <img src={BellIcon} alt="" className='icons'/>

        <div className="navbarprofile">
        <img src={ProfieImg} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className='dropdown'>
          <p>Sing Out the Netflix</p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar