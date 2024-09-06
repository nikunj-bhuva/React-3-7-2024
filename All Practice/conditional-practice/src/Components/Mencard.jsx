const MenCard = ({ imgSrc, title, description, price }) => {
  const imgUrl = `src/assets/${imgSrc}.webp`;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div
        className="card text-center rounded-5 mt-3 mb-5 bg-info-subtle"
        style={{ width: "14rem", height: "500px" }}
      >
        <img
          src={imgUrl}
          className="card-img-top rounded-5 p-2"
          alt={imgUrl}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 40)}</p>
          <a href="#" className="btn btn-primary">
            {price}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenCard;
