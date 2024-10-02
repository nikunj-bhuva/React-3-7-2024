import MenProduct from "./components/MenProduct";

const App = () => {
  // debugger
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 bg-dark text-white p-2 rounded-5">
        Mens Product
      </h1>
      <div className="row">
        <MenProduct
          title="Dennis Lingo"
          imgSrc="men1"
          description="Men Slim Fit Solid Spread Collar Casual Shirt"
          price="₹444"
        />
        <MenProduct
          title="SOLSTICE"
          imgSrc="men2"
          description="Men Regular Fit Solid Casual Shirt"
          price="₹329"
        />
        <MenProduct
          title="HIGHLANDER"
          imgSrc="men3"
          description="Men Slim Fit Solid Mandarin Collar Casual Shirt"
          price="₹439"
        />
        <MenProduct
          title="CAMPUS SUTRA"
          imgSrc="men4"
          description="Men Regular Fit Self Design Spread Collar Casual Shirt"
          price="₹588"
        />
      </div>
    </div>
  );
};

export default App;
