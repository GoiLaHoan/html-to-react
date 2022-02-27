import React, { useState, useContext } from "react";
import user from "./../../img/user.jpg";
import { OpenContext } from "../Context/OpenContext";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHashtag,
    faLaptop,
    faTachometerAlt,
    faFileAlt,
    faTh,
    faKeyboard,
    faTable,
    faChartBar,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
    const [show, setShow] = useState(false);
    const [showElement, setElement] = useState(false);

    const handleShowEmlement = () => {
        setElement(!showElement);
        if (show === true) {
            setShow(!show);
        }
    };
    const handleShow = () => {
        setShow(!show);
        if (showElement === true) {
            setElement(!showElement);
        }
    };

    const showSidebar = useContext(OpenContext);

    const showElememtmemts = showElement ? "show" : "";
    const showPages = show ? "show" : "";
    return (
        <div>
            <div className={`sidebar pe-4 pb-3 ${showSidebar.open}`}>
                <Nav
                    className="navbar bg-light navbar-light"
                    variant="tabs"
                    defaultActiveKey="/home"
                >
                    <Navbar>
                        <Navbar.Brand href="/" className="mx-4 mb-3">
                            <h3 className="text-primary">
                                <i className="me-2">
                                    <FontAwesomeIcon icon={faHashtag} />
                                </i>
                                DASHMIN
                            </h3>
                        </Navbar.Brand>
                    </Navbar>

                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img
                                className="rounded-circle"
                                src={user}
                                alt="avt"
                                style={{ width: 40, height: 40 }}
                            />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <span>Admin</span>
                        </div>
                    </div>

                    <div className="navbar-nav w-100">
                        <Nav.Item>
                            <Link to="/" className="">
                                <Nav.Link eventKey="link-0" href="/">
                                    <i className="me-2">
                                        <FontAwesomeIcon
                                            icon={faTachometerAlt}
                                        />
                                    </i>
                                    Dashboard
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        {/* Dropdown-element-start */}
                        <div className="nav-item dropdown">
                            <Nav.Item>
                                <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded={showElement}
                                    onClick={handleShowEmlement}
                                >
                                    <Nav.Link eventKey="link-5">
                                        <i className="me-2">
                                            <FontAwesomeIcon icon={faLaptop} />
                                        </i>
                                        Elements
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <div
                                className={`dropdown-menu bg-transparent border-0 ${showElememtmemts}`}
                            >
                                <Link to="/button" className="dropdown-item">
                                    Buttons
                                </Link>
                                <Link
                                    to="/typography"
                                    className="dropdown-item"
                                >
                                    Typography
                                </Link>
                                <Link to="/element" className="dropdown-item">
                                    Other Elements
                                </Link>
                            </div>
                        </div>
                        <Nav.Item>
                            <Link to="/widgets" className={``}>
                                <Nav.Link eventKey="link-1" href="widget">
                                    <i className="me-2">
                                        <FontAwesomeIcon icon={faTh} />
                                    </i>
                                    Widget
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/form">
                                <Nav.Link eventKey="link-2" href="form">
                                    <i className="me-2">
                                        <FontAwesomeIcon icon={faKeyboard} />
                                    </i>
                                    Form
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/tables" className="">
                                <Nav.Link eventKey="link-3" href="table">
                                    <i className="me-2">
                                        <FontAwesomeIcon icon={faTable} />
                                    </i>
                                    Table
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link to="/chart">
                                <Nav.Link eventKey="link-4" href="/chart">
                                    <i className="me-2">
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </i>
                                    Charts
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        {/* Dropdown-Element-End */}

                        {/* Dropdown-page  */}
                        <div className="nav-item dropdown">
                            <Nav.Item>
                                <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded={show}
                                    onClick={handleShow}
                                >
                                    <Nav.Link>
                                        <i className="me-2">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </i>
                                        Pages
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <div
                                className={`dropdown-menu bg-transparent border-0 ${showPages}`}
                            >
                                <Link to="/signin" className="dropdown-item">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="dropdown-item">
                                    Sign Up
                                </Link>
                                <Link to="/404" className="dropdown-item">
                                    404 Error
                                </Link>
                                <Link to="/blackpage" className="dropdown-item">
                                    Blank Page
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown End */}
                    </div>
                </Nav>
            </div>
        </div>
    );
};
export default Sidebar;
