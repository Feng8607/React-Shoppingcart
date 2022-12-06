import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INS } from "../redux/actions/action";
import Carddata from "../components/cartdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper";

const Home = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  //提醒的State
  let [showAddToCart, setshowAddToCart] = useState(false);
  const getdata = useSelector((state) => state.countreducer);
  const getproductcount = useSelector((state) => state.cartreducer);
  const amount = getproductcount.cart.length;
  const dispatch = useDispatch();
  //新增進購物車，顯示提醒畫面1秒
  const addhandler = (e) => {
    dispatch(INS(e));
    setshowAddToCart(true);
    setTimeout(() => setshowAddToCart(false), 1000);
  };

  //搜尋產品功能
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setData(Carddata);
  }, [search.length == 0]);
  //輸入後
  const outputHandler = () => {
    const findProduct =
      data && data.length > 0
        ? data.filter((e) => e.name.includes(search))
        : undefined;
    setData(findProduct);
  };

  return (
    <div className="homePage">
      <div className="carousel">
        <Swiper
          style={{
            "--swiper-pagination-color": "rgb(0, 123, 135)",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              crossOrigin="anonymous"
              src={new URL("../components/pic/BG1.jpg", import.meta.url)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              crossOrigin="anonymous"
              src={new URL("../components/pic/BG2.jpg", import.meta.url)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              crossOrigin="anonymous"
              src={new URL("../components/pic/BG3.jpg", import.meta.url)}
            />
          </SwiperSlide>
        </Swiper>
        <div className="carouselContent">
          <h2 id="main2">
            Welcome to the
            <br />
            Digital Monster shop
            <span>
              <a href="#main2">進入產品欄</a>
            </span>
          </h2>
        </div>
      </div>
      <div className="container">
        <h2>產品</h2>
        <div className="searchContainer">
          <div className="seachPosition">
            <input
              className="searchInput"
              onChange={inputHandler}
              placeholder="請輸入想要找的商品"
            />
            <button className="searchBTN" onClick={outputHandler}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="cards">
          {data.length == 0 && <div className="defindPage">查無此商品</div>}
          {data.map((item) => {
            return (
              <div key={item.id} className="card">
                <img src={item.imgdata} />
                <div className="cardcontent">
                  <p>品項:{item.name}</p>
                  <p>單價:{item.price}元</p>
                  <p>介紹:{item.content}</p>
                </div>
                <div className="addClick">
                  <button onClick={() => addhandler(item)}>新增</button>
                </div>
              </div>
            );
          })}
        </div>
        {showAddToCart && (
          <div className="addContainer">
            <div className="addContent">商品已加入購物車</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
