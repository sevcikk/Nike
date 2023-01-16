import React from 'react'
import IconCart from './IconCart'
import './css/navbar.css'
import Logo from "./img/nike.png"
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbarWrap'>
    <div className='navbar'>
      <div className='divImg'>
        <Link to="/"><img className='imgNike' src={Logo} alt=""/></Link>
        <Outlet/>
      </div>
      <div className='navbarA'>
        <h3>Muži</h3>
        <h3>Ženy</h3>
        <h3>Děti</h3>
          <div className='input'>
            <input type="text" placeholder='Hledat...' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
            </svg>
          </div>
        <IconCart/>
      </div>
      <div className='menuBar'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
      </svg>
      </div>
    </div>
    </div>
  )
}

export default Navbar