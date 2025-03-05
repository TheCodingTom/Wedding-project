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
         
            <h1 className={styles.mainH1}>Ci sposiamo!</h1>
            <img className={styles.hugPic} src={hug} alt="image of tom and jerry hugging" />
            <p className={styles.mainP}>Hi everyone! As you know, on August 30th, 2025 we'll be celebrating our wedding in Geri's hometown, Ulm. We can't wait to celebrate this day with you!</p>
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
