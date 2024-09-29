import React, {useState} from 'react';
import '../css/orders.css';
import '../css/animations.css';
import OrdersItem from "../Components/OrdersItem";
import OrdersModalDelete from "../Components/OrdersModalDelete";
import OrderItem_ListProducts from "../Components/OrderItem_ListProducts";

const Orders = (props) => {
    const [id, setId] = useState('');
    const [orderId, setOrderId] = useState(0);
    const [activate, setActivate] = useState('');
    const [blockOrders_nameClass, setBlockOrders_nameClass] = useState('');
    const [listProducts_nameClass, setListProducts_nameClass] = useState('hide');
    const [title_nameClass, setTitle_nameClass] = useState('');
    const [blockPrice_nameClass, setBlockPrice_nameClass] = useState('');
    const [blockDelete_nameClass, setBlockDelete_nameClass] = useState('');
    const [countId, setCountId] = useState();
    const orders = props.orders;
    const products = props.products;
    const body = document.querySelector('body');
    body.style.background = "#ffffff";

    function addingOrders() {

    }

    function renderProducts(countItem, orderId) {
        setOrderId(orderId);
        setBlockOrders_nameClass('activate');
        setListProducts_nameClass('');
        setTitle_nameClass('hide');
        setBlockPrice_nameClass('hide');
        setBlockDelete_nameClass('hide');
    }

    return (
        <>
            <main className="main_orders">
                <div className={"block_orders " + blockOrders_nameClass} data-aos="clipRight">
                    <div className="block_top">
                        <div className="block_plus" onClick={addingOrders}>
                            <div className="plus">+</div>
                        </div>
                        <h1>Приходы / {orders.length}</h1>
                    </div>

                    <div className="block_list">
                        <OrdersItem
                            orders={orders}
                            setId={setId}
                            renderProducts={renderProducts}
                            setActivate={setActivate}
                            title_nameClass={title_nameClass}
                            blockPrice_nameClass={blockPrice_nameClass}
                            blockDelete_nameClass={blockDelete_nameClass}
                            countId={countId}
                            setCountId={setCountId}
                        />
                    </div>
                </div>

                <section className={"list_products " + listProducts_nameClass}>
                    <OrderItem_ListProducts
                        orders={orders}
                        products={products}
                        orderId={orderId}
                        setBlockOrders_nameClass={setBlockOrders_nameClass}
                        setListProducts_nameClass={setListProducts_nameClass}
                        setTitle_nameClass={setTitle_nameClass}
                        setBlockPrice_nameClass={setBlockPrice_nameClass}
                        setBlockDelete_nameClass={setBlockDelete_nameClass}
                        setCountId={setCountId}
                    />
                </section>

                <OrdersModalDelete orders={orders} id={id} setActivate={setActivate} activate={activate} />
            </main>
            <div className={"block_modal_shadow " + activate} onClick={() => {setActivate("");}}></div>
        </>
    );
}

export default Orders;