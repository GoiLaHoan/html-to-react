import React from "react";
import { Form } from "react-bootstrap";

const HorizontalForm = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Horizontal Form</h6>
                <Form>
                    <div className="row mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <div className="col-sm-10">
                            <Form.Control type="email" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <div className="col-sm-10">
                            <Form.Control type="password" id="inputPassword3" />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">
                            Radios
                        </legend>
                        <div className="col-sm-10">
                            <Form.Check>
                                <Form.Check.Input
                                    className="me-2"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios1"
                                    value="option1"
                                    defaultChecked
                                />
                                <Form.Label htmlFor="gridRadios1">
                                    First radio
                                </Form.Label>
                            </Form.Check>
                            <Form.Check>
                                <Form.Check.Input
                                    className="me-2"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios2"
                                    value="option2"
                                />
                                <Form.Label htmlFor="gridRadios2">
                                    Second radio
                                </Form.Label>
                            </Form.Check>
                        </div>
                    </fieldset>
                    <div className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">
                            Checkbox
                        </legend>
                        <div className="col-sm-10">
                            <Form.Check>
                                <Form.Check.Input
                                    className="me-2"
                                    type="checkbox"
                                    id="gridCheck1"
                                />
                                <Form.Label htmlFor="gridCheck1">
                                    Check me out
                                </Form.Label>
                            </Form.Check>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </Form>
            </div>
        </>
    );
};

export default HorizontalForm;
