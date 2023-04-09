import React from "react";
import "../components/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export const ExpenseItem = ({ date, title, amount }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>

      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
