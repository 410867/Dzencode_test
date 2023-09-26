import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const SpecificationDropdownComponent = (props) => {
    function setSpecificationProduct(type) {
        props.setSpecificationProduct(type);
    }
    const products = props.products;
    let specificationProducts = ["All"];

    if(props.specificationProduct === "") {
        setSpecificationProduct(specificationProducts[0]);
    }

    products.forEach((itemProduct) => {
        let check = true;

        specificationProducts.forEach((itemSpecificationProduct) => {
            if(itemProduct.specification === itemSpecificationProduct) {
                check = false;
            }
        });

        if(check) {
            specificationProducts.push(itemProduct.specification);
        }
    });

    function renderSpecificationProduct(item) {
        setSpecificationProduct(item);
    }

    function renderDropdownList(typeProducts) {
        return typeProducts.map((item) => {
            return(<Dropdown.Item as="button" onClick={() => {renderSpecificationProduct(item)}}>{item}</Dropdown.Item>)
        });
    }

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title={props.specificationProduct}>
                {renderDropdownList(specificationProducts)}
            </DropdownButton>
        </>
    );
};

export default SpecificationDropdownComponent;