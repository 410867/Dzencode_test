import * as React from 'react';
import '../css/topMenu.css';
import logo from "../img/logo.png";

import { Link, } from 'react-router-dom';
import Time from "../Components/Time";

export default function TopMenu() {
    return (
        <>
            <header className="header">
                <div className="header_left">
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <input type="search" id="search" placeholder="Поиск" />
                </div>

                <div className="header_right">
                    <p className="text">Today</p>
                    <div className="header_date" id="header_date">
                        <Time />
                    </div>
                </div>
            </header>
        </>
    );
}
