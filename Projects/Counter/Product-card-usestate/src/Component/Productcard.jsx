import { useState } from "react";
import { Data } from "./Data";

const Productcard = () => {
  const [currentIndex, setIndex] = useState(0);

  const productData = Data[currentIndex];

  // handler Increment Function //

  const handlerIncrement = () =>
    currentIndex < Data.length - 1 ? setIndex(currentIndex + 1) : setIndex(0);

  // handler Decrement Function //

  const handlerDecrement = () =>
    currentIndex > 0 ? setIndex(currentIndex - 1) : setIndex(19);

  const { image, title, description } = productData;

  return (
    <div className="d-flex justify-content-center gap-5 mb-5">
      <div className="align-content-center">
        <span role="button">
          <svg
            onClick={handlerDecrement}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
          </svg>
        </span>
      </div>
      <div>
        <ul className="p-0">
          <li className="list-unstyled">
            <div
              className="card bg-secondary-subtle border border-3 border-dark-subtle rounded-5"
              style={{ width: "300px" }}
            >
              <div className="text-center p-3">
                <img
                  src={image}
                  className="card-img-top w-75"
                  style={{
                    mixBlendMode: "multiply",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  alt={image}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-5 text-center">
                  {title.slice(0, 10)}
                </h5>
                <p className="card-text">{description.slice(0, 90)}</p>
                <div className="text-center">
                  <a href="#" className="btn btn-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="align-content-center">
        <span role="button">
          <svg
            onClick={handlerIncrement}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill poin"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Productcard;
