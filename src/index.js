const menu = document.querySelector('#menu');
const buger = document.querySelector('#burger');

buger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden');
    }
});