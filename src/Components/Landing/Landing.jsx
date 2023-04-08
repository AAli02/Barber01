import React from 'react'
import main from '../../assets/main.png'

import './Landing.css'

function Landing() {
  return (
    <div className="landing-page">
    <div className="landing-page__content">
      <h1 className="landing-page__title">
        Elliott's <span className="landing-page__title-highlight">Barber</span> Shop
      </h1>
      <p className="landing-page__subtitle">Pittsburgh, PA</p>
      <div className="landing-page__buttons">
        <button className="landing-page__button">Book Now</button>
        <button className="landing-page__button">Contact</button>
      </div>
    </div>
    <div className="landing-page__portrait">
        <img src={main} alt="" className='main-img'/>
    </div>
  </div>
  )
}

export default Landing