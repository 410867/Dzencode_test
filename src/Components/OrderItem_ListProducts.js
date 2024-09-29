import React from 'react';
import '../css/orders.css';
import imgDelete from "../img/img_delete.png";
import {Button} from "react-bootstrap";
import {renderingBlockDot, renderingTextState} from "../js/functionsForProductRendering";

const OrderItem_ListProducts = (props) => {
    const setBlockOrders_nameClass = props.setBlockOrders_nameClass;
    const setListProducts_nameClass = props.setListProducts_nameClass;
    const setTitle_nameClass = props.setTitle_nameClass;
    const setBlockPrice_nameClass = props.setBlockPrice_nameClass;
    const setBlockDelete_nameClass = props.setBlockDelete_nameClass;
    const setCountId = props.setCountId;
    const order = props.orders.filter((item) => item.id === props.orderId);
    const products = props.products.filter((item) => item.order === props.orderId);

    function deleteItem(item) {}

    function closeListProducts() {
        setBlockOrders_nameClass('');
        setListProducts_nameClass('hide');
        setTitle_nameClass('');
        setBlockPrice_nameClass('');
        setBlockDelete_nameClass('');
        setCountId(null);
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
                        <Button primary className="button_delete" onClick={() => deleteItem(item)}>
                            <img src={imgDelete} alt="delete"/>
                        </Button>
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