import { useContext, useState } from "react";
import { api } from "../utils/api";
import commentSubmition from "../utils/commentSubmition.js";
import { loginContext } from "../App";

const CommentField = ({ a_id }) => {
  const [commentInTextField, setCommentInTextField] = useState("");
  const user = useContext(loginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    commentSubmition(commentInTextField, a_id, user.username);
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
