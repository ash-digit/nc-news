import { api } from "../utils/api";
import { useState, useEffect, useContext } from "react";
import { loginContext } from "../App";
const deleteComment = (id) => {
  api(`/comments/${id}`, "DELETE")
    .then((response) => {
      console.log(`comment with ID: ${id} is deleted.`);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const user = useContext(loginContext);
  useEffect(() => {
    api(`/articles/${article_id}/comments`, "GET", null).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment">
              <p>Author: {comment.author}</p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              {user.username === comment.author ? (
                <button onClick={() => deleteComment(comment.comment_id)}>
                  Delete Comment
                </button>
              ) : (
                <div></div>
              )}
            </div>
          );
        })
      )}
    </>
  );
};
export default Comments;
