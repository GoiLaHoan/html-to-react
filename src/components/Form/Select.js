import React from "react";
import { Form } from "react-bootstrap";

const Select = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Select</h6>

                <Form.Select
                    aria-label="Default select example"
                    size="sm"
                    className="mb-3"
                >
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                >
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    size="lg"
                >
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    multiple
                >
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
        </>
    );
};

export default Select;
