import { useContext, useState } from "react";
import commentSubmition from "../utils/commentSubmition.js";
import { loginContext } from "../App";

const CommentField = ({ a_id, setCommentCreated }) => {
  const [commentInTextField, setCommentInTextField] = useState("");
  const [commentSubmitError, setCommentSubmitError] = useState(false);
  const user = useContext(loginContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentCreated(true);
    commentSubmition(
      commentInTextField,
      a_id,
      user.username,
      setCommentSubmitError
    );
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
      {commentSubmitError ? <p>Couldn't Submit</p> : <p></p>}
    </form>
  );
};

export default CommentField;
