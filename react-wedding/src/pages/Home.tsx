import save from "../images/hug.png"

function Home() {
  return (
    <>
      <h1>Tom & Gerry</h1>
      <div className="home-container">
      <img className="hugPic"src={save} alt="tom and jerry hugging" />
      </div>

     
    </>
  );
}

export default Home;
