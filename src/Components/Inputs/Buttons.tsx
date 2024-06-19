// src/Components/Inputs/Buttons.tsx
import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface ButtonsProps {
  variant: string;
  text: string;
  onClick?: () => void;
  className?: string;
  to?: string; // Add optional `to` prop
}

const Buttons: React.FC<ButtonsProps> = ({ variant, text, onClick, className, to }) => {
  return to ? (
    <LinkContainer to={to}>
      <Button variant={variant} className={className}>
        {text}
      </Button>
    </LinkContainer>
  ) : (
    <Button variant={variant} onClick={onClick} className={className}>
      {text}
    </Button>
  );
};

export default Buttons;
