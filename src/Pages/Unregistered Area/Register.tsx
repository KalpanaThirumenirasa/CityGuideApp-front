import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { register, RegisterData } from "../../Features/Services/authService";

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    firstname: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { t } = useTranslation();

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
    setError(null);
    setSuccess(false);

    try {
      await register(formData);
      setSuccess(true);
      setFormData({ firstname: "", username: "", password: "" });
    } catch (err) {
      setError((err as Error).message);
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
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">{t("Registration successful!")}</Alert>
            )}

            <Input
              label="First Name"
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
            <Input
              label="User Name"
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
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
