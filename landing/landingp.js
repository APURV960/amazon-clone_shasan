document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.querySelector('.popup-container');
    const closeButton = document.getElementById('close-btn');

    function closePopup() {
        popupContainer.style.display = 'none';
    }

    closeButton.addEventListener('click', closePopup);
});
