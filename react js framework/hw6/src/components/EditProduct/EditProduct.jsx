import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/slices/productSlice";

const EditProduct = ({ product, closeEdit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, name, description, price }));
    closeEdit(); // Закрыть модальное окно редактирования или вернуться на список
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Update Product</button>
      <button type="button" onClick={closeEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditProduct;
