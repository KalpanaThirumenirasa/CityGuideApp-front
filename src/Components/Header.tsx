import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Features/store";
import { resetAuth } from "../Features/Slices/authSlice";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lan", lng);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(resetAuth());
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "var(--dark-grey)",
        color: "var( --schema-bg)",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavDropdown title={t("Language")} id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => changeLanguage("en")}
              style={{
                backgroundColor: "var(--dark-grey)",
                color: "var( --schema-bg)",
              }}
            >
              English
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => changeLanguage("de")}
              style={{
                backgroundColor: "var(--dark-grey)",
                color: "var( --schema-bg)",
              }}
            >
              Deutsch
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => changeLanguage("ta")}
              style={{
                backgroundColor: "var(--dark-grey)",
                color: "var( --schema-bg)",
              }}
            >
              Tamil
            </NavDropdown.Item>
          </NavDropdown>
          {isLoggedIn ? (
            <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
              {t("Logout")}
            </Nav.Link>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>{t("Login")}</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
