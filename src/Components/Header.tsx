import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Logo/logo.png";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lan", lng);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#333333" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo"  style={{ height: '40px' }} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavDropdown title="language" id="basic-nav-dropdown" >
            <NavDropdown.Item onClick={() => changeLanguage("en")} >
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("de")}>
              Deutsch
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("ta")}>
              Tamil
            </NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to="/login">
            <Nav.Link>{t("Login")}</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
