import { Button } from "react-bootstrap";
import video from "../images/WhatsApp Video 2025-03-09 at 20.10.24.mp4";

function FakeGallery() {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">
        I'm sorry, there are no pictures here
      </h1>
      <div className="d-flex justify-content-center mb-4">
        <div
          className="border rounded shadow-sm"
          style={{ width: "300px", height: "300px", overflow: "hidden" }}
        >
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="Embedded Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Button>Go to real gallery</Button>
    </div>
  );
}

export default FakeGallery;
