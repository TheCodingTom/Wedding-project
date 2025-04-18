import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { TranslationLang } from "../pages/Accomodations";

const homeTranslations: Record<
  TranslationLang,
  { home: string; attendance: string; accomodations: string; program: string }
> = {
  en: {
    home: "HOME",
    attendance: "ATTENDANCE",
    accomodations: "ACCOMODATIONS",
    program: "PROGRAM",
  },
  it: {
    home: "HOME",
    attendance: "PARTECIPAZIONE",
    accomodations: "ALLOGGIO",
    program: "PROGRAMMA",
  },
  de: {
    home: "HOME",
    attendance: "ATTENDANCE",
    accomodations: "ACCOMODATIONS",
    program: "PROGRAM",
  },
};

function NavBar() {
  const { language } = useLanguage();
  const { home, attendance, accomodations, program } =
    homeTranslations[language as TranslationLang] || homeTranslations.en;
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
                {home}
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/attendance"}>
                {attendance}
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/accomodation"}>
                {accomodations}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/program"}>
                {program}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/faq"}>
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
