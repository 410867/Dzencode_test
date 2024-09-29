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
//import axios from "axios";
import orders from "./data/orders";
import products from "./data/products";

/*const API_URL = "http://178.128.194.150:8000";
const urlOrders = API_URL + "/orders";
const urlProducts = API_URL + "/products";
console.log(urlOrders);
console.log(urlProducts);*/

class App extends Component {
    state = {
        orders: [],
        products: []
    }

    componentDidMount() {
        this.setState({ products });
        this.setState({ orders });
/*        axios.get(urlOrders)
            .then(res => {
                const orders = res.data;
                console.log(orders);
                this.setState({ orders });
            });

        axios.get(urlProducts)
            .then(res => {
                const products = res.data;
                console.log(products);
                this.setState({ products });
            });*/
    }

    render() {
        return (
            <Router>
                <TopMenu />
                <LeftMenu />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/orders' element={<Orders orders={this.state.orders} products={this.state.products} />} />
                    <Route path='/groups' element={<Groups />} />
                    <Route path='/products' element={<Products orders={this.state.orders} products={this.state.products} />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/setting' element={<Setting />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
