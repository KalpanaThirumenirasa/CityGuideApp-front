import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadHotels } from "../../../../Features/Slices/hotelSlice";

const Hotel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: hotels,
    loading,
    error,
  } = useSelector((state: RootState) => state.hotels);

  useEffect(() => {
    dispatch(loadHotels());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Row>
      <Col lg="12" className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-success"
          style={{ width: "150px" }}
        >
          CREATE
        </button>
      </Col>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Project Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the projects
              </CardSubtitle>

              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
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
                            <h6 className="mb-0">
                              {hotel.hotelName}
                            </h6>
                            <span className="text-muted">
                              {hotel.desc}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{hotel.address}</td>
                      <td>
                        <button type="button" className="btn btn-primary">
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
