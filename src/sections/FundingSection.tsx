import {
    Card,
    Col,
    Row,
    Typography,
    Divider
} from "antd";

import fundingLogo from "../assets/BMFTR_Logo.svg";
import rekonikLogo from "../assets/Picture1.png"

const { Title, Paragraph } = Typography;

export default function FundingSection() {
    return (
        <>
            <section className="funding-section">
                <div className="funding-container">
                    <Title level={2} className="section-title">
                        Förderung
                    </Title>

                    <Paragraph className="funding-description">
                        ReKonIK wird im Programm „Zukunft der Wertschöpfung“ des
                        Bundesministeriums für Forschung, Technologie und Raumfahrt
                        (BMFTR) in der Fördermaßnahme „Arbeitshandeln für Kreativität,
                        Innovation und resiliente Wertschöpfung“ (AKIres) gefördert.
                    </Paragraph>

                    <Row justify="center">
                        <Col xs={20} md={8} lg={6}>

                            <img src={fundingLogo} alt="BMFTR Logo" />

                        </Col>
                    </Row>

                    <div className="funding-details">
                        <div className="detail-row">
                            <strong>Projektlaufzeit:</strong>
                            <span>01.01.2026 – 31.12.2028</span>
                        </div>

                        <div className="detail-row">
                            <strong>Förderkennzeichen:</strong>
                            <span>[FKZ]</span>
                        </div>

                        <div className="detail-row">
                            <strong>Projektträger:</strong>
                            <span>[Projektträger]</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="funding-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="#home"><img src={rekonikLogo} alt="ReKonIK" /></a>
                        <a href="#home"><h3>ReKonIK</h3></a>
                    </div>

                    <div className="footer-links">
                        <a href="#home"> Impressum </a>
                        <a href="#home"> Datenschutz </a>
                    </div>

                    <div className="footer-contact">
                        <p>Dr. Martin Obstbaum · Johannes Iglhaut</p>
                        <p>
                            <a href="mailto:martin.obstbaum@twt-gmbh.de">
                                martin.obstbaum@twt-gmbh.de
                            </a>
                        </p>
                        <p>TWT GmbH Science & Innovation</p>
                        <p>Industriestraße 6</p>
                        <p>70565 Stuttgart/Germany</p>
                    </div >
                </div >

                <Divider />

                <div className="footer-bottom">
                    © 2026 ReKonIK-Konsortium. All rights reserved.
                </div>
            </footer >
        </>
    );
}