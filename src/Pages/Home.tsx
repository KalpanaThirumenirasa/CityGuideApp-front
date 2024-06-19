// src/pages/Home.tsx
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buttons from "../Components/Inputs/Buttons";

const Home: React.FC = () => {
  return (
    <div>
      <Container className="mt-3 mb-3">
        <Row>
          <Col xs={12} md={6}>
            <h1>Guide To New Customer</h1>
            <h5>This is application for you to understand Germany Better!</h5>
            <div>
              <Buttons variant="primary" text="Register" to="/register" />
              <Buttons variant="primary" text="Explore" to="/explore"/>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="https://media.istockphoto.com/id/615913026/photo/woman-traveling-in-munich.jpg?s=612x612&w=0&k=20&c=2pLpuQDdn7uUBR9VOrZ53NgzBt_xIqwH89ADdqjSI-g="
              alt="Tourist in Germany"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
