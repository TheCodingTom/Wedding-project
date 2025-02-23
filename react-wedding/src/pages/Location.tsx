import pic from "../images/Standesamt.jpg";

function Location() {
  return (
    <div>
      <h1>Location page</h1>
      <div className="top-container">
        <div className="location-info">
          <h2>Standesamt Ulm</h2>
          <p>
            BlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablabla
          </p>
        </div>
        <img
          className="location-pic"
          src={pic}
          alt="picture of Ulm's Standesamt"
        />
      </div>
    </div>
  );
}

export default Location;
