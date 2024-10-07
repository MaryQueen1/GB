import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addItem } from "../../redux/slices/favoriteSlice";

function Goods({ products }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map(({ id, name, description, price }) => (
        <li key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <Button
            handlerClick={() => {
              dispatch(addItem(id));
            }}
          >
            В избранное
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Goods;
