import React, { useState, useEffect, Fragment } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    })

    setTotalPrice(price);
    setTotalItems(items);
  }, [
    cart,
    totalPrice,
    totalItems,
    setTotalPrice,
    setTotalItems,
  ]);

  return (
    <Fragment>
    <h1 className={styles.header_h1}>Valgte ingredienser:</h1>
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Din kurv</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems})</span>
          <span>DKK {totalPrice}</span>
        </div>
        <Link to="/order">
          <button className={styles.summary__checkoutBtn}>
            Bestil
          </button>
        </Link>
      </div>
    </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
