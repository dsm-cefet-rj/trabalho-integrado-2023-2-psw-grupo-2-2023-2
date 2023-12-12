import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Form/LoginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer
  },
});

export default store;