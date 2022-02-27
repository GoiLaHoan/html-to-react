import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHashtag,
    faBars,
    faEnvelope,
    faBell,
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";z
import user from "./../../img/user.jpg";
import { FormControl, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { OpenContext } from "../Context/OpenContext";
const Header = () => {
    const open = useContext(OpenContext);
    return (
        <>
            <Navbar
                bg="light"
                expand
                className="navbar-light sticky-top px-4 py-0"
            >
                <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0">
                        <i>
                            <FontAwesomeIcon icon={faHashtag} />
                        </i>
                    </h2>
                </Link>
                <Link
                    to="#"
                    className="sidebar-toggler flex-shrink-0"
                    onClick={open.toggleOpen}
                >
                    <i>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </Link>
                <Form className="d-none d-md-flex ms-4">
                    <FormControl
                        placeholder="Search"
                        className="border-0"
                        type="search"
                    />
                </Form>

                <div className="navbar-nav align-items-center ms-auto">
                    {/* Start Message */}

                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown
                                className="nav-item dropdown"
                                title={
                                    <span>
                                        <i className="me-lg-2">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />
                                        </i>{" "}
                                        <span className="d-none d-lg-inline-flex">
                                            Message
                                        </span>
                                    </span>
                                }
                            >
                                <div className="bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <NavDropdown.Item href="#">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle"
                                                src={user}
                                                alt=""
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">
                                                    Jhon send you a message
                                                </h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle"
                                                src={user}
                                                alt=""
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">
                                                    Jhon send you a message
                                                </h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle"
                                                src={user}
                                                alt=""
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">
                                                    Jhon send you a message
                                                </h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link
                                            to="#"
                                            className="dropdown-item text-center"
                                        >
                                            See all message
                                        </Link>
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    {/* End Message */}

                    {/* Start Notificatin */}
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown
                                className="nav-item dropdown"
                                title={
                                    <span>
                                        <i className="me-lg-2">
                                            <FontAwesomeIcon icon={faBell} />
                                        </i>{" "}
                                        <span className="d-none d-lg-inline-flex">
                                            Notificatin
                                        </span>
                                    </span>
                                }
                            >
                                {/* NavDropDownMenu chưa xong */}
                                <div className="bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <NavDropdown.Item href="#">
                                        <h6 className="fw-normal mb-0">
                                            Profile updated
                                        </h6>
                                        <small>15 minutes ago</small>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        <h6 className="fw-normal mb-0">
                                            New user added
                                        </h6>
                                        <small>15 minutes ago</small>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        <h6 className="fw-normal mb-0">
                                            Password changed
                                        </h6>
                                        <small>15 minutes ago</small>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link
                                            to="#"
                                            className="dropdown-item text-center"
                                        >
                                            See all notifications
                                        </Link>
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    {/* End Notificatin */}

                    {/* Start Profile */}
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown
                                className="nav-item dropdown"
                                title={
                                    <span>
                                        <img
                                            className="rounded-circle me-lg-2"
                                            src={user}
                                            alt=""
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                        />
                                        <span className="d-none d-lg-inline-flex">
                                            John Doe
                                        </span>
                                    </span>
                                }
                            >
                                {/* NavDropDownMenu chưa xong */}
                                <NavDropdown.Item href="#">
                                    My Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    {/* End Profile */}
                </div>
            </Navbar>
        </>
    );
};

export default Header;
