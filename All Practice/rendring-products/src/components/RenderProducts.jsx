import data from "../data.json";

const RenderProducts = () => {
  // debugger;
  return (
    <div className="row g-5">
      {data.map((product) => (
        <div key={product.id} className="col-3" style={{ width: "24%" }}>
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt="Fissure in Sandstone"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.slice(0, 20)}</h5>
              <p className="card-text">{product.description.slice(0, 23)}</p>
              <a
                href="#!"
                className="btn btn-primary"
                data-mdb-ripple-init=""
                alt={product.title}
              >
                {product.price}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderProducts;
