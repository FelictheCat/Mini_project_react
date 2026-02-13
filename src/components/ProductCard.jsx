import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card">
      <Link to={`/products/${props.product.id}`}>
        <img src={props.product.thumbnail} width="150" />
      </Link>

      <Link to={`/products/${props.product.id}`}>
        <h3>{props.product.title}</h3>
      </Link>

      <p>${props.product.price}</p>

      {props.product.stock > 0 ? <p>In Stock ✅</p> : <p>Out of Stock ❌</p>}

      <button onClick={function () {
          props.selectProduct(props.product);
        }}
      >
        Edit
      </button>

      <button onClick={() => {
        props.deleteProduct(props.product.id);
        }}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
