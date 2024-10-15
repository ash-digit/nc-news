import { api } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api("/articles", "GET", null).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article) => {
          return (
            <div key={article.article_id} className="cards">
              <p>User: {article.author}</p>
              <img src={article.article_img_url}></img>
              <p>votes: {article.votes}</p>
              <p>title: {article.title}</p>
              <Link to={`/article/${article.article_id}`}>
                <button>Read Article</button>
              </Link>
            </div>
          );
        })
      )}
    </>
  );
};
export default Articles;
