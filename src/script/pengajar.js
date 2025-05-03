const kepalaSekolah = document.querySelector(".kepala-sekolah");
const guruInti = document.querySelector(".guru-inti");
const guruUmum = document.querySelector(".guru-umum");

const headMaster = {
    nama: "Drs. Novrie Sumampouw",
    img: "../img guru/Novrie Sumampouw/Novrie Sumampouw.JPG",
    jabatan: "Kepala Sekolah",
    path: "#",
};

const vicePrincipal = [
    {
        nama: "Stadi Dakhi, S.Pd, M.Teol",
        img: "../img guru/Stadi Dakhi/Stadi Dakhi.JPG",
        jabatan: "Wakil Kepala Sekolah",
        path: "#",
    },
    {
        nama: "David Tumurang, S.Pd",
        img: "../img guru/David Tumurang/David Tumurang.JPG",
        jabatan: "Wakil Kepala Sekolah",
        path: "#",
    },
    {
        nama: "Joula P.R. Togas, S.Pd, M.M",
        img: "../img guru/Joula Togas/Joula Togas.JPG",
        jabatan: "Wakil Kepala Sekolah",
        path: "#",
    },
    {
        nama: "Supriadi Kaidun, S.Pd",
        img: "../img guru/Supriadi Kaidun/Supriadi Kaidun.JPG",
        jabatan: "Wakil Kepala Sekolah",
        path: "#",
    },
];

const teachers = [
    {
        nama: "Ariske Polii, S.Pd",
        img: "../img guru/Ariske Polii/Ariske Polii.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Christin Liuw, S.S, M.Pd",
        img: "../img guru/Christin Liuw/Christin Liuw.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Dirga Aror, S.Pd",
        img: "../img guru/Dirga Aror/Dirga Aror.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Ekoristio Suwandi, S.Pd, M.Pd",
        img: "../img guru/Ekoristio Suwandi/Ekoristio Suwandi.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Eldy Lengkong",
        img: "../img guru/Eldy Lengkong/Eldy Lengkong.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Geraldo Pangkerego, S.Pd",
        img: "../img guru/Geraldo Pangkerego/Geraldo Pangkerego.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Geraldy Welan, S.Pd",
        img: "../img guru/Geraldy Welan/Geraldy Welan.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Grace Suot, S.Pd",
        img: "../img guru/Grace Suot/Grace Suot.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Gratia Sumampouw, S.Pd",
        img: "../img guru/Gratia Sumampouw/Gratia Sumampouw.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Hasthee Wehantouw, S.Pd",
        img: "../img guru/Hasthee Wehantouw/Hasthee Wehantouw.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "John Ngantung",
        img: "../img guru/John Ngantung/John Ngantung.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Linda Rorong, S.Pd",
        img: "../img guru/Linda Rorong/Linda Rorong.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Liusye Kanter, SE",
        img: "../img guru/Liusye Kanter/Liusye Kanter.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Marsel Palit, S.Pd",
        img: "../img guru/Marsel Palit/Marsel Palit.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Maria Palit, S.Pd., MM",
        img: "../img guru/Maria Palit/Maria Palit.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Marina Lasut, S.Pd",
        img: "../img guru/Marina Lasut/Marina Lasut.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Merynda Timbuleng, S.Pd",
        img: "../img guru/Merynda Timbuleng/Merynda Timbuleng.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Meyti Rumokoy, S.Si",
        img: "../img guru/Meyti Rumokoy/Meyti Rumokoy.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Nancy Langi, S.Kep",
        img: "../img guru/Nancy Langi/Nancy Langi.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Ori Kainde, S.Kom",
        img: "../img guru/Ori Kainde/Ori Kainde.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Peggy Salaki, S.Pd",
        img: "../img guru/Peggy Salaki/Peggy Salaki.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Resita Manambing, S.Pd",
        img: "../img guru/Resita Manambing/Resita Manambing.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Riany Warouw",
        img: "../img guru/Riany Warouw/Riany Warouw.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Severalen Saruan, S.Farm",
        img: "../img guru/Severalen Saruan/Severalen Saruan.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Aryanti Shanti Manembu, S.Kep",
        img: "../img guru/Shanti Manembu/Shanti Manembu.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Sylvia Loupatty, S.Pd",
        img: "../img guru/Sylvia Loupatty/Sylvia Loupatty.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Dra. Sjulte Kaunang",
        img: "../img guru/Sjulte Kaunang/Sjulte Kaunang.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Sony Manopo, Ama.Te",
        img: "../img guru/Sony Manopo/Sony Manopo.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Synthia Lolaen, S.Pd",
        img: "../img guru/Synthia Lolaen/Synthia Lolaen.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Tafaogo Waruwu, S.Th",
        img: "../img guru/Tafaogo Waruwu/Tafaogo Waruwu.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Ventje Mamahit, A.Md",
        img: "../img guru/Ventje Mamahit/Ventje Mamahit.JPG",
        jabatan: "Guru",
        path: "#",
    },
    {
        nama: "Vicky Talahaturuson, S.Pd",
        img: "../img guru/Vicky Talahaturuson/Vicky Talahaturuson.JPG",
        jabatan: "Guru",
        path: "#",
    },
];

const teacherDisplay = () => {
    kepalaSekolah.innerHTML += `
    <a class="profil-guru-content kepala-sekolah-content">
      <img class="profil-guru-content-image" src="${headMaster.img}" alt="gambar guru" />
      <h5 class="profil-guru-content-nama">${headMaster.nama}</h5>
      <p class="profil-guru-content-jabatan">${headMaster.jabatan}</p>
    </a>
  `;

    vicePrincipal.forEach((data) => {
        guruInti.innerHTML += `
          <a class="profil-guru-content guru-inti-content">
            <img class="profil-guru-content-image" src="${data.img}" alt="gambar guru" />
            <h5 class="profil-guru-content-nama">${data.nama}</h5>
            <p class="profil-guru-content-jabatan">${data.jabatan}</p>
          </a>`;
    });

    teachers.forEach((data) => {
        guruUmum.innerHTML += `
          <a class="profil-guru-content">
            <img class="profil-guru-content-image" src="${data.img}" alt="gambar guru" />
            <h5 class="profil-guru-content-nama">${data.nama}</h5>
            <p class="profil-guru-content-jabatan">${data.jabatan}</p>
          </a>`;
    });
};

teacherDisplay();
