import React from "react";

function Transection() {
  return (
    <li className="list-group-item d-flex align-item-center bd-callout-success">
      <div
        // style={{ background: "black" }}
        className="d-flex flex-fill"
        role="button"
      >
        <div className="border border-1 border-dark rounded-2 bg-danger p-2 text-center w-15">
          <p className="p-8 m-0 text-black-50 text-3">Jan 22</p>
          <p className="p-0 m-0">21</p>
        </div>

        <div className="d-flex justify-content-between align-items-center ps-4 flex-fill">
          <div className="">
            <p className="mb-1 fw-bold">7-11</p>
            <p className="mb-0 text-3 text-black-50">Food</p>
          </div>
          <span className="badge bg-primary">200</span>
        </div>
      </div>
    </li>
  );
}

export default Transection;
