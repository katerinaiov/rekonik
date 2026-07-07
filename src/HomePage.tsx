
import React, { useState } from "react";

import {
  Row,
  Col,
  Typography,
  Card,
  List,
  Modal,
} from "antd";


import twtLogo from './assets/twt.png';
import fraunhoferLogo from './assets/fraunhofer.png';
import kassbohrerLogo from './assets/Kassbohrer.jpg';
import MarquadtLogo from './assets/Marquardt.svg';
import siemensLogo from './assets/siemens.svg';
import universityLogo from './assets/university.png';
import youseLogo from './assets/youse.svg';
import RekonikLogo from './assets/Picture1.png';


import Section from "./components/Section";
import RightNavigation from "./components/RightNavigation";

//import picture1 from "./assets/Picture1.png";

const { Title, Paragraph } = Typography;

const HomePage = () => {

const [selectedPartner, setSelectedPartner] = useState<any>(null);

const partnerInfo = {
  twt: {
    name: "TWT GmbH",
    role: "Coordinator",
    contact: "Dr. Martin Obstbaum",
    email: "martin.obstbaum@twt-gmbh.de",
    address: "Industriestraße 6, 70565 Stuttgart",
  },

  fraunhofer: {
    name: "Fraunhofer IAO",
    role: "Research Partner",
    contact: "Benjamin Schneider",
    address: "Nobelstraße 12, 70569 Stuttgart",
  },

  tub: {
    name: "TU Berlin",
    role: "Research Partner",
    contact: "Dr. Carina Fresemann",
  },

  youse: {
    name: "YOUSE GmbH",
    role: "Research Partner",
    contact: "Dr. Sebastian Glende Meinzer",
  },

  marquardt: {
    name: "Marquardt GmbH",
    role: "Industrial Partner",
    contact: "Alexander Schneider",
  },

  siemens: {
    name: "Siemens AG",
    role: "Industrial Partner",
    contact: "Dr. Rohit Gupta",
  },

  kassbohrer: {
    name: "Kässbohrer",
    role: "Industrial Partner",
    contact: "Sven Jurak",
  },
};
  return (
    <>
      <RightNavigation />

      <Section id="home">
        <Row align="middle" gutter={40}>
          <Col span={10}>
            <Title className="hero-title">
              ReKonIK
            </Title>

            <Paragraph className="hero-subtitle">
              Resiliente Kollaborationsstrukturen
              durch KI-unterstützte
              transdisziplinäre Modelle
              zur Maximierung von Innovation
              und Kreativität.
            </Paragraph>
          </Col>

          <Col span={12}>
            <img src = {RekonikLogo}/>
          </Col>
        </Row>
      </Section>

      <Section
        id="goal"
        title="Goal and Objectives"
        dark
      >
        <Col span={16}>
          <Paragraph style={{color:"white"}}>
            The goal of ReKonIK is to develop a
            resilience framework for product
            development that promotes
            adaptability, creativity and
            innovative capacity through
            generative AI.
          </Paragraph>
        </Col>
      </Section>

      <Section
        id="contribution"
        title="TWT Contribution"
      >
        <Col span = {12}>
        <Card>
          <List
            dataSource={[
              "Use Case Software Defined Vehicle",
              "Continuity from customer function to technical domain",
              "Transdisciplinary architecture models",
              "Knowledge graphs",
              "Interactive SysML v2 model creation",
              "Resilience through adaptability",
              "Creativity through AI suggestions",
            ]}
            renderItem={(item) => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Card>
        </Col>
      </Section>

      <Section
        id="highlights"
        title="Highlights"
        gray
      >
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card className="highlight-card">
              Resilience Framework
            </Card>
          </Col>

          <Col span={8}>
            <Card className="highlight-card">
              Generative AI Integration
            </Card>
          </Col>

          <Col span={8}>
            <Card className="highlight-card">
              Faster collaboration
            </Card>
          </Col>

          <Col span={8}>
            <Card className="highlight-card">
              AI Modelling Assistant
            </Card>
          </Col>

          <Col span={8}>
            <Card className="highlight-card">
              Real-world validation
            </Card>
          </Col>

          <Col span={8}>
            <Card className="highlight-card">
              Flexible IT architecture
            </Card>
          </Col>
        </Row>
      </Section>

      <Section
        id="partners"
        title="Partners"
      >
        <Row gutter={[24, 24]}>
          <Col span={2}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src= {twtLogo} style={{ width:'60px',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.twt)}/>
             </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
            <img src={siemensLogo} style={{ width:'auto',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.siemens)}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={fraunhoferLogo} style={{ width:'auto',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.fraunhofer)}/>
              </div>
          </Col>

          <Col span={2}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={MarquadtLogo} style={{ width:'150px',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.marquardt)}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={kassbohrerLogo} style={{ width:'auto',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.kassbohrer)}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
            <img src={universityLogo} style={{ width:'auto',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.tub)}/>
            </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={youseLogo} style={{ width:'auto',height:'30px', cursor: "pointer"}} onClick={() => setSelectedPartner(partnerInfo.youse)}/>
              </div>
          </Col>
        </Row>
       {selectedPartner && (
  <Row
    style={{
      marginTop: "50px",
      paddingTop: "30px",
      borderTop: "1px solid #bdbdbd",
    }}
  >
    <Col span={8}>
      {selectedPartner.logo}
    </Col>

    <Col span={16}>
      <Title level={3}>
        {selectedPartner.name}
      </Title>

      <Paragraph>
        <strong>Role:</strong> {selectedPartner.role}
      </Paragraph>

      <Paragraph>
        <strong>Contact:</strong> {selectedPartner.contact}
      </Paragraph>

      <Paragraph>
        <strong>Address:</strong> {selectedPartner.address}
      </Paragraph>

      <Paragraph>
        <strong>Email:</strong> {selectedPartner.email}
      </Paragraph>
    </Col>
  </Row>
)}

      </Section>

      <Section
        id="funding"
        title="Funding"
        gray
      >
        <Col span={10}>
          Funded by BMFTR – Federal Ministry of
          Research, Technology and Space.
         </Col>
      </Section>
    </>
  );
};

export default HomePage;