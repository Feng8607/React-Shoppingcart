import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Footer from "./components/Footer";
import Carddata from "./components/cartdata";
import BacktotopButton from "./components/BacktotopButton";
import Scrolltotop from "./components/Scrolltotop";
import Order from "./components/Order";
import Confirmation from "./components/Confirmation";
import "./style/style.css";
import "boxicons";
import "swiper/css/bundle";
const App = () => {
  let [data, setData] = useState(Carddata);
  return (
    <div>
      <Header />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route
          path="/cart"
          element={<Cart data={data} setData={setData}></Cart>}
        />
        <Route path="/order" element={<Order />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
      </Routes>
      <BacktotopButton />
      <Footer />
    </div>
  );
};

export default App;
