import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // WILL ONLY RUN ONCE ONCE COMPONENT LOADS...
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //  BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
        </Routes>

        {/* CHECKOUT PAGE */}
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
        </Routes>

        {/* DEFAULT ROOT */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
