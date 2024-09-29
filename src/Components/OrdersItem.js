import React, {useState} from 'react';
import '../css/orders.css';
import imgProduct from "../img/img_product.png";
import imgDelete from "../img/img_delete.png";
import MonthNameDisplay from "./MonthNameDisplay";
import {Button} from "react-bootstrap";

const OrdersItem = (props) => {
    const setActivate = props.setActivate;
    const title_nameClass = props.title_nameClass;
    const blockPrice_nameClass = props.blockPrice_nameClass;
    const blockDelete_nameClass = props.blockDelete_nameClass;
    const renderProducts = props.renderProducts;
    const countId = props.countId;
    const setCountId = props.setCountId;

    function deleteItem(item) {
        setActivate("activate");
        props.setId(item.id);
    }

    function findingNumberProducts(order) {
        return order.products.filter((item) => item.order === order.id).length;
    }

    function outputDate(order) {
        const date = order.date;
        let topDate = "";
        let bottomDate = "";

        const year = date.slice(0, date.indexOf("-"));
        const month = date.slice(date.indexOf("-") + 1).slice(0, date.indexOf("-")-2);
        const day = date.slice(date.indexOf("-") + 1).slice(date.indexOf("-")-1, 5);

        topDate = month + " / " + year.slice(2, year.length);

        bottomDate = day + " / ";
        if(month.slice(0, 1) === "0") {
            bottomDate += MonthNameDisplay(Number(month.slice(1)));
        } else {
            bottomDate += MonthNameDisplay(Number(month));
        }
        bottomDate = bottomDate + " / "  + year;

        return(
            <>
                <p className="text_top_date">{topDate}</p>
                <p className="text_bottom_date">{bottomDate}</p>
            </>
        );
    }

    function productsInOrder(order) {
        return order.products.filter((item) => item.order === order.id);
    }

    function outputPrice(order) {
        const products = productsInOrder(order);
        let topPrice = 0;
        let bottomPrice = 0;
        let topPriceSymbol;
        let bottomPriceSymbol;

        products.forEach((item) => {
            topPrice += item.price[0].value;
            bottomPrice += item.price[1].value;

            if(typeof topPriceSymbol !== "string") {
                topPriceSymbol = item.price[0].symbol;
                bottomPriceSymbol = item.price[1].symbol;
            }
        });

        return(
            <>
                <p className="text_top_price">{topPrice} {topPriceSymbol}</p>
                <p className="text_bottom_price">{bottomPrice} {bottomPriceSymbol}</p>
            </>
        );
    }

    const listItems = props.orders.map((item, count) =>
        <div className="block_item" key={count}>
            <section>
                <p className={"name " + title_nameClass}>{item.title}</p>
                <div className="block_product">
                    <Button className="img_button" onClick={() => {renderProducts(count, item.id); setCountId(count)}}>
                        <img src={imgProduct} alt=""/>
                    </Button>
                    <div className="block_text">{findingNumberProducts(item)} <p className="text">Продукта</p></div>
                </div>
                <div className="block_date">{outputDate(item)}</div>
                <div className={"block_price " + blockPrice_nameClass}>
                    {outputPrice(item)}
                </div>
                <div className={"block_delete " + blockDelete_nameClass}>
                    <Button primary className="button_delete" onClick={() => deleteItem(item)}>
                        <img src={imgDelete} alt="delete"/>
                    </Button>
                </div>
            </section>
            <div className={`block_arrow ${count === countId ? "" : "hide"}`}><p>></p></div>
        </div>
    );

    return (listItems);
};

export default OrdersItem;