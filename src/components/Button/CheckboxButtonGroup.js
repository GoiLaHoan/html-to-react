import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const CheckboxButtonGroup = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Checkbox Button Group</h6>
                <ButtonGroup aria-label="Basic example">
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check1"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked1}
                        value="1"
                        onClick={(e) => setChecked1(!checked1)}
                    >
                        Checked 1
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check2"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked2}
                        value="2"
                        onClick={(e) => setChecked2(!checked2)}
                    >
                        Checked 2
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check3"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked3}
                        value="3"
                        onClick={(e) => setChecked3(!checked3)}
                    >
                        Checked 3
                    </ToggleButton>
                </ButtonGroup>
            </div>
        </>
    );
};

export default CheckboxButtonGroup;
