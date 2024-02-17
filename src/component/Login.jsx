import React, { useState } from 'react'
import './styles/Signup.css'
import { useDispatch, useSelector } from 'react-redux'
import { mylogin } from '../redux/action/user'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [value, setvalue] = useState({
        username: "",
        password: ""
    })

    const handleonclange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {
        if (value.username && value.password) {
            dispatch(mylogin(value))
        }
        else {
            alert("Fill all field")
        }
    }
    const data = useSelector(state => state.userlogin)
    if (data.data !== null) {
        localStorage.setItem('token', data.data.token)
        navigate('/')
    }
    return (
        <>
            <div className='login-container'>
                <div className='inner-login-container'>
                    <div className='div-login'>
                        <label className='lab' id='username' >UserName:</label>
                        <input className='inp' name='username' placeholder='Username' value={value.username} onChange={handleonclange} />
                    </div>
                    <div className='div-login'>
                        <label className='lab' id='password' >Password:</label>
                        <input className='inp' name='password' placeholder='Password' value={value.password} onChange={handleonclange} />
                    </div>
                    <div className='div-input'>
                        <button className='btn-login' onClick={handleclick}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login