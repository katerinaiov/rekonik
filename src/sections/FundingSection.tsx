import {
    Card,
    Col,
    Row,
    Typography
} from "antd";

import fundingLogo from '../assets/funding.png';

const { Title, Paragraph } = Typography;

export default function FundingSection() {
    return (
        <section className="funding-section">

            <Title className="section-title">
                Förderung
            </Title>

            <Paragraph className="funding-description">
                ReKonIK wird im Programm
                „Zukunft der Wertschöpfung“
                des Bundesministeriums für
                Forschung, Technologie und Raumfahrt
                (BMFTR) gefördert.
            </Paragraph>

            <Row justify="center">
                <Col span={8}>
                    <Card className="funding-logo">
                        <img src={fundingLogo} />
                    </Card>
                </Col>
            </Row>

            <div className="funding-details">

                <Row>
                    <Col span={8}>
                        <strong>Projektlaufzeit:</strong>
                    </Col>

                    <Col span={16}>
                        01.01.2026 – 31.12.2028
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <strong>Förderkennzeichen:</strong>
                    </Col>

                    <Col span={16}>
                        [FKZ]
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <strong>Projektträger:</strong>
                    </Col>

                    <Col span={16}>
                        [Projektträger]
                    </Col>
                </Row>

            </div>

        </section>
    );
}