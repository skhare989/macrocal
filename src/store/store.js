import { configureStore } from "@reduxjs/toolkit";
import userInfoUpdate from "../reducers/userInfoUpdate";

export const store = configureStore({
  reducer: {
    userInfoUpdate,
  },
});
