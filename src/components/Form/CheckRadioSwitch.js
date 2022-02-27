import React from "react";
import { Form } from "react-bootstrap";

const CheckRadioSwitch = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Check, Radio & Switch</h6>
                <Form>
                    <Form.Check>
                        <Form.Check.Input
                            type="checkbox"
                            id="flexCheckDefault"
                            value=""
                            className="me-2"
                        />
                        <Form.Label htmlFor="flexCheckDefault">
                            Default checkbox
                        </Form.Label>
                    </Form.Check>

                    <Form.Check>
                        <Form.Check.Input
                            type="checkbox"
                            id="flexCheckDefault"
                            value=""
                            className="me-2"
                            defaultChecked
                        />
                        <Form.Label htmlFor="flexCheckChecked">
                            Checked checkbox
                        </Form.Label>
                    </Form.Check>

                    <Form.Check inline>
                        <Form.Check.Input
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                            className="me-2"
                        />
                        <Form.Label htmlFor="inlineCheckbox1">1</Form.Label>
                    </Form.Check>

                    <Form.Check inline>
                        <Form.Check.Input
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                            className="me-2"
                        />
                        <Form.Label htmlFor="inlineCheckbox2">2</Form.Label>
                    </Form.Check>
                    <Form.Check inline>
                        <Form.Check.Input
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                            className="me-2"
                            disabled
                        />
                        <Form.Label htmlFor="inlineCheckbox3">
                            3 (disabled)
                        </Form.Label>
                    </Form.Check>

                    <hr style={{ marginTop: "2px" }} />

                    <Form.Check>
                        <Form.Check.Input
                            type="radio"
                            id="flexRadioDefault1"
                            value=""
                            name="flexRadioDefault"
                            className="me-2"
                        />
                        <Form.Label htmlFor="flexRadioDefault1">
                            Default radio
                        </Form.Label>
                    </Form.Check>

                    <Form.Check>
                        <Form.Check.Input
                            type="radio"
                            id="flexRadioDefault2"
                            value=""
                            name="flexRadioDefault"
                            className="me-2"
                            defaultChecked
                        />
                        <Form.Label htmlFor="flexRadioDefault2">
                            Default checked radio
                        </Form.Label>
                    </Form.Check>

                    <Form.Check inline>
                        <Form.Check.Input
                            type="radio"
                            id="inlineRadio1"
                            value="option1"
                            className="me-2"
                            name="inlineRadioOptions"
                        />
                        <Form.Label htmlFor="inlineRadio1">1</Form.Label>
                    </Form.Check>

                    <Form.Check inline>
                        <Form.Check.Input
                            type="radio"
                            id="inlineRadio2"
                            value="option2"
                            className="me-2"
                            name="inlineRadioOptions"
                        />
                        <Form.Label htmlFor="inlineRadio2">2</Form.Label>
                    </Form.Check>

                    <Form.Check inline>
                        <Form.Check.Input
                            type="radio"
                            id="inlineRadio3"
                            value="option3"
                            className="me-2"
                            name="inlineRadioOptions"
                            disabled
                        />
                        <Form.Label htmlFor="inlineRadio3">
                            3 (disabled)
                        </Form.Label>
                    </Form.Check>

                    <hr />

                    <Form.Check
                        type="switch"
                        id="flexSwitchCheckDefault"
                        label="Default switch checkbox input"
                        className="me-2"
                    />
                    <Form.Check
                        type="switch"
                        id="flexSwitchCheckChecked"
                        label="Checked switch checkbox input"
                        className="me-2"
                        defaultChecked
                    />

                    <Form.Check
                        type="switch"
                        id="flexSwitchCheckDisabled"
                        label="Disabled switch checkbox input"
                        className="me-2"
                        disabled
                    />
                    <Form.Check
                        type="switch"
                        id="flexSwitchCheckCheckedDisabled"
                        label="Disabled checked switch checkbox input"
                        className="me-2"
                        defaultChecked
                        disabled
                    />
                </Form>
            </div>
        </>
    );
};

export default CheckRadioSwitch;
