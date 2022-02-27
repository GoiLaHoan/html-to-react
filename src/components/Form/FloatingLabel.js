import React from "react";
import { FloatingLabel as Floating, Form } from "react-bootstrap";

const FloatingLabel = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Floating Label</h6>

                <Floating
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </Floating>

                <Floating
                    className="mb-3"
                    controlId="floatingPassword"
                    label="Password"
                >
                    <Form.Control type="password" placeholder="Password" />
                </Floating>

                <Floating
                    controlId="floatingSelect"
                    label="Works with selects"
                    className="mb-3"
                >
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Floating>

                <Floating controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "150px" }}
                    />
                </Floating>
            </div>
        </>
    );
};

export default FloatingLabel;
