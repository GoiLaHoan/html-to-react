import React from "react";
import Calender from "./Calender";
import Maps from "./Maps";
import Messages from "./Messages";
import Testimonial from "./Testimonial";
import ToDoList from "./ToDoList";

const Widget = () => {
    return (
        <>
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
                    <div className="col-sm-12 col-xl-6">
                        <Testimonial />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <Maps />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Widget;
