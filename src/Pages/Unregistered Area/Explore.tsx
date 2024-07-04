import React from "react";
import CustomCard from "../../Components/CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import { cardData } from "../../Data/explore";
import ChatBox from "../../Components/ChatBox";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/store";

const Explore: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col xs={12} md={4} className="my-2" key={index}>
              <CustomCard
                title={card.title}
                desc={card.desc}
                imageUrl={card.imageUrl}
                buttonText="View"
                linkUrl={card.linkUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {isLoggedIn && <ChatBox />}
    </div>
  );
};

export default Explore;
