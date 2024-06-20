import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    console.log(lng);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">{t('logo')}</Navbar.Brand>
        <Nav className="ml-auto">
          <NavDropdown title='language' id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage('en')}>
              'english'
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('de')}>
              german
            </NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to="/login">
            <Nav.Link>login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
