import React from 'react';
import '../css/topMenu.css';
import logo from "../img/logo.png";
import clock from "../img/clock.png";

import { Link, } from 'react-router-dom';

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
                    <div className="header_date">
                        06 Апр, 2017
                        {{/*new Date().toLocaleTimeString()*/}}
                        <img className="clock" src={clock} alt=""/>
                        17:20
                    </div>
                </div>
            </header>
        </>
    );
}
