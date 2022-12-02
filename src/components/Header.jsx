import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
const Header = () => {
  const getproductcount = useSelector((state) => state.cartreducer);
  const amount = getproductcount.cart.length;
  return (
    <div className="header">
      <div className="container">
        <div className="containerLeft">
          <h2>
            <Link to="/">DIGITAL</Link>
          </h2>
        </div>
        <div className="containerRight">
          <Link to="/" className="cartHome">
            首頁
          </Link>
          <Badge
            style={{ marginRight: "1rem" }}
            badgeContent={amount}
            color="error"
          >
            <Link to="/cart">
              <box-icon type="solid" name="cart-alt"></box-icon>
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
