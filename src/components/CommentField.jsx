import { useState } from "react";
import { api } from "../utils/api";

const CommentField = ({ a_id }) => {
  const [commentInTextField, setCommentInTextField] = useState("");

  const commentSubmition = (comment, article_id, user) => {
    console.log("submited with ", article_id);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    commentSubmition(commentInTextField, a_id, "grumpy19");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-field">
      <label htmlFor="comment-area">Your Comment:</label>
      <textarea
        onChange={(e) => setCommentInTextField(e.target.value)}
        id="comment-area"
        placeholder="Enter your comment here..."
        name="comment"
        rows="5"
        color="50"
        required
      ></textarea>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentField;
