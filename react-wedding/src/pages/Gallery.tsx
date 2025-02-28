import CircularGallery from "../components/CircularGallery";

function Gallery() {
  return (
    <div>
      <h1>This is the gallery</h1>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={0} textColor="black" borderRadius={0.05} />
      </div>
    </div>
  );
}

export default Gallery;
