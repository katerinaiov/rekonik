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

                <Paragraph className="implementation-paragraph">
                    Lieferkettenausfälle, neue Marktanforderungen, regulatorische Änderungen oder der kurzfristige Ausfall von
                    Wissensträgern: Störereignisse sind in einer volatilen, komplexen Welt der Normalfall. Die interdisziplinäre
                    Zusammenarbeit in der Produktentstehung findet zunehmend modellbasiert statt (Model-based Systems Engineering,
                    MBSE). Steigende Modellierungs- und Dokumentationsaufwände, fehlende Standards, fragmentierte IT-Infrastrukturen
                    sowie unterschiedliche Denkmuster und Arbeitsweisen der Disziplinen verhindern jedoch, dass Unternehmen die
                    Mehrwerte der modellbasierten Zusammenarbeit gerade dann ausschöpfen können, wenn es darauf ankommt: beim
                    Eintreten von Störereignissen. So entstehen hohe Aufwände für Meetings und Abstimmungen zwischen Mitarbeitenden,
                    Teams und Bereichen – und damit große Verluste an Handlungsfähigkeit und Effizienz.
                </Paragraph>
            </div>

            <div className="text-block">
                <Title level={2}>
                    Durchführung
                </Title>

                <Paragraph className="implementation-paragraph">
                    Das Konsortium verbindet die technologische und die arbeitswissenschaftliche Perspektive: TWT und TU Berlin entwickeln
                    einen KI-Assistenten auf Basis generativer KI-Modelle, der direkt in Werkzeuge zur Systemmodellierung integriert wird
                    und dort Modelle nach Vorgaben erstellt, Modelle verschiedener Disziplinen vereinheitlicht und erklärt. Fraunhofer IAO,
                    YOUSE und TWT erarbeiten ein Resilienz-Rahmenkonzept, erproben Design-Futuring-Methoden und entwickeln ein
                    Planspiel, um Resilienz auf den Ebenen Individuum, Team und Organisation (ITO) gezielt zu steigern. Die Lösungen
                    werden in den Anwendungsfällen von Marquardt (Software-defined Vehicle), Siemens (komplexe Medizintechnik) und
                    Kässbohrer (Konfiguration von Silofahrzeugen) pilothaft implementiert, iterativ optimiert und über einen KMU-
                    Anwenderkreis für eine breite Menge an Unternehmen anschlussfähig gemacht.
                </Paragraph>
            </div>

            <div className="text-block">
                <Title level={2}>
                    Projektziel
                </Title>

                <Paragraph className="implementation-paragraph">
                    Ziel von ReKonIK ist es, in Unternehmen durch KI-unterstütztes MBSE sowie arbeitswissenschaftliche, organisatorische und
                    prozessuale Maßnahmen Strukturen und Reaktionsmuster zu schaffen und zu etablieren, die diese in die Lage versetzen,
                    in den Phasen der Resilienz – Antizipation, Agilität und Adaption – und auf den Ebenen Individuum, Team und
                    Organisation handlungsfähig zu bleiben und die Auswirkungen von Störereignissen möglichst effizient zu absorbieren.
                    Die Forschungsarbeit macht die Auswirkungen des KI-unterstützten MBSE auf die Resilienz anhand von Indikatoren
                    bewertbar und optimiert diese durch Anpassungen an Organisations- und Kollaborationsstrukturen, Prozessen und
                    Fähigkeiten der Mitarbeitenden.
                </Paragraph>
            </div>

        </section>
    );
}