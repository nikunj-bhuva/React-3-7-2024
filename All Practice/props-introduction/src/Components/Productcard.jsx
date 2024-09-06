const Productcard = (props) => {
  const { imgSrc, title, description, price } = props;
  const imgUrl = `src/assets/${imgSrc}.webp`;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>
  );
};

export default Productcard;
