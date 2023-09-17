import React from 'react';
import {Button} from "react-bootstrap";
import imgComputer from "../img/img_computer.png";
import imgRedDelete from "../img/img_red_delete.png";
import modalCloseComing from "../js/modalCloseComing";

const ComingModalDelete = (props) => {
    const orders = props.orders;
    const id = props.id;
    const order = orders.filter((item) => item.id === id);
    let name = "";

    if(order.length !== 0) {
        order.forEach((item) => {
            name = item.title;
        })
    }

    return (
        <div className="block_coming_modal">
            <div className="block_text">
                <h2>Вы уверены, что хотите удалить этот приход?</h2>
            </div>
            <div className="block_information">
                <div className="block_indication"></div>
                <img src={imgComputer} alt="" />
                <div className="block_name">
{/*                    <p className="top_name">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</p>*/}
                    <p className="top_name">{name}</p>
                    <p className="bottom_name">SN-12.3456789</p>
                </div>
            </div>
            <div className="block_button">
                <Button className="button_close" onClick={modalCloseComing}>ОТМЕНИТЬ</Button>
                <Button className="button_delete"><img src={imgRedDelete} alt=""/>УДАЛИТЬ</Button>
            </div>
            <Button className="button_plus_close" onClick={modalCloseComing}>+</Button>
        </div>
    );
};

export default ComingModalDelete;