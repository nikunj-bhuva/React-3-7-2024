import Data from "./Data";

const AllProducts = () => {
  return (
    <ul className="row p-0 row-gap-4 text-center">
      {Data().map((product, id) => (
        <div
          key={id}
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4"
        >
          <li className="list-unstyled">
            <div className="card rounded-5 shadow" style={{ width: "14rem" }}>
              <img
                src={product.image}
                className="card-img-top p-2"
                alt={product.image}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.slice(0, 18)}</h5>
                <p className="card-text">{product.description.slice(0, 20)}</p>
                <a href="#" className="btn btn-primary">
                  {product.price}
                </a>
              </div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default AllProducts;
