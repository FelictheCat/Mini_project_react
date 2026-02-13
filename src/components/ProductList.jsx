import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-grid">
      {props.products.slice(0, 10).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={props.deleteProduct}
        />
      ))}
    </div>
  );
}


export default ProductList;
