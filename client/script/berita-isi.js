const chevronLeft = document.querySelector(".fa-chevron-left");
const chevronRight = document.querySelector(".fa-chevron-right");
const beritaIsi = document.querySelector(".berita-isi");

chevronLeft.addEventListener("click", () => {
    beritaIsi.scrollBy(-500, 0);
})

chevronRight.addEventListener("click", () => {
    beritaIsi.scrollBy(500, 0);
})