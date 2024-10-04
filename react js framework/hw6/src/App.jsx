import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Catalog</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
