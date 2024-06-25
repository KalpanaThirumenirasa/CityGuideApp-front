import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center text-dark py-3" style={{ backgroundColor: "#333333" }}>
      <Container>{t("City Guide App - 2024")}</Container>
    </div>
  );
};

export default Footer;
