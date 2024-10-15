import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Comments from "./components/Comments";
import { createContext, useState } from "react";
import { Route } from "react-router-dom";
export const loginContext = createContext();
function App() {
  const user = { username: "ash_digit", loggedIn: true };
  //const [loggedIn, setLoggedIn] = useState(user);
  return (
    <>
      <loginContext.Provider value={user}>
        <Header />
        <Dashboard />

        <Route path="/articles/">
          <Articles />
        </Route>

        <Route path="/article/:article_id">
          <Article />
        </Route>
      </loginContext.Provider>
    </>
  );
}

export default App;
