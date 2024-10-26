import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { createContext } from "react";
import { Route } from "react-router-dom";
export const loginContext = createContext();
function App() {
  const user = { username: "grumpy19", loggedIn: true };
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
