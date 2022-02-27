import React from "react";
import { ProgressBar as Progress } from "react-bootstrap";

const ProgressBar = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Progress Bar</h6>
                <div className="pg-bar mb-3">
                    <Progress striped now={10} />
                </div>
                <div className="pg-bar mb-3">
                    <Progress striped variant="success" now={25} />
                </div>
                <div className="pg-bar mb-3">
                    <Progress striped variant="info" now={50} />
                </div>
                <div className="pg-bar mb-3">
                    <Progress striped variant="warning" now={75} />
                </div>
                <div className="pg-bar mb-0">
                    <Progress striped variant="danger" now={100} />
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
