import React, { Fragment } from "react";
import styles from "./Order.module.css";

const Order = () => {
  return (
    <Fragment>
      <div className={styles.header_container}>
          <h1 className={styles.header_h1}>Tak for din ordre:</h1>
          <h2 className={styles.header_h2}>
            Din lemonade er nu færdig... Velbekommen!
          </h2>
          <div className={styles.header_div}>
            <img
              className={styles.header_img}
              src="https://i.pinimg.com/originals/23/19/1d/23191db567a753365d15acada33ef6c6.gif"
            ></img>
          </div>
      </div>
    </Fragment>
  );
};

export default Order;
