const MenProduct = ({ title, imgSrc, description, price }) => {
  // dynamic path url's //

  const imgUrl = `src/assets/${imgSrc}.webp`;

  return (
    <div className="col-3">
      <div
        className="card p-2 rounded-4 text-center bg-dark-subtle"
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
          <p className="card-text fw-medium mt-3 mb-3">{description}</p>
          <p>
            <strong>{price}</strong>
          </p>
          <a href="#" className="btn btn-info fw-bold">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenProduct;
