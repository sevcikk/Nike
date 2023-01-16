import React from 'react'
import MainImg from './img/mainImg.png'
import './css/cartBox1.css'

const CartBox1 = () => {
  return (
    <div className='cartBox1'>
        <img src={MainImg} alt="" />
        <h5>Spousta možností, jak to rozbalit</h5>
        <h2>DÁREK,</h2>
        <h2>KTERÝ TĚ NENECHÁ V KLIDU</h2>
        <h5>Dárky, které nenechají nikoho v klidu. Daruj to nejlepší ze světa sportu</h5>
        <div>
          <button>Nakupovat</button>
          <button>Nakupovat pro děti</button>
        </div>
    </div>
  )
}

export default CartBox1