// APP => TransactionAction

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { DELETE_TRANSACTION } from "../reducers/transactionReducer";

const INCOME = "INCOME";
const EXPENSE = "EXPENSE";

function TransactionForm() {
  const [transaction, setTransaction] = useState({});
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState(EXPENSE);
  const [payeeInput, setPayeeInput] = useState("");
  const [categoryInput, setCategoryInput] = useState({});
  const [amountInput, setAmountInput] = useState(0);
  const [dateInput, setDateInput] = useState("");

  const { dispatch } = useContext(TransactionContext);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.transactionId) {
      axios
        .get("http://localhost:8080/transactions/" + params.transactionId)
        .then((res) => {
          if (res.data.transaction === null) {
            setNotFoundError(true);
          } else setTransaction(res.data.transaction);
        })
        .catch((err) => {
          console.log(err);
          setNotFoundError(true);
        });
    }
  }, [params.transactionId]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("http://localhost:8080/categories");
      setCategories(res.data.categories);
    };
    fetchCategory();
  }, []);

  const location = useLocation();

  // SUBMIT
  const handleSubmitForm = (event) => {
    event.preventDefault();
    // navigate("/home");
  };

  // 🧡💛
  // ADD BTN
  const handleAdd = async () => {
    // const createObj = { payee, amount, category };

    console.log(categoryInput);
    console.log(payeeInput);
    console.log(amountInput);
    console.log(dateInput);
  };

  // DELETE BTN
  const handleClickDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:8080/transactions/${params.transactionId}`
      );
      dispatch({
        type: DELETE_TRANSACTION,
        value: { id: params.transactionId },
      });
      setLoading(true);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  // CATEGORY_TYPE IN OPTION
  const filterCategories = categories.filter((el) => el.type === categoryType);

  if (notFoundError)
    return <h1 className="text-white">404!!! Transaction is not found</h1>;
  else
    return (
      <div>
        <div className="border bg-white rounded-2 p-3">
          {/* BTN-right */}
          <form action="" className="row g-3" onSubmit={handleSubmitForm}>
            <div className="col-6">
              <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
                onChange={() => setCategoryType(EXPENSE)}
              />
              <label
                htmlFor="cbx-expense"
                className="btn btn-outline-danger rounded-0 rounded-start shadow-none"
              >
                EXPENSE
              </label>
              <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
                onChange={() => setCategoryType(INCOME)}

                // defaultChecked
              />
              <label
                htmlFor="cbx-income"
                className="btn btn-outline-primary rounded-0 rounded-start shadow-none"
              >
                INCOME
              </label>
            </div>

            {/* X close */}
            <div className="col-6 d-flex justify-content-end">
              <i className="fa-solid fa-xmark" role="button"></i>
            </div>

            {/* PAYEE */}
            <div className="col-sm-6">
              <label htmlFor="" className="form-label">
                Payee
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setPayeeInput(event.target.value)}
              />
            </div>

            {/* CATAGORY */}
            <div className="col-sm-6">
              <label htmlFor="" className="form-label">
                Catagory
              </label>
              <select
                name=""
                id=""
                className="form-select"
                onChange={
                  (event) => setCategoryInput(event.target.value)
                  // console.log(event.target.value)
                }
              >
                {filterCategories.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div className="col-sm-6">
              <label htmlFor="" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setAmountInput(event.target.value)}
              />
            </div>

            {/* DATE */}
            <div className="col-sm-6">
              <label htmlFor="" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                onChange={(event) => setDateInput(event.target.value)}
              />
            </div>

            {/* Save */}
            <div className="col-12">
              <div className="d-grid mt-3">
                <button className="btn btn-primary" onClick={handleAdd}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* DELETE */}
        {params.transactionId && (
          // <div className="col-12">
          <div className="d-grid mt-3">
            <button
              className="btn btn-danger"
              onClick={handleClickDelete}
              disable={loading}
            >
              Delete Transaction
            </button>
          </div>
          // </div>
        )}
      </div>
    );
}

export default TransactionForm;
