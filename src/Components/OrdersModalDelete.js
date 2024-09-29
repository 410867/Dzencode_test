import React from 'react';
import {Button} from "react-bootstrap";
import imgComputer from "../img/img_computer.png";
import imgRedDelete from "../img/img_red_delete.png";

const OrdersModalDelete = (props) => {
    const orders = props.orders;
    const id = props.id;
    const setActivate = props.setActivate;
    const activate = props.activate;
    const order = orders.filter((item) => item.id === id);
    let name = "";

    if(order.length !== 0) {
        order.forEach((item) => {
            name = item.title;
        });
    }

    function deleteItem() {
        setActivate("");
    }

    return (
        <div className={"block_orders_modal " + activate}>
            <div className="block_text">
                <h2>Вы уверены, что хотите удалить этот приход?</h2>
            </div>
            <div className="block_information">
                <div className="block_indication"></div>
                <img src={imgComputer} alt="" />
                <div className="block_name">
                    <p className="top_name">{name}</p>
                </div>
            </div>
            <div className="block_button">
                <Button className="button_close" onClick={deleteItem}>ОТМЕНИТЬ</Button>
                <Button className="button_delete"><img src={imgRedDelete} alt=""/>УДАЛИТЬ</Button>
            </div>
            <Button className="button_plus_close" onClick={deleteItem}>+</Button>
        </div>
    );
};

export default OrdersModalDelete;