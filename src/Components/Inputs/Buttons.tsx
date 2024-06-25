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
}

const Buttons: React.FC<ButtonsProps> = ({ variant, text, onClick, className, to }) => {
  const { t } = useTranslation();
  
  return to ? (
    <LinkContainer to={to}>
      <Button variant={variant} className={className}>
        {t(text)}
      </Button>
    </LinkContainer>
  ) : (
    <Button variant={variant} onClick={onClick} className={className}>
      {t(text)}
    </Button>
  );
};

export default Buttons;
