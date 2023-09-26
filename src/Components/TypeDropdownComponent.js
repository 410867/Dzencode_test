import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const TypeDropdownComponent = (props) => {
    function setTypeProduct(type) {
        props.setTypeProduct(type);
    }

    const products = props.products;
    let typeProducts = ["All"];

    if(props.typeProduct === "") {
        setTypeProduct(typeProducts[0]);
    }

    products.forEach((itemProduct) => {
        let check = true;

        typeProducts.forEach((itemTypeProduct) => {
            if(itemProduct.type === itemTypeProduct) {
                check = false;
            }
        });

        if(check) {
            typeProducts.push(itemProduct.type);
        }
    });

    function renderTypeProduct(item) {
        setTypeProduct(item);
    }

    function renderDropdownList(typeProducts) {
        return typeProducts.map((item) => {
            return(<Dropdown.Item as="button" onClick={() => {renderTypeProduct(item)}}>{item}</Dropdown.Item>)
        });
    }

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title={props.typeProduct}>
                {renderDropdownList(typeProducts)}
            </DropdownButton>
        </>
    );
};

export default TypeDropdownComponent;