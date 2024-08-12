import { configureStore } from "@reduxjs/toolkit";
import bannerslice from "./bannerslice";

const store = configureStore({
  reducer: {
    banner: bannerslice,
  },
});

export default store;
