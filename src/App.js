
import {Routes, Route} from 'react-router-dom';
import {useState,createContext} from 'react'
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

export const AddContext = createContext();

function App() {

    const [cartItems, setCartItems]=useState([]);

    function onAdd(product){
      const exist = cartItems.find(x=>x.id === product.id);

      if(exist){
          setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty: exist.qty+1}: x));
      }
      else{
          setCartItems([...cartItems,{...product,qty:1}]);
      }
    }

    function onRemove(product) {
      // const exist = cartItems.find(x=>x.id === product.id);
      // if(exist.qty === 1){
      //   setCartItems(cartItems.filter(x=>x.id !== product.id))
      // }
      // else{
      //   setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty: exist.qty-1}: x)); 
      // }
      for(var i=0;i<cartItems.length;i++){
        if(cartItems[i].id ===product.id){
          cartItems= cartItems.splice(i,1);
          console.log(cartItems);
        }
      }
    }

  return (
    <>
      <AddContext.Provider value={cartItems}>
    <Routes>

      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart onRemove={onRemove} />}/>
      <Route path="/Product/:id" element={<Product onAdd={onAdd} foodList= {foodList}/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      
      <Route path="/" element={<Content/>}/>

    </Routes>
      </AddContext.Provider>

      

     
    
    

    </>
  )
}

export default App;
