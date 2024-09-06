import watch from "../assets/watch.png";

function Card4() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={watch} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Watch</h5>
        <p className="card-text">
          this is a chain with a watch addition in our shop
        </p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Card4;
