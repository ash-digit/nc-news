import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Comments from "./components/Comments";

import { Route } from "react-router-dom";

function App() {
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

      <Route path="/article/:article_id/comments">
        <h2>Comments:</h2>
        <Comments />
      </Route>
    </>
  );
}

export default App;
