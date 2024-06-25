import React from "react";
import CustomCard from "../../Components/CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import { cardData } from "../../Data/explore";

const Explore: React.FC = () => {
  return (
    <Container>
      <Row>
        {cardData.map((card, index) => (
          <Col xs={12} md={4} className="my-2" key={index}>
            <CustomCard
              title={card.title}
              imageUrl={card.imageUrl}
              buttonText="View"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
