import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { register, RegisterData } from "../../Features/Services/authService";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    firstname: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await register(formData);
      toast.success("Successfully Registered")
      navigate("/login");
      setFormData({ firstname: "", username: "", password: "" });
    } catch (err) {
      toast.error("Registration Failed")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center justify-content-center w-100">
        <Col xs={12} lg={6} className="p-4 border rounded shadow-sm bg-white">
          <div className="headings">
            <h2 className="text-center mb-4">{t("Register")}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            <Input
              label="First Name"
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
            <Input
              label="Username"
              type="email"
              name="username"
              placeholder="Enter email"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <Buttons
              variant="primary"
              text={loading ? "Registering..." : "Register"}
              className="w-100"
            />
          </Form>
          <Link to="/login"><p>{t("Already Registered? Login here")}</p></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
