import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <NavLink to="/cart" className="btn btn-outline-primary ms-2">
      <span className='fa fa-shopping-cart me-2'></span> Cart ()
    </NavLink>
    </>
  )
}

export default Cart