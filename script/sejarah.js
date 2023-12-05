const pimpinan = document.querySelector(".pimpinan");
const angles = document.querySelectorAll(".angles");

tombolKiriKanan = () => {
    angles[0].style.opacity = 1;
    angles[1].style.opacity = 1;
}

pimpinan.addEventListener("mouseover", tombolKiriKanan);
pimpinan.addEventListener("scroll", tombolKiriKanan);

pimpinan.addEventListener("mouseout", () => {
    angles[0].style.opacity = 0;
    angles[1].style.opacity = 0;
});

angles[0].addEventListener("click", () => {
    pimpinan.scrollBy(-100, 0);
});

angles[1].addEventListener("click", () => {
    pimpinan.scrollBy(100, 0);
});