import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import ShopContextProvider from './context/Shopcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
    
   
    
 
);


