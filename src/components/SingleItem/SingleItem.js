import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <div className={styles.singleItem__imageContainer}>
        <img
          className={styles.singleItem__image}
          src={currentItem.image}
          alt={currentItem.title}
        />
      </div>
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{currentItem.title}</p>
        <p className={styles.details__description}>{currentItem.description}</p>
        <p className={styles.details__price}>DKK {currentItem.price}</p>

        <button
          onClick={() => addToCart(currentItem.id)}
          className={styles.details__addBtn}
        >
          Tilføj Ingrediens
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
