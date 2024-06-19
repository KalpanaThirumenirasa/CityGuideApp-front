import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Logo</Navbar.Brand>
        <Nav className="ml-auto">
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
