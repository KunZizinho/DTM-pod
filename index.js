
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navBar" + " card" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("myNavBar");
var sticky = nmyNavBar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        myNavBar.classList.add("sticky")
    } else {
        myNavBar.classList.remove("sticky");
    }
}
