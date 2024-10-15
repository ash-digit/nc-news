import { api } from "../utils/api";
import { useState, useEffect } from "react";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

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
            </div>
          );
        })
      )}
    </>
  );
};
export default Comments;
