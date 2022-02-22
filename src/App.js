
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react'
import './App.css';
import Content from './components/Contents';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import Cart from './components/Pages/Cart';
import Product from './components/Pages/Product/product';
import foodList from './data/data'
import Signup from './components/Pages/Sign up/signUp';




function App() {

    function AddItem(product){

      const [cartItems, setCartItems]=useState([]);

      const exits = cartItems.find(x=>x.id ===product.id);

      if(exits){
          setCartItems(cartItems.map(x=>x.id===product.id ? {...exits, qty: exits.qty+1}: x));
      }
      else{
          setCartItems(...cartItems,{...product,qty:1});
      }
    }

  return (
    <>
    
    <Routes>
    
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Product/:id" element={<Product foodList= {foodList}/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      
      <Route path="/" element={<Content/>}/>

     
    </Routes>
    
    

    </>
  )
}

export default App;
