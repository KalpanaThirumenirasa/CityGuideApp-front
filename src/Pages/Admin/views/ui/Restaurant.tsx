import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadRestaurants } from "../../../../Features/Slices/restaurantSlice";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: restaurants,
    loading,
    error,
  } = useSelector((state: RootState) => state.restaurants);

  useEffect(() => {
    dispatch(loadRestaurants());
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
                    <th>Restaurant</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurants.map((restaurant) => (
                    <tr key={restaurant._id} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <img
                            src={restaurant.image}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45"
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              {restaurant.restaurantName}
                            </h6>
                            <span className="text-muted">
                              {restaurant.desc}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{restaurant.address}</td>
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

export default Restaurant;
