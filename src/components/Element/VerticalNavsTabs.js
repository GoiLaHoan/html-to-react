import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const VerticalNavsTabs = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Vertical Navs & Tabs</h6>
                <div className="d-flex align-items-start">
                    <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                    >
                        <Row className="nav flex-column nav-pills me-3">
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column ">
                                    <Nav.Item className='cursorpointer-on'>
                                        <Nav.Link
                                            eventKey="first"
                                            className="text-center"

                                        >
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='cursorpointer-on'>
                                        <Nav.Link
                                            eventKey="second"
                                            className="text-center"
                                        >
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='cursorpointer-on'>
                                        <Nav.Link
                                            eventKey="third"
                                            className="text-center"
                                        >
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='cursorpointer-on'>
                                        <Nav.Link
                                            eventKey="four"
                                            className="text-center"
                                        >
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        Consetetur at sit est sit ut ipsum clita
                                        at. Sit elitr sit sea dolor tempor eos
                                        sit, erat diam ea rebum clita no ea. Et
                                        amet sed nonumy sadipscing dolor et ut
                                        sed et. Stet eirmod est nonumy clita
                                        invidunt rebum. Nonumy dolor ut diam
                                        invidunt eirmod nonumy sed gubergren,.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div
                                        className="tab-pane fade show"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        Tempor et kasd accusam duo et dolor no
                                        accusam dolore, dolor sed voluptua duo
                                        no, sit et stet lorem dolor ipsum tempor
                                        consetetur vero, consetetur est eos sit
                                        eirmod erat diam accusam sadipscing sit.
                                        Takimata erat ea eirmod tempor elitr
                                        dolore sadipscing kasd justo, elitr
                                        tempor sed eos sadipscing magna.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div
                                        className="tab-pane fade show"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        Sed kasd kasd ea clita sed lorem amet
                                        tempor est voluptua, labore stet dolores
                                        gubergren clita lorem sed nonumy at.
                                        Dolores et ut erat voluptua. Est
                                        voluptua stet accusam rebum, elitr amet
                                        sit takimata sea eirmod. Sanctus elitr
                                        amet sit dolore sea stet et ut. Dolor et
                                        sanctus elitr ut.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div
                                        className="tab-pane fade show"
                                        id="v-pills-settings"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab"
                                    >
                                        Sit et vero kasd sea et at, aliquyam
                                        takimata et et est, labore et takimata
                                        sed ut stet sanctus, nonumy dolor
                                        invidunt sit labore et, amet et dolor
                                        sit dolor tempor et dolor ipsum nonumy,
                                        accusam clita sadipscing ut et labore
                                        labore est, dolore accusam vero at est
                                        sit. Invidunt.
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </div>
            </div>
        </>
    );
};

export default VerticalNavsTabs;
