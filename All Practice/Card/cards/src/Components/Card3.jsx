import braclet from "../assets/braclet.png";

function Card3() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={braclet} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Braclet</h5>
        <p className="card-text">this is most expensive braclet.</p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Card3;
