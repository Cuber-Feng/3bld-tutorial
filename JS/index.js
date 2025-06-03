function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

//close menu if clicking outside
['click', 'touchstart'].forEach(eventName => {
  window.addEventListener(eventName, function (e) {
    // 如果点击的既不是按钮，也不是菜单内部，就关闭
    if (
      !e.target.closest('.dropdown-toggle') &&
      !e.target.closest('.dropdown-menu')
    ) {
      document.getElementById('dropdown-menu').classList.remove('show');
    }
  });
});
