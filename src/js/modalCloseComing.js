const modalCloseComing = () => {
    const blockModalShadow = document.querySelector('.block_modal_shadow');
    const blockComingModal = document.querySelector('.block_coming_modal');

    blockModalShadow.classList.remove('activate');
    blockComingModal.classList.remove('activate');
}

export default modalCloseComing;