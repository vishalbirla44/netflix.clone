import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/card/Cards_data'

const TitleCards = ({title,catagory}) => {
  const cardRef = useRef()
const handlewhile = (event) => {
event.preventDefault()
cardRef.current.scrollLeft += event.deltaY;
}

  useEffect(()=>{
 cardRef.current.addEventListener('wheel' ,handlewhile)
  },[])

  return (
    <div className='TitleCards'>
      <h2>{title?title:"Popular on Netfli"}</h2>
      <div className="card-list" ref={cardRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards