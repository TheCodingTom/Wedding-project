import video from "../images/WhatsApp Video 2025-03-09 at 20.10.24.mp4";

function FakeGallery() {
  return (
    <div className="fake-gallery-container mt-5">
      <h1 className="display-4 text-center mb-4">
        Let us know if you're coming!
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <a
        href="https://forms.gle/FQ5UfQ7SD4qJuN18A"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
      >
        Click here
      </a>
    </div>
  );
}

export default FakeGallery;
