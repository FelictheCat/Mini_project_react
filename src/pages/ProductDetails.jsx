import { useParams } from "react-router-dom";

function ProductDetails(props) {

  const params = useParams();
  const productId = Number(params.id);

  const foundProduct = props.products.find(function(product) {
    return product.id === productId;
  });

  if (!foundProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <h2>{foundProduct.title}</h2>
      <img src={foundProduct.thumbnail} width="200" />
      <p>{foundProduct.description}</p>
      <p>Price: ${foundProduct.price}</p>
      <p>Stock: {foundProduct.stock}</p>
    </>
  );
}

export default ProductDetails;
