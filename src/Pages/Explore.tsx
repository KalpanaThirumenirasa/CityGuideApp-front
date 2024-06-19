import React from "react";
import CustomCard from "../Components/CustomCard"; // Adjust path based on your project structure
import { Container, Row, Col } from "react-bootstrap";

const Explore: React.FC = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={4}>
          <CustomCard
            title="Hotels"
            imageUrl="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
        <Col xs={12} md={4}>
          <CustomCard
            title="Restaurant"
            imageUrl="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
        <Col xs={12} md={4}>
          <CustomCard
            title="Popular Places"
            imageUrl="https://images.pexels.com/photos/2464985/pexels-photo-2464985.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
      </Row>

      <Row className="my-3">
        <Col xs={12} md={4}>
          <CustomCard
            title="Events"
            imageUrl="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
        <Col xs={12} md={4}>
          <CustomCard
            title="Student Friendly Places"
            imageUrl="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
        <Col xs={12} md={4}>
          <CustomCard
            title="Houses"
            imageUrl="https://images.pexels.com/photos/7746549/pexels-photo-7746549.jpeg?auto=compress&cs=tinysrgb&w=600"
            buttonText="View"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
