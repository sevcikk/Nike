import React from 'react'
import { useState } from 'react';
import ImageA1 from "../imagesShoes/a1.PNG";
import ImageA2 from "../imagesShoes/a2.PNG";
import ImageA3 from "../imagesShoes/a3.PNG";
import ImageA4 from "../imagesShoes/a4.PNG";
import ImageA5 from "../imagesShoes/a5.PNG";
import ImageA6 from "../imagesShoes/a6.PNG";
import './productCart.css'

const ProductCart = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current)
    window.scrollTo({
      top: 700
    })
  };

  return (
    <div className={isActive ? 'b' : 'productCart'}>
      <span onClick={handleClick} className={isActive ? 'x' : 'xe'}>x</span>
      <div className={isActive ? 'c' : 'imageProductCart'}>
        <img onClick={handleClick} src={ImageA1} alt=''/>
        <img onClick={handleClick} src={ImageA2} alt=''/>
        <img onClick={handleClick} src={ImageA3} alt=''/>
        <img onClick={handleClick} src={ImageA4} alt=''/>
        <img onClick={handleClick} src={ImageA5} alt=''/>
        <img onClick={handleClick} src={ImageA6} alt=''/>
      </div>
      
      <div className={isActive ? 'productTextNone' : 'productText'}>
        <div className='productTextA'>
          <h1>Nike Air Force 1 Low Retro</h1>
          <h2>Pánské</h2>
        </div>

        <h2>120 €</h2>

        <div className='sizeWrap'>
          <h2>Vyber velikost</h2>
          <div className='sizeWrapButton'>
            <button>EU 42</button>
            <button>EU 43</button>
            <button>EU 44</button>
            <button>EU 45</button>
            <button>EU 46</button>
            <button>EU 47</button>
          </div>
        </div>

        <button className='addCart'>Přidat do košíku</button>
        <p>Řekni si ano (znovu) s botami, které chceš nosit po zbytek života. Bota Nike Air Force 1 Low Retro se vrací k původním materiálům a má všechno, co dobře znáš: klasické kožené provedení a doboru dávku basketbalového stylu. Pojď s námi oslavit tuhle módní ikonu. Teď s kartáček na čištění tenisek, který udrží tvůj vzhled svěží.</p>
      </div>
    </div>
  )
}

export default ProductCart