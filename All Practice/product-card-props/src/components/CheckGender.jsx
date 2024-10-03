import InvalidGender from "./InvalidGender";
import MenProduct from "./MenProduct";
import WomenProduct from "./WomenProduct";

const CheckGender = () => {
  const userValue = prompt("enter your Gender!:");

  if (userValue.toLowerCase() === "men") {
    return (
      <>
        <h1 className="text-center mt-5 mb-5 bg-dark text-white p-2 rounded-5">
          Mens Product
        </h1>
        <MenProduct
          title="Dennis Lingo"
          imgSrc="men1"
          description="Men Slim Fit Solid Spread Collar Casual Shirt"
          price="₹444"
          rating={9.8}
        />
        <MenProduct
          title="SOLSTICE"
          imgSrc="men2"
          description="Men Regular Fit Solid Casual Shirt"
          price="₹329"
          rating={9.2}
        />
        <MenProduct
          title="HIGHLANDER"
          imgSrc="men3"
          description="Men Slim Fit Solid Mandarin Collar Casual Shirt"
          price="₹439"
          rating={8.2}
        />
        <MenProduct
          title="CAMPUS SUTRA"
          imgSrc="men4"
          description="Men Regular Fit Self Design Spread Collar Casual Shirt"
          price="₹588"
          rating={8.4}
        />
      </>
    );
  } else if (userValue.toLowerCase() === "women") {
    return (
      <>
        <h1 className="text-center mt-5 mb-5 bg-danger-subtle p-2 rounded-5">
          Womens Product
        </h1>
        <WomenProduct
          imgSrc="women1"
          title="SIRIL"
          description="Unstitched Cotton Blend Salwar Suit Material Floral Print, Printed, Geometric Print"
          price="₹299"
          rating={8.2}
        />
        <WomenProduct
          imgSrc="women2"
          title="Cute Fellow"
          description="Embroidered Semi Stitched Lehenga Choli  (Pink)"
          price="₹479"
          rating={8.5}
        />
        <WomenProduct
          imgSrc="women3"
          title="Kedar Fab"
          description="Embroidered Semi Stitched Lehenga Choli  (Purple)"
          price="₹729"
          rating={9.3}
        />
        <WomenProduct
          imgSrc="women4"
          title="Ghumar"
          description="Self Design Semi Stitched Lehenga Choli  (Black, Red)"
          price="₹599"
          rating={9.7}
        />
      </>
    );
  } else {
    return <InvalidGender />;
  }
};

export default CheckGender;
