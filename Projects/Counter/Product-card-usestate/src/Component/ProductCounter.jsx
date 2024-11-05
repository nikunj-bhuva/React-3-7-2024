import { useState } from "react";
import { ProductData } from "./ProductData";

const ProductCounter = () => {
  const [index, setIndex] = useState(0);
  const data = ProductData[index];

  // Handle previous and next button functions
  const handlePreviousButton = () =>
    index > 0 ? setIndex(index - 1) : setIndex(ProductData.length - 1);

  const handleNextButton = () =>
    index < ProductData.length - 1 ? setIndex(index + 1) : setIndex(0);

  // Destructure product data
  const { title, image, description, price } = data;

  return (
    <div className="flex justify-center items-center mt-16 mb-16 px-4">
      <button
        className="bg-gradient-to-r from-teal-400 to-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-teal-500 hover:to-green-600 transition duration-300 ease-in-out"
        onClick={handlePreviousButton}
      >
        Previous
      </button>

      {/* Card Container */}
      <div className="max-w-xs sm:max-w-sm w-full rounded-xl overflow-hidden shadow-2xl mx-5 bg-white transform hover:scale-105 transition duration-300 ease-in-out">
        {/* Image */}
        <div className="w-full h-64 overflow-hidden relative">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={title}
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Card Content */}
        <div className="px-6 py-4">
          <div className="font-bold text-2xl text-gray-900 mt-3 mb-3">
            {title.slice(0,24)}
          </div>
          <p className="text-gray-700 text-base font-medium mb-3">
            {description.slice(0, 65)}...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-teal-500">
              ${parseInt(price)}
            </span>
            <button className="bg-gradient-to-r from-teal-400 to-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:from-teal-500 hover:to-green-600 transition duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <button
        className="bg-gradient-to-r from-teal-400 to-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-teal-500 hover:to-green-600 transition duration-300 ease-in-out"
        onClick={handleNextButton}
      >
        Next
      </button>
    </div>
  );
};

export default ProductCounter;
