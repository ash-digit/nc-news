import axios from "axios";

export const fetchData = (endPoint) => {
  const apiClient = axios.create({
    baseURL: "https://nc-news-project-s393.onrender.com/api",
    timeout: 1000,
  });
  return apiClient
    .get(endPoint)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
