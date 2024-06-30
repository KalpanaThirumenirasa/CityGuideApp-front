import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center text-dark py-3" style={{ backgroundColor: "#333333" }}>
      <Container><p className="text-center">&copy; 2024 | <a>{t("Deggendorf Institute of Technology")}</a> |
<a href="/de/Impressum">{t("Imprint")}</a> |
<a href="/de/Datenschutz">{t("Data protection")}</a> |
<a href="/de/Barrierefreiheit">{t("Accessibility statement")}</a>
</p></Container>
    </div>
  );
};

export default Footer;
