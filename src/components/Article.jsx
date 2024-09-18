import { fetchData } from "../utils/fetchArticles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Article = () => {
  const [article, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchData(`/articles/${article_id}`).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div key={article.article_id} className="cards">
          <p>User: {article.author}</p>
          <img src={article.article_img_url}></img>
          <p>votes: {article.votes}</p>
          <p>title: {article.title}</p>
        </div>
      )}
    </>
  );
};
export default Article;
