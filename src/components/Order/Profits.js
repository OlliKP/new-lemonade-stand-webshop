import React from "react";
import { connect } from "react-redux";
import styles from "./Profits.module.css";

const ProfitsPage = ({ completedOrders }) => {
  // Calculate monthly earnings
  const monthlyTotalPrice = completedOrders.reduce(
    (total, order) => total + calculateTotalPrice(order),
    0
  );

  const monthlyTotalProfit = completedOrders.reduce(
    (total, order) => total + calculateProfit(order),
    0
  );

  return (
    <div className={styles.profit_container}>
      <h1 className={styles.profit_h1}>Gennemførte Ordrer</h1>
      {completedOrders.map((order, index) => (
        <div className={styles.profit_order} key={index}>
          <h2>Ordre #{index + 1}</h2>
          <ul>
            {order.map((item) => (
              <li key={item.id}>
                {item.qty}x {item.title} - DKK {item.price * item.qty},-
              </li>
            ))}
          </ul>
          <p>Omsætning: DKK {calculateTotalPrice(order)},-</p>
          <p>Overskud: DKK {calculateProfit(order)},-</p>
        </div>
      ))}
      <div className={styles.profit_order}>
        <h2>Månedenlig Indtjening</h2>
        <p>Total Omsætning: DKK {monthlyTotalPrice}</p>
        <p>Total Overskud: DKK {monthlyTotalProfit}</p>
        <img className={styles.profit_image} src="https://i.pinimg.com/originals/dd/7f/e2/dd7fe2bebc1e730a18fbdb4860dd6f68.gif"></img>
      </div>
    </div>
  );
};

// Function to calculate total price for an order
const calculateTotalPrice = (order) => {
  return Math.floor(
    order.reduce((total, item) => total + item.price * item.qty, 0)
  );
};

// Function to calculate profit for an order (65% of total price)
const calculateProfit = (order) => {
  const totalPrice = calculateTotalPrice(order);
  return Math.floor(totalPrice * 0.65); // Assuming profit is 65% of total price
};

const mapStateToProps = (state) => {
  return {
    completedOrders: state.shop.completedOrders,
  };
};

export default connect(mapStateToProps)(ProfitsPage);
