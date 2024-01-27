const kalenderPendidikan = document.querySelector(".kalender-pendidikan");

document.addEventListener("DOMContentLoaded", () => {
    alert("Website ini masih dalam pengembangan. Jika anda menemukan suatu hal yang kurang, bug, element yang tidak berada di tempat semestinya ataupun saran silahkan menuju kelink ini: https://docs.google.com/forms/d/e/1FAIpQLScgID0TlWs5ggSDzSXfEuOb2wNHmGfViX9LacwoD94SzzvviQ/viewform?usp=sf_link");
});

kalenderPendidikan.addEventListener("click", () => {
    const persetujuan = window.confirm("Anda Akan Mendowload Kalender Pendidikan SMKS Kristen 2 Tomohon Semester Genap (Januari - Juni 2024) Tahun Pelajaran 2023-2024");
    
    if (persetujuan) {
        window.location.href = "../document/KALDIK SMKS KR2 TOMOHON JANUARI-JUNI 2024.docx";
    } else {
        console.log("user tidak setuju");
    }
});

