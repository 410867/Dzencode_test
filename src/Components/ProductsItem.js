import React from 'react';
import '../css/orders.css';
import imgDelete from "../img/img_delete.png";
import {Button} from "react-bootstrap";
import {
    outputDate,
    outputPrice,
    renderingBlockDot,
    renderingGuaranteeDate,
    renderingTextState,
    renderingTitleGroup,
    renderingTitleOrders,
    renderingUsedProduct
} from "../js/functionsForProductRendering";

const ProductsItem = (props) => {
    const products = props.products;
    const typeProduct = props.typeProduct;
    const specificationProduct = props.specificationProduct;
    const setNumberOfProducts = props.setNumberOfProducts;

    setNumberOfProducts(products.length);

    function deleteItem(item) {
        const blockModalShadow = document.querySelector('.block_modal_shadow');
        const blockProductsModal = document.querySelector('.block_products_modal');

        blockModalShadow.classList.add('activate');
        blockProductsModal.classList.add('activate');

        props.setId(item.id);
    }

    function renderItem(item) {
        return (
            <div className="block_item">
                {renderingBlockDot(item)}
                <img className="img_product" src={item.photo} alt=""/>
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
        )
    }

    if(typeProduct==="All" && specificationProduct==="All") {
        const listItems = products.map((item) =>
            renderItem(item)
        );
        return (listItems);
    } else {
        const listItems = products
            .filter((item) =>
                (item.type === typeProduct && item.specification === specificationProduct)
                || (typeProduct === "All" && item.specification === specificationProduct)
                || (item.type === typeProduct && specificationProduct === "All"))
            .map((item) =>
                renderItem(item)
            );
        setNumberOfProducts(
            products
                .filter((item) =>
                    (item.type === typeProduct && item.specification === specificationProduct)
                    || (typeProduct === "All" && item.specification === specificationProduct)
                    || (item.type === typeProduct && specificationProduct === "All"))
                .length
        )
        return (listItems);
    }
};

export default ProductsItem;