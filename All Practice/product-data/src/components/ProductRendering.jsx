import ProductCard from "./ProductCard";
import { ProductData } from "./ProductData";

const ProductRendering = () => {
  // {Product Rendring}
  return ProductData.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
};

export default ProductRendering;
