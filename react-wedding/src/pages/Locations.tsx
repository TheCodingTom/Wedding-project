import { Col, Container, Row } from "react-bootstrap";
import pic from "../images/Standesamt.jpg";
import garden1 from "../images/IMG_8989.jpg";
import garden2 from "../images/IMG_8990.jpg";
import styles from "../styles/location.module.css";

function Locations() {
  return (
    <>
      <Container>
        <Row className={styles.topContainer} xs={1} s={1} md={1} lg={2}>
          <Col className={styles.standesamtInfo}>
            <h2>Standesamt Ulm</h2>
            <p>
              The ceremony will take place at the Standesamt in Ulm at 11:20.
              More info here...
            </p>
            <p>Address: Marktpl. 1, 89073 Ulm</p>
          </Col>
          <Col>
            <img className={styles.locationPic} src={pic} alt="" />
          </Col>
        </Row>
        <Row className={styles.bottomContainer} xs={1} s={1} md={1} lg={4}>
          <Col>
            <img
              src={garden1}
              alt="garden picture"
              className={styles.gardenPic}
            />
          </Col>
          <Col>
            <img
              src={garden2}
              alt="garden picture"
              className={styles.gardenPic}
            />
          </Col>
          <Col className={styles.gardenInfo} lg={6}>
            <h2>Garden Party</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Locations;
