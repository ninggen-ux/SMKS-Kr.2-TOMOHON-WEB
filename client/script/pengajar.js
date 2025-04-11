const profilGuru = document.querySelector(".profil-guru-baru");
const guruNama = document.querySelectorAll(".profil-guru-content-nama-baru");
const guruImg = document.querySelectorAll("#profil-guru-content-image-baru");

const data = [
  {
    nama: "Stadi Dakhi, S.Pd, M.Teol",
    img: "../img guru/Stadi Dakhi/Stadi Dakhi.JPG",
    size: "normal",
  },
  {
    nama: "David Tumurang, S.Pd",
    img: "../img guru/David Tumurang/David Tumurang.JPG",
    size: "normal",
  },
  {
    nama: "Drs. Novrie Sumampouw",
    img: "../img guru/Novrie Sumampouw/Novrie Sumampouw.JPG",
    size: "big",
  },
  {
    nama: "Joula P.R. Togas, S.Pd, M.M",
    img: "../img guru/Joula Togas/Joula Togas.JPG",
    size: "normal",
  },
  {
    nama: "Supriadi Kaidun, S.Pd",
    img: "../img guru/Supriadi Kaidun/Supriadi Kaidun.JPG",
    size: "normal",
  },
];

const teachers = () => {
  data.forEach((data) => {
    profilGuru.innerHTML += `
        <a href="#">
          <div class="profil-guru-content-baru">
            <div class="profil-guru-content-image-container-baru">
              <img id="profil-guru-content-image-baru" src="${data.img}" alt="gambar guru" />
            </div>
            <h3 class="profil-guru-content-nama-baru" value="">${data.nama}</h3>
          </div>
        </a>
`;
  });
};

teachers();
