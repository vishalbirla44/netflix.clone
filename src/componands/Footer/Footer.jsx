import React from 'react'
import './Footer.css'
import Youtube_icon from '../../assets/youtube_icon.png'
import Twiter_icon from '../../assets/twitter_icon.png'
import Instagram_icon from '../../assets/instagram_icon.png'
import Facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={Facebook_icon} alt="" />
        <img src={Instagram_icon} alt="" />
        <img src={Twiter_icon} alt="" />
        <img src={Youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Invester Relation</li>
        <li>Jobs</li>
        <li>Term to Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cokies Performance</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 , Netflix ,inc</p>
    </div>
  )
}

export default Footer