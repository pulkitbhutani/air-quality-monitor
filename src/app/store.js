import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/cities/citiesSlice";
import cityReducer from "../features/cities/citySlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    city: cityReducer
  },
});
