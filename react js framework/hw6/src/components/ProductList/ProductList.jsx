import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  toggleAvailability,
} from "../../redux/slices/productSlice";
import { useState } from "react";
import EditProduct from "../EditProduct/EditProduct";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const closeEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Product List</h2>
      {editingProduct ? (
        <EditProduct product={editingProduct} closeEdit={closeEdit} />
      ) : products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? "Yes" : "No"}</p>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Toggle Availability
              </button>
              <button onClick={() => handleEditClick(product)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
