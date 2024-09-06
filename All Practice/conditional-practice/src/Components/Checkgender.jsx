import InvalidGender from "./Invalidgender";
import MenCard from "./Mencard";
import WomenCard from "./Womencard";

const CheckGender = () => {
  let userInput = prompt("enter your Gender:");
  userInput = userInput.toLowerCase();
  let commonClass = "text-center mt-5 p-2 mb-5 bg-info-subtle rounded-5";

  if (userInput === "men") {
    return (
      <>
        <h1 className={commonClass}>Men Products</h1>
        <div className="d-flex mt-4 justify-content-center flex-wrap">
          <MenCard
            imgSrc="menshirt"
            title="HIGHLANDER"
            description="Men Slim Fit Checkered Cut Away Collar Casual Shirt"
            price="₹799"
          />
          <MenCard
            imgSrc="mentshirt"
            title="HEATHEX"
            description="Men Printed Round Neck Pure Cotton Purple T-Shirt"
            price="₹499"
          />
          <MenCard
            imgSrc="womenwatch"
            title="FOSSIL"
            description="Briggs Analog Watch - For Men CH2927I"
            price="₹4,323"
          />
          <MenCard
            imgSrc="menchain"
            title="Fashion Frill"
            description="Golden Chain For Boys Stylish Heavy Golden Neck For Men 20 Inches Gold-plated Plated Brass Chain Set"
            price="₹244"
          />
        </div>
      </>
    );
  } else if (userInput === "women") {
    return (
      <>
        <h1 className={commonClass}>Women Products</h1>
        <div className="d-flex mt-4 column-gap-4">
          <WomenCard
            img="womensaree"
            title="MIJAASHREE"
            description="Embroidered Daily Wear Art Silk, Net Saree  (Black)"
            price="₹372"
          />
          <WomenCard
            img="womenkurti"
            title="Sa Rasa"
            description="Women Floral Print Viscose Rayon Straight Kurta  (Multicolor)"
            price="₹339"
          />
          <WomenCard
            img="womennightd"
            title="XPIOX"
            description="Pack of 2 Women Nighty  (Pink)"
            price="₹299"
          />
          <WomenCard
            img="womenskin"
            title="GMET"
            description="gmet Pimple Acne Patch Hydrocolloid Waterproof Patches Active Surface Acne"
            price="₹109"
          />
        </div>
      </>
    );
  } else {
    return <InvalidGender cs={commonClass} />;
  }
};

export default CheckGender;
