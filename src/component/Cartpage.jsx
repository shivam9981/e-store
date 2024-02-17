import React, { useEffect } from 'react'
import Cartdata from './Cartdata'
import './styles/Cartdata.css'
const Cartpage = ({cart , price}) => {
  
  return (
    <>
    <p className='peice-cart'>Total Price : {price}</p>
      <div className='cart-page-conatiner'>
        {!cart ? 0 : cart.data.map((e)=> <Cartdata key={e.id}  e = {e} /> )} 
      </div>
    </>
  )
}

export default Cartpage