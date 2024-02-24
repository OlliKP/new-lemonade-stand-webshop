import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ cart }) => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="data:image/png;base64,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"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>1</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
