import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Container fluid className="pt-4 px-4">
                <div className="bg-light rounded-top p-4">
                    <Row>
                        <Col
                            xs={12}
                            sm={6}
                            className="text-center text-sm-start"
                        >
                            &copy; <Link to="/">Your Site Name</Link>, All Right
                            Reserved.
                        </Col>
                        <Col xs={12} sm={6} className="text-center text-sm-end">
                            Designed By{" "}
                            <Link to="https://htmlcodex.com">HTML Codex</Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
