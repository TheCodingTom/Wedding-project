import { Col, Container, Row } from "react-bootstrap";
import pic from "../images/Standesamt.jpg";
import garden1 from "../images/IMG_8989.jpg";
import garden2 from "../images/IMG_8990.jpg";
import styles from "../styles/location.module.css";

function Locations() {
  return (
    <Container fluid="md" style={{ paddingBottom: "4rem" }}>
      <Row className={styles.topContainer} xs={1} md={2}>
        <Col className={styles.standesamtInfo}>
          <h2 className={styles.sectionTitle}>Standesamt Ulm</h2>
          <p className={styles.sectionText}>
            The ceremony will take place at the Standesamt in Ulm at 11:20. More
            info here...
          </p>
          <p className={styles.sectionText}>
            <strong>Address:</strong> Marktpl. 1, 89073 Ulm
          </p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img className={styles.locationPic} src={pic} alt="Standesamt Ulm" />
        </Col>
      </Row>

      <Row className={styles.bottomContainer} xs={1} md={2} lg={3}>
        <Col>
          <img src={garden1} alt="Garden view" className={styles.gardenPic} />
        </Col>
        <Col>
          <img src={garden2} alt="Garden view" className={styles.gardenPic} />
        </Col>
        <Col className={styles.gardenInfo}>
          <h2 className={styles.sectionTitle}>Garden Party</h2>
          <p className={styles.sectionText}>
            Join us for a beautiful garden party after the ceremony! Enjoy the
            open-air setting with great company, delicious food, and a relaxed
            atmosphere.
          </p>
          <p className={styles.sectionText}>
            <strong>Address:</strong> Safranberg 12, 89075 Ulm
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Locations;
