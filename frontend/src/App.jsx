import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return <>
  {showLogin? <LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/Cart' element={<Cart/>}></Route>
        <Route path = '/order' element={<PlaceOrder/>}></Route>
        <Route path = '/verify' element={<Verify/>}/>
        <Route path = '/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer></Footer>
    </>
}

export default App
