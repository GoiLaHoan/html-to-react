import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const IconButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Icon Buttons</h6>
                <div className="m-n2">
                    <Button variant="primary" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button
                        variant="outline-primary"
                        className="btn-square m-2"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="secondary" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-secondary"
                        className="btn-square m-2"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="success" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-success"
                        className="btn-square m-2"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="danger" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button variant="outline-danger" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="warning" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-warning"
                        className="btn-square m-2"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="info" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button variant="outline-info" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>

                    <Button variant="dark" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button variant="outline-dark" className="btn-square m-2">
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default IconButtons;
