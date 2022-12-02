import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR } from "../redux/actions/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Confirmation = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const outputHandler = (e) => {
    alert("已成功送出");
    dispatch(CLEAR(e));
    //console.log("清空了");
    localStorage.clear();
    history("/");
  };
  const backHandler = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("adress");
    localStorage.removeItem("phone");
    localStorage.removeItem("pay");
    history("/order");
  };
  let name = JSON.parse(localStorage.getItem("name"));
  let email = JSON.parse(localStorage.getItem("email"));
  let adress = JSON.parse(localStorage.getItem("adress"));
  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  let pay = JSON.parse(localStorage.getItem("pay"));
  let phone = JSON.parse(localStorage.getItem("phone"));
  return (
    <div className="confrimationPage">
      <div className="container">
        <div className="stepper">
          <div className="stepperContainer">
            <ul className="bar">
              <li>
                <span>1</span>
                購物車
              </li>
              <li>
                <span>2</span>
                填寫資料
              </li>
              <li>
                <span>3</span>
                訂單完成
              </li>
            </ul>
            <div className="progress">
              <div className="progressBar" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
        <div className="confrimationContent">
          <h2>訂單確認</h2>
          <div className="card">
            <p>姓名:{name}</p>
            <p>郵件:{email}</p>
            <p>地址:{adress}</p>
            <p>電話:{phone}</p>
            <p>付款方式:{pay}</p>
            <p>總金額:{totalPrice}元</p>
          </div>

          <div className="output">
            <p className="back" onClick={backHandler}>
              <FontAwesomeIcon icon={faAnglesLeft} />
              回上一頁
            </p>
            <button style={{ cursor: "pointer" }} onClick={outputHandler}>
              確認送出
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
