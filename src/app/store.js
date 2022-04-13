import { configureStore } from "@reduxjs/toolkit";
import { realstateApi } from "../services/api";

export const store = configureStore({
  reducer: { [realstateApi.reducerPath]: realstateApi.reducer },
});
