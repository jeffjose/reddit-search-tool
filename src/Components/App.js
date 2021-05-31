import { useEffect, useState, useRef } from "react";
import "../styles/App.css";
import SearchForm from "./SearchForm";
import Items from "./Items";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
function App() {
  const [data, setData] = useState({
    username: false,
    subreddit: false,
    query: false,
    numReturned: false,
    score: false,
    before: false,
    after: false,
    searchTerm: false,
  });
  const [api, apiData] = useState([]);
  const [search, setSearch] = useState(true);
  const [more, setMore] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [settings, setSettings] = useState(false);

  const [errorMessage, setError] = useState();
  const error = useRef(null);
  let query = "";
  let type = "comment";
  let next = "";
  let before = "";
  let after = "";

  if (data.username) {
    query += "author=" + data.username + "&";
  }
  if (data.subreddit) {
    query += "subreddit=" + data.subreddit + "&";
  }
  if (data.searchTerm) {
    query += "q=" + data.searchTerm + "&";
  }
  if (data.numReturned) {
    query += "size=" + data.numReturned + "&";
  }

  if (data.query.length > 0) {
    type = data.query.toLowerCase().slice(0, -1);
  }

  if (data.before) {
    before += "before=" + Math.floor(data.before.getTime() / 1000) + "&";
    next = "";
  }
  if (data.after) {
    after += "after=" + Math.floor(data.after.getTime() / 1000) + "&";
  }
  if (data.score) {
    query += "score=>" + data.score + "&";
  }
  async function fetchData() {
    try {
      apiData([false]);

      const response = await fetch(
        `https://api.pushshift.io/reddit/search/${type}/?${query}${after}${before}${next}`
      );
      const data = await response.json();
      if (data.data.length === 0) {
        setError("Hey! That doesn't exist!");
        error.current.style.display = "block";
      } else {
        error.current.style.display = "none";
      }
      apiData(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  if (search === false) {
    fetchData();
    error.current.style.display = "none";

    setSearch(true);
  }

  if (more) {
    const utc = api.slice(-1)[0].created_utc;
    next += "before=" + utc + "&";
    before = "";
    after = "";

    fetchData();
    setMore(false);
  }
  function changeQuerySize() {
    setMinimize(true);
    if (minimize) {
      setMinimize(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="non-active"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="non-active"
                  exact
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  activeClassName="active"
                  className="non-active"
                  exact
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div id="search-form">
          <Switch>
            <Route path="/" exact>
              <div id="form-wrapper">
                <div className="panel-header">
                  <h2 id="search-min">
                    Search Query{" "}
                    <i
                      onClick={changeQuerySize}
                      class={`fa fa-${minimize ? "plus" : "minus"}-square`}
                      aria-hidden="true"
                    ></i>
                  </h2>
                </div>
                <SearchForm
                  minimize={minimize}
                  setSearch={setSearch}
                  search={search}
                  updateData={setData}
                  setMinimize={setMinimize}
                />
              </div>
              <br />
              <div id="items-parent">
                <Items
                  api={api}
                  query={data.query}
                  errorMessage={errorMessage}
                  error={error}
                  data={setData}
                  setMore={setMore}
                />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
