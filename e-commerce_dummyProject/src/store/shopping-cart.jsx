import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartCounter = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      if (state.counter > 0) {
        state.counter = state.counter - action.payload;
      }
    },
  },
});

const productWiseCount = createSlice({
  name: "productCount",
  initialState: { product: {} },
  reducers: {
    increment(state, action) {
      const productId = action.payload;
      if (state.product[productId]) {
        state.product[productId] = state.product[productId] + 1;
      } else {
        state.product[productId] = 1;
      }
    },
    decrement(state, action) {
      const productId = action.payload;
      if (state.product[productId] && state.product[productId] > 0) {
        state.product[productId] = state.product[productId] - 1;
      }
    },
  },
});
const notification = createSlice({
  name: "productInfo",
  initialState: { name: null, image: "", price: 0, quantity: 1, subtotal: 0 },
  reducers: {
    naming(state, action) {
      state.name = `"${action.payload}"`;
    },
    imaging(state, action) {
      state.image = `"${action.payload}"`;
    },
    pricing(state, action) {
      state.price = `$${action.payload}`;
    },
    quantify(state, action) {
      state.quantity = action.payload;
    },
    subtotalCalc(state, action) {
      state.subtotal = action.payload;
    },
  },
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    productlist: [],
  },
  reducers: {
    setProductsData: (state, action) => {
      state.productlist = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitems: [],
  },
  reducers: {
    addTocart: (state, action) => {
      state.cartitems.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    count: cartCounter.reducer,
    notify: notification.reducer,
    cartt: cartSlice.reducer,
    products: productSlice.reducer,
    productWiseCount: productWiseCount.reducer,
  },
});
export const noti = notification.actions;
export const counterActions = cartCounter.actions;
export const productwiseCount = productWiseCount.actions;
export const { setProductsData } = productSlice.actions;
export const { addTocart } = cartSlice.actions;
export default store;
