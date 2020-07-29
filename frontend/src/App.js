import React from 'react';
import './App.css';
import {BrowserRouter ,Route,Link} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'
import HomeScreen from './Screens/HomeScreen'
import CartScreen from './Screens/CartScreen'

function App() {

    function openMenu(){
      document.querySelector(".sidebar").classList.add("open")
    }
    function closeMenu(){
        document.querySelector(".sidebar").classList.remove("open")
    }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to='/'> amazona</Link></div>
            <div className="header-links"><a href="cart.html">Cart</a><a href="signIn">Sign In</a></div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Shirt</a></li>
            </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
           </div>
        </main>

        <footer className="footer">
            all right reserved
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
