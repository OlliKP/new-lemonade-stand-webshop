import React, { useState, useEffect, Fragment } from "react";
import styles from "./Cart.module.css";
import { Link, useHistory  } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";
import { storeOrder } from "../../redux/Shopping/shopping-actions";

const Cart = ({ cart, storeOrder }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const history = useHistory(); // Initialize useHistory hook

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart]);

  const handleOrder = () => {
    // Dispatch storeOrder action with the cart array as payload
    storeOrder(cart);
    // Navigate to the "/order" page
    history.push("/order");
  };

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
          {/* Use onClick to call handleOrder */}
          <button className={styles.summary__checkoutBtn} onClick={handleOrder}>
            Bestil
          </button>
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

// Map storeOrder action creator to props
const mapDispatchToProps = (dispatch) => {
  return {
    storeOrder: (cart) => dispatch(storeOrder(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
