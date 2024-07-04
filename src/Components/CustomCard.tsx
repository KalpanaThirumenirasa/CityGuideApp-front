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
  linkUrl: string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  desc,
  imageUrl,
  buttonText,
  linkUrl,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Card className="h-100 shadow" style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>
            <div className="tile">{t(title)}</div>
          </Card.Title>
          <Card.Text>{t(desc)}</Card.Text>
        </div>
        <div className="text-center">
          <Link to={linkUrl}>
            <Buttons
              variant="info"
              className="w-50"
              text={t(buttonText)}
              onClick={onClick}
              size="sm"
            />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
