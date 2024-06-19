// src/Components/Input.tsx
import React from "react";
import Form from "react-bootstrap/Form";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </Form.Group>
  );
};

export default Input;
