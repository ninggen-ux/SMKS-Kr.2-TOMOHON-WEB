const kalenderPendidikan = document.querySelector(".kalender-pendidikan");

kalenderPendidikan.addEventListener("click", () => {
    const persetujuan = window.confirm("Anda Akan Mendowload Kalender Pendidikan SMKS Kristen 2 Tomohon Semester Genap (Januari - Juni 2024) Tahun Pelajaran 2023-2024");
    
    if (persetujuan) {
        window.location.href = "../document/KALDIK SMKS KR2 TOMOHON JANUARI-JUNI 2024.docx";
    } else {
        console.log("user tidak setuju");
    }
});

