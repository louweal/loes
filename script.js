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

/*
function showProjectDetails(elem) {
    // adjust width of project
    elem.classList.toggle("expand");


    // keep techniques visible after hovering out: not working: change css property opacity of ul? 
    elem.querySelector('.project-info ul').style.opacity = '1';

    // show the project details
    var projectDetails = elem.querySelector('.project-details');
    projectDetails.classList.toggle("hide");
}

*/
