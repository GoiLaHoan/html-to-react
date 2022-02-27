import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const BasicNavsTabs = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Basic Navs & Tabs</h6>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        >
                            Diam sea sanctus amet clita lorem sit sanctus ea
                            elitr. Lorem rebum est elitr eos. Dolores aliquyam
                            sadipscing dolor sadipscing accusam voluptua tempor.
                            Sanctus elitr sanctus diam tempor diam aliquyam et
                            labore clita, ipsum takimata amet est erat, accusam
                            takimata gubergren sea sanctus duo nonumy. Ipsum
                            diam ipsum sit kasd.
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <div
                            className="tab-pane fade show"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                        >
                            Sanctus vero sit kasd sea gubergren takimata
                            consetetur elitr elitr, consetetur sadipscing
                            takimata ipsum dolores. Accusam duo accusam et
                            labore ea elitr ipsum tempor sit, dolore aliquyam
                            ipsum sit amet sit. Et dolore ipsum labore invidunt
                            rebum. Sed dolore gubergren sanctus vero diam lorem
                            rebum elitr, erat diam dolor clita.
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <div
                            className="tab-pane fade show"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                        >
                            Sit consetetur eirmod lorem ea magna sadipscing
                            ipsum elitr invidunt, dolores lorem erat ipsum ut
                            aliquyam eos lorem sed. Nonumy aliquyam ea justo eos
                            dolores dolores duo dolores. Aliquyam dolor sea
                            dolores sit takimata no erat vero. At lorem justo
                            tempor lorem duo, stet kasd aliquyam ipsum voluptua
                            labore at.
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default BasicNavsTabs;
