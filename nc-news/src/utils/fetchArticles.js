import axios from "axios";

export const fetchArticles = (endPoint) => {
  return axios(
    `https://nc-news-project-s393.onrender.com/api/${endPoint}`
  ).then((response) => {
    return response;
  });
};
