import React from "react";
import { useTranslation } from "react-i18next";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

interface ToggleProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ title, description, isOpen, onClick }) => {

  return (
    <div className="collapsible-content border rounded p-3 mb-3 shadow">
      <div className="main-text d-flex align-items-center" onClick={onClick}>
        {isOpen ? (
          <BsDashCircle className="icon me-2" />
        ) : (
          <BsPlusCircle className="icon me-2" />
        )}{" "}
        {title}
      </div>
      {isOpen && (
        <div className="description ms-4">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Toggle;
