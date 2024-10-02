import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { deleteItem } from "../../redux/slices/favoriteSlice";

function FavoriteList({ products }) {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Избранное</h1>
      <ul>
        {products
          .filter((product) => favorite.items.includes(product.id))
          .map(({ id, name, description, price }) => {
            return (
              <li key={id}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <Button
                  handlerClick={() => {
                    dispatch(deleteItem(id));
                  }}
                >
                  Удалить
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default FavoriteList;
