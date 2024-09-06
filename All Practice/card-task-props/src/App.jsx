import ProductCard from "./Components/Productcard";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-5 bg-dark text-white p-2 rounded-5">
        Products
      </h1>
      <div className="d-flex gap-4">
        <ProductCard
          imgSrc="men1"
          title="U.S. Polo Assn. Denim"
          description="Men Regular Fit Striped Spread Collar Casual Shirt"
          price="₹299"
        />
        <ProductCard
          imgSrc="men2"
          title="HIGHLANDER"
          description="Men Slim Fit Striped Cut Away Collar Casual Shirt"
          price="₹1,049"
        />
        <ProductCard
          imgSrc="men3"
          title="U.S. POLO ASSN."
          description="Men Tailored Fit Solid Cut Away Collar Casual Shirt"
          price="₹1,303"
        />
        <ProductCard
          imgSrc="men4"
          title="LOUIS PHILIPPE"
          description="Men Regular Fit Striped Spread Collar Casual Shirt"
          price="₹299"
        />
      </div>
    </div>
  );
};

export default App;
