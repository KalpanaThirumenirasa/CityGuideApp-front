import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Features/Services/userService"

const AddUser: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
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
    setError(null);
    setSuccess(false);

    try {
      // You may want to hash the password here before sending it to the API/service
      await addUser(formData);
      setSuccess(true);
      setFormData({ firstname: "", email: "", password: "", role: "" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center justify-content-center w-100">
        <Col xs={12} lg={6} className="p-4 border rounded shadow-sm bg-white">
          <div className="headings">
            <h2 className="text-center mb-4">{t("Add User")}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">{t("User added successfully!")}</Alert>
            )}

            <Input
              label="First Name"
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={formData.firstname}
              onChange={handleChange}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
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
            <Input
              label="Role"
              type="text"
              name="role"
              placeholder="Enter role"
              value={formData.role}
              onChange={handleChange}
            />
            <Buttons
              variant="primary"
              text={loading ? "Adding..." : "Add"}
              className="w-100"
            />
          </Form>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "150px", marginTop: "10px" }}
            onClick={handleBack}
          >
            BACK
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;