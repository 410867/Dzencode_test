import React, {useState} from 'react';
import '../css/products.css';
import ProductsItem from "../Components/ProductsItem";
import modalCloseProducts from "../js/modalCloseProducts";
import ProductsModalDelete from "../Components/ProductsModalDelete";

const Products = (props) => {
    const [id, setId] = useState('');
    const products = props.products;
    const body = document.querySelector('body');
    body.style.background = "#f0f3f5";

    return (
        <>
            <main className="">
                <div className="block_products">
                    <div className="block_top">
                        <h1>Продукты / {products.length}</h1>
                        <div className="block_setting_lists"></div>
                    </div>
                    <div className="block_list">
                        <ProductsItem products={products} setId={setId}/>
                    </div>
                </div>
                <ProductsModalDelete products={products} id={id}/>
            </main>
            <div className="block_modal_shadow" onClick={modalCloseProducts}></div>
        </>
    );
};

export default Products;