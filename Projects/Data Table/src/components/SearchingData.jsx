import { useEffect, useState } from "react";

const SearchingData = () => {
  const [searchValue, setSearchValue] = useState(""); //search input value state.
  const [productData, setProductData] = useState([]); //productdata state.

  // handle input function //

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  // fetch data from api //

  useEffect(() => {
    async function apiProductHandeling() {
      try {
        let fetchData = await fetch(`https://fakestoreapi.com/products`);
        let data = await fetchData.json();
        setProductData(data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    apiProductHandeling();
  }, []);

  //filtering input field value //

  let searchUser = productData
    .filter(({ category }) => category.indexOf(searchValue) >= 0)
    .map((product) => (
      <div key={product.id} className="col-3">
        <div className="card" style={{ width: "16rem" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.slice(0, 18)}</h5>
            <p className="card-text">{product.description.slice(0, 20)}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="mb-5 mt-5">
        <input
          type="text"
          className="form-control m-auto"
          id="formGroupExampleInput"
          placeholder="search your products..."
          onChange={handleInput}
        />
      </div>
      <div className="row mt-5 g-4">{searchUser}</div>
    </>
  );
};

export default SearchingData;
