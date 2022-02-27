import React from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import { data, data1, data3, data4, data5, data6 } from "./Chart";
const Chart = () => {
  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Single Line Chart</h6>
              <Line data={data} />
            </div>
          </div>
          
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Line Chart</h6>
              <Line data={data1} />
            </div>
          </div>

          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Single Bar Chart</h6>
              <Bar data={data3} />
            </div>
          </div>

          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Bar Chart</h6>
              <Bar data={data4} />
            </div>
          </div>

          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Pie Chart</h6>
              <Pie data={data5} />;
            </div>
          </div>

          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Doughnut Chart</h6>
              <Doughnut data={data6} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chart;
