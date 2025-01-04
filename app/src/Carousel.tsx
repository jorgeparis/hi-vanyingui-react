import mainimage from "./static/fresh-veg-1.jpg"
import carousel_one from "./static/fresh-veg-2.jpg"
import carousel_two from "./static/main-image-carol.png"
import './Carousel.css'
export function Carousel() {
  return (
    <>
      <div id="main-carousel" className="carousel slide carsouel-principal">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mainimage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel_one} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel_two} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
