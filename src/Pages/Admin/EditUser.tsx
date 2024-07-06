import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { fetchUserById, updateUser } from "../../Features/Services/userService"; // Import your user service for fetching and updating users

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchUserById(id!);
        setFormData({
          firstname: data.firstname,
          email: data.email,
          password: data.password,
          role: data.role,
          // Don't fetch or update password in clear text for security reasons
        });
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchUserData();
  }, [id]);

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
      await updateUser(id!, formData);
      setSuccess(true);
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
            <h2 className="text-center mb-4">{t("Edit User")}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">{t("User updated successfully!")}</Alert>
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
              placeholder="Enter new password"
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
            <p>Use "USER" or "ADMIN" for Role</p>
            <Buttons
              variant="primary"
              text={loading ? "Updating..." : "Update"}
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

export default EditUser;