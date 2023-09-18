import './css/App.css';
import React, {Component} from "react";
import TopMenu from "./Header/TopMenu";
import LeftMenu from "./Header/LeftMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from "./Pages/Orders";
import Setting from "./Pages/Setting";
import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const urlOrders = REACT_APP_API_URL + "/orders";
const urlProducts = REACT_APP_API_URL + "/products";

class App extends Component {
    state = {
        orders: [],
        products: []
    }

    componentDidMount() {
        axios.get(urlOrders)
            .then(res => {
                const orders = res.data;
                this.setState({ orders });
            });

        axios.get(urlProducts)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            });
    }

    render() {
        return (
            <Router>
                <TopMenu/>
                <LeftMenu/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/orders' element={<Orders orders={this.state.orders}/>}/>
                    <Route path='/groups' element={<Groups/>}/>
                    <Route path='/products' element={<Products orders={this.state.orders} products={this.state.products}/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
