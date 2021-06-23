import { AIR_QUALITY_STANDARDS } from "./constants";

export const calculateTimeDiff = (timeString) => {
  let recievedTime = new Date(timeString);
  let currentTime = new Date();

  let seconds = (currentTime.getTime() - recievedTime.getTime()) / 1000;
  if (seconds < 60) {
    return "A few seconds ago";
  }
  if (seconds >= 60 && seconds <= 119) {
    return "A minute ago";
  } else {
    return `${recievedTime.getHours()}:${recievedTime.getSeconds()}`;
  }
};

export const formatTimeToHHMMSS = (timeString) => {
  const timeStamp = new Date(timeString);
  const timeFormat =
    timeStamp.getHours() +
    ":" +
    timeStamp.getMinutes() +
    ":" +
    timeStamp.getSeconds();

  return timeFormat;
};

export const getAirQualityStandardColor = (aqi) => {
  if (
    aqi >= AIR_QUALITY_STANDARDS.GOOD.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.GOOD.top
  ) {
    return AIR_QUALITY_STANDARDS.GOOD.color;
  }
  if (
    aqi >= AIR_QUALITY_STANDARDS.SATISFACTORY.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.SATISFACTORY.top
  ) {
    return AIR_QUALITY_STANDARDS.SATISFACTORY.color;
  }
  if (
    aqi >= AIR_QUALITY_STANDARDS.MODERATE.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.MODERATE.top
  ) {
    return AIR_QUALITY_STANDARDS.MODERATE.color;
  }
  if (
    aqi >= AIR_QUALITY_STANDARDS.POOR.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.POOR.top
  ) {
    return AIR_QUALITY_STANDARDS.POOR.color;
  }
  if (
    aqi >= AIR_QUALITY_STANDARDS.VERY_POOR.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.VERY_POOR.top
  ) {
    return AIR_QUALITY_STANDARDS.VERY_POOR.color;
  }
  if (
    aqi >= AIR_QUALITY_STANDARDS.SEVERE.bottom &&
    aqi <= AIR_QUALITY_STANDARDS.SEVERE.top
  ) {
    return AIR_QUALITY_STANDARDS.SEVERE.color;
  }
};
