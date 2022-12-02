const initialState = { cart: [] };

export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    //新增商品進入購物車
    case "ADD_CART": {
      const IteamIndex = state.cart.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.cart[IteamIndex].qnty += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }
    }
    //刪除單樣
    case "RMV_CART":
      const data = state.cart.filter((el) => el.id !== action.payload);
      // console.log(data);
      return {
        ...state,
        cart: data,
      };
    //增加單樣
    case "INCREMENT": {
      const IteamIndex = state.cart.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.cart[IteamIndex].qnty += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
    }
    //減少單樣
    case "DECREMENT": {
      const IteamIndex_dec = state.cart.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (state.cart[IteamIndex_dec].qnty >= 2) {
        const dltiteams = (state.cart[IteamIndex_dec].qnty -= 1);
        console.log([...state.cart, dltiteams]);

        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (state.cart[IteamIndex_dec].qnty === 1) {
        const data = state.cart.filter((el) => el.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }
    }
    //清空商品
    case "CLEAR": {
      return { ...state, cart: [] };
    }
    default:
      return state;
  }
};
