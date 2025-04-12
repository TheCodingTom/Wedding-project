function RSVP() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <h1 className="display-4 text-center mb-4">RSVP</h1>
      <p className="lead text-center mb-3">
        Please let us know if you'll be attending and your meal preference.
      </p>
      <a
        href="https://forms.gle/FQ5UfQ7SD4qJuN18A"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
      >
        RSVP Now
      </a>
    </div>
  );
}

export default RSVP;
