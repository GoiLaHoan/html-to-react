import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const IconTextButtons = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Icon & Text Buttons</h6>
                <div className="m-n2">
                    <Button variant="primary" className="m-2">
                        <i className="me-2">
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                        Icon Left
                    </Button>
                    <Button variant="outline-primary" className="m-2">
                        <i className="me-2">
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                        Icon Left
                    </Button>
                    <Button variant="outline-primary" className="m-2">
                        <i className="ms-2">
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                        Icon Right
                    </Button>
                    <Button variant="outline-primary" className="m-2">
                        <i className="ms-2">
                            <FontAwesomeIcon icon={faHome} />
                        </i>
                        Icon Right
                    </Button>
                </div>
            </div>
        </>
    );
};

export default IconTextButtons;
