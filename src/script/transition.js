const subNav = document.querySelectorAll(".sub-nav a");
import "../css/navbar-index.css";
import "../css/hero.css";
import "../css/transition.css";

window.addEventListener("DOMContentLoaded", function () {
    const transitionOverlay = document.querySelector(".page-transition");
    const links = document.querySelectorAll("a");

    transitionOverlay.style.opacity = "0";
    setTimeout(() => {
        transitionOverlay.style.pointerEvents = "none";
    }, 500);

    links.forEach((link) => {
        if (
            link.getAttribute("href") &&
            !link.getAttribute("href").startsWith("#")
        ) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const href = this.getAttribute("href");

                transitionOverlay.style.opacity = "1";
                transitionOverlay.style.pointerEvents = "auto";

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });
});

if (window.innerWidth <= 1000) {
    subNav[2].setAttribute("href", "./html/pengajar-hp.html");
} else {
    subNav[2].setAttribute("href", "./html/pengajar-pc.html");
}

window.addEventListener("resize", function () {
    if (window.innerWidth <= 1000) {
        subNav[2].setAttribute("href", "./html/pengajar-hp.html");
    } else {
        subNav[2].setAttribute("href", "./html/pengajar-pc.html");
    }
});
