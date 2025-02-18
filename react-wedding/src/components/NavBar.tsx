import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            TOM & GERRY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/"}>
                Countries
              </Nav.Link>

              <NavDropdown title="User" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to={"/"}>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to={"/"}>
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div>
                <Button color="inherit">Something</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
