import React, {useState} from 'react';
import '../css/orders.css';
import '../css/animations.css';
import OrdersItem from "../Components/OrdersItem";
import OrdersModalDelete from "../Components/OrdersModalDelete";
import modalCloseOrders from "../js/modalCloseOrders";
import OrderItem_ListProducts from "../Components/OrderItem_ListProducts";

const Orders = (props) => {
    const [id, setId] = useState('');
    const [orderId, setOrderId] = useState(0);

    const orders = props.orders;
    const products = props.products;
    const body = document.querySelector('body');
    body.style.background = "#ffffff";

    function addingOrders() {

    }

    function renderProducts(countItem, orderId) {
        const blockOrders = document.querySelector('.block_orders');
        const listProducts = document.querySelector('.list_products');
        const title = document.querySelectorAll('.block_item .name');
        const blockPrice = document.querySelectorAll('.block_item .block_price');
        const blockDelete = document.querySelectorAll('.block_item .block_delete');
        const blockProducts = document.querySelectorAll('.block_item .block_arrow');

        setOrderId(orderId);
        blockOrders.classList.add('activate');
        listProducts.classList.remove('hide');

        title.forEach((item) => {
            item.classList.add('hide');
        });
        blockPrice.forEach((item) => {
            item.classList.add('hide');
        });
        blockDelete.forEach((item) => {
            item.classList.add('hide');
        });
        blockProducts.forEach((item, count) => {
            item.classList.add('hide');
            if(count === countItem) {
                item.classList.remove('hide');
            }
        });

    }

    return (
        <>
            <main className="main_orders">
                <div className="block_orders" data-aos="clipRight">
                    <div className="block_top">
                        <div className="block_plus" onClick={addingOrders}>
                            <div className="plus">+</div>
                        </div>
                        <h1>Приходы / {orders.length}</h1>
                    </div>

                    <div className="block_list">
                        <OrdersItem orders={orders} setId={setId}  renderProducts={renderProducts}/>
                    </div>
                </div>

                <section className="list_products hide">
                    <OrderItem_ListProducts orders={orders} products={products} orderId={orderId}/>
                </section>

                <OrdersModalDelete orders={orders} id={id} />
            </main>
            <div className="block_modal_shadow" onClick={modalCloseOrders}></div>
        </>
    );
}

export default Orders;