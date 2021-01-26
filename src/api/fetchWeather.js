import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5892f0ccde69d54a8c857d322a2094e9";

const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY
    }
  });
  return data;
};

export default fetchWeather;
