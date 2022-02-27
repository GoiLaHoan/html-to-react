import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const IconButtonsSize = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Icon Buttons Size</h6>
                <div className="m-n2">
                    <Button
                        variant="primary"
                        className="btn-lg-square m-2"
                        size="lg"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-primary"
                        className="btn-lg-square m-2"
                        size="lg"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
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
                    <Button
                        variant="primary"
                        className="btn-sm-square m-2"
                        size="sm"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-primary"
                        className="btn-sm-square m-2"
                        size="sm"
                    >
                        <i>
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default IconButtonsSize;
