import React from 'react';
import '../css/orders.css';
import imgComputer from "../img/img_computer.png";
import imgDelete from "../img/img_delete.png";
import MonthNameDisplay from "./MonthNameDisplay";
import {Button} from "react-bootstrap";

const ProductsItem = (props) => {
    const products = props.products;
    function deleteItem(item) {
        const blockModalShadow = document.querySelector('.block_modal_shadow');
        const blockProductsModal = document.querySelector('.block_products_modal');

        blockModalShadow.classList.add('activate');
        blockProductsModal.classList.add('activate');

        props.setId(item.id);
    }

    function renderingBlockDot(product) {
        let className = "block_dot ";

        if(product.isNew === 1) {
            className += "yellow";
        } else {
            className += "black";
        }

        return  <div className={className}></div>
    }

    function renderingTextState(product) {
        let className = "text_state ";
        let text = "";

        if(product.isNew === 1) {
            text = "свободен";
            className += "yellow";
        } else {
            className += "black";
            text = "В ремонте";
        }

        return <p className={className}>{text}</p>
    }

    function renderingGuaranteeDate(product) {
        let dateWith = product.guarantee.start;
        let dateBy = product.guarantee.end;

        let outDateWith = "";
        let outDateBy = "";

        const yearWith = dateWith.slice(0, dateWith.indexOf("-"));
        const monthWith = dateWith.slice(dateWith.indexOf("-") + 1).slice(0, dateWith.indexOf("-")-2);
        const dayWith = dateWith.slice(dateWith.indexOf("-") + 1).slice(dateWith.indexOf("-")-1, 5);
        outDateWith = dayWith + " / " + monthWith + " / " + yearWith;

        const yearBy = dateBy.slice(0, dateBy.indexOf("-"));
        const monthBy = dateBy.slice(dateBy.indexOf("-") + 1).slice(0, dateBy.indexOf("-")-2);
        const dayBy = dateBy.slice(dateBy.indexOf("-") + 1).slice(dateBy.indexOf("-")-1, 5);
        outDateBy = dayBy + " / " + monthBy + " / " + yearBy;

        return(
            <>
                <div className="block_guarantee_with">
                    <p className="text_with">с</p>
                    <p className="text_guarantee_with_date">{outDateWith}</p>
                </div>
                <div className="block_guarantee_by">
                    <p className="text_by">по</p>
                    <p className="text_guarantee_by_date">{outDateBy}</p>
                </div>
            </>
        )
    }

    function renderingUsedProduct(product) {
        if(product.isNew === 1) {
            return <p className="text">новый</p>
        } else {
            return <p className="text">Б / У</p>
        }
    }

    function outputPrice(product) {
        let topPrice = product.price[0].value;
        let bottomPrice = product.price[1].value;
        let topPriceSymbol;
        let bottomPriceSymbol;

        if(typeof topPriceSymbol !== "string") {
            topPriceSymbol = product.price[0].symbol;
            bottomPriceSymbol = product.price[1].symbol;
        }

        return(
            <>
                <p className="text_top_price">{topPrice} {topPriceSymbol}</p>
                <p className="text_bottom_price">{bottomPrice} {bottomPriceSymbol}</p>
            </>
        );
    }

    function renderingTitleGroup(product) {
        let text = "Длинное предлинное длиннючее название группы";

        return <p className="title_group_text">{text}</p>
    }

    function renderingTitleOrders(product) {
        return <p className="title_orders_text">{product.title}</p>
    }

    function outputDate(product) {
        const date = product.date;
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

    const listItems = products.map((item) =>
        <div className="block_item">
            {renderingBlockDot(item)}
            <img className="img_product" src={imgComputer} alt=""/>
            <div className="block_name">
                <p className="name">{item.title}</p>
                <p className="serial_number">{item.serialNumber}</p>
            </div>
            {renderingTextState(item)}
            <div className="block_guarantee">{renderingGuaranteeDate(item)}</div>
            <div className="block_used_product">{renderingUsedProduct(item)}</div>
            <div className="block_price">{outputPrice(item)}</div>
            <div className="block_title_group">{renderingTitleGroup(item)}</div>
            <div className="block_title_orders">{renderingTitleOrders(item)}</div>
            <div className="block_date">{outputDate(item)}</div>
            <div className="block_delete">
                <Button primary className="button_delete" onClick={() => deleteItem(item)}><img src={imgDelete} alt="delete"/></Button>
            </div>
        </div>
    );

    return (listItems);
};

export default ProductsItem;