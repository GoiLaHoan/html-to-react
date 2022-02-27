import React from "react";
import {
    ButtonToolbar as BToolbar,
    ButtonGroup as BGroup,
    Button,
} from "react-bootstrap";
const VerticalButtonGroup = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Vertical Button Group</h6>
                <BGroup vertical className="me-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </BGroup>

                <BGroup vertical className="me-2">
                    <Button variant="danger">Left</Button>
                    <Button variant="warning">Middle</Button>
                    <Button variant="success">Right</Button>
                </BGroup>
            </div>
        </>
    );
};

export default VerticalButtonGroup;
