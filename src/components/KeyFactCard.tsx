import { Card } from "antd";
import { ReactNode } from "react";
import { Fact } from '../types/Facts';


interface Props {
    fact: Fact;
}


export default function KeyFactCard({
    fact,
}: Props) {
    return (
        <Card
            bordered={false}
            className="key-fact-card"
        >
            <div className="fact-icon">
                <img src={fact.icon} style={{ width: '100px', height: 'auto' }} />
            </div>

            <h3>{fact.title}</h3>

            <p>{fact.description}</p>
        </Card>
    );
}