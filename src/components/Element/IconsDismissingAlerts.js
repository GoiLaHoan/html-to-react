import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const IconsDismissingAlerts = () => {
    // const [show, setShow] = useState([
    //     true,
    //     true,
    //     true,
    //     true,
    //     true,
    //     true,
    //     true,
    //     true,
    // ]);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
    const [show6, setShow6] = useState(true);
    const [show7, setShow7] = useState(true);
    const [show8, setShow8] = useState(true);

    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Icons & Dismissing Alerts</h6>
                {show1 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="primary"
                        closeLabel="Close"
                        onClose={() => setShow1(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>Hoàn
                    </Alert>
                )}

                {show2 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="secondary"
                        closeLabel="Close"
                        onClose={() => setShow2(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing secondary alert—check it out!
                    </Alert>
                )}

                {show3 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="success"
                        closeLabel="Close"
                        onClose={() => setShow3(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing success alert—check it out!
                    </Alert>
                )}
                {show4 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="danger"
                        closeLabel="Close"
                        onClose={() => setShow4(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing danger alert—check it out!
                    </Alert>
                )}
                {show5 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="warning"
                        closeLabel="Close"
                        onClose={() => setShow5(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing warning alert—check it out!
                    </Alert>
                )}
                {show6 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="info"
                        closeLabel="Close"
                        onClose={() => setShow6(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing info alert—check it out!
                    </Alert>
                )}
                {show8 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="light"
                        closeLabel="Close"
                        onClose={() => setShow8(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing light alert—check it out!
                    </Alert>
                )}
                {show7 === true && (
                    <Alert
                        // type="button"
                        // className="btn-close"
                        variant="dark"
                        closeLabel="Close"
                        onClose={() => setShow7(false)}
                        dismissible
                    >
                        <i className="fa fa-exclamation-circle me-2"></i>An icon
                        & dismissing dark alert—check it out!
                    </Alert>
                )}
            </div>
        </>
    );
};

export default IconsDismissingAlerts;
