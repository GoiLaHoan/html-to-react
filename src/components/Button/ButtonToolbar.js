import React from "react";
import {
    ButtonToolbar as BToolbar,
    ButtonGroup,
    Button,
} from "react-bootstrap";

const ButtonToolbar = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Button Toolbar</h6>
                <BToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
                        <Button>4</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button variant="secondary">5</Button>{" "}
                        <Button variant="secondary">6</Button>{" "}
                        <Button variant="secondary">7</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                        <Button variant="info">8</Button>
                    </ButtonGroup>
                </BToolbar>
            </div>
        </>
    );
};

export default ButtonToolbar;
