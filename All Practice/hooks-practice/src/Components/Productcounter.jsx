import { useState } from "react";
import Data from "./Data";
import ProductIcon from "./Producticon";

const ProductCounter = () => {
  const [index, setIndex] = useState(0);

  const data = Data();
  const productData = data[index];

  const handlerPreviousBtn = () => {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  };

  const handlerNextBtn = () => {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const { image, title, description, price } = productData;

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 mb-5">
      <ProductIcon
        icon="bi bi-arrow-left-square-fill"
        path="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"
        onClick={handlerPreviousBtn}
      />
      <div className="card bg-info-subtle rounded-5" style={{ width: "17rem" }}>
        <img
          src={image}
          className="card-img-top p-3"
          alt={title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "contain",
            mixBlendMode: "darken",
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bolder">{title.slice(0, 19)}</h5>
          <p className="card-text fw-medium">{description.slice(0, 25)}</p>
          <span className="fw-bolder">Price: ₹{price}</span>
          <div className="mt-3 mb-1">
            <a href="#" className="btn btn-warning fw-bolder">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <ProductIcon
        icon="bi bi-arrow-right-square-fill"
        path="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"
        onClick={handlerNextBtn}
      />
    </div>
  );
};

export default ProductCounter;
