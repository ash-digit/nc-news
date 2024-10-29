import { api } from "../utils/api";
import { useState, useEffect, useContext } from "react";
import { loginContext } from "../App";

const Comments = ({ article_id, commentCreated, setCommentCreated }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [deleteError, setdeleteError] = useState(false);
  const user = useContext(loginContext);

  const deleteComment = (id) => {
    api(`/comments/${id}`, "DELETE")
      .then(() => {
        setCommentDeleted(true);
      })
      .catch(() => {
        setdeleteError(true);
      });
  };

  useEffect(() => {
    api(`/articles/${article_id}/comments`, "GET", null).then((comments) => {
      setComments(comments);
      setCommentDeleted(false);
      setCommentCreated(false);
      setIsLoading(false);
    });
  }, [commentDeleted, commentCreated]);
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
              {deleteError ? <p>Couldn't Delete.</p> : <p></p>}
            </div>
          );
        })
      )}
    </>
  );
};
export default Comments;
