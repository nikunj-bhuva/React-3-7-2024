import { ProductData } from "./ProductData";

const ProductRendering = () => {
  // {Product Rendring}
  return ProductData.map((product) => (
    <div key={product.id} className="col-3">
      <div
        className="card p-2 text-center bg-info-subtle rounded-5"
        style={{ width: "16rem" }}
      >
        <div className="m-auto pt-3">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
              mixBlendMode: "darken",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0, 16)}</h5>
          <p className="card-text fw-medium">
            {product.description.slice(0, 20)}
          </p>
          <p>
            <strong>Price:{product.price}</strong>
          </p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  ));
};

export default ProductRendering;
