import React, { createContext, useReducer, useEffect } from "react";
import {
  FETCH_TRANSACTION,
  transactionReducer,
} from "../reducers/transactionReducer";
import axios from "axios";

const TransactionContext = createContext();

function TransactionContextProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/transactions")
      .then((res) => {
        dispatch({
          type: FETCH_TRANSACTION,
          value: { transactions: res.data.transactions },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions: state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export { TransactionContext, TransactionContextProvider };
