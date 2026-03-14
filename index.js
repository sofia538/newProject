document.addEventListener('DOMContentLoaded', () => {

    // Связываем карточки с их попапами
    const cards = [
        { card: '.sofia', popup: '#popup-sofia' },
        { card: '.dad', popup: '#popup-vova' },
        { card: '.mommy', popup: '#popup-lenara' }
    ];

    cards.forEach(item => {
        const cardElement = document.querySelector(item.card);
        const popupElement = document.querySelector(item.popup);
        const closeBtn = popupElement.querySelector('.popup-close');

        // Открытие
        cardElement.addEventListener('click', () => {
            popupElement.classList.add('active');
        });

        // Закрытие по крестику
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            popupElement.classList.remove('active');
        });

        // Закрытие по клику на фон
        popupElement.addEventListener('click', (e) => {
            if (e.target === popupElement) {
                popupElement.classList.remove('active');
            }
        });
    });

});