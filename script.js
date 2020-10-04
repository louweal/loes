document.addEventListener("DOMContentLoaded", function(event) {

});

function showMenu(elem) {
    var menu = document.getElementById("menu");
    menu.classList.remove("hide");

    var menuIcon = document.getElementById("menu-icon");
    menuIcon.classList.add("hide");
}

function hideMenu(elem) {
    var menu = document.getElementById("menu");
    menu.classList.add("hide");

    var menuIcon = document.getElementById("menu-icon");
    menuIcon.classList.remove("hide");
}