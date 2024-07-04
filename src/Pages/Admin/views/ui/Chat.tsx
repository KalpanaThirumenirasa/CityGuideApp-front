import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Features/store";
import { loadHotels } from "../../../../Features/Slices/hotelSlice";
import Buttons from "../../../../Components/Inputs/Buttons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { adminChatAdd, getChatUser } from "../../../../Features/Slices/chatSlice";
import { Form, Button } from "react-bootstrap";

const Chat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: chats,
    loading,
    error,
  } = useSelector((state: RootState) => state.chat);
  const [inputText, setInputText] = useState<string>("");
  const { userId } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    dispatch(getChatUser("1"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== "" ) {
        const newChat = {
            userId: "1", // Assuming userId needs to be a string
            adminId: userId ? String(userId) : "", // Convert adminId to string, ensuring it is not null
            adminReply: inputText,
          };
      await dispatch(adminChatAdd(newChat)); 
      setInputText("");
    }
  };

  return (
    <Row>
      
      <Col lg="6">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Chat Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the Chat
              </CardSubtitle>

              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {chats.map((chat) => (
                    <tr key={chat._id} className="border-top">
                      <td>{chat.adminId ? "ADMIN" : "USER"}</td>
                      <td>{chat.adminId ? chat.adminReply : chat.message}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>

      <Col lg="6">
      <Form onSubmit={handleSendMessage} className="message-form p-2">
            <Form.Group>
              <Form.Control
                type="text"
                as="textarea"
                rows={2}
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="mb-2"
                style={{ resize: "none" }}
              />
              <div className="d-flex justify-content-end">
                <Button variant="success" type="submit" size="sm">
                  Send
                </Button>
              </div>
            </Form.Group>
          </Form>
      
      </Col>
    </Row>
  );
};

export default Chat;
