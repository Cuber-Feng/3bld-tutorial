// 加载 footer.html 到指定容器
fetch("../HTML/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });

fetch("../HTML/menu.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("menu-placeholder").innerHTML = data;
    });