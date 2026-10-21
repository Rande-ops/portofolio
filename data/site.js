/*
  ===========================================================
  ISI WEBSITE — EDIT FILE INI SAJA
  ===========================================================
  Semua teks, proyek, pengalaman, dan galeri di website diambil
  dari file ini. Untuk menambah pengalaman/proyek baru:
  salin satu blok { ... }, tempel di daftar yang sama, lalu ubah isinya.

  Aturan penting:
  - Setiap blok dipisah koma.
  - Teks ditulis di antara tanda kutip "...".
  - Gambar baru: taruh file di folder img/, lalu tulis "img/nama-file.webp".
  - Kosongkan link dengan "" kalau belum ada.
  Panduan lengkap ada di README.md.
*/

window.SITE = {
  profile: {
    name: "Engelbertus Rande",
    nickname: "Omen",
    role: "AR engineer dan 3D modeler",
    location: "Yogyakarta",
    intro:
      "Saya membangun aplikasi AR dan VR, menyiapkan aset 3D yang siap dipakai di aplikasi, dan mendesain antarmukanya sampai jadi.",
    email: "barkeromen@gmail.com",
    // phone: "081215276343",
    linkedin: "https://www.linkedin.com/in/engelbertus-rande-7baa42196/",
    sketchfab: "https://sketchfab.com/barkeromen/models",
    github: "https://github.com/Rande-ops",
    cv: "files/CV-Engelbertus-Rande.pdf",
    photo: "img/avatar.webp",
    heroImage: "img/bravo-3d.webp",
    heroAlt: "Render 3D pesawat Bravo AS 202 di atas landasan, dibuat di Blender"
  },

  /* Proyek aplikasi. Urutan di sini = urutan di halaman. */
  projects: [
    {
      name: "Navigasi Indoor AR",
      kind: "AR · Unity",
      place: "PT Kualitas Teknologi Asia",
      image: "", // kosong = gambar denah rute digambar otomatis
      alt: "Denah gedung dengan rute navigasi AR",
      desc: "Aplikasi navigasi di dalam gedung. Unity dan Vuforia Area Target mengenali ruangan, lalu rute ditampilkan di atas kamera dan tersambung ke server lokal.",
      tools: ["Unity 3D", "Vuforia Area Target", "C#"],
      link: "https://youtube.com/shorts/zaFj0sudm5w?si=7GOVcinWK26pgtD8",
      linkLabel: "Tonton demo"
    },
    {
      name: "Tur Perpustakaan",
      kind: "Virtual tour",
      place: "ITDA",
      image: "img/tour.webp",
      alt: "Tampilan virtual tour ruang perpustakaan ITDA",
      desc: "Virtual tour Perpustakaan ITDA dari gambar panorama: depan perpus, resepsionis, ruang baca lantai 1 dan 2, sampai ruang arsip, tanpa harus datang ke sana.",
      tools: ["3D Vista", "Blender", "Figma", "Photoshop"],
      link: "https://rande-ops.github.io/test-perpustakaan.github.io/",
      linkLabel: "Buka tur"
    },
    {
      name: "Pesawat Bravo",
      kind: "AR · Image Target",
      place: "Pesawat Bravo AS 202",
      image: "img/bravo-ar.webp",
      alt: "Aplikasi AR menampilkan model pesawat Bravo dengan daftar komponen",
      desc: "Komponen pesawat latih Bravo AS 202 dalam AR: pindai, pilih komponen dari daftar (propeller, landing gear, wings, fuselage, aileron), dan baca detailnya.",
      tools: ["Unity 3D", "Blender", "Figma", "Canva", "C#"],
      link: "",
      linkLabel: ""
    },
    {
      name: "Komponen Cessna",
      kind: "AR · Image Target",
      place: "Pesawat Cessna",
      image: "img/cessna-ar.webp",
      alt: "Model AR pesawat Cessna di dalam hanggar virtual",
      desc: "Model pesawat Cessna di hanggar virtual untuk mengenalkan komponen pesawat terbang dan menarik minat belajar dunia dirgantara.",
      tools: ["Unity 3D", "Blender", "Figma", "Canva", "C#"],
      link: "",
      linkLabel: ""
    },
    {
      name: "Desa Gunung Kidul",
      kind: "AR · Pariwisata",
      place: "Desa wisata Gunung Kidul",
      image: "img/desa-ar.webp",
      alt: "Peta Daerah Istimewa Yogyakarta dengan titik desa wisata Gunung Kidul",
      desc: "Peta AR desa wisata di Gunung Kidul. Pilih titik di peta untuk melihat tempat wisatanya dengan cara yang lebih baru.",
      tools: ["Unity 3D", "Figma", "Canva", "C#"],
      link: "",
      linkLabel: ""
    },
    {
      name: "Sepatu AR",
      kind: "AR · Produk",
      place: "Katalog sepatu",
      image: "img/sepatu-ar.webp",
      alt: "Aplikasi AR menampilkan model sepatu di atas kamera beserta harganya",
      desc: "Katalog sepatu dalam AR: model 3D sepatu muncul di depan kamera lengkap dengan nama dan harganya.",
      tools: ["Unity 3D", "Vuforia", "Blender"],
      link: "",
      linkLabel: ""
    },
    {
      name: "Gerak Lurus Pesawat",
      kind: "Simulasi desktop",
      place: "Media belajar GLBB",
      image: "img/glbb.webp",
      alt: "Simulasi gerak lurus berubah beraturan dengan pesawat di landasan",
      desc: "Simulasi interaktif gerak lurus berubah beraturan (GLBB) memakai pesawat yang lepas landas, sebagai media pembelajaran fisika berbasis desktop.",
      tools: ["Unity 3D", "Photoshop"],
      link: "",
      linkLabel: ""
    },
    {
      name: "Saron Laras Pelog",
      kind: "Game simulasi",
      place: "Gamelan Jawa",
      image: "img/saron-game.webp",
      alt: "Game simulasi alat musik saron dengan menu sejarah, komponen, simulasi",
      desc: "Game simulasi saron laras pelog dengan bunyi dan bentuk aslinya. Menu sejarah, komponen, simulasi, dan free play untuk memainkannya sendiri.",
      tools: ["Unity 3D", "Blender", "Figma", "Photoshop", "C#"],
      link: "",
      linkLabel: ""
    }
  ],

  /* Video demo tambahan (tampil di bawah daftar proyek). */
  demos: [
    { label: "Vuforia Area Target", link: "https://youtube.com/shorts/EJ-HprV23No?si=ppVR3NzYqOKUqrps" },
    { label: "AR Image Target", link: "https://vt.tiktok.com/ZSNRmcVNQ/" },
    { label: "Tampilan aplikasi (APK)", link: "https://drive.google.com/file/d/1fMEeLkYefjyIsLmNrrMyuc44_v-Y8WJF/view?usp=sharing" }
  ],

  /* Model 3D interaktif dari Sketchfab.
     uid = kode di akhir link model Sketchfab (32 huruf/angka setelah nama model).
     thumb = gambar pratinjau (opsional, boleh dikosongkan ""). */
  models: [
    {
      name: "Saron laras pelog", group: "Gamelan", uid: "c70bd58421c649a3825d57a0d90d6b81",
      thumb: "https://media.sketchfab.com/models/c70bd58421c649a3825d57a0d90d6b81/thumbnails/2ab79aee0c2b43bd9543561556b0b208/b1012a97560640ca9ca4bfce21ee19d0.jpeg"
    },
    {
      name: "Tempat wilah", group: "Gamelan", uid: "d59ead3a4fb5404dbf82bf6485484705",
      thumb: "https://media.sketchfab.com/models/d59ead3a4fb5404dbf82bf6485484705/thumbnails/cbebb71c3e154e4a890b0da763f9020a/390b143dd6834adca9772b94c90d675a.jpeg"
    },
    {
      name: "Palu saron", group: "Gamelan", uid: "b9701ffe63044eb9a54793dfdaf4a628",
      thumb: "https://media.sketchfab.com/models/b9701ffe63044eb9a54793dfdaf4a628/thumbnails/667067237eaf429698d51f3bdfe656f0/8ada8b27c6034358937187d2228eefd5.jpeg"
    },
    {
      name: "Mesin kopi", group: "Benda", uid: "8aee3f974f794d9987f67c211dbd1343",
      thumb: "https://media.sketchfab.com/models/8aee3f974f794d9987f67c211dbd1343/thumbnails/5ff7823fb0234f52a28c7bbd87957eed/105627f009214c04bcfd48ff336d0c25.jpeg"
    },
    {
      name: "Laptop", group: "Benda", uid: "59c6ee3465c14009ad43e134f0d61d05",
      thumb: "https://media.sketchfab.com/models/59c6ee3465c14009ad43e134f0d61d05/thumbnails/2b3864cdfaeb40648edb60b5ffe7b1c6/2e187a33d9a6439b8a52645db88f8167.jpeg"
    },
    {
      name: "Cerek", group: "Benda", uid: "286a523945614ae8aea75d480b0c9b0b",
      thumb: "https://media.sketchfab.com/models/286a523945614ae8aea75d480b0c9b0b/thumbnails/cbea5d221a9444899e1972d7eaa0f81c/c3115bba09884d2db0020f12117d5733.jpeg"
    },
    {
      name: "Botol", group: "Produk", uid: "85e369c7409a4e34a940cde31c8100b7",
      thumb: "https://media.sketchfab.com/models/85e369c7409a4e34a940cde31c8100b7/thumbnails/000c1f612cf74c82a4d47c4d6a55142e/e9eef56efa444921987b441c5537a689.jpeg"
    },
    {
      name: "Susu kotak", group: "Produk", uid: "8322289e9efd4cb39a8eefe4997761c7",
      thumb: "https://media.sketchfab.com/models/8322289e9efd4cb39a8eefe4997761c7/thumbnails/5c5fc3f150f64ed6b5ab1538f15d88de/0a1697e313f9498e8768c6282e1e12a6.jpeg"
    },
    {
      name: "Minuman kaleng", group: "Produk", uid: "e9aa16853da742fd95e278dce2603008",
      thumb: "https://media.sketchfab.com/models/e9aa16853da742fd95e278dce2603008/thumbnails/256075c94e4b43debfb1725ed16f0c70/825b8639516647efb83271a1fbbd3573.jpeg"
    }
  ],

  /* Galeri aset 3D. */
  gallery: [
    { title: "Kamar isometrik", image: "img/room.webp", tools: "Blender 3D" },
    { title: "Pesawat Bravo AS 202", image: "img/bravo-3d.webp", tools: "Blender, Photoshop" },
    { title: "Terowongan bertema graffiti", image: "img/tunnel.webp", tools: "Blender, Photoshop" },
    { title: "Saron laras pelog", image: "img/saron-3d.webp", tools: "Blender 3D" },
    { title: "Kota", image: "img/city.webp", tools: "Blender, Photoshop" },
    { title: "Tempat singgah di bawah pohon", image: "img/gazebo.webp", tools: "Blender, Botaniq" },
    { title: "Kamar mandi", image: "img/bathroom.webp", tools: "Blender, Photoshop" },
    { title: "Booth pameran besar", image: "img/booth.webp", tools: "Blender 3D" },
    { title: "RestoBar", image: "img/restobar.webp", tools: "Blender 3D" },
    { title: "Toko cyberpunk", image: "img/cyberpunk.webp", tools: "Blender 3D" },
    { title: "LAN card", image: "img/lancard.webp", tools: "Blender 3D" },
    { title: "Aneka produk", image: "img/products.webp", tools: "Blender, Photoshop" },
    { title: "Botanical dan gitar", image: "img/botanic.webp", tools: "Blender, Botanic kit" }
  ],

  /* Pengalaman. Tambah item baru di grup yang sesuai (paling atas = terbaru). */
  experience: [
    {
      group: "Pekerjaan",
      items: [
        {
          role: "AR Engineer", place: "PT Kualitas Teknologi Asia, Jakarta", years: "2023 – kini",
          desc: "Aplikasi navigasi indoor AR, integrasi Unity dengan server lokal, Vuforia Area Target."
        },
        {
          role: "Research and Development", place: "PT Kualitas Teknologi Asia, Jakarta", years: "2023 – kini",
          desc: "Riset deteksi dan penghitungan objek, serta deteksi plat nomor untuk keluar-masuk gedung."
        },
        {
          role: "3D Artist", place: "G45 Coworking Space, Yogyakarta", years: "2022 – 2023",
          desc: "Aset 3D untuk proyek Metaverse Top Brand, UI/UX aplikasi VR, dan video trailer."
        }
      ]
    },
    {
      group: "Freelance",
      items: [
        {
          role: "AR/VR Developer", place: "Yogyakarta", years: "2021 – kini",
          desc: "Aplikasi Android dan web: tur perpustakaan virtual dan AR desa wisata, selesai dalam 1–3 bulan per proyek."
        },
        {
          role: "Desain Grafis", place: "Yogyakarta", years: "2021",
          desc: "Logo perusahaan dan iklan produk dengan Photoshop, Canva, dan Blender 3D."
        },
        {
          role: "Staf Desain", place: "Institut Teknologi Dirgantara Adisutjipto", years: "2021",
          desc: "Desain untuk kebutuhan kampus."
        }
      ]
    },
    {
      group: "Mengajar dan berbagi",
      items: [
        {
          role: "Instruktur pelatihan AR", place: "PT Widya Intelektual Bangsa", years: "Nov 2022",
          desc: "Mengajar dasar proyek AR dan menyiapkan aset 3D."
        },
        {
          role: "Pembicara", place: "OWWI ITDA", years: "Jun 2022",
          desc: "Dasar animasi, desain, dan prospek kerja di industri animasi."
        },
        {
          role: "Diklat storyboard animasi", place: "BDI Denpasar, Bali", years: "2019",
          desc: "Membuat storyboard dari alur cerita yang disiapkan."
        }
      ]
    },
    {
      group: "Pendidikan",
      items: [
        {
          role: "Teknik Informatika", place: "Institut Teknologi Dirgantara Adisutjipto", years: "2016 – 2021",
          desc: "IPK 3,34. Anggota Adisutjipto Linux Community."
        }
      ]
    }
  ],

  skills: ["Unity 3D", "C#", "Augmented Reality", "Virtual Reality", "Vuforia", "AR Foundation",
    "Blender", "3D Vista", "Figma", "Photoshop", "Canva", "Filmora", "Flutter",
    "Unreal Engine", "OpenCV"],
  languages: "Bahasa Indonesia, bahasa Inggris pasif",

  /* Status di pojok atas. Kosongkan "" untuk menyembunyikan. */
  availability: "Menerima proyek freelance",

  /* Angka di bawah hero. Ubah sendiri kalau bertambah. */
  stats: [
    { value: "5+", label: "Tahun di AR/VR dan 3D", note: "Sejak 2021" },
    { value: "8", label: "Aplikasi AR, VR, dan simulasi", note: "Unity dan Vuforia" },
    { value: "30+", label: "Model dan render 3D", note: "Blender dan Sketchfab" },
    { value: "3", label: "Pelatihan dan sesi berbagi", note: "Instruktur dan pembicara" }
  ],
  quote: "Saya suka teknologi baru yang belum jelas cara pakainya.",

  /* Ikon tech stack. icon = salah satu: unity, csharp, blender, figma, photoshop, canva,
     flutter, unreal, opencv, android. Kosongkan icon untuk alat tanpa logo. */
  tech: [
    { name: "Unity 3D", icon: "unity" }, { name: "C#", icon: "csharp" },
    { name: "Blender", icon: "blender" }, { name: "Vuforia", icon: "" },
    { name: "AR Foundation", icon: "" }, { name: "Figma", icon: "figma" },
    { name: "Photoshop", icon: "photoshop" }, { name: "Canva", icon: "canva" },
    { name: "Flutter", icon: "flutter" }, { name: "Unreal Engine", icon: "unreal" },
    { name: "OpenCV", icon: "opencv" }, { name: "3D Vista", icon: "" }
  ],

  /* Keahlian, dikelompokkan. */
  expertise: [
    { area: "Augmented Reality", items: ["Area Target", "Image Target", "Navigasi indoor", "Katalog produk AR"] },
    { area: "Virtual Reality", items: ["Virtual tour", "UI/UX aplikasi VR"] },
    { area: "3D", items: ["Modeling", "Scene dan lighting", "Aset siap aplikasi", "Video trailer"] },
    { area: "Riset", items: ["Deteksi objek", "Deteksi plat nomor"] }
  ],

  /* Alur kerja (diagram orbit). */
  process: ["Konsep dan storyboard", "Model 3D di Blender", "Bangun di Unity", "Uji di perangkat", "Rilis dan serah terima"],

  /* Surat perkenalan (bagian "Tentang saya"). Satu baris = satu paragraf. */
  letter: [
    "Halo, saya Omen. Saya belajar Teknik Informatika di kampus dirgantara di Yogyakarta, dan dari situ pesawat masuk ke banyak proyek saya: komponen Bravo dan Cessna yang bisa dipindai, sampai simulasi pesawat lepas landas untuk belajar fisika.",
    "Sekarang saya bekerja sebagai AR engineer, membuat navigasi indoor yang mengenali ruangan lewat kamera, sambil meriset deteksi objek dan plat nomor kendaraan.",
    "Di luar kantor saya mengerjakan proyek AR dan VR lepas, biasanya selesai dalam satu sampai tiga bulan. Saya mengerjakan semuanya sendiri: model 3D di Blender, aplikasi di Unity, dan tampilannya di Figma.",
    "Saya suka teknologi baru yang belum jelas cara pakainya, dan saya bekerja baik dalam tim maupun saat tenggat sudah dekat. Kalau kamu punya ide yang butuh AR, VR, atau aset 3D, kabari saya."
  ]
};
