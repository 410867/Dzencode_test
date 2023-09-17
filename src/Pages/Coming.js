import React, {useState} from 'react';
import '../css/coming.css';
import ComingItem from "../Components/ComingItem";
import ComingModalDelete from "../Components/ComingModalDelete";
import modalCloseComing from "../js/modalCloseComing";

const Coming = (props) => {
    const [id, setId] = useState('');

    const body = document.querySelector('body');
    body.style.background = "#ffffff";
    const orders = props.orders;

    function addingOrders() {

    }

/*    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    console.log(REACT_APP_API_URL);*/

    return (
        <>
            <main className="">
                <div className="block_coming">
                    <div className="block_top">
                        <div className="block_plus" onClick={addingOrders}>
                            <div className="plus">+</div>
                        </div>
                        <h1>Приходы / 25</h1>
                    </div>

                    <div className="block_list">
                        <ComingItem orders={orders} setId={setId}/>
                    </div>
                </div>
                <ComingModalDelete orders={orders} id={id} />
            </main>
            <div className="block_modal_shadow" onClick={modalCloseComing}></div>
        </>
    );

}

export default Coming;