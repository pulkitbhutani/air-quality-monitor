import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCityAqi } from "./citiesSlice";
import { addAqiDataToSelectedCity } from "./citySlice";
import CityChart from "../../components/CityChart/CityChart";
import TableRow from "../../components/TableRow/TableRow";
import { CITY_AQI_WEB_SOCKET_URL } from "../../utility/constants";
import "./CitiesList.css";

export const CitiesList = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const selectedCity = useSelector((state) => state.city);

  useEffect(() => {
    let weatherSocket = new WebSocket(CITY_AQI_WEB_SOCKET_URL);
    weatherSocket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      for (let cityItem of newData) {
        dispatch(updateCityAqi(cityItem));
        dispatch(addAqiDataToSelectedCity(cityItem));
      }
    };
  }, [dispatch]);

  const renderedCities = cities.map((cityData, i) => (
    <TableRow key={i} cityData={cityData} />
  ));

  return (
    <section>
      <div className="header-title">
        <h2>Cities Data</h2>
      </div>
      <div>
        <table className="app-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Current AQI</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>{renderedCities}</tbody>
        </table>
      </div>
      <div className="data-chart">
        {selectedCity.city !== "" && <CityChart chartData={selectedCity} />}
      </div>
      )
    </section>
  );
};
