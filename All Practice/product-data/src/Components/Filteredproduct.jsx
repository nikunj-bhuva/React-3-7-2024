import Data from "./Data";

const FilteredProduct = () => {
  const mensProduct = Data().filter(
    (product) => product.category === "men's clothing"
  );

  const womensProduct = Data().filter(
    (product) => product.category === "women's clothing"
  );

  const jeweleryProduct = Data().filter(
    (product) => product.category === "jewelery"
  );

  const electronicsProduct = Data().filter(
    (product) => product.category === "electronics"
  );

  const filteredProducts = (allProducts) => {
    return allProducts.map((product, id) => (
      <div
        key={id}
        className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4"
      >
        <li className="list-unstyled">
          <div
            className="card  rounded-5 shadow text-center"
            style={{ width: "14rem" }}
          >
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
    ));
  };

  return (
    <ul className="row p-0 row-gap-4 text-center">
      <h1 className="text-center mt-5 mb-5 bg-info text-light rounded-5">
        Men's Collection
      </h1>
      {filteredProducts(mensProduct)}
      <h1 className="text-center mt-5 mb-5 bg-info text-light rounded-5">
        Women's Collection
      </h1>
      {filteredProducts(womensProduct)}
      <h1 className="text-center mt-5 mb-5 bg-info text-light rounded-5">
        Jewellery Collection
      </h1>
      {filteredProducts(jeweleryProduct)}
      <h1 className="text-center mt-5 mb-5 bg-info text-light rounded-5">
        Electronic Collection
      </h1>
      {filteredProducts(electronicsProduct)}
    </ul>
  );
};

export default FilteredProduct;
