import { useState } from "react";

function AddProductForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      title: title,
      price: Number(price),
      stock: Number(stock),
      thumbnail: thumbnail,
    };

    props.addProduct(newProduct);

    setTitle("");
    setPrice("");
    setStock("");
    setThumbnail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <input
        placeholder="Image URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default AddProductForm;
