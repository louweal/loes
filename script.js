document.addEventListener("DOMContentLoaded", function(event) {

    // load skill ratings (only include on skill page!!)
    document.getElementById("skill-rating-html5").innerHTML = showRating(5);
    document.getElementById("skill-rating-css3").innerHTML = showRating(5);
    document.getElementById("skill-rating-js").innerHTML = showRating(3);
    document.getElementById("skill-rating-nodejs").innerHTML = showRating(2);
    document.getElementById("skill-rating-figma").innerHTML = showRating(3);
    document.getElementById("skill-rating-wordpress").innerHTML = showRating(4);
    document.getElementById("skill-rating-git").innerHTML = showRating(4);
    document.getElementById("skill-rating-photoshop").innerHTML = showRating(3);
    document.getElementById("skill-rating-illustrator").innerHTML = showRating(3);
    document.getElementById("skill-rating-react").innerHTML = showRating(0);
    document.getElementById("skill-rating-d3").innerHTML = showRating(2);
    document.getElementById("skill-rating-seo").innerHTML = showRating(3);
    document.getElementById("skill-rating-python").innerHTML = showRating(5);
});

function showRating(score) {
    if(score === 5) {
        return star(true) + star(true) + star(true) + star(true) + star(true) 
    }
    if(score === 4) {
        return star(true) + star(true) + star(true) + star(true) + star(false) 
    }
    if(score === 3) {
        return star(true) + star(true) + star(true) + star(false) + star(false) 
    }
    if(score === 2) {
        return star(true) + star(true) + star(false) + star(false) + star(false) 
    }
    if(score === 1) {
        return star(true) + star(false) + star(false) + star(false) + star(false) 
    }
    if(score === 0) {
        return star(false) + star(false) + star(false) + star(false) + star(false) 
    }
}

function star(bool) {
    if (bool) {
        return '<i class="fas fa-star"></i>'
    }
    return '<i class="far fa-star"></i>'
}

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

function showSkill(elem) {
    var skillIcon = elem.querySelector('.skill-icon');
    skillIcon.classList.add("hide");
    var skillData = elem.querySelector('.skill-data');
    skillData.classList.remove("hide");
}

function hideSkill(elem) {
    var skillIcon = elem.querySelector('.skill-icon');
    skillIcon.classList.remove("hide");
    var skillData = elem.querySelector('.skill-data');
    skillData.classList.add("hide");
}