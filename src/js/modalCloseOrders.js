const modalCloseOrders = () => {
    const blockModalShadow = document.querySelector('.block_modal_shadow');
    const blockOrdersModal = document.querySelector('.block_orders_modal');

    blockModalShadow.classList.remove('activate');
    blockOrdersModal.classList.remove('activate');
}

export default modalCloseOrders;