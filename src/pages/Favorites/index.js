import React from 'react';
import ProductList from '../../components/ProductList/ProductList';


export function Favorites({listItems, favorites, setFavorites, cart, setCart}) {

       
    const listItemsInFavorite = listItems.filter( ({id}) => favorites.includes(id));
  

  return (        
      <ProductList items={ listItemsInFavorite } favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart}/>   
  );
}

