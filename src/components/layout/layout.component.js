import React, { useContext, useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header&Footer/Header";
import { OpenContext } from "../Context/OpenContext";

const LayoutCompnent = () => {
  const showSidebar = useContext(OpenContext);
  const [show] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  if (loading) return <Loading />;
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <Sidebar />
        <div className={`content ${showSidebar.open}`}>
          {show}
          <Header />
          <Routes />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutCompnent;
