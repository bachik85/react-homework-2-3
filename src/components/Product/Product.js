import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import Button from '../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faCartPlus} from '@fortawesome/free-solid-svg-icons';


function Product({
                   id,
                   picUrl,
                   name,
                   color,
                   price,
                   btnCard,
                   favorites,
                   setFavorites,
                   cart
                 }) {

  const [isFavorite, setIsFavorite] = useState(!!localStorage.getItem('favorites') && !!localStorage.getItem('favorites').includes(id))

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      setFavorites([...favorites, id]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]))
    } else {
      setFavorites(favorites.filter(el => el !== id));
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(el => el !== id)))
    }
  }

  return (
    <div className="product-card">
      <img className="product-img" src={picUrl} alt="#"/>
      <div className="product-header">
        <div className="product-header-name">{name} </div>
        <FontAwesomeIcon icon={faStar} style={isFavorite && {color: "gold"}} onClick={favoriteHandler}/>
      </div>
      <div className="product-body">
        <p className="product-body-art">art:{id}</p>
        <p className="product-body-text">
          <span>Color: {color} </span>
        </p>
      </div>
      <div className="product-price">
        <span>{price}</span>
        {!cart.includes(id) ? <Button {...btnCard}/> : <FontAwesomeIcon icon={faCartPlus}/>}
      </div>
    </div>
  )
}

Product.protoTypes = {
  id: PropTypes.string,
  picUrl: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  btnCard: PropTypes.object
}

export default Product;