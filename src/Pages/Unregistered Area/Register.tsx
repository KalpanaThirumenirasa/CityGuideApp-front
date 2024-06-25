// src/Pages/Login.tsx
import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center justify-content-center w-100">
        <Col xs={12} lg={6} className="p-4 border rounded shadow-sm bg-white">
        
        <div className="headings">
            <h2 className="text-center mb-4">
              {t("Register")}
            </h2>
          </div>

          <Form onSubmit={handleSubmit}>
            <Input
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Buttons variant="primary" text="Register" className="w-100" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
