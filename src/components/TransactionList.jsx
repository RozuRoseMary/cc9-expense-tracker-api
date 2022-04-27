import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(TransactionContext);

  return (
    <ul className="list-group">
      {transactions.map((el) => (
        <Transaction key={el.id} transaction={el} />
      ))}
    </ul>
  );
}

export default TransactionList;
