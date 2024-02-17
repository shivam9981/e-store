import React, { useState } from 'react'

const Signin = () => {
    const [value, setvalue] = useState({
        username: "",
        password: ""
    })

    const handleonclange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='login-container'>
                <div className='inner-login-container1'>
                    <div className='div-login'>
                        <label className='lab' id='username' >UserName:</label>
                        <input className='inp' name='username' placeholder='Username' value={value.username} onChange={handleonclange} />
                    </div>
                    <div className='div-login'>
                        <label className='lab' id='password' >FirstName:</label>
                        <input className='inp' name='password' placeholder='Password' value={value.password} onChange={handleonclange} />
                    </div>
                    <div className='div-login'>
                        <label className='lab' id='password' >LastName:</label>
                        <input className='inp' name='password' placeholder='Password' value={value.password} onChange={handleonclange} />
                    </div>
                    <div className='div-login'>
                        <label className='lab' id='password' >Email:</label>
                        <input className='inp' name='password' placeholder='Password' value={value.password} onChange={handleonclange} />
                    </div>
                    <div className='div-login'>
                        <label className='lab' id='password' >Gender:</label>
                        <input className='inp' name='password' placeholder='Password' value={value.password} onChange={handleonclange} />
                    </div>
                    <div className='div-login1'>
                        <label className='lab' id='image' >Image:</label>
                        <input type="file" id="myfile" name="image" />
                    </div>
                    <div className='div-input'>
                        <button className='btn-login'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin