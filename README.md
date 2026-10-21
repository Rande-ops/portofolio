# Portofolio Engelbertus Rande

Landing page portofolio AR, VR, dan 3D. Semua isi halaman diambil dari satu file: **`data/site.js`**.
Kamu tidak perlu menyentuh HTML, CSS, atau JavaScript untuk memperbarui isinya.

## Isi folder

```
index.html          kerangka halaman
css/style.css       tampilan (warna, huruf, tata letak)
js/main.js          merender isi dari data/site.js
js/crystal.js       kristal 3D interaktif di hero
js/icons.js         ikon logo tech stack
vendor/             three.js (mesin 3D)
data/site.js        ← SEMUA ISI WEBSITE, edit di sini
img/                gambar karya
files/              CV (PDF)
```

## Menambah pengalaman baru

Buka `data/site.js`, cari bagian `experience`, lalu salin satu baris item dan ubah isinya.
Taruh item terbaru di urutan paling atas dalam grupnya:

```js
{ role: "Unity Developer", place: "PT Contoh, Yogyakarta", years: "2026 – kini",
  desc: "Satu kalimat tentang apa yang kamu kerjakan." },
```

Jangan lupa koma di akhir setiap blok `{ ... }`.

## Menambah proyek baru

1. Simpan gambarnya di folder `img/` (format `.webp` atau `.jpg`, lebar sekitar 1200px).
2. Di `data/site.js`, salin satu blok di dalam `projects: [ ... ]`:

```js
{
  name: "Nama Proyek",            // pendek, maksimal ±20 huruf
  kind: "AR · Unity",             // jenis proyek
  place: "Klien atau tempat",
  image: "img/nama-gambar.webp",
  alt: "Deskripsi gambar untuk pembaca layar",
  desc: "Dua kalimat tentang proyek ini.",
  tools: ["Unity 3D", "Blender"],
  link: "https://link-demo-kalau-ada",   // kosongkan "" kalau tidak ada
  linkLabel: "Tonton demo"
},
```

Gambar render baru masuk ke `gallery`, cukup `{ title, image, tools }`.

## Menambah model 3D interaktif (Sketchfab)

Bagian "Putar sendiri modelnya" memutar model langsung dari akun Sketchfab-mu.
Di `data/site.js`, tambahkan satu baris di `models`:

```js
{ name: "Nama model", group: "Gamelan", uid: "c70bd58421c649a3825d57a0d90d6b81", thumb: "" },
```

`uid` adalah 32 huruf/angka di akhir link model, misalnya
`sketchfab.com/3d-models/pelog-`**`c70bd58421c649a3825d57a0d90d6b81`**.
`thumb` boleh dikosongkan. Model harus berstatus publik dan "embeddable" di Sketchfab.

## Cek di komputer sebelum upload

Kristal 3D di hero memakai three.js (sudah ada di folder `vendor/`, tidak perlu internet).
Browser tidak menjalankan file seperti ini kalau `index.html` dibuka dengan klik dua kali,
jadi kristalnya diganti gambar diam. Untuk melihat versi lengkap di komputer:

- VS Code: pasang ekstensi **Live Server**, klik kanan `index.html` → **Open with Live Server**, atau
- Terminal di folder ini: `python -m http.server 8000`, lalu buka `http://localhost:8000`.

Di GitHub Pages semuanya langsung jalan.
Kalau halamannya kosong, biasanya ada koma atau tanda kutip yang hilang di `data/site.js`.
Buka Console browser (F12) untuk melihat baris yang salah.

## Mengganti angka, keahlian, dan tech stack

Semuanya juga ada di `data/site.js`: `stats` (angka di bawah hero), `quote`, `expertise`,
`tech` (ikon tersedia: unity, csharp, blender, figma, photoshop, canva, flutter, unreal, opencv, android)
dan `process` (diagram alur kerja). `availability` mengatur status "Menerima proyek freelance";
kosongkan `""` untuk menyembunyikannya.

## Upload ke GitHub Pages (gratis, bisa dilihat semua orang)

Kamu sudah punya akun GitHub `ghost-45-max`, jadi tinggal:

1. Buka github.com → **New repository**.
2. Beri nama **`ghost-45-max.github.io`** supaya alamatnya jadi `https://ghost-45-max.github.io`.
   Nama lain juga bisa, misalnya `portfolio`, nanti alamatnya `https://ghost-45-max.github.io/portfolio`.
3. Pilih **Public**, lalu **Create repository**.
4. Klik **uploading an existing file**, lalu seret semua isi folder ini (index.html, css, js, data, img, files, README.md).
   Seret isinya, bukan foldernya, supaya `index.html` ada di bagian paling atas repository.
5. Klik **Commit changes**.
6. Buka **Settings → Pages**. Di **Source**, pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
7. Tunggu 1–2 menit, lalu buka alamatnya.

Untuk update berikutnya: buka `data/site.js` di GitHub, klik ikon pensil, edit, lalu **Commit changes**.
Situs akan diperbarui sendiri dalam 1–2 menit.

## Catatan

- Nomor telepon dan email tampil di halaman. Hapus `phone` di `data/site.js` kalau tidak mau nomornya publik.
- Surat "Tentang saya" ditulis dari CV, jadi sesuaikan dengan gayamu sendiri.
- Sebagian proyek belum punya link demo. Tambahkan di `link` kalau sudah ada.
