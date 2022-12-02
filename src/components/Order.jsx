import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { margin } from "@mui/system";

const Order = () => {
  let [show, setShow] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [adress, setAdress] = useState("");
  let [pay, setPay] = useState("");
  let [content, setContent] = useState("");
  const history = useNavigate();
  const backhandler = () => {
    localStorage.clear();
    history("/cart");
  };
  const inputHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const adressHandler = (e) => {
    setAdress(e.target.value);
  };
  const payHandler = (e) => {
    setPay(e.target.value);
    setShow(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("adress", JSON.stringify(adress));
    localStorage.setItem("pay", JSON.stringify(pay));
    localStorage.setItem("content", JSON.stringify(content));
    history("/confirmation");
  };
  return (
    <div className="Orderpage">
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
              <div className="progressBar" style={{ width: "66%" }}></div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form className="formInside" onSubmit={saveHandler}>
            <label>收件人姓名</label>
            <input
              placeholder="請輸入收件人姓名"
              required="required"
              autoComplete="off"
              onChange={inputHandler}
            ></input>
            <label>Email</label>
            <input
              placeholder="請輸入email"
              required="required"
              autoComplete="off"
              onChange={emailHandler}
            ></input>
            <label>電話</label>
            <input
              placeholder="請輸入電話"
              required="required"
              autoComplete="off"
              onChange={phoneHandler}
            ></input>
            <label>地址</label>
            <input
              placeholder="請輸入收件地址"
              required="required"
              autoComplete="off"
              onChange={adressHandler}
            ></input>
            <label>付款方式</label>
            <select
              placeholder="請選擇付款方式"
              autoComplete="off"
              onChange={payHandler}
            >
              <option value="WebATM">WebATM</option>
              <option value="貨到付款">貨到付款</option>
              <option value="信用卡支付">信用卡支付</option>
              <option value="Googlepay">Googlepay</option>
            </select>
            {show == "信用卡支付" ? (
              <div className="IDcard">
                <label>卡號</label>
                <div className="IDinput">
                  <input maxLength={4} placeholder="分行號碼" />
                  <input maxLength={4} placeholder="- - - -" />
                  <input maxLength={4} placeholder="----" />
                  <input maxLength={4} placeholder="----" />
                  <input maxLength={4} placeholder="----" />
                </div>
              </div>
            ) : (
              <p></p>
            )}
            <p className="remark">備註</p>
            <textarea
              onChange={contentHandler}
              placeholder="有甚麼想和我們說"
            ></textarea>
            <div className="outPut">
              <p className="backCart" onClick={backhandler}>
                <FontAwesomeIcon icon={faAnglesLeft} />
                回購物車
              </p>
              <input className="outPutform" type="submit" value="繳交訂單" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
