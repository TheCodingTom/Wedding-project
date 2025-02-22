import pic from "../images/Standesamt.jpg"

function Location() {
  return (
    <div>
        <h1>Location page</h1>
        <div className="location-pic-container">
          <img className="location-pic"src={pic} alt="picture of Ulm's Standesamt" />
        </div>
    </div>
  )
}

export default Location