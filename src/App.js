import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user: "",
    password: "",
    email: "",
  });

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (user.email && user.password) {
      // If user details are met, setAuth to true
      setAuth(true);
    } else {
      // If user details are not met, redirect to /login
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<LoginPage formData={user} setFormData={setUser} />}
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Shop />
                </>
              }
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
