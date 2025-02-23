import { Col, Container, Row } from "react-bootstrap";
import pic from "../images/Standesamt.jpg";
import garden1 from "../images/IMG_8989.jpg";
import garden2 from "../images/IMG_8990.jpg";
import styles from "../styles/location.module.css"

function Location() {
  return (
    <div>
      <h1>Location</h1>

      <Container>
        <Row className={styles.topContainer} xs={1} s={1} md={1} lg={2} >
          <Col >
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
          <Col>
            <img className={styles.locationPic} src={pic} alt="" />
          </Col>
        </Row>
        <Row className={styles.bottomContainer} xs={1} s={1} md={1} lg={4} >
          <Col>
            <img src={garden1} alt="garden picture" className={styles.gardenPic}/>
          </Col>
          <Col>
            <img src={garden2} alt="garden picture" className={styles.gardenPic}  />
          </Col>
          <Col lg={6}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Location;
