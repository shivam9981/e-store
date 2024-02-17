import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './styles/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = ({count}) => {
    return (
        <>
            <div className='nav-container'>
                <Link to='/' id='p-1'>E-SHOP</Link>
                <div className='button-container'>
                    <Link to='cart' className='btn' id='cart-btn'><AddShoppingCartIcon /><span>{count}</span></Link>
                    <Link to='login' className='btn'>Login</Link>
                    <Link to='signin' className='btn'>SignUp</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar