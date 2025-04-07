import hug from "../images/hug.png";
import beach from "../images/canva.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";
import styles from "../styles/home.module.css";
import Locations from "../components/Locations";

function Home() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #fff0f5, #e0f7fa)" }}>
        <Container
          fluid="md"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <Row className="align-items-center">
            <Col md={6} className={styles.homeInfo}>
              <h1 className={styles.mainH1}>Ci sposiamo!</h1>
              <img
                className={styles.hugPic}
                src={hug}
                alt="image of tom and jerry hugging"
              />
              <p className={styles.mainP}>
                Hi everyone! As you know, on August 30th, 2025 we'll be
                celebrating our wedding in Geri's hometown, Ulm. We can't wait
                to celebrate this day with you!
              </p>
              <Countdown />
            </Col>

            <Col md={6}>
              <div className={styles.pictureContainer}>
                <img
                  className={styles.homePicture}
                  src={beach}
                  alt="picture of tom and geri at the beach"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Locations />
    </>
  );
}

export default Home;
