import React, { Fragment } from "react";
import styles from "./Products.module.css";

import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <Fragment>
      <h1 className={styles.header_h1}>Vælg dine ingredienser:</h1>
      <div className={styles.products}>
        {products.map((prod) => (
          <Product key={prod.id} productData={prod} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStatesToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStatesToProps)(Products);
