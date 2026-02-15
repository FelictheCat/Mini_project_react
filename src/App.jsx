import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import productsData from "./data/products.json";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [products, setProducts] = useState(productsData);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(updatedProducts);
  };

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  function updateProduct(updatedProduct) {
    const updatedList = products.map(function (product) {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });

    setProducts(updatedList);
  }

  return (
    <div className="app-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                products={products}
                deleteProduct={deleteProduct}
                addProduct={addProduct}
                selectedProduct={selectedProduct}
                selectProduct={setSelectedProduct}
                updateProduct={updateProduct}
              />
            }
          />

          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />

          <Route
            path="/create"
            element={<AddProductForm addProduct={addProduct} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
