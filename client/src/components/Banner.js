import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Login from "./Login";
import SignUp from "./SignUp"

const Banner = () => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <section className="banner" id="landing">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <h1>Master Your Campaign</h1>
                        <h5>MyD&D: Your all-in-one Dungeons and Dragons Campaign Manager.</h5>
                        {
                        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
                    }
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;