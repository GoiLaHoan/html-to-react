import React from "react";
import { Button } from "react-bootstrap";

const BasicButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Basic Buttons</h6>
                <div className="m-n2">
                    <Button variant="primary" className="m-2">
                        Primary
                    </Button>{" "}
                    <Button variant="secondary" className="m-2">
                        Secondary
                    </Button>{" "}
                    <Button variant="success" className="m-2">
                        Success
                    </Button>{" "}
                    <Button variant="danger" className="m-2">
                        Danger
                    </Button>{" "}
                    <Button variant="warning" className="m-2">
                        Warning
                    </Button>{" "}
                    <Button variant="info" className="m-2">
                        Info
                    </Button>{" "}
                    <Button variant="light" className="m-2">
                        Light
                    </Button>{" "}
                    <Button variant="dark" className="m-2">
                        Dark
                    </Button>{" "}
                    <Button variant="link" className="m-2">
                        Link
                    </Button>{" "}
                </div>
            </div>
        </>
    );
};

export default BasicButtons;
