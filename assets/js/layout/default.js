function toggleMenu() {
    var mobilenav = document.getElementById("mobile-nav");

    if (mobilenav.className === "") {
        mobilenav.className += "visible";
    } else {
        mobilenav.className = "";
    }

    var icon = document.getElementsByClassName("fa");

    if (icon[0].className === "fa fa-bars") {
        icon[0].className = "fa fa-close";
    } else {
        icon[0].className = "fa fa-bars";
    }
}
