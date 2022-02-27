import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Sizing = () => {
    return (
        <>
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Sizing</h6>
                <InputGroup size="lg">
                    <FormControl
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder=".form-control-lg"
                    />
                </InputGroup>

                <br />
                <InputGroup>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Default input"
                    />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder=".form-control-sm"
                    />
                </InputGroup>
            </div>
        </>
    );
};

export default Sizing;
