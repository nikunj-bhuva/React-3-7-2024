const WomenProduct = ({ imgSrc, title, description, price, rating }) => {
  // dynamic path url's //

  const imgUrl = `src/assets/${imgSrc}.webp`;

  // rating class css condition //

  const ratingCondition = rating >= 8.5 ? "#f7dc6f" : "#7dcea0";

  return (
    <div className="col-3">
      <div
        className="card p-2 rounded-4 text-center bg-danger-subtle"
        style={{ width: "16rem" }}
      >
        <img
          role="button"
          src={imgUrl}
          className="card-img-top rounded-5"
          alt={title}
          style={{ width: "217px", height: "289px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fw-medium mt-3 mb-3">
            {description.slice(0, 50)}
          </p>
          <p>
            <strong>{price}</strong>
          </p>
          <p>
            <strong style={{ backgroundColor: ratingCondition }}>
              rating:{rating}
            </strong>
          </p>
          <a
            href="#"
            className="btn btn-info fw-bold"
            style={{ backgroundColor: ratingCondition, border: "none" }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WomenProduct;
