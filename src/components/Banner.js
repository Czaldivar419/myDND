import { Container, Row, Col } from "react-bootstrap"

import bannerImg from "../assets/media/bannerImg.png"




const Banner = () => {

    return (
        <section className="banner" id="landing">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Master Your Campaign</h1>
                        <h5>MyD&D: Your all in one Dungeons and Dragon's Campaign Manager.</h5>
                        <button id="login-button">Login</button>
                        <button id="signup-button">Sign Up</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerImg} alt="Banner" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
};

export default Banner;