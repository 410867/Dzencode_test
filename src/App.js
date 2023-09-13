import './css/App.css';
import React, { Component } from "react";
import TopMenu from "./Header/TopMenu";
import LeftMenu from "./Header/LeftMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coming from "./Pages/Coming";
import Setting from "./Pages/Setting";
import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Products from "./Pages/Products";
import Users from "./Pages/Users";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render() {
    return (
        <Router>
            <TopMenu />
            <LeftMenu />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/coming' element={<Coming />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/products' element={<Products />} />
                <Route path='/users' element={<Users />} />
                <Route path='/setting' element={<Setting />} />
            </Routes>
        </Router>
    );
  }
}

export default App;
