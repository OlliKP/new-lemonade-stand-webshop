import React from "react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src="https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-landskab-solrig-mark-bane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image of something"
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>This is something</p>
        <p className={styles.details__desc}>This is the description</p>
        <p className={styles.details__price}>DKK 150</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value="1"
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/buy-512.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
