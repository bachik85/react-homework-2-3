import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ProduktList.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Product from '../Product/Product';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';


function ProductList({items, favorites, setFavorites, cart, setCart, delBtnCart}) {

  const [stateModal, setStateModal] = useState(false);
  const [stateModalDel, setStateModalDel] = useState(false);
  const [productId, setProductId] = useState('');

  const btnCardHandler = (event) => {
    event.stopPropagation();
    setStateModal(true);
    const currentID = event.target.closest('li').dataset.id;
    setProductId(currentID);
  }

  const addToCart = () => {
    setStateModal(false);
    cart.push(productId);
    setCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const delCartHandler = (event) => {
    event.stopPropagation();
    setStateModalDel(true);
    const currentID = event.target.closest('li').dataset.id;
    setProductId(currentID);
  };

  const removeFromCard = () => {
    setStateModalDel(false);
    setCart(cart.filter(item => item !== productId));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const btnCard = {
    text: "Add to cart",
    onClick: btnCardHandler
  };

  const modalCard = {
    header: "Do you want to add a product to your cart?",
    text: "After adding the desired products, go to the shopping cart to place an order.",
    closeButton: true,
    closeModal: () => setStateModal(false),
    actions:
      <>
        <Button text="Ok" onClick={addToCart}/>
        <Button text="Cancel" onClick={() => setStateModal(false)}/>
      </>
  }

  const modalCardDel = {
    header: "Want to remove from cart?",
    closeButton: true,
    closeModal: () => setStateModalDel(false),
    actions:
      <>
        <Button text="Ok" onClick={removeFromCard}/>
        <Button text="Cancel" onClick={() => setStateModalDel(false)}/>
      </>
  }

  const listItems = items.map((item) =>
    <li key={item.id} data-id={item.id} className="product-list-item">
      <Product {...item} btnCard={btnCard} favorites={favorites} setFavorites={setFavorites} cart={cart}/>
      {delBtnCart && <FontAwesomeIcon icon={faTimes} onClick={delCartHandler}/>}
    </li>)

  return (
    <>
      <ul className="product-list">
        {listItems}
      </ul>
      {stateModal && <Modal {...modalCard}/>}
      {stateModalDel && <Modal {...modalCardDel}/>}

    </>
  )
};

ProductList.protoTypes = {
  items: PropTypes.array
};

export default ProductList