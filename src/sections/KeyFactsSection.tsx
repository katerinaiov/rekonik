import { Row, Col, Typography } from "antd";
import { keyFacts } from '../data/keyFacts';

import KeyFactCard from "../components/KeyFactCard";
import ResilienzLogo from '../assets/Resilienz.png';
import KILogo from '../assets/KI-Assistant.png';
import IndikatorenLogo from '../assets/Indikatoren.png';
import ZukunftsszenarienLogo from '../assets/Zukunftsszenarien.png';
import PlanspielLogo from '../assets/Planspiel.png';
import TransformationsLogo from '../assets/Transformations.png';

const { Title } = Typography;

export const facts = [
    {
        icon: ResilienzLogo,
        title: "Resilienz-Rahmenkonzept",
        description:
            "Gestaltung kreativitäts-, innovations- und resilienzförderlicher Organisationsstrukturen und Arbeitsabläufe – anwendbar auf verschiedene Unternehmenskontexte mit modellbasierter Zusammenarbeit.",
    },
    {
        icon: KILogo,
        title: "KI-Assistent",
        description:
            "Auf Sprachmodellen basierender Assistent, der konsistente SysML-v2-Modelle interaktiv erstellt, Modelle verschiedener Disziplinen vereinheitlicht und unerfahrenen Nutzern erklärt.",
    },
    {
        icon: IndikatorenLogo,
        title: "Maßnahmen & Indikatoren",
        description:
            "Indikatoren für die Implementierung der ReKonIK-Lösungen und die Wirksamkeitsanalyse auf den Ebenen Individuum, Team und Organisation.",
    },
    {
        icon: ZukunftsszenarienLogo,
        title: "Zukunftsszenarien",
        description:
            "Mit Design-Futuring-Methoden partizipativ erarbeitete Szenarien zur künftigen, KI-unterstützten Kollaboration an und mit Modellen unter Störereignissen.",
    },
    {
        icon: PlanspielLogo,
        title: "Planspiel",
        description:
            "Serious Game zur Erprobung von Störereignissen und Resilienzmaßnahmen in vordefinierten Rollen – als Schulungselement für Transformation und Wissenstransfer, auch in KMU.",
    },
    {
        icon: TransformationsLogo,
        title: "Transformations-blaupausen",
        description:
            "Generalisierte, öffentlich zugängliche Blaupausen für die Optimierung von Kreativität, Innovation und Resilienz – validiert durch pilothafte Implementierung bei den Anwendungspartnern.",
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
                        <KeyFactCard fact={fact} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}