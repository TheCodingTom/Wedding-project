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
                Woho es ist soweit! Tom & Gérry geben sich das Ja-Wort und haben
                sich endlich lieb - und das im verflixten 7. Jahr! Diesen
                besonderen Tag wollen wir mit euch verbringen und freuen uns auf
                einen kunterbunten Mix aus Italianos, Schweizern, Schwaben und
                den loco Berlinern! Vor 8 Jahren am Kotti in Berlin hätte Tom
                sicherlich nicht gedacht, dass er eines Tages im Schwabenländle
                in Ulm heiraten wird - life happens! Umso mehr freuen wir uns
                heute auf ein wunderschönes Fest bei uns im Garten - ganz dem
                Motto “Italy meets Schwaben”.
              </p>
            </Col>

            <Col md={6}>
              <div className={styles.pictureContainer}>
                <img
                  className={styles.homePicture}
                  src={beach}
                  alt="picture of tom and geri at the beach"
                />
              </div>
              <Countdown />
            </Col>
          </Row>
        </Container>
      </div>
      <Locations />
    </>
  );
}

export default Home;
