import { useState } from "react";
import { ProductData } from "../../../../ProductData";

const ProductCounter = () => {
  const [index, setIndex] = useState(0); //initial value.
  const data = ProductData[index]; //set index value.

  // handle previous button function //

  const handlePreviousButton = () =>
    index > 0 ? setIndex(index - 1) : setIndex(ProductData.length - 1);

  // handle next button function //

  const handleNextButton = () =>
    index < ProductData.length - 1 ? setIndex(index + 1) : setIndex(0);

  // destructure object keys from data //

  const { title, image, description, price } = data;

  return (
    <div className="flex justify-center items-center mt-20 mb-16 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePreviousButton}
      >
        Previous
      </button>
      <div className="max-w-sm w-96 rounded overflow-hidden shadow-lg mx-9">
        <img
          className="text-center mt-2"
          src={image}
          alt={title}
          style={{
            width: "370px",
            height: "200px",
            objectFit: "contain",
            mixBlendMode: "darken",
          }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mt-3 mb-3">
            {title.slice(0, 20)}
          </div>
          <p className="text-gray-700 text-base font-medium">
            {description.slice(0, 30)}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-2xl text-white mr-2 mb-5">
            Price : {parseInt(price)}
          </span>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNextButton}
      >
        Next
      </button>
    </div>
  );
};

export default ProductCounter;
