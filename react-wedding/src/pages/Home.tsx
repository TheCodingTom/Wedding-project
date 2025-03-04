import hug from "../images/hug.png";
import beach from "../images/beach.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";
import styles from "../styles/home.module.css"

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className={styles.homeInfo}>
            <h1>Ci sposiamo!</h1> <img className={styles.hugPic} src={hug} alt="image of tom and jerry hugging" />
            <Countdown />
          </Col>
          <Col>
            <div className={styles.pictureContainer}><img className={styles.homePicture} src={beach} alt="picture of tom and geri at the beach" /></div>
          </Col>
        </Row>
      </Container>

    
    </>
  );
}

export default Home;
