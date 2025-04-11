const pimpinan = document.querySelector(".pimpinan");
const leftAngles = document.querySelector(".fa-angles-left");
const rightAngles = document.querySelector(".fa-angles-right");

leftAngles.addEventListener("click", () => {
    pimpinan.scrollBy(-500, 0);
});

rightAngles.addEventListener("click", () => {
    pimpinan.scrollBy(500, 0);
});