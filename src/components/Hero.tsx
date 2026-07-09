import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">

                <Title level={1} className="hero-title">
                    Resiliente Kollaborationsstrukturen durch
                    <br />
                    KI-unterstützte transdisziplinäre Modelle
                </Title>

                <Paragraph className="hero-description">
                    ReKonIK hat das Ziel, ein Resilienz-Rahmenkonzept für die Produktentwicklung zu entwickeln, das
                    Anpassungsfähigkeit, Kreativität und Innovationskraft durch generative KI fördert und messbar macht.
                    Hierzu werden KI-unterstütztes Model-based Systems Engineering (MBSE) sowie arbeitswissenschaftliche,
                    organisatorische und prozessuale Maßnahmen entlang der Ebenen Individuum, Team und Organisation
                    kombiniert und in drei industriellen Anwendungsfällen erprobt.
                </Paragraph>

                <Paragraph className="hero-footer">
                    Verbundprojekt in der Fördermaßnahme AKIres ·
                    Programm „Zukunft der Wertschöpfung“ des BMFTR ·
                    Laufzeit 01.01.2026 – 31.12.2028
                </Paragraph>

            </div>
        </section>
    );
}