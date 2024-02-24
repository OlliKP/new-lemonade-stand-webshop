import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src="https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-landskab-solrig-mark-bane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="A picture"
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>This is something</p>
        <p className={styles.details__description}>This is a description of the thing</p>
        <p className={styles.details__price}>DKK 200</p>

        <button
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
