import React from "react";
import { Button } from "react-bootstrap";

const BlockButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Block Buttons</h6>
                <div className="m-n2">
                    <Button variant="primary" className="m-2 w-100">
                        Button
                    </Button>
                    <Button variant="outline-primary" className="m-2 w-100">
                        Button
                    </Button>
                </div>
            </div>
        </>
    );
};

export default BlockButtons;
