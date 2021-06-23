import React from "react";
import Chart from "react-google-charts";
import { formatTimeToHHMMSS } from "../../utility/utilityFunctions";

function CityChart({ chartData }) {
  const formatChardData = chartData.aqiData.map((item) => {
    const timeStamp = formatTimeToHHMMSS(item.updatedAt);
    return [timeStamp.toString(), item.aqi];
  });

  return (
    <Chart
      width={"700px"}
      height={"400px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={[["Time", "AQI"], ...formatChardData]}
      options={{
        chart: {
          title: `Live AQI Data for ${chartData.city}`,
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
}

export default CityChart;
