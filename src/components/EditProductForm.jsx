import { useState } from "react";

function EditProductForm(props) {

  const [title, setTitle] = useState(props.product.title);
  const [price, setPrice] = useState(props.product.price);
  const [stock, setStock] = useState(props.product.stock);
  const [thumbnail, setThumbnail] = useState(props.product.thumbnail);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      ...props.product,
      title: title,
      price: Number(price),
      stock: Number(stock),
      thumbnail: thumbnail
    };

    props.updateProduct(updatedProduct);
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit Product</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <input
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <button>Save</button>

    </form>
  );
}

export default EditProductForm;
