import React, { useState } from "react";
import {
    ButtonToolbar as BToolbar,
    ButtonGroup as BGroup,
    Button,
    ToggleButton,
} from "react-bootstrap";
const VerticalButtonGroupCR = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const radios = [
        { name: "Radio 1", value: "r1" },
        { name: "Radio 2", value: "r2" },
        { name: "Radio 3", value: "r3" },
    ];
    const [radioValue, setRadioValue] = useState();
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Vertical Button Group</h6>
                <BGroup vertical className="me-2">
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
                </BGroup>

                <BGroup vertical className="me-2">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={"outline-primary"}
                            // name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                                setRadioValue(e.currentTarget.value)
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </BGroup>
            </div>
        </>
    );
};

export default VerticalButtonGroupCR;
