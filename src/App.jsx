import { useState, useEffect } from "react";
import { Header, Content, Footer } from "./content";
import Data from "./initialdata";

function getInitialTrips() {
  const saved = localStorage.getItem("trips");
  return saved ? JSON.parse(saved) : Data;
}

export default function App() {
  const [trips, setTrips] = useState(getInitialTrips());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    img: { src: "", alt: "" },
    title: "",
    country: "",
    googleMapsLink: "",
    dates: "",
    text: "",
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "imgSrc") {
      setForm((f) => ({ ...f, img: { ...f.img, src: value } }));
    } else if (name === "imgAlt") {
      setForm((f) => ({ ...f, img: { ...f.img, alt: value } }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTrips((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now(),
      },
    ]);
    setForm({
      img: { src: "", alt: "" },
      title: "",
      country: "",
      googleMapsLink: "",
      dates: "",
      text: "",
    });
    setShowForm(false);
  }

  function handleRemove(id) {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  }

  const arr = trips.map((item) => (
    <Content
      key={item.id}
      img={item.img}
      title={item.title}
      country={item.country}
      googleMapsLink={item.googleMapsLink}
      dates={item.dates}
      text={item.text}
      id={item.id}
      onRemove={handleRemove}
    />
  ));

  return (
    <div className="app-wrapper">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        <button
          className="add-trip-btn"
          onClick={() => setShowForm(true)}
        >
          + Add a Trip
        </button>
      </div>
      {showForm && (
        <div className="modal-overlay">
          <form className="trip-form" onSubmit={handleSubmit}>
            <h2>Add a New Trip</h2>
            <input
              name="imgSrc"
              type="url"
              placeholder="Image URL"
              value={form.img.src}
              onChange={handleChange}
              required
            />
            <input
              name="imgAlt"
              type="text"
              placeholder="Image Alt Text"
              value={form.img.alt}
              onChange={handleChange}
              required
            />
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              name="country"
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
            />
            <input
              name="googleMapsLink"
              type="url"
              placeholder="Google Maps Link"
              value={form.googleMapsLink}
              onChange={handleChange}
              required
            />
            <input
              name="dates"
              type="text"
              placeholder="Dates (e.g. 1 Jan, 2025 - 10 Jan, 2025)"
              value={form.dates}
              onChange={handleChange}
              required
            />
            <textarea
              name="text"
              placeholder="Description"
              value={form.text}
              onChange={handleChange}
              required
              rows={4}
            />
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem",}}>
              <button type="submit" className="add-trip-btn">
                Add Trip
              </button>
              <button
                type="button"
                className="add-trip-btn cancel"
                onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <section className="content">{arr}</section>
      <Footer />
    </div>
  );
}
