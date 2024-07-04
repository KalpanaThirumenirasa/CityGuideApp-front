// src/Pages/Login.tsx
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { login, LoginData } from "../../Features/Services/authService";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../../Features/Slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
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
      await login(formData);
      await validateToken(dispatch);
      toast.success("Successfully Logged In")
      navigate("/explore");
    } catch (err) {
      toast.error("Login Failed")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center justify-content-center w-100">
        <Col xs={12} lg={6} className="p-4 border rounded shadow-sm bg-white">
          <div className="headings">
            <h2 className="text-center mb-4">{t("Login")}</h2>
          </div>
          <h5>{t("Enter your login details")}</h5>
          <Form onSubmit={handleSubmit}>
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
              text={loading ? "Logging in..." : "Login"}
              className="w-100"
            />
          </Form>
          <Link to="/register"><p>{t("Not Registered yet? Register here")}</p></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
