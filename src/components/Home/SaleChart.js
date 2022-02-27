import React from "react";
import { data1,data4 } from "../Chart/Chart";
import { Line, Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
const SaleChart = () => {
  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <Link to="/">Show All</Link>
              </div>
              <Bar data={data4} />
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Salse & Revenue</h6>
                <Link to="/">Show All</Link>
              </div>
              <Line data={data1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleChart;
