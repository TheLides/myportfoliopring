document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < 3; i++) {
        let card = document.querySelector('.myCardCol').cloneNode(true);
        let parent = document.querySelector('.myCardCol').parentNode;
        parent.appendChild(card);
    }

});