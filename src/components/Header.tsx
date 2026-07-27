import { Layout, Menu } from "antd";
import { useState } from "react";

import RekonikLogo from '../assets/Picture1.png';
const { Header } = Layout;

const menuItems = [
    {
        key: "home",
        label: <a href="#home">Home</a >
    },
    {
        key: "facts",
        label: <a href="#facts">Key Facts</a >

    },
    {
        key: "implementation",
        label: <a href=" #implementation">Umsetzung</a>

    },
    {
        key: "partners",
        label: <a href="#partners">Partner</a>
    },
    {
        key: "funding",
        label: <a href="#funding">Förderung</a>

    },
];

export default function HeaderMenu() {
    const [current, setCurrent] = useState("home");

    return (
        <Header className="site-header">
            <div className="site-logo">
                <a href="#home">
                    <img src={RekonikLogo} alt="ReKonIK" />
                </a>
                <a href="#home"><span>ReKonIK</span></a>
            </div>

            <Menu
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                onClick={(e) => setCurrent(e.key)}
                className="site-menu"
            />
        </Header>
    );
}
