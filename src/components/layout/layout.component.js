import React, { useContext, useState, useEffect, useRef } from "react";
import { Loading } from "../Loading/Loading";
import BackToTop from "../BackToTop";
import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header&Footer/Header";
import { OpenContext } from "../Context/OpenContext";

const LayoutCompnent = () => {
    const showSidebar = useContext(OpenContext);
    const [show] = useState(false);
    const [loading, setLoading] = useState(true);
    const refScrollUp = useRef();

    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [loading]);

    if (loading) return <Loading />;
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className={`content ${showSidebar.open}`}>
                    <div ref={refScrollUp}>
                        <BackToTop scrollUp={handleScrollUp} />
                    </div>
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
