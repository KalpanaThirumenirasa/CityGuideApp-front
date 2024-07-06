import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadHotels } from "../../../../Features/Slices/hotelSlice";
import Buttons from "../../../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hotel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: hotels,
    loading,
    error,
  } = useSelector((state: RootState) => state.hotels);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    dispatch(loadHotels());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (id: string) => {
    navigate(`/editHotels/${id}`);
  };

  return (
    <Row>
      <Col lg="12" className="d-flex justify-content-end mb-3">
        <Buttons variant="primary" text="Create" to="/addHotels" className="mx-3" />
      </Col>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Hotel Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the Hotels
              </CardSubtitle>

              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Hotel</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {hotels.map((hotel) => (
                    <tr key={hotel._id} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <img
                            src={hotel.image}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45"
                          />
                          <div className="ms-3">
                           
                              <div className="tile">{hotel.hotelName}</div>
                              
                             
                            <span className="text-muted">{hotel.desc}</span>
                          </div>
                        </div>
                      </td>
                      <td>{hotel.address}</td>
                      <td>
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => handleEdit(hotel._id)}
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

export default Hotel;