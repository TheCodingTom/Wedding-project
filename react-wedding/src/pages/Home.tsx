import save from "../images/hug.png";
import Countdown from "../components/Countdown";



function Home() {
  return (
    <>
      <h1>We're getting married!</h1>
      <div className="home-container">
        <img className="hugPic" src={save} alt="tom and jerry hugging" />
      </div>
      <Countdown />;
      
    </>
  );
}

export default Home;
