import hug from "../images/hug.png";
import beach from "../images/beach.jpeg"
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";




function Home() {
  return (
    <>
    {/* <Container>
      <Row>
        <Col><h1>Ci sposiamo!</h1></Col>
        <Col><img className="home-pic" src={beach} alt=""/></Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container> */}

   
    <h1>Ci sposiamo!
    </h1>
      
      <div className="home-container">
        <img className="hugPic" src={hug} alt="tom and jerry hugging" />
      </div>

      <Countdown/>
{/* 
      <div>
        <img src={beach} alt="" style={{width:"500px"}} />
      </div> */}

    
      
    </>
  );
}

export default Home;
