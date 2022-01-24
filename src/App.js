import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Home, UserList } from "./pages";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";

import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />
          {/* <Route path="newProduct" element={<ProductList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
