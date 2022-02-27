import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const RadioButtonGroup = () => {
    const radios = [
        { name: "Radio 1", value: "1" },
        { name: "Radio 2", value: "2" },
        { name: "Radio 3", value: "3" },
    ];
    const [radioValue, setRadioValue] = useState("1");
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Radio Button Group</h6>
                <ButtonGroup aria-label="Basic example">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={"outline-primary"}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                                setRadioValue(e.currentTarget.value)
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
        </>
    );
};

export default RadioButtonGroup;
