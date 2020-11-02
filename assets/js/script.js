function showMenu(elem) {
    var menu = document.getElementById("menu");
    menu.classList.remove("hideOnDesktop");

    var menuIcon = document.getElementById("menu-icon");
    menuIcon.classList.add("hide");
}

function hideMenu(elem) {
    var menu = document.getElementById("menu");
    menu.classList.add("hideOnDesktop");

    var menuIcon = document.getElementById("menu-icon");
    menuIcon.classList.remove("hide");
}