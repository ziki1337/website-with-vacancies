document.addEventListener('DOMContentLoaded', () => {
    
    const popupLinks = document.querySelectorAll('.ashka');

    // forEach перебирает все элементы из ашки и находит ссылку
    popupLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const popupId = link.getAttribute('href').substring(1);

            const popup = document.getElementById(popupId);

            showPopup(popup);
        });
    });

    const closeButtons = document.querySelectorAll('.popup_area, .popup_close');

    // а тут forEach перебирает все из зон закрытия
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 

            const popup = button.closest('.popup');

            hidePopup(popup);
        });
    });

    function showPopup(popup) {
        if (popup) {
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';
        }
    }

    function hidePopup(popup) {
        if (popup) {
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
        }
    }
}
);