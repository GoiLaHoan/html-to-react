import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const BackToTop = (props) => {
    const [showGoTop, setShowGoTop] = useState(false);

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 300);
    };

    //SCROLL LISTENER
    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    }, []);

    return (
        <>
            <Button
                to="#"
                variant="primary"
                size="lg"
                className={
                    showGoTop ? "btn-lg-square back-to-top" : "gotoHidden"
                }
                onClick={props.scrollUp}
            >
                <i className="gotoTop__text">
                    <FontAwesomeIcon icon={faArrowUp} />
                </i>
            </Button>
        </>
    );
};

export default BackToTop;
