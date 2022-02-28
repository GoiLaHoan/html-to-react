import { useContext, useRef } from "react";

import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header&Footer/Header";
import { OpenContext } from "../Context/OpenContext";
import BackToTop from "../BackToTop";
const LayoutCompnent = () => {
    const showSidebar = useContext(OpenContext);
    const refScrollUp = useRef();

    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className={`content ${showSidebar.open}`}>
                    <div ref={refScrollUp}>
                        <BackToTop scrollUp={handleScrollUp} />
                    </div>
                    <Header />

                    <Routes />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LayoutCompnent;
