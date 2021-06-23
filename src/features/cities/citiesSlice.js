import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    updateCityAqi(state, action) {
      const { city, aqi } = action.payload;
      const existingCity = state.find((cityItem) => cityItem.city === city);

      if (existingCity) {
        existingCity.aqi = aqi;
        existingCity.updatedAt = new Date().toISOString();
      } else {
        const newCity = { city: city, aqi: aqi, updatedAt: new Date().toISOString() };
        return ([...state, newCity ]);
        //state.push({ city: city, aqi: aqi, updatedAt: new Date().toISOString() });
      }
    },
  },
});

export const { updateCityAqi } = citiesSlice.actions;

export default citiesSlice.reducer;
