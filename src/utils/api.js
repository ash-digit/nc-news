// import axios from "axios";

// export const api = (endPoint) => {
//   const apiClient = axios.create({
//     baseURL: "https://nc-news-project-s393.onrender.com/api",
//     timeout: 1000,
//   });
//   return apiClient
//     .get(endPoint)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

import axios from "axios";

export const api = (endPoint, method = "GET", data = null) => {
  const apiClient = axios.create({
    baseURL: "https://nc-news-project-s393.onrender.com/api",
    timeout: 1000,
  });

  return apiClient({
    method: method,
    url: endPoint,
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
