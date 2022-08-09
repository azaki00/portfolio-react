import React from "react";
import Header from "./Header";
import "./tracker.css";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

const Tracker = () => {
  return (
    <div className="page3">
      <div className="trackerCont">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default Tracker;
