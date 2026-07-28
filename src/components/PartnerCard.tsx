import { Card, Col, Row, Typography } from "antd";
import { Partner } from '../types/partner';


const { Title } = Typography;

interface Props {
    partner: Partner;
}

export default function PartnerCard({
    partner,
}: Props) {
    return (
        <div className="partner-card">

            <Row gutter={[24, 24]} align="top">

                <Col xs={24} lg={6}>
                    <Card className="partner-logo-box">

                        <img src={partner.logo} style={{ width: '100%', maxWidth: '230px', height: 'auto', display: 'block' }} />

                    </Card>
                </Col>

                <Col xs={24} lg={18} className="partner-content">

                    <Title level={2}>
                        {partner.name}
                    </Title>

                    <p>
                        <strong>Business:</strong>{" "}
                        {partner.business}
                    </p>

                    <p>
                        <strong>Mitarbeiteranzahl:</strong>{" "}
                        {partner.employees}
                    </p>

                    <h3>Kompetenzen / Produkte</h3>

                    <ul>
                        {partner.competencies.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3>Rolle in ReKonIK</h3>

                    <ul>
                        {partner.role.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3>Partner-spezifische Ziele</h3>

                    <ul>
                        {partner.goals.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                </Col>

            </Row>

        </div>
    );
}