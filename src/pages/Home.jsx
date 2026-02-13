import ProductList from "../components/ProductList";

function Home(props) {
  return (
    <>
      <h1>Products</h1>

      <ProductList
        products={props.products}
        deleteProduct={props.deleteProduct}
      />
    </>
  );
}

export default Home;
