import { fetchArticles } from "../utils/fetchArticles";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles("articles").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.article_id} className="cards">
            <p>User: {article.author}</p>
            <img src={article.article_img_url}></img>
            <p>votes: {article.votes}</p>
            <p>title: {article.title}</p>
          </div>
        );
      })}
    </>
  );
};
export default Articles;
