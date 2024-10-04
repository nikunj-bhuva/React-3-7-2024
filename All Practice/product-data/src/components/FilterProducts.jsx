import ProductCard from "./ProductCard";
import { ProductData } from "./ProductData";
import ProductTitle from "./ProductTitle";

const FilterProducts = () => {
  // Function to filter products by category

  const allProducts = (category) =>
    ProductData.filter((product) => product.category === category);

  // Filtered products for each category

  const menProducts = allProducts("men's clothing");
  const womenProducts = allProducts("women's clothing");
  const jeweleryProducts = allProducts("jewelery");
  const electronicProducts = allProducts("electronics");

  // Rendering filtered products

  const renderingProducts = (filterProduct) =>
    filterProduct.map((product) => (
      /* Render individual ProductCard for each product */ <ProductCard
        product={product}
        key={product.id}
      />
    ));

  return (
    <>
      <ProductTitle title="Men's Products" />
      {renderingProducts(menProducts)}
      <ProductTitle title="Women's Products" />
      {renderingProducts(womenProducts)}
      <ProductTitle title="Jewelery Products" />
      {renderingProducts(jeweleryProducts)}
      <ProductTitle title="Electronic's Products" />
      {renderingProducts(electronicProducts)}
    </>
  );
};

export default FilterProducts;
