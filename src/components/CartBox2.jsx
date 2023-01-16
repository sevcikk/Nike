import React from 'react'
import './css/cartBox2.css'
import data from '../data'
import { Link, Outlet } from 'react-router-dom'

const CartBox2 = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0
    });
  };

  return (
    <div>
      <h2>Vybav se</h2>
      <div className='productWrap'>
          {
            data.map((oneProduct) => {
              const {id, name, image, price} = oneProduct
              return (
                <div className='product' key={id}>
                  <Link to="product"><img src={image} onClick={() => scrollToTop()} alt="" /></Link>
                  <Outlet/>
                  <h4 className='nameProduct'>{name}</h4>
                  <h4 className='gender'>Pánské</h4>
                  <h4 className='price'>{price} €</h4>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default CartBox2
