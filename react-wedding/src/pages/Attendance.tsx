import "../styles/attendance.css";
import video from "../images/WhatsApp Video 2025-03-09 at 20.10.24.mp4";
import { Button } from "react-bootstrap";

function Attendance() {
  return (
    <div
      className="attendance-container"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <h1 className="attendance-title">Let us know if you're coming!</h1>
      <div className="attendance-video-container">
        <div className="attendance-video-frame">
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="Embedded Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Button href="https://forms.gle/FQ5UfQ7SD4qJuN18A">Click here</Button>
    </div>
  );
}

export default Attendance;
