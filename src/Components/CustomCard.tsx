import React from "react";
import Card from "react-bootstrap/Card";
import Buttons from "./Inputs/Buttons"; 

interface CustomCardProps {
  title: string;
  imageUrl: string;
  buttonText: string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  imageUrl,
  buttonText,
  onClick,
}) => {
  return (
    <Card className="h-100 shadow" style={{ width: "100%" }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Buttons variant="primary" text={buttonText} className="w-100" onClick={onClick} />
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
