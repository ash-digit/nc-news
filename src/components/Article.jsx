import { api } from "../utils/api";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import CommentField from "./CommentField";

const Article = () => {
  const [displayComments, setDisplayComments] = useState(false);
  const [displayCommentField, setDisplayCommentField] = useState(false);
  const [votes, setVotes] = useState();
  const [article, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentCreated, setCommentCreated] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    api(`/articles/${article_id}`, "GET", null).then((article) => {
      setArticles(article);
      setIsLoading(false);
      setVotes(article.votes);
    });
  }, [article_id]);

  const commentHandler = () => {
    if (displayComments === false) {
      setDisplayComments(true);
    } else {
      setDisplayComments(false);
    }
  };

  const commentFieldHandler = () => {
    if (displayCommentField === false) {
      setDisplayCommentField(true);
    } else {
      setDisplayCommentField(false);
    }
  };

  const vote = (incVotes) => {
    setVotes((prevVotes) => prevVotes + incVotes);

    api(`/articles/${article_id}`, "PATCH", { inc_votes: incVotes })
      .then((updatedArticle) => {
        console.log("Article updated:", updatedArticle);
      })
      .catch((error) => {
        console.error("Error updating votes:", error);
        // Revert the vote change on error
        setVotes((prevVotes) => prevVotes - incVotes);
      });
  };

  const voteUpHandler = () => {
    vote(1);
  };

  const voteDownHandler = () => {
    vote(-1);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div key={article.article_id} className="cards">
            <p>User: {article.author}</p>
            <img src={article.article_img_url}></img>
            <p>votes: {votes}</p>
            <p>title: {article.title}</p>
            <button onClick={commentHandler}>Read Comments</button>
            <button onClick={voteUpHandler}>Vote Up</button>
            <button onClick={voteDownHandler}>Vote Down</button>
            <button onClick={commentFieldHandler}>Add a Comment</button>
          </div>
          {displayCommentField ? (
            <CommentField
              a_id={article_id}
              setCommentCreated={setCommentCreated}
            />
          ) : (
            <div></div>
          )}
          {displayComments ? (
            <Comments
              article_id={article_id}
              commentCreated={commentCreated}
              setCommentCreated={setCommentCreated}
            />
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
};
export default Article;
