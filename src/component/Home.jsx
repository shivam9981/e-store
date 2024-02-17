import React from 'react'
import Cart from './Cart'
import './styles/Home.css'
import { useNavigate } from 'react-router-dom'
const Home = ({ data, search, setsearch ,setcheck}) => {

  
  const Navigate = useNavigate()
  let token = localStorage.getItem('token');
  if (!token) {
    Navigate('./login');
  }

  const handlechange =(e)=>{
    setcheck(e.target.value)
  }
  
  return (
    <>
      <div className='home'>
        <input type='text' placeholder='search here' value={search} className='inp-home' onChange={(e) => setsearch(e.target.value)} />
      </div>
      <div className='checkbox-div'>
        <div className='check'>
          <input type="radio" name='checkbox' value="50" onChange={handlechange}/>
          <label htmlFor="ch1" className='lab-check'> Less Then 50 </label>
        </div>
        <div className='check'>
          <input type="radio" name='checkbox' value="100" onChange={handlechange}/>
          <label htmlFor="ch1" className='lab-check'>50 To 100 </label>
        </div>
        <div className='check'>
          <input type="radio" name='checkbox' value="500" onChange={handlechange} />
          <label htmlFor="ch1" className='lab-check'> 100 to 500 </label>
        </div>
        <div className='check'>
          <input type="radio" name='checkbox' value="501" onChange={handlechange} />
          <label htmlFor="ch1" className='lab-check'> More Then 500 </label>
        </div>
      </div>
      <div className='container-home'>
        {!data ? null : data.map((e) => <Cart key={e.id} e={e} />)}
      </div>
    </>
  )
}

export default Home