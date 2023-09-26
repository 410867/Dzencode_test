import React, {useState} from 'react';
import '../css/products.css';
import ProductsItem from "../Components/ProductsItem";
import modalCloseProducts from "../js/modalCloseProducts";
import ProductsModalDelete from "../Components/ProductsModalDelete";
import TypeDropdownComponent from "../Components/TypeDropdownComponent";
import SpecificationDropdownComponent from "../Components/SpecificationDropdownComponent";

const Products = (props) => {
    const [id, setId] = useState('');
    const [numberOfProducts, setNumberOfProducts] = useState(0);
    const [typeProduct, setTypeProduct] = useState('');
    const [specificationProduct, setSpecificationProduct] = useState('');
    const products = props.products;
    const body = document.querySelector('body');

    body.style.background = "#f0f3f5";

    //console.log(products);

    return (
        <>
            <main className="">
                <div className="block_products">
                    <div className="block_top">
                        <h1>Продукты / {numberOfProducts}</h1>
                        <div className="block_setting_lists">
                            <div className="block_products_type">
                                <p className="text">Тип:</p>
                                <div className="btn_group">
                                    <TypeDropdownComponent
                                        products={products}
                                        typeProduct={typeProduct}
                                        setTypeProduct={setTypeProduct}
                                    />
                                </div>
                            </div>
                            <div className="block_products_specification">
                                <p className="text">Спецификация:</p>
                                <div className="btn_group">
                                    <SpecificationDropdownComponent
                                        products={products}
                                        specificationProduct={specificationProduct}
                                        setSpecificationProduct={setSpecificationProduct}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block_list">
                        <ProductsItem
                            products={products}
                            setId={setId}
                            setNumberOfProducts={setNumberOfProducts}
                            typeProduct={typeProduct}
                            specificationProduct={specificationProduct}
                        />
                    </div>
                </div>
                <ProductsModalDelete products={products} id={id}/>
            </main>
            <div className="block_modal_shadow" onClick={modalCloseProducts}></div>
        </>
    );
};

export default Products;