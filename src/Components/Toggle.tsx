import React from "react";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

interface ToggleProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const Toggle: React.FC<ToggleProps> = ({
  title,
  description,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="collapsible-content border rounded p-3 mb-3 shadow"
      style={{
        backgroundColor: "var( --schema-bg)",
      }}
    >
      <div
        className="main-text d-flex align-items-center"
        onClick={onClick}
        style={{
          color: "var(--donau-blau)",
        }}
      >
        {isOpen ? (
          <BsDashCircle className="icon me-2" />
        ) : (
          <BsPlusCircle className="icon me-2 tile" />
        )}
        {title}
      </div>
      {isOpen && (
        <div className="description ms-4">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
    </div>
  );
};

export default Toggle;
