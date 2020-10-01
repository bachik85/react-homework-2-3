import React from 'react';
import ProductList from '../../components/ProductList/ProductList';


export function Home({listItems, favorites, setFavorites, cart, setCart}) { 
    
  return (        
      <ProductList items={listItems} favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart}/>   
  );
}
