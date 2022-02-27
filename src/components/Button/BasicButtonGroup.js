import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const BasicButtonGroup = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Basic Button Group</h6>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Left</Button>
                    <Button variant="primary">Middle</Button>
                    <Button variant="primary">Right</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default BasicButtonGroup;
