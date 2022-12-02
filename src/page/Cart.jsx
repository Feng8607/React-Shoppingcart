import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { INCREMENT, DECREMENT, DLT, CLEAR } from "../redux/actions/action";
const Cart = () => {
  //cartBar的動態條
  const getdata = useSelector((state) => state.cartreducer.cart);
  // console.log(getdata);
  const dispatch = useDispatch();
  //console.log(getdata);

  const history = useNavigate();

  const clearALL = (e) => {
    dispatch(CLEAR(e));
    //console.log("清空了");
  };
  //增加單一
  const incrementhandler = (e) => {
    dispatch(INCREMENT(e));
    //console.log(e);
  };
  //減少一樣
  const decrementhandler = (e) => {
    dispatch(DECREMENT(e));
    //console.log(e);
  };
  const clearHandler = (id) => {
    dispatch(DLT(id));
    //console.log("delete");
  };

  const finshHandler = () => {
    localStorage.setItem("totalPrice", totalPrice);
    history("/order");
  };

  const item = getdata.reduce((total, item) => (total += item.qnty), 0);

  const totalPrice = getdata.reduce(
    (total, item) => (total += item.qnty * item.price),
    0
  );
  return (
    <div className="cartPage">
      <div className="container">
        {getdata.length ? (
          <div className="cartContainer">
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
                  <div className="progressBar" style={{ width: "33%" }}></div>
                </div>
              </div>
            </div>
            <div className="cartLeft">
              <div className="cartCards">
                {getdata.map((item, id) => {
                  return (
                    <div key={id} className="cartCard">
                      <img src={item.imgdata} />
                      <p>品名：{item.name}</p>
                      <p>單價：{item.price}元</p>
                      <p>介紹：{item.content}</p>
                      <p>小計:{item.price * item.qnty}元</p>
                      <div className="cartbuttom">
                        <div className="cardCheck">
                          <div>
                            <button onClick={() => incrementhandler(item)}>
                              +
                            </button>
                            <p>{item.qnty}</p>
                            <button onClick={() => decrementhandler(item)}>
                              -
                            </button>
                          </div>
                        </div>
                        <button
                          className="cardDlt"
                          onClick={() => clearHandler(item.id)}
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cartRight">
              <div>
                <h2>訂單詳細</h2>
              </div>
              <div>
                <p>總商品數量:({item} 個商品)</p>
                <p className="total-price2">總計:{totalPrice}</p>
              </div>
              <div>
                <button onClick={() => clearALL()}>清空</button>
                <button onClick={finshHandler}>結帳</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <div></div>
            <div>你的購物車還是空的</div>
            <Link to="/">
              <button>繼續購物</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
