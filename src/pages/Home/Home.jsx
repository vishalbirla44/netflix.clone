import React from 'react'
import './Home.css'
import Navbar from '../../componands/Navbar/Navbar'
import Hero_baner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import Info_icon from '../../assets/info_icon.png'
import TitleCards from '../../componands/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={Hero_baner} alt="" className='banner_img' />
        <div className='hero-caption'>
          <img src={Hero_title} alt="" className='caption-img' />
          <p>Descovering  his ties to a secret ancient order, young man living in moderen stanbul embark on a quest to save the city from an importable enemy</p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={Play_icon} alt="" />
              Play
            </button>
            
            <button className='btn dark-btn'>
              <img src={Info_icon} alt="" />
               More Info
            </button>
          </div>
          <TitleCards/> 
        </div>
      </div>
       <div className='more-cards'>
       <TitleCards/> 
       <TitleCards/> 
       <TitleCards/> 
       <TitleCards/> 
       </div>
    </div>
  )
}

export default Home