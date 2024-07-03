import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadEvents } from "../../../../Features/Slices/eventSlice";
import Buttons from "../../../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Event: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: events,
    loading,
    error,
  } = useSelector((state: RootState) => state.events);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (id: string) => {
    navigate(`/editEvent/${id}`);
  };

  return (
    <Row>
      <Col lg="12" className="d-flex justify-content-end mb-3">
        <Buttons variant="primary" text="Create" to="/addEvent" className="mx-3" />
      </Col>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Event Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the events
              </CardSubtitle>

              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event._id} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <img
                            src={event.image}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45"
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">{event.eventName}</h6>
                            <span className="text-muted">{event.desc}</span>
                          </div>
                        </div>
                      </td>
                      <td>{event.address}</td>
                      <td>
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => handleEdit(event._id)}
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

export default Event;