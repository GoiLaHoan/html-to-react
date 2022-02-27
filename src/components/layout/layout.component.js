import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";

const LayoutCompnent = () => {
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <div className="content">
                    <Header />
                    <Routes />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LayoutCompnent;
