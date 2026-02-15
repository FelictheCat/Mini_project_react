import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";
import EditProductForm from "../components/EditProductForm";


function Dashboard(props) {

  return (
    <>
      <h1>Dashboard</h1>

      <AddProductForm addProduct={props.addProduct} />

      {props.selectedProduct && (
        <EditProductForm
          product={props.selectedProduct}
          updateProduct={props.updateProduct}
        />
      )}

      <ProductList
        products={props.products}
        deleteProduct={props.deleteProduct}
        selectProduct={props.selectProduct}
      />
    </>
  );
}

export default Dashboard;
