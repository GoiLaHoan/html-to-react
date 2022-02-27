import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Calender</h6>
                    <Link to="#">Show All</Link>
                </div>
                <Calendar onChange={onChange} value={value} locale="en-US" />
            </div>
        </>
    );
};

export default Calender;
