import { api } from "./api";
const commentSubmition = (comment, article_id, user) => {
  api(`/articles/${article_id}/comments`, "POST", {
    author: user,
    body: comment,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default commentSubmition;
