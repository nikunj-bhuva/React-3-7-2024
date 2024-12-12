import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  let { name, price, category, description, image } = formData;

  let navigate = useNavigate();

  const handleAddProducts = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    axios
      .post("http://localhost:3000/products", {
        name,
        price,
        category,
        description,
        image,
      })
      .then((response) => {
        console.log(response);
        navigate("/product")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 className="text-center mb-4">Add New Product</h2>
        <form onSubmit={handleAddProducts}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              min={0}
              type="number"
              className="form-control"
              name="price"
              value={price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="Enter product price"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              placeholder="Enter product category"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              placeholder="Enter product image URL"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success w-100">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
