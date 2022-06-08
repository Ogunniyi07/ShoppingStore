import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {

 
  return (
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/CategoryPage" element={<CategoryPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} /> 
                <Route path="/ProductPage" element={<ProductPage />} /> 
                </Routes>
            </Router>  
          </div>
  );
}

export default App;

