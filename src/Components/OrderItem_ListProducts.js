import React from 'react';
import '../css/orders.css';
import imgDelete from "../img/img_delete.png";
import {Button} from "react-bootstrap";
import {renderingBlockDot, renderingTextState} from "../js/functionsForProductRendering";

const OrderItem_ListProducts = (props) => {
    const order = props.orders.filter((item) => item.id === props.orderId);
    const products = props.products.filter((item) => item.order === props.orderId);

    function deleteItem(item) {}

    function closeListProducts() {
        const blockOrders = document.querySelector('.block_orders');
        const listProducts = document.querySelector('.list_products');
        const title = document.querySelectorAll('.block_item .name');
        const blockPrice = document.querySelectorAll('.block_item .block_price');
        const blockDelete = document.querySelectorAll('.block_item .block_delete');
        const blockProducts = document.querySelectorAll('.block_item .block_arrow');

        blockOrders.classList.remove('activate');
        listProducts.classList.add('hide');

        title.forEach((item) => {
            item.classList.remove('hide');
        });
        blockPrice.forEach((item) => {
            item.classList.remove('hide');
        });
        blockDelete.forEach((item) => {
            item.classList.remove('hide');
        });
        blockProducts.forEach((item) => {
            item.classList.add('hide');
        });
    }

    function renderListProducts() {
        if(products.length >= 1) {
            return products.map((item) =>
                <div className="block_item_product">
                    {renderingBlockDot(item)}
                    <img className="product_img" src={item.photo} alt=""/>
                    <div className="block_name">
                        <p className="name">{item.title}</p>
                        <p className="serial_number">{item.serialNumber}</p>
                    </div>
                    {renderingTextState(item)}
                    <div className="block_delete">
                        <Button primary className="button_delete" onClick={() => deleteItem(item)}><img src={imgDelete} alt="delete"/></Button>
                    </div>
                </div>
            );
        }
    }

    const orderTitle = order.map((item) => <h1 className="title">{item.title}</h1>);

    function addingProduct() {

    }

    return (
        <div className="block_list_products">
            {orderTitle}
            <Button className="button_adding_product" onClick={addingProduct}>
                <div className="block_plus">+</div>
                Добавить продукт
            </Button>
            {renderListProducts()}
            <Button className="button_plus_close" onClick={closeListProducts}>+</Button>
        </div>
    );
};

export default OrderItem_ListProducts;