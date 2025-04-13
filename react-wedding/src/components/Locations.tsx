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
            The ceremony will take place at the Standesamt in Ulm at 11:20. Due
            to space limitations, only a small group can join us inside for the
            civil ceremony. But don’t worry — it’ll be short and sweet, and
            right after, we’ll all gather for a prosecco toast together, either
            just outside or at a nearby bar.
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
            After the ceremony, the celebration continues at Geri’s parents’
            place, where we’ll enjoy good food, drinks, and music in their
            beautiful garden. The amazing team from Anomal will treat us to
            delicious Italian specialties and drinks. And to top it all off —
            we’ll wrap up the evening with a proper party and live DJ set in the
            garage!
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
