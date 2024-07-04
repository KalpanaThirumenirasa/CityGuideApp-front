import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from 'react-i18next';

interface ButtonsProps {
  variant: string;
  text: string;
  onClick?: () => void;
  className?: string;
  to?: string;
  size?: "sm" | "lg" | undefined; // Align with react-bootstrap's ButtonProps size prop
}

const Buttons: React.FC<ButtonsProps> = ({
  variant,
  text,
  onClick,
  className,
  to,
  size = "lg", // Default size is "lg"
}) => {
  const { t } = useTranslation();

  return to ? (
    <LinkContainer to={to}>
      <Button variant={variant} className={className} size={size}>
        {t(text)}
      </Button>
    </LinkContainer>
  ) : (
    <Button variant={variant} onClick={onClick} className={className} type="submit" size={size}>
      {t(text)}
    </Button>
  );
};

export default Buttons;
