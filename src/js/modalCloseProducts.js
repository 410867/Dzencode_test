const modalCloseProducts = () => {
    const blockModalShadow = document.querySelector('.block_modal_shadow');
    const blockOrdersModal = document.querySelector('.block_products_modal');

    blockModalShadow.classList.remove('activate');
    blockOrdersModal.classList.remove('activate');
}

export default modalCloseProducts;