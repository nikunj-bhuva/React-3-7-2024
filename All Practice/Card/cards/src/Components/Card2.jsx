import chain from "../assets/chain.png";

function Card2() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={chain} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          this is a designing chain. and this is most expensive chain in out
          shop
        </p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Card2;
