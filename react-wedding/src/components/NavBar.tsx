import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary custom-navbar"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            TOM & GERRY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/attendance"}>
                Attendance
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/accomodation"}>
                Accomodations
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/program"}>
                Program
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
