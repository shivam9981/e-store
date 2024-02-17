import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signin from './component/Signin';
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { productdata } from "./redux/action/user"
import { useSelector } from 'react-redux'
import Cartpage from './component/Cartpage';
function App() {
  const cartdata = useSelector(state => state.cart)
  let price;
  let count;
  if (cartdata.data !== null) {
    price = 0;
    count = 0;
    cartdata.data.forEach(e => {
      price = e.price + price
      count++;
    });
  }


  const data = useSelector(state => state.product.data)
  let finaldata;
  if (data !== null) {
    finaldata = data.products
  }
  const [search, setsearch] = useState()
  const [check, setcheck] = useState(null)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productdata())
  }, [])



  if (search) {
    let val = finaldata.filter(mydata => mydata.brand.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
    finaldata = val
  }
  if (check) {
    let val1 = finaldata.filter(mydata => {
      switch (check) {
        case "50":
          if (parseInt(check) > mydata.price) {
            return mydata
          }
          break;

        case "501":
          if (parseInt(check) < mydata.price) {
            return mydata
          }
          break;
        case "500":
          if (500 >= mydata.price && 100 <= mydata.price) {
            return mydata
          }
          break;
        case "100":
          if (100 >= mydata.price && 50 <= mydata.price) {
            return mydata
          }
          break;

        default:
          return mydata
      }
    })
    finaldata = val1;
  }
  return (
    <div className="App">
      <Navbar count={count} />
      <Routes>
        <Route path='/' element={<Home data={finaldata} search={search} setsearch={setsearch} check={check} setcheck={setcheck} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cartpage cart={cartdata} price={price} />} />
      </Routes>
    </div>
  );
}

export default App;
