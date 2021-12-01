// scroll to top button:
let button = document.getElementById("totop");

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = scroll;

// navbar hamburger menu
function responsive() {
    let x = document.getElementById("responsive");
    if (x.className === "navbar-links") {
        x.className += " active";
    }
    else {
        x.className = "navbar-links"
    }
}