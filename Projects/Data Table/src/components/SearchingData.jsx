import { useEffect, useState } from "react";

const SearchingData = () => {
  const [searchValue, setSearchValue] = useState(""); 
  const [productData, setProductData] = useState([]); 
  const [sortedData, setSortedData] = useState([]); 

  console.log(productData);

  // Handle input change //
  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  // Fetching data from api //

  useEffect(() => {
    async function apiProductHandeling() {
      try {
        let fetchData = await fetch(`http://localhost:3004/products`);
        let data = await fetchData.json();
        setProductData(data);
        setSortedData(data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    apiProductHandeling();
  }, []);

  // Filter products based on search

  let searchUser = sortedData.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Sorting products based on name or price

  const handleSort = (e) => {
    const sortValue = e.target.value;

    let sorted = [...productData];

    if (sortValue === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortValue === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedData(sorted);
  };

  return (
    <div>
      <div className="mb-5 mt-5">
        <input
          type="text"
          className="form-control m-auto"
          id="formGroupExampleInput"
          placeholder="Search for products..."
          onChange={handleInput}
        />
      </div>
      <div className="mb-4">
        <select
          className="form-select"
          aria-label="Sort Products"
          onChange={handleSort}
        >
          <option value="name-asc">Sort by Name (A-Z)</option>
          <option value="name-desc">Sort by Name (Z-A)</option>
          <option value="price-asc">Sort by Price (Low-High)</option>
          <option value="price-desc">Sort by Price (High-Low)</option>
        </select>
      </div>
      <div className="row mt-5">
        {searchUser.map((product) => {
          return (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-lg border-0 rounded-3 product-card">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.name}
                  style={{ height: "240px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name.slice(0, 19)}</h5>
                  <p className="card-text">
                    {product.description.slice(0, 30)}
                  </p>
                  <p className="card-text">
                    <strong>₹{product.price}</strong>
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchingData;
