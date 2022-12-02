// 新增商品
export const INS = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
// 移除商品
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

//增加數量
export const INCREMENT = (item) => {
  return {
    type: "INCREMENT",
    payload: item,
  };
};
//檢少數量
export const DECREMENT = (item) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};
//清空購物車
export const CLEAR = (item) => {
  return {
    type: "CLEAR",
    payload: item,
  };
};
