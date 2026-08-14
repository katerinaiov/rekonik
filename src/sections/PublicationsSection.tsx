import { Card, Typography } from "antd";


const { Title, Paragraph } = Typography;


export default function PublicationsSection() {
    return (
        <section className="publications-section">

            <Title className="section-title">
                Veröffentlichungen
            </Title>



            <div className="text-block">
                <Title level={2}>
                    Publications/Papers
                </Title>

            </div>

        </section>
    );
}