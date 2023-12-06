const fasilitasItem = document.querySelectorAll(".fasilitas__item");
const fasilitasItemContenGambar = document.querySelectorAll(".fasilitas__item__conten__gambar");
const faAnglesLeft = document.querySelectorAll(".fa-angles-left");
const faAnglesRight = document.querySelectorAll(".fa-angles-right");
const angles = document.querySelectorAll(".angles");

fasilitasItem.forEach(item => {
    item.addEventListener("mouseover", () => {
        angles.forEach(angle => {
            angle.style.opacity = 1;
        })
    })
})

fasilitasItem.forEach(item => {
    item.addEventListener("mouseout", () => {
        angles.forEach(angle => {
            angle.style.opacity = 0;
        })
    })
})

faAnglesLeft.forEach(left => {
    left.addEventListener("click", () => {
        fasilitasItemContenGambar.forEach(item => {
            item.scrollBy(-500, 0);
        })
    })
})

faAnglesRight.forEach(right => {
    right.addEventListener("click", () => {
        fasilitasItemContenGambar.forEach(item => {
            item.scrollBy(500, 0);
        })
    })
})