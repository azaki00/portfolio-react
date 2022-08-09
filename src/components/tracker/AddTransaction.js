import React from "react";
import { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label HtmlFor="text">Text</label><br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label HtmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btnz">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
