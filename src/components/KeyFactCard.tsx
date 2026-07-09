import { Card } from "antd";
import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function KeyFactCard({
    icon,
    title,
    description,
}: Props) {
    return (
        <Card
            bordered={false}
            className="key-fact-card"
        >
            <div className="fact-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>
        </Card>
    );
}