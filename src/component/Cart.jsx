import React from 'react'
import './styles/cart.css'
import {cartpage} from '../redux/action/user'
import { useDispatch } from 'react-redux'
const Cart = (props) => {
    const dispatch = useDispatch()
    const handleclick = () => {
        dispatch(cartpage(props.e))
    }
    return (
        <>
            <div className='cart-container'>
                <img src={props.e.images[0]} className='img' />
                <div className='cart'>
                    <p className='p-2'>Brand : {props.e.brand}</p>
                    <p className='p-2'>Price: {props.e.price}</p>
                </div>
                <div className='cart'>
                    <button className='cart-btn' onClick={handleclick}>Add To Cart</button>
                    <button className='cart-btn'>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Cart