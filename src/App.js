import './css/App.css';
import React from "react";
import TopMenu from "./Header/TopMenu";
import LeftMenu from "./Header/LeftMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coming from "./Pages/Coming";
import Setting from "./Pages/Setting";
import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import {getOrders, getProducts} from "./Components/Repository";

function App() {
    const orders = getOrders();
    const product = getProducts();
  return (
      <Router>
          <TopMenu />
          <LeftMenu />
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/coming' element={<Coming orders={orders}/>} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/products' element={<Products orders={orders}/>} />
              <Route path='/users' element={<Users />} />
              <Route path='/setting' element={<Setting />} />
          </Routes>
      </Router>
  );
}

export default App;
