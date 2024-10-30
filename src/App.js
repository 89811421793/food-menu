import "./reset.css";
import Products from "./pages/products";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Products />
      <Link to={'/description'}></Link>
      <Link to={"/products"}></Link>
      <Link to={"/prodbasket"}></Link>
    </div>
  );
}

export default App;
