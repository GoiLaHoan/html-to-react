import React from "react";
import { Button } from "react-bootstrap";

const RoundedButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Rounded Buttons</h6>
                <div className="m-n2">
                    <Button variant="primary" className="m-2 rounded-pill">
                        Primary
                    </Button>{" "}
                    <Button variant="secondary" className="m-2 rounded-pill">
                        Secondary
                    </Button>{" "}
                    <Button variant="success" className="m-2 rounded-pill">
                        Success
                    </Button>{" "}
                    <Button variant="danger" className="m-2 rounded-pill">
                        Danger
                    </Button>{" "}
                    <Button variant="warning" className="m-2 rounded-pill">
                        Warning
                    </Button>{" "}
                    <Button variant="info" className="m-2 rounded-pill">
                        Info
                    </Button>{" "}
                    <Button variant="light" className="m-2 rounded-pill">
                        Light
                    </Button>{" "}
                    <Button variant="dark" className="m-2 rounded-pill">
                        Dark
                    </Button>{" "}
                    <Button variant="link" className="m-2 rounded-pill">
                        Link
                    </Button>{" "}
                </div>
            </div>
        </>
    );
};

export default RoundedButtons;
