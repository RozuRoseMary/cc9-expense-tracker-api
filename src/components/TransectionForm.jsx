import React from "react";

function TransectionForm() {
  return (
    <div className="border bg-white rounded-2 p-3">
      {/* BTN-right */}
      <form action="" className="row g-3">
        <div className="col-6">
          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            defaultChecked
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
            // defaultChecked
          />
          <label
            htmlFor="cbx-expense"
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
          <input type="text" className="form-control" />
        </div>

        {/* CATAGORY */}
        <div className="col-sm-6">
          <label htmlFor="" className="form-label">
            Catagory
          </label>
          <select name="" id="" className="form-select">
            <option value="">Food</option>
            <option value="">Transport</option>
          </select>
        </div>

        {/* Amount */}
        <div className="col-sm-6">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input type="text" className="form-control" />
        </div>

        {/* DATE */}
        <div className="col-sm-6">
          <label htmlFor="" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-12">
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransectionForm;
