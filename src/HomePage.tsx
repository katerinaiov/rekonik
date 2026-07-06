import {
  Row,
  Col,
  Typography,
  Card,
  List,
} from "antd";

import Section from "./components/Section";
import RightNavigation from "./components/RightNavigation";

//import picture1 from "./assets/Picture1.png";

const { Title, Paragraph } = Typography;

const HomePage = () => {
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
            <img src = "./Picture1.png"/>
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
              <img src="./twt.png" style={{ width:'60px',height:'30px'}}/>
             </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src="./siemens.svg" style={{ width:'auto',height:'30px'}}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src="./fraunhofer.png" style={{ width:'auto',height:'30px'}}/>
              </div>
          </Col>

          <Col span={2}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src="./Marquardt.svg" style={{ width:'150px',height:'30px'}}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src="./Kassbohrer.jpg" style={{ width:'auto',height:'30px'}}/>
              </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
            <img src="./university.png" style={{ width:'auto',height:'30px'}}/>
            </div>
          </Col>

          <Col span={2.5}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
              <img src="./youse.svg" style={{ width:'auto',height:'30px'}}/>
              </div>
          </Col>
        </Row>
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