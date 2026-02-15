import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";
import EditProductForm from "../components/EditProductForm";


function Dashboard(props) {

  return (
    <>
      <h1>Dashboard</h1>

      <AddProductForm addProduct={props.addProduct} />

      <ProductList
        products={props.products}
        deleteProduct={props.deleteProduct}
        selectedProduct={props.selectedProduct}
      />
        {props.selectedProduct && (
         <EditProductForm 
        selectedProduct={props.selectedProduct} 
        updateProduct={props.updateProduct} 
        setSelectedProduct={props.setSelectedProduct} /> 
        )}
    </>
    
  );
}

export default Dashboard;
