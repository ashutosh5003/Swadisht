import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = () => {
       localStorage.removeItem("token");
       setToken("");
       navigate("/");
    }

  return ( 
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt = "" className='logo'></img></Link>
      <ul className='navbar-menu'>
        <Link to = '/' onClick = {() => setMenu("home")} className={menu === "Home" ? "active" : ""} onMouseOver={() => setMenu("Home")}>Home</Link>
        <a href="#explore-menu" onClick = {() => setMenu("menu")} className={menu === "Menu" ? "active" : ""} onMouseOver={() => setMenu("Menu")}>Menu</a>
        <a href="#app-download" onClick = {() => setMenu("mobile-app")} className={menu === "Mobile-app" ? "active" : ""} onMouseOver={() => setMenu("Mobile-app")}>Mobile-app</a>
        <a href="#footer" onClick = {() => setMenu("contact-us")} className={menu === "Contact Us" ? "active" : ""} onMouseOver={() => setMenu("Contact Us")}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""></img>
        <div className='navbar-search-icon'>
           <Link to='/cart'><img src={assets.basket_icon}></img></Link>
            <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
        </div>
        {!token?   <button onClick={() => setShowLogin(true)}>Sign In</button> 
        :
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt=""></img>
          <ul className='nav-profile-dropdown'>
            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon}></img><p>Orders</p></li>
            <hr></hr>
            <li onClick={logout}><img src={assets.logout_icon}></img><p>Logout</p></li>
          </ul>
        </div>
      }
      
      </div>
    </div>
  )
}

export default Navbar