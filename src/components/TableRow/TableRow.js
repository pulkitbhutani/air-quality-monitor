import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectCity } from "../../features/cities/citySlice";
import {
  calculateTimeDiff,
  getAirQualityStandardColor,
} from "../../utility/utilityFunctions";

const TableRow = ({ cityData }) => {
  const { city, aqi, updatedAt } = cityData;
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(getAirQualityStandardColor(aqi));
  }, [aqi]);

  const onClickCity = () => {
    dispatch(selectCity(cityData));
  };

  return (
    <tr>
      <td>
        <button onClick={onClickCity}>{city}</button>
      </td>
      <td style={{ backgroundColor: color }}>{aqi.toFixed(2)}</td>
      <td>{calculateTimeDiff(updatedAt)}</td>
    </tr>
  );
};

export default TableRow;
