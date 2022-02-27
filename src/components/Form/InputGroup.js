import React from "react";
import { InputGroup as InputG, FormControl, Form } from "react-bootstrap";

const InputGroup = () => {
    return (
        <>
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Input Group</h6>
                <InputG className="mb-3">
                    <InputG.Text id="basic-addon1">@</InputG.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputG>
                <InputG className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputG.Text id="basic-addon2">
                        @example.com
                    </InputG.Text>
                </InputG>
                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputG className="mb-3">
                    <InputG.Text id="basic-addon3">
                        https://example.com/users/
                    </InputG.Text>
                    <FormControl
                        id="basic-url"
                        aria-describedby="basic-addon3"
                    />
                </InputG>
                <InputG className="mb-3">
                    <InputG.Text>$</InputG.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputG.Text>.00</InputG.Text>
                </InputG>

                <InputG className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputG.Text id="basic-addon1">@</InputG.Text>
                    <FormControl
                        placeholder="Server"
                        aria-label="Server"
                        aria-describedby="basic-addon1"
                    />
                </InputG>

                <InputG>
                    <InputG.Text>With textarea</InputG.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputG>
            </div>
        </>
    );
};

export default InputGroup;
