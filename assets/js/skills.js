document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("skill-rating-html5").innerHTML = showRating(4);
    document.getElementById("skill-rating-css3").innerHTML = showRating(4);
    document.getElementById("skill-rating-js").innerHTML = showRating(3);
    document.getElementById("skill-rating-nodejs").innerHTML = showRating(3);
    document.getElementById("skill-rating-figma").innerHTML = showRating(3);
    document.getElementById("skill-rating-wordpress").innerHTML = showRating(3);
    document.getElementById("skill-rating-git").innerHTML = showRating(4);
    document.getElementById("skill-rating-photoshop").innerHTML = showRating(3);
    document.getElementById("skill-rating-illustrator").innerHTML = showRating(3);
    document.getElementById("skill-rating-react").innerHTML = showRating(3);
    document.getElementById("skill-rating-d3").innerHTML = showRating(3);
    document.getElementById("skill-rating-seo").innerHTML = showRating(3);
    document.getElementById("skill-rating-python").innerHTML = showRating(5);
    document.getElementById("skill-rating-php").innerHTML = showRating(3);
    document.getElementById("skill-rating-mysql").innerHTML = showRating(3);

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
    return "";
}

function star(bool) {
    if (bool) {
        return '<i class="fas fa-star"></i>' // solid star
    }
    return '<i class="far fa-star"></i>' // empty star
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