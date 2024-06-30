import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { HotelData, hotel } from "../../Features/Services/authService";

const AddHotels: React.FC = () => {
  const [formData, setFormData] = useState<HotelData>({
    hotelName: "",
    address: "",
    desc: "",
    image: "",
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
      await hotel(formData);
      setSuccess(true);
      setFormData({ hotelName: "", desc: "", address: "", image:"" });
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
            <h2 className="text-center mb-4">{t("Add Data")}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">{t("Data added successfully!")}</Alert>
            )}

            <Input
              label="Hotel Name"
              type="text"
              name="hotelName"
              placeholder="Enter hotel name"
              value={formData.hotelName}
              onChange={handleChange}
            />
            <Input
              label="Description"
              type="text"
              name="desc"
              placeholder="Enter description"
              value={formData.desc}
              onChange={handleChange}
            />
            <Input
              label="Address"
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
            <Input
              label="Image"
              type="text"
              name="image"
              placeholder="Enter image url"
              value={formData.image}
              onChange={handleChange}
            />
            <Buttons
              variant="primary"
              text={loading ? "Adding..." : "Add"}
              className="w-100"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddHotels;
