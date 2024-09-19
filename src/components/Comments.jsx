import { fetchComments } from "../utils/fetchComments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    fetchComments(`/articles/${article_id}/comments`).then((response) => {
      setComments(response);
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
