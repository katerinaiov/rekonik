import { Row, Col, Typography } from "antd";
import {
    BulbOutlined,
    BarChartOutlined,
    LaptopOutlined,
    FileTextOutlined,
    AimOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";

import KeyFactCard from "../components/KeyFactCard";

const { Title } = Typography;

const facts = [
    {
        icon: <AimOutlined />,
        title: "Resilienz-Rahmenkonzept",
        description:
            "Gestaltung kreativitäts-, innovations- und resilienzförderlicher Organisationsstrukturen.",
    },
    {
        icon: <LaptopOutlined />,
        title: "KI-Assistent",
        description:
            "Sprachmodellbasierter Assistent für Modellierung und Wissensaustausch.",
    },
    {
        icon: <BarChartOutlined />,
        title: "Maßnahmen & Indikatoren",
        description:
            "Indikatoren für Implementierung und Wirksamkeitsanalyse.",
    },
    {
        icon: <BulbOutlined />,
        title: "Zukunftsszenarien",
        description:
            "Design-Futuring Szenarien und resiliente Kollaboration.",
    },
    {
        icon: <AppstoreOutlined />,
        title: "Planspiel",
        description:
            "Serious Game zur Erprobung von Störereignissen.",
    },
    {
        icon: <FileTextOutlined />,
        title: "Transformations-blaupausen",
        description:
            "Öffentlich zugängliche Blaupausen für KMU.",
    },
];

export default function KeyFactsSection() {
    return (
        <div className="section">
            <Title className="section-title">
                Key Facts
            </Title>

            <Row gutter={[48, 48]}>
                {facts.map((fact) => (
                    <Col xs={24} md={12} lg={8} key={fact.title}>
                        <KeyFactCard {...fact} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}