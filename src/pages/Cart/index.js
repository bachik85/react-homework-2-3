import React from 'react';
import ProductList from '../../components/ProductList/ProductList';


export function Cart({listItems, favorites, setFavorites, cart, setCart}) {
  

  const listItemsInCart = listItems.filter( ({id}) => cart.includes(id));

  return (        
      <ProductList items={ listItemsInCart }  favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart} delBtnCart={true}/>   
  );
}

