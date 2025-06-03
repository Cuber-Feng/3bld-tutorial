function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

// Optional: close menu if clicking outside
window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-toggle')) {
        document.getElementById('dropdown-menu').classList.remove('show');
    }
});