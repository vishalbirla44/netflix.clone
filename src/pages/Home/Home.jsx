import React from 'react'
import './Home.css'
import Navbar from '../../componands/Navbar/Navbar'
import Hero_baner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={Hero_baner} alt="" className='banner_img' />
        <div className='hero-caption'>
          <img src={Hero_title} alt="" className='caption-img' />
          <p>Descovering  his ties to a secret ancient order, young man living in moderen stanbul embark on a quest to save the city from an importable enemy</p>
        </div>
      </div>

    </div>
  )
}

export default Home