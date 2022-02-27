import React from "react";
import { Button } from "react-bootstrap";

const OutlineButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Outline Buttons</h6>
                <div className="m-n2">
                    <Button variant="outline-primary" className="m-2">
                        Primary
                    </Button>{" "}
                    <Button variant="outline-secondary" className="m-2">
                        Secondary
                    </Button>{" "}
                    <Button variant="outline-success" className="m-2">
                        Success
                    </Button>{" "}
                    <Button variant="outline-danger" className="m-2">
                        Danger
                    </Button>{" "}
                    <Button variant="outline-warning" className="m-2">
                        Warning
                    </Button>{" "}
                    <Button variant="outline-info" className="m-2">
                        Info
                    </Button>{" "}
                    <Button variant="outline-light" className="m-2">
                        Light
                    </Button>{" "}
                    <Button variant="outline-dark" className="m-2">
                        Dark
                    </Button>{" "}
                    <Button variant="outline-link" className="m-2">
                        Link
                    </Button>{" "}
                </div>
            </div>
        </>
    );
};

export default OutlineButtons;
