import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const OutlinedButtonGroup = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Outlined Button Group</h6>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-primary">Left</Button>
                    <Button variant="outline-primary">Middle</Button>
                    <Button variant="outline-primary">Right</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default OutlinedButtonGroup;
