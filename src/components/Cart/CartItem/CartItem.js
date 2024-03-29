import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__imageContainer}>
        <img
          className={styles.cartItem__image}
          src={itemData.image}
          alt={itemData.title}
        />
      </div>
      <div className={styles.cartItem__content}>
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{itemData.title}</p>
          <p className={styles.details__price}>DKK {itemData.price} stk.</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor="qty">Antal</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <button
            onClick={() => removeFromCart(itemData.id)}
            className={styles.actions__deleteItemBtn}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5525/5525518.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
