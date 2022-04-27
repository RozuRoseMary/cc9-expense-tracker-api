import React from "react";
import { useParams } from "react-router-dom";
import TransectionForm from "../TransactionForm";

function TransectionAction() {
  const params = useParams();
  // console.log(": "+params);

  return <TransectionForm />;
}

export default TransectionAction;
