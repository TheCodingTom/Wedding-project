import "../styles/weddinghome.css";
import hug from "../images/hug.png";
import beach from "../images/beach.jpeg";

const WeddingHome = () => {
  return (
    <div className="home-wrapper">
      <h1 className="title">Ci sposiamo!</h1>

      <div className="grid-container">
        <img className="hugPic" src={hug} alt="Tom and Jerry hugging" />
        <img className="beachPic" src={beach} alt="A beautiful beach" />
      </div>
    </div>
  );
};

export default WeddingHome;
