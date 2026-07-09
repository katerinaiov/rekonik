import {
    Card,
    Col,
    Divider,
    Row,
    Typography
} from "antd";

import { partners } from '../data/partners';
import PartnerCard from "../components/PartnerCard";

const { Title } = Typography;

export default function PartnersSection() {
    return (
        <section className="partners-section">

            <Title className="section-title">
                Verbundpartner
            </Title>

            <Row
                gutter={[24, 24]}
                justify="center"
            >
                {partners.map((partner) => (
                    <Col key={partner.id}>
                        <Card className="logo-grid-card">
                            <img src={partner.logo} style={{ maxWidth: '100%', height: 'auto' }} />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Divider />

            {partners.map((partner) => (
                <div key={partner.id}>
                    <PartnerCard partner={partner} />
                    <Divider />
                </div>
            ))}

        </section>
    );
}