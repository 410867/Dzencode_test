import React from 'react';
import {Button} from "react-bootstrap";
import imgComputer from "../img/img_computer.png";
import imgRedDelete from "../img/img_red_delete.png";
import modalCloseProducts from "../js/modalCloseProducts";

const ProductsModalDelete = (props) => {
    const id = props.id;
    const product = props.products.filter((item) => item.id === id);
    let name = "";
    let serialNumber;

    if(product.length !== 0) {
        product.forEach((item) => {
            name = item.title;
            serialNumber = item.serialNumber;
        })
    }

    function renderingBlockDot() {
        let className = "block_indication ";

        if(product.length !== 0) {
            product.forEach((item) => {
                if(item.isNew === 1) {
                    className += "yellow";
                } else {
                    className += "black";
                }
            })
        }

        return  <div className={className}></div>
    }

    return (
        <div className="block_products_modal">
            <div className="block_text">
                <h2>Вы уверены, что хотите удалить этот продукт?</h2>
            </div>
            <div className="block_information">
                {renderingBlockDot()}
                <img src={imgComputer} alt="" />
                <div className="block_name">
                                        {/*<p className="top_name">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</p>*/}
                    <p className="top_name">{name}</p>
                    <p className="bottom_name">{serialNumber}</p>
                </div>
            </div>
            <div className="block_button">
                <Button className="button_close" onClick={modalCloseProducts}>ОТМЕНИТЬ</Button>
                <Button className="button_delete"><img src={imgRedDelete} alt=""/>УДАЛИТЬ</Button>
            </div>
            <Button className="button_plus_close" onClick={modalCloseProducts}>+</Button>
        </div>
    );
};

export default ProductsModalDelete;