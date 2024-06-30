import React from "react";
import Card from "react-bootstrap/Card";
import Buttons from "./Inputs/Buttons"; 
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface CustomCardProps {
  title: string;
  desc: string;
  imageUrl: string;
  buttonText: string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  desc,
  imageUrl,
  buttonText,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Card className="h-100 shadow" style={{ width: "100%" }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{t(title)}</Card.Title>
        <Card.Text>
        {t(desc)}
        </Card.Text>
        <Link to="/restaurants"> <Buttons variant="primary" text={t(buttonText)} className="w-100" onClick={onClick} /></Link>
        
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
