import React from "react";
import { Button } from "react-bootstrap";

const ButtonsSize = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Buttons Size</h6>
                <div className="m-n2">
                    <Button variant="primary" size="lg" className="m-2">
                        Large button
                    </Button>{" "}
                    <Button variant="secondary" size="lg" className="m-2">
                        Large button
                    </Button>{" "}
                    <Button variant="primary" size="sm" className="m-2">
                        Small button
                    </Button>{" "}
                    <Button variant="secondary" size="sm" className="m-2">
                        Small button
                    </Button>{" "}
                </div>
            </div>
        </>
    );
};

export default ButtonsSize;
