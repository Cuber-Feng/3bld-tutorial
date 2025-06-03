function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

//close menu if clicking outside
['click', 'touchstart'].forEach(eventName => {
    window.addEventListener(eventName, function (e) {
        if (!e.target.matches('.dropdown-toggle')) {
            document.getElementById('dropdown-menu').classList.remove('show');
        }
    });
});