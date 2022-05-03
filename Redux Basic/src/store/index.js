import { configureStore } from "@reduxjs/toolkit";
import counterRducer from "./storeCounter";
import authReducer from "./storeAuth";

const store = configureStore({
  reducer: { counter: counterRducer, auth: authReducer },
});

export default store;
