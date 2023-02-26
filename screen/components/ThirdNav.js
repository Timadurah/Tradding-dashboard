import React from "react";
import { Live, LiveTable, Category } from "./Cards";

export default function ThirdNav() {
  return (
    <div
      className="thirdNav bg-dark p-4 col-lg-6 col-12"
      style={{ color: "black" }}
    >
      <div className="d-flex justify-content-between">
        {/* topic */}
        <div>
          <h3 className="fw-bold text-white">Chelsea Vs Liverpool</h3>
          {/* how many people are tradding the game */}
          <small className="small-text text-muted fw-bold ">
            {" "}
            <span style={{ fontSize: "15px" }}>60,277154 </span>people trading
            them now
          </small>
        </div>
        {/* trade stat */}
        <div className="d-flex">
          {/* trading up ood */}
          <div className="mx-3" style={{ textAlign: "right" }}>
            <b className="text-muted">#37,2826</b>
            <p className="text-muted small-text fw-bold ">2.5 OOD</p>
          </div>
          {/* trading down ood */}
          <div style={{ textAlign: "right" }}>
            <b className="text-muted">#37,2826</b>
            <p className="text-muted small-text fw-bold ">3.2 OOD</p>
          </div>
        </div>
      </div>
      <Live />
       <Category />
      <LiveTable />
    </div>
  );
}
