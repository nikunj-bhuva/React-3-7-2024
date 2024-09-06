import jewel1 from "../assets/jewel1.png";

function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={jewel1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">jewellery Ring</h5>
        <p className="card-text">this is best jewellery ring in our shop.</p>
        <a href="#" className="btn btn-primary">
          buy now
        </a>
      </div>
    </div>
  );
}

export default Card;
