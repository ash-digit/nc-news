import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { Route, Link, useLocation, Switch } from "react-router-dom";

import Product from "./components/Product";
import { useState } from "react";
function App() {
  let [articleId, setArticleId] = useState(null);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);

  return (
    <>
      <Header />
      <Dashboard />

      <Route path="/articles/">
        <Articles />
      </Route>

      <Route path="/article/:article_id">
        <Article />
      </Route>
    </>
  );
}

export default App;
