import React, { useState } from 'react';
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sizes from './Compnents/Sizes';
import Cards from './Compnents/Cards';
const App = () => {
  
  const [products, setProducts] = useState([
    { id: 1,img:"https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc:"Mens's T shirt", price:10, size:"S"},
    { id: 2, img:"https://images.unsplash.com/photo-1600805624740-ebe68a29ac69?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc:"Women's shirt", price:20,size:"M"},
    { id: 3, img:"https://images.unsplash.com/photo-1585325574014-3d3433e5f86c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:15,size:"XL"},
    { id: 4, img:"https://images.unsplash.com/photo-1573198721163-e9b0d696456f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys pullover", price:30,size:"ML"},
    { id: 5, img:"https://images.unsplash.com/photo-1551663349-47a74df30ec0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys jacket", price:10,size:"L"},
    { id: 6, img:"https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:25,size:"XXL"},
    { id: 7, img:"https://images.unsplash.com/photo-1585325574014-3d3433e5f86c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:5,size:"XL"},
    { id: 8, img:"https://images.unsplash.com/photo-1585325574014-3d3433e5f86c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:25,size:"ML"},
    { id: 9, img:"https://images.unsplash.com/photo-1585325574014-3d3433e5f86c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:15,size:"XL"},
    
    { id: 10, img:"https://images.unsplash.com/photo-1585325574014-3d3433e5f86c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",desc:"boys shirt", price:15,size:"XL"},
    
    
    
  ]);

  const [Count,setCount]=useState(0);
  
  function handleClick(){
    setCount(Count+1);
  }
  
 

  return (
    <div className="app">
      <h1>Simple E-commerce Page</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          
        />
        <div className="Icon">
          <ShoppingCartIcon/>
          <div className="name">
            <h3>{Count}</h3>
          </div>
        </div>
      </div>
      
        <Sizes/>
        <div className="product-list">
        {products.map(product => (
          <Cards img={product.img} desc={product.desc} price={product.price} size={product.size} handleClick={handleClick}/>
        ))}
      </div>
      
    </div>
  );
};

export default App;
