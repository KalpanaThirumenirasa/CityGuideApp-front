import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadUsers } from "../../../../Features/Slices/userSlice";
import Buttons from "../../../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const User: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: users,
    loading,
    error,
  } = useSelector((state: RootState) => state.users);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (id: string) => {
    navigate(`/editUsers/${id}`);
  };

  return (
    <Row>
      <Col lg="12" className="d-flex justify-content-end mb-3">
        <Buttons variant="primary" text="Create" to="/addUsers" className="mx-3" />
      </Col>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">User Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the users
              </CardSubtitle>

              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-top">
                      <td>{user.firstname}</td>
                      <td>{user.username}</td>
                      <td>
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => handleEdit(user._id)}
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

export default User;