import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Home, Favorites, Cart } from './pages';
import { Header } from './commons/Header';

function App() {
  const [state, setState] = useState([]);

  useEffect(()=>{
    axios.get('GUNS_DATA.json')
      .then(res => setState(res.data))
  },[])

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home listItems={ state } favorites={ favorites } setFavorites={ setFavorites } cart={ cart } setCart={ setCart }/>
        </Route>
        <Route path="/favorites">
          <Favorites listItems={ state } favorites={ favorites } setFavorites={setFavorites} cart={ cart } setCart={ setCart }/>
        </Route>
        <Route path="/cart">
          <Cart listItems={ state } favorites={ favorites } setFavorites={ setFavorites } cart={ cart } setCart={ setCart }/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
