import React from "react";

const IncomeExpense = () => {
  return (
    <div className="incomeExpenses">
      <div>
        <h4 className="income">INCOME</h4>
        <p className="incomeValue">+ $0.00</p>
      </div>
      <div>
        <h4 className="expense">EXPENSE</h4>
        <p className="expenseValue">- $0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
