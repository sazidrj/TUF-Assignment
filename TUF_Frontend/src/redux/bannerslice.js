import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banner: [],
    isVisible: true,
  },
  reducers: {
    setBanner: (state, action) => {
      state.banner = action.payload;
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.value;
    },
  },
});

export const { setBanner, setIsVisible } = bannerSlice.actions;
export default bannerSlice.reducer;
