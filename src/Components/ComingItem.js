import React from 'react';
import '../css/coming.css';
import {Link} from "react-router-dom";
import imgProduct from "../img/img_product.png";
import imgDelete from "../img/img_delete.png";
import MonthNameDisplay from "./MonthNameDisplay";
import {Button} from "react-bootstrap";

const ComingItem = (props) => {
    function deleteItem(item) {
        const blockModalShadow = document.querySelector('.block_modal_shadow');
        const blockComingModal = document.querySelector('.block_coming_modal');

        blockModalShadow.classList.add('activate');
        blockComingModal.classList.add('activate');

        props.setId(item.id);

    }

    function findingNumberProducts(order) {
        return order.products.filter((item) => item.order === order.id).length;
    }

    function productsInOrder(order) {
        return order.products.filter((item) => item.order === order.id);
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

    /*    {
            id: 1,
            title: 'Order 1',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            get products () { return products }
        },

        {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                {value: 100, symbol: 'USD', isDefault: 0},
                {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
        }
        */

    const listItems = props.orders.map((item) =>
        <div className="block_item">
            <p className="name">{item.title}</p>
            <div className="block_product">
                <Link className="img_link" to="">
                    <div className="block_img_link"><img src={imgProduct} alt=""/></div>
                </Link>
                <div className="block_text">{findingNumberProducts(item)} <p className="text">Продукта</p></div>
            </div>
            <div className="block_date">{outputDate(item)}</div>
            <div className="block_price">
                {outputPrice(item)}
            </div>
            <div className="block_delete">
                <Button primary className="button_delete" onClick={() => deleteItem(item)}><img src={imgDelete} alt="delete"/></Button>
            </div>
        </div>
    );


    /*
        const listItems = props.list.map((item) =>
            <div className="block_item">
                <p className="name">{item.name}</p>
                <div className="block_product">
                    <Link className="img_link" to="/products">
                        <div className="block_img_link"><img src={imgProduct} alt=""/></div>
                    </Link>
                    <div className="block_text">{item.numberProduct} <p className="text">Продукта</p></div>
                </div>
                <div className="block_date">
                    <p className="text_top_date">{item.topDate}</p>
                    <p className="text_bottom_date">{item.bottomDate}</p>
                </div>
                <div className="block_price">
                    <p className="text_top_price">{item.topPrice} $</p>
                    <p className="text_bottom_price">{item.bottomPrice} UAH</p>
                </div>
                <div className="block_delete">
                    <Button primary className="button_delete" onClick={() => deleteItem(item)}><img src={imgDelete} alt="delete"/></Button>
                </div>
            </div>
        );
    */

    return (listItems);
};

export default ComingItem;