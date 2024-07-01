import React from "react";
import { Card, Row, Col } from "react-bootstrap";

interface ExploreViewProps {
  title: string;
  text: string;
  lastUpdated: string;
  imgSrc: string;
}

const ExploreView: React.FC<ExploreViewProps> = ({ title, text, lastUpdated, imgSrc }) => {
  return (
    <Card className="bg-dark text-white">
      <Row noGutters>
        <Col md={6}>
          <Card.Img
            src={imgSrc}
            style={{ height: '100%' }}
            alt="Card image"
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Card.Text>Last updated {lastUpdated}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ExploreView;
