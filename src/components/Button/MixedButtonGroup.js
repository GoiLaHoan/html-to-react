import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const MixedButtonGroup = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Mixed Button Group</h6>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="danger">Left</Button>
                    <Button variant="warning">Middle</Button>
                    <Button variant="success">Right</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default MixedButtonGroup;
