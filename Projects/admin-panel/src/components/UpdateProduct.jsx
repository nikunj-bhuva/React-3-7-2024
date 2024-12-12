import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import LengthErrorMessage from "./LengthErrorMessage";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  let { name, price, category, description, image } = productData;

  const [emptyMsg, setEmptyMsg] = useState({
    productName: false,
    productPrice: false,
    productCategory: false,
    productDescription: false,
    productImage: false,
  });

  let {
    productName,
    productPrice,
    productCategory,
    productDescription,
    productImage,
  } = emptyMsg;

  const [negativeValueMsg, setNegativeValueMsg] = useState(false);

  let { productId } = useParams();

  let navigate = useNavigate();

  const handleUpdateProduct = () => {
    if (!name || !price || !category || !description || !image) {
      setEmptyMsg({
        productName: !name,
        productPrice: !price,
        productCategory: !category,
        productDescription: !description,
        productImage: !image,
      });
    } else if (price < 0) {
      setNegativeValueMsg(true);
      setEmptyMsg({
        productName: false,
        productPrice: false,
        productCategory: false,
        productDescription: false,
        productImage: false,
      });
    } else {
      axios
        .patch(`http://localhost:3000/products/${productId}`, {
          name,
          price,
          category,
          description,
          image,
        })
        .then((response) => {
          console.log(response);
          alert("Product updated successfully!");
          navigate("/product");
        })
        .catch((error) => {
          alert("Something went wrong!");
        });

      setEmptyMsg({
        productName: false,
        productPrice: false,
        productCategory: false,
        productDescription: false,
        productImage: false,
      });
      setNegativeValueMsg(false);
      setProductData({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 text-primary">Update Product</h2>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Product Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter product name"
              value={name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
            {productName && (
              <EmptyMessage message="Name field cannot be empty!" />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Price</label>
            <input
              type="number"
              min="0"
              className="form-control rounded-3"
              placeholder="Enter product price"
              value={price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
            {productPrice && (
              <EmptyMessage message="Price field cannot be empty!" />
            )}
            {negativeValueMsg && (
              <LengthErrorMessage message="Negative values are not allowed!" />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter product category"
              value={category}
              onChange={(e) =>
                setProductData({ ...productData, category: e.target.value })
              }
            />
            {productCategory && (
              <EmptyMessage message="Category field cannot be empty!" />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control rounded-3"
              rows="3"
              placeholder="Enter product description"
              value={description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            ></textarea>
            {productDescription && (
              <EmptyMessage message="Description field cannot be empty!" />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Image URL</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter product image URL"
              value={image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
            />
            {productImage && (
              <EmptyMessage message="Image field cannot be empty!" />
            )}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary btn-lg rounded-3 px-5"
              onClick={handleUpdateProduct}
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
