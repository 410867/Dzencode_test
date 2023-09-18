import React, {useState} from 'react';
import '../css/orders.css';
import OrdersItem from "../Components/OrdersItem";
import OrdersModalDelete from "../Components/OrdersModalDelete";
import modalCloseOrders from "../js/modalCloseOrders";

const Orders = (props) => {
    const [id, setId] = useState('');

    const orders = props.orders;
    const body = document.querySelector('body');
    body.style.background = "#ffffff";

    function addingOrders() {

    }

    return (
        <>
            <main className="">
                <div className="block_orders">
                    <div className="block_top">
                        <div className="block_plus" onClick={addingOrders}>
                            <div className="plus">+</div>
                        </div>
                        <h1>Приходы / {orders.length}</h1>
                    </div>

                    <div className="block_list">
                        <OrdersItem orders={orders} setId={setId}/>
                    </div>
                </div>
                <OrdersModalDelete orders={orders} id={id} />
            </main>
            <div className="block_modal_shadow" onClick={modalCloseOrders}></div>
        </>
    );

}

export default Orders;