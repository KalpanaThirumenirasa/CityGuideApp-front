// src/Components/Input.tsx
import React from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from 'react-i18next';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <Form.Group className="mb-3">
      <Form.Label>{t(label)}</Form.Label>
      <Form.Control type={type} placeholder={t(placeholder)} value={value} onChange={onChange} />
    </Form.Group>
  );
};

export default Input;
