import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    return(
        <header className="header">
          <NavLink to="/">
              Home
            </NavLink>
          <NavLink to="/favorites">
            Favorites
          </NavLink>
          <NavLink to="/cart">
              Cart
            </NavLink>
        </header>
    )
}

