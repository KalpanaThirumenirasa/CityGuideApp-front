import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Input from "../../Components/Inputs/Input";
import Buttons from "../../Components/Inputs/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { TouristPlaceData, fetchTouristPlaceById, updateTouristPlace } from "../../Features/Services/touristplaceService";

const EditTouristplace: React.FC = () => {
  const [formData, setFormData] = useState<TouristPlaceData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTouristPlaceData = async () => {
      try {
        const data = await fetchTouristPlaceById(id!);
        setFormData(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchTouristPlaceData();
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (formData) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await updateTouristPlace(id!, {
        touristplaceName: formData!.touristplaceName,
        desc: formData!.desc,
        address: formData!.address,
        image: formData!.image,
      });
      setSuccess(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center justify-content-center w-100">
        <Col xs={12} lg={6} className="p-4 border rounded shadow-sm bg-white">
          <div className="headings">
            <h2 className="text-center mb-4">{t("Edit Tourist Place")}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{t("Tourist Place updated successfully!")}</Alert>}

            <Input
              label="Tourist Place Name"
              type="text"
              name="touristPlaceName"
              placeholder="Enter tourist place name"
              value={formData.touristplaceName}
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

export default EditTouristplace;