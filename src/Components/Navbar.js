import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to='/coming' >
                    ПРИХОД
                </NavLink>
                <NavLink to='/groups'>
                    ГРУППЫ
                </NavLink>
                <NavLink to='/products'>
                    ПРОДУКТЫ
                </NavLink>
                <NavLink to='/users'>
                    ПОЛЬЗОВАТЕЛИ
                </NavLink>
                <NavLink to='/setting'>
                    НАСТРОЙКИ
                </NavLink>
            </NavMenu>
        </Nav>
    );
};


export default Navbar;