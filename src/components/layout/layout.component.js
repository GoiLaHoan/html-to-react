import { useContext } from "react";

import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header&Footer/Header";
import { OpenContext } from "../Context/OpenContext";
const LayoutCompnent = () => {
    const showSidebar = useContext(OpenContext);
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className={`content ${showSidebar.open}`}>
                    <Header />
                    <Routes />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LayoutCompnent;
