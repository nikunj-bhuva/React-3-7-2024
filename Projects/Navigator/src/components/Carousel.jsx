import img1 from "../assets/hero.webp";
import img2 from "../assets/collection2.png";
import img3 from "../assets/collection3.png";
import { useContext } from "react";
import ModeValue from "../context/ModeContext";

function Carousel() {
  const { modeValue } = useContext(ModeValue);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={`active ${
            modeValue ? "carousel-indicator-dark-btn" : null
          }`}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className={`active ${
            modeValue ? "carousel-indicator-dark-btn" : null
          }`}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className={`active ${
            modeValue ? "carousel-indicator-dark-btn" : null
          }`}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="..."
            style={{
              objectFit: "cover",
              height: "540px",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="..."
            style={{
              objectFit: "cover",
              height: "540px",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="..."
            style={{
              objectFit: "cover",
              height: "540px",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${
            modeValue ? "carousel-btn-dark" : "carousel-btn-light"
          }`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${
            modeValue ? "carousel-btn-dark-next" : "carousel-btn-light-next"
          }`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
