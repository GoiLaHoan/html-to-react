import React from "react";
import { Link } from "react-router-dom";
import user from "./../../img/user.jpg";

const Messages = () => {
    return (
        <>
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">Messages</h6>
                    <Link to="#">Show All</Link>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                    <img
                        className="rounded-circle flex-shrink-0"
                        src={user}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                    />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                    </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                    <img
                        className="rounded-circle flex-shrink-0"
                        src={user}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                    />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                    </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                    <img
                        className="rounded-circle flex-shrink-0"
                        src={user}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                    />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <img
                        className="rounded-circle flex-shrink-0"
                        src={user}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                    />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
