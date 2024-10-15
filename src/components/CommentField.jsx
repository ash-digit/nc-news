import { useState } from "react";
import { api } from "../utils/api";

const CommentField = () => {
  const [comment, setComment] = useState("");

  const fieldHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const changeHandler = (e) => {};
  return (
    <form onSubmit={fieldHandler} className="comment-field">
      <label htmlFor="comment-area">Your Comment:</label>
      <textarea
        onChange={changeHandler}
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
