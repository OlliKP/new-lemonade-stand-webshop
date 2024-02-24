import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = ({ productData}) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src="https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-landskab-solrig-mark-bane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="a picture"
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>This is something</p>
        <p className={styles.details__desc}>This is a description</p>
        <p className={styles.details__price}>DKK 750</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/someID`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
