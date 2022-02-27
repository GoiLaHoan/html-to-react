import React from "react";
import SaleAndRevenue from "./SaleAndRevenue";
import SaleChart from "./SaleChart";
import ToDoList from "../Widgets/ToDoList";
import Messages from "../Widgets/Messages";
import Calender from "../Widgets/Calender";
import RecentSale from "./RecentSale";
const Home = () => {
  return (
    <>
      <SaleAndRevenue />
      <SaleChart />
      <RecentSale />
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-md-6 col-xl-4">
            <Messages />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4">
            <Calender />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4">
            <ToDoList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
