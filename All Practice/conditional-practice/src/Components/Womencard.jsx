const WomenCard = ({ img, title, description, price }) => {
  const imgUrl = `src/assets/${img}.webp`;

  return (
    <div
      className="card  text-center rounded-5 mt-3 mb-5 bg-danger-subtle"
      style={{ width: "18rem" }}
    >
      <img
        src={imgUrl}
        className="card-img-top rounded-5 p-2"
        alt={imgUrl}
        style={{ height: "380px", objectFit: "cover" }}
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

export default WomenCard;
