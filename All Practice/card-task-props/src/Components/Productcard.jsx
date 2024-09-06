const ProductCard = ({ imgSrc, title, description, price }) => {
  const imgUrl = `src/assets/${imgSrc}.webp`;
  console.log(imgUrl);
  return (
    <div
      className="card bg-dark-subtle text-center rounded-5"
      style={{ width: "18rem" }}
    >
      <img
        src={imgUrl}
        className="card-img-top rounded-5 p-2"
        alt={imgUrl}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-dark">
          {price}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
