import { Typography } from "antd";

const { Title } = Typography;

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({
    title,
}: SectionTitleProps) {
    return (
        <Title
            level={1}
            className="section-title"
        >
            {title}
        </Title>
    );
}