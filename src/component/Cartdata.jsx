import React from 'react'
import './styles/Cartdata.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Cartdata = ({e}) => {
 
  return (
    <div className='cart1-container'>
        <img src={e.images[0]} className='img-cart' />
        <p className='cart-p'>{e.brand}</p>
        <p className='cart-p'>Price:{e.price}</p>
        <DeleteForeverIcon className='del'/>
    </div>
  )
}

export default Cartdata