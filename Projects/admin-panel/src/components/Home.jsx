import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState([]);

  console.log(productData);

  useEffect(() => {
    axios(`http://localhost:3000/products`).then((response) => {
      let { data } = response;
      setProductData(data);
    });
  }, []);

  return (
    <div
      style={{
        height: "auto",
        backgroundImage:
          "url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "40px 0px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card mask-custom">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">CATEGORY</th>
                        <th scope="col">CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.map((product) => {
                        console.log(product);
                        return (
                          <tr key={product.id}>
                            <td scope="row" className="fw-medium">
                              {product.id}
                            </td>
                            <td className="fw-medium">{product.name}</td>
                            <td className="fw-medium">{product.description}</td>
                            <td className="fw-medium">{product.price}</td>
                            <td className="fw-medium">{product.category}</td>
                            <td className="fw-medium">{product.createdAt}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
