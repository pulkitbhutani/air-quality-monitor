import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  aqiData: [],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    selectCity(state, action) {
      const { city, aqi, updatedAt } = action.payload;
      const currentCity = state.city;
      console.log(state);

      if (city === currentCity) {
        const newState = {
          city: city,
          aqiData: [...state.aqiData],
        };
        return newState;
      } else {
        const newState = {
          city: city,
          aqiData: [{ aqi: aqi, updatedAt: updatedAt }],
        };
        return newState;
      }
    },
    addAqiDataToSelectedCity(state, action) {
      const { city, aqi } = action.payload;
      const currentCity = state.city;
      const updatedAt = new Date().toISOString();

      if (currentCity === city) {
        const newState = {
          city: city,
          aqiData: [...state.aqiData, { aqi: aqi, updatedAt: updatedAt }],
        };

        return newState;
      }
    },
  },
});

export const { selectCity, addAqiDataToSelectedCity } = citySlice.actions;

export default citySlice.reducer;
