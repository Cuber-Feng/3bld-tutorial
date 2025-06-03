function toggleMenu() {
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('show');
}

//close menu if clicking outside
window.addEventListener('click', function (e) {
  if (
    !e.target.closest('.dropdown-toggle') &&
    !e.target.closest('.dropdown-menu')
  ) {
    document.getElementById('dropdown-menu').classList.remove('show');
  }
});

