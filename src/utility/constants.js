export const CITY_AQI_WEB_SOCKET_URL = "ws://city-ws.herokuapp.com/";

export const AIR_QUALITY_STANDARDS = {
  GOOD: { bottom: 0, top: 50, color: 'green' },
  SATISFACTORY: { bottom: 51, top: 100, color: 'lightgreen' },
  MODERATE: { bottom: 101, top: 200, color: 'yellow' },
  POOR: { bottom: 201, top: 300, color: 'orange' },
  VERY_POOR: { bottom: 301, top: 400, color: 'red' },
  SEVERE: { bottom: 401, top: 500, color: 'darkred' },
};
