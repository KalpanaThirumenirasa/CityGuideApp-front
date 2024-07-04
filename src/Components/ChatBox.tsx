import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getChatUser, userChatAdd } from "../Features/Slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Features/store";

const ChatBox = () => {
  const [messages, setMessages] = useState<{ key: string; value: string }[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  const { userId } = useSelector((state: RootState) => state.auth);
  const { data } = useSelector((state: RootState) => state.chat);

  
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== "" && userId) {
      const newChat = {
        userId: userId, 
        message: inputText,
        adminId: "", 
        adminReply: "", 
      };

      await dispatch(userChatAdd(newChat)); 
      setInputText("");
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  useEffect(() => {
    if (userId) {
      dispatch(getChatUser(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (data.length > 0) {
      const transformedMessages = data.reduce((acc: { key: string; value: string }[], chat) => {
        acc.push({ key: "user", value: chat.message });
        if (chat.adminReply) {
          acc.push({ key: "bot", value: chat.adminReply });
        }
        return acc;
      }, []);
      setMessages(transformedMessages);
    }
  }, [data]);

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
      {isChatOpen ? (
        <div
          className="bg-white rounded shadow"
          style={{ width: "230px", height: "300px" }}
        >
          <div className="bg-primary text-white p-1 rounded-top d-flex justify-content-between align-items-center">
            <span>Chat</span>
            <i
              className="bi bi-x-lg"
              style={{ cursor: "pointer" }}
              onClick={handleCloseChat}
            ></i>
          </div>
          <div
            className="chat-messages p-1"
            style={{ height: "150px", overflowY: "scroll" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: message.key === "bot" ? "#FFA500" : "#f0f0f0",
                  
                }}
                className={`message bg-light p-1 rounded mb-2 ${message.key}`}
              >
                <strong>{message.key === "user" ? "You: " : "Admin: "}</strong>
                {message.value}
              </div>
            ))}
          </div>
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
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-chat-dots-fill"
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={handleOpenChat}
          ></i>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
