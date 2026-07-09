import { Card, Typography } from "antd";
import implementationImage from '../assets/Picture1.png'

const { Title, Paragraph } = Typography;


export default function ImplementationSection() {
    return (
        <section className="implementation-section">

            <Title className="section-title">
                Umsetzung
            </Title>

            <Card className="image-placeholder">
                <img src={implementationImage}
                    alt="Projektdarstellung"
                    style={{
                        width: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            </Card>

            <div className="text-block">
                <Title level={2}>
                    Motivation und Problemstellung
                </Title>

                <Paragraph>
                    Lieferkettenausfälle, neue Marktanforderungen,
                    regulatorische Änderungen oder der kurzfristige
                    Ausfall von Wissensträgern...
                </Paragraph>
            </div>

            <div className="text-block">
                <Title level={2}>
                    Durchführung
                </Title>

                <Paragraph>
                    Das Konsortium verbindet die technologische
                    und die arbeitswissenschaftliche Perspektive.
                    TWT und TU Berlin entwickeln einen
                    KI-Assistenten auf Basis generativer
                    KI-Modelle...
                </Paragraph>
            </div>

            <div className="text-block">
                <Title level={2}>
                    Projektziel
                </Title>

                <Paragraph>
                    Ziel von ReKonIK ist es, in Unternehmen
                    durch KI-unterstütztes MBSE sowie
                    arbeitswissenschaftliche Maßnahmen
                    resiliente Strukturen zu schaffen.
                </Paragraph>
            </div>

        </section>
    );
}