const guruInti = document.querySelector(".guru-inti");
const guruUmum = document.querySelector(".guru-umum");

const headTeachers = [
  {
    nama: "Stadi Dakhi, S.Pd, M.Teol",
    img: "../img guru/Stadi Dakhi/Stadi Dakhi.JPG",
  },
  {
    nama: "David Tumurang, S.Pd",
    img: "../img guru/David Tumurang/David Tumurang.JPG",
  },
  {
    nama: "Drs. Novrie Sumampouw",
    img: "../img guru/Novrie Sumampouw/Novrie Sumampouw.JPG",
  },
  {
    nama: "Joula P.R. Togas, S.Pd, M.M",
    img: "../img guru/Joula Togas/Joula Togas.JPG",
  },
  {
    nama: "Supriadi Kaidun, S.Pd",
    img: "../img guru/Supriadi Kaidun/Supriadi Kaidun.JPG",
  },
];

const teachers = [
  {
    nama: "Ariske Polii, S.Pd",
    img: "../img guru/Ariske Polii/Ariske Polii.JPG",
  },
  {
    nama: "Christin Liuw, S.S, M.Pd",
    img: "../img guru/Christin Liuw/Christin Liuw.JPG",
  },
  {
    nama: "Dirga Aror, S.Pd",
    img: "../img guru/Dirga Aror/Dirga Aror.JPG",
  },
  {
    nama: "Ekoristio Suwandi, S.Pd, M.Pd",
    img: "../img guru/Ekoristio Suwandi/Ekoristio Suwandi.JPG",
  },
  {
    nama: "Eldy Lengkong",
    img: "../img guru/Eldy Lengkong/Eldy Lengkong.JPG",
  },
  {
    nama: "Geraldo Pangkerego, S.Pd",
    img: "../img guru/Geraldo Pangkerego/Geraldo Pangkerego.JPG",
  },
  {
    nama: "Geraldy Welan, S.Pd",
    img: "../img guru/Geraldy Welan/Geraldy Welan.JPG",
  },
  {
    nama: "Grace Suot, S.Pd",
    img: "../img guru/Grace Suot/Grace Suot.JPG",
  },
  {
    nama: "Gratia Sumampouw, S.Pd",
    img: "../img guru/Gratia Sumampouw/Gratia Sumampouw.JPG",
  },
  {
    nama: "Hasthee Wehantouw, S.Pd",
    img: "../img guru/Hasthee Wehantouw/Hasthee Wehantouw.JPG",
  },
  {
    nama: "John Ngantung",
    img: "../img guru/John Ngantung/John Ngantung.JPG",
  },
  {
    nama: "Linda Rorong, S.Pd",
    img: "../img guru/Linda Rorong/Linda Rorong.JPG",
  },
  {
    nama: "Liusye Kanter, SE",
    img: "../img guru/Liusye Kanter/Liusye Kanter.JPG",
  },
  {
    nama: "Marsel Palit, S.Pd",
    img: "../img guru/Marsel Palit/Marsel Palit.JPG",
  },
  {
    nama: "Maria Palit, S.Pd., MM",
    img: "../img guru/Maria Palit/Maria Palit.JPG",
  },
  {
    nama: "Marina Lasut, S.Pd",
    img: "../img guru/Marina Lasut/Marina Lasut.JPG",
  },
  {
    nama: "Merynda Timbuleng, S.Pd",
    img: "../img guru/Merynda Timbuleng/Merynda Timbuleng.JPG",
  },
  {
    nama: "Meyti Rumokoy, S.Si",
    img: "../img guru/Meyti Rumokoy/Meyti Rumokoy.JPG",
  },
  {
    nama: "Nancy Langi, S.Kep",
    img: "../img guru/Nancy Langi/Nancy Langi.JPG",
  },
  {
    nama: "Ori Kainde, S.Kom",
    img: "../img guru/Ori Kainde/Ori Kainde.JPG",
  },
  {
    nama: "Peggy Salaki, S.Pd",
    img: "../img guru/Peggy Salaki/Peggy Salaki.JPG",
  },
  {
    nama: "Resita Manambing, S.Pd",
    img: "../img guru/Resita Manambing/Resita Manambing.JPG",
  },
  {
    nama: "Riany Warouw",
    img: "../img guru/Riany Warouw/Riany Warouw.JPG",
  },
  {
    nama: "Severalen Saruan, S.Farm",
    img: "../img guru/Severalen Saruan/Severalen Saruan.JPG",
  },
  {
    nama: "Aryanti Shanti Manembu, S.Kep",
    img: "../img guru/Shanti Manembu/Shanti Manembu.JPG",
  },
  {
    nama: "Sylvia Loupatty, S.Pd",
    img: "../img guru/Sylvia Loupatty/Sylvia Loupatty.JPG",
  },
  {
    nama: "Dra. Sjulte Kaunang",
    img: "../img guru/Sjulte Kaunang/Sjulte Kaunang.JPG",
  },
  {
    nama: "Sony Manopo, Ama.Te",
    img: "../img guru/Sony Manopo/Sony Manopo.JPG",
  },
  {
    nama: "Synthia Lolaen, S.Pd",
    img: "../img guru/Synthia Lolaen/Synthia Lolaen.JPG",
  },
  {
    nama: "Tafaogo Waruwu, S.Th",
    img: "../img guru/Tafaogo Waruwu/Tafaogo Waruwu.JPG",
  },
  {
    nama: "Ventje Mamahit, A.Md",
    img: "../img guru/Ventje Mamahit/Ventje Mamahit.JPG",
  },
  {
    nama: "Vicky Talahaturuson, S.Pd",
    img: "../img guru/Vicky Talahaturuson/Vicky Talahaturuson.JPG",
  },
];

const teacherDisplay = () => {
  headTeachers.forEach((data) => {
    guruInti.innerHTML += `
          <div class="profil-guru-content guru-inti-content">
            <a class="profil-guru-content-image-container">
                <img id="profil-guru-content-image" src="${data.img}" alt="gambar guru" />
            </a>
            <h3 class="profil-guru-content-nama">${data.nama}</h3>
          </div>`;
  });

  teachers.forEach((data) => {
    guruUmum.innerHTML += `
          <div class="profil-guru-content">
            <a class="profil-guru-content-image-container">
                <img id="profil-guru-content-image" src="${data.img}" alt="gambar guru" />
            </a>
            <h3 class="profil-guru-content-nama">${data.nama}</h3>
          </div>`;
  });
};

teacherDisplay();
