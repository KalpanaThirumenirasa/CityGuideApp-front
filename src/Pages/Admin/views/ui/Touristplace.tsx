import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadTouristPlaces } from "../../../../Features/Slices/touristplaceSlice";
import Buttons from "../../../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TouristPlace: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: touristPlaces,
    loading,
    error,
  } = useSelector((state: RootState) => state.touristPlaces);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    dispatch(loadTouristPlaces());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (id: string) => {
    navigate(`/editTouristPlace/${id}`);
  };

  return (
    <Row>
      <Col lg="12" className="d-flex justify-content-end mb-3">
        <Buttons variant="primary" text="Create" to="/addTouristPlace" className="mx-3" />
      </Col>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Tourist Place Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the tourist places
              </CardSubtitle>

              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Tourist Place</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {touristPlaces.map((touristPlace) => (
                    <tr key={touristPlace._id} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <img
                            src={touristPlace.image}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45"
                          />
                          <div className="ms-3">
                          <div className="tile"> {touristPlace.touristPlaceName}</div>
                            
                            <span className="text-muted">{touristPlace.desc}</span>
                          </div>
                        </div>
                      </td>
                      <td>{touristPlace.address}</td>
                      <td>
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => handleEdit(touristPlace._id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default TouristPlace;
