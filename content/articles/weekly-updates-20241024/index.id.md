---
title: "Pembaruan Mingguan NocoBase: Dukungan penomoran halaman sub-tabel, optimalisasi alur kerja, dan lainnya"
description: "Pembaruan Mingguan NocoBase 2024-10-24"
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase saat ini diperbarui dengan dua cabang: `main` dan `next`.

* `main`：Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`：Versi alfa, mencakup beberapa fitur baru yang belum dirilis. Versi ini mungkin tidak sepenuhnya stabil dan cocok untuk pengembang atau penguji yang ingin mencoba fitur baru lebih awal atau melakukan pengujian kompatibilitas.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Tanggal rilis: 2024-10-13*

### 🐛 Perbaikan Bug

- **[klien]** bidang relasi wajib masih memicu kesalahan validasi setelah memilih nilai dengan variabel dalam lingkup data ([#5399](https://github.com/nocobase/nocobase/pull/5399)) oleh @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Tanggal rilis: 2024-10-17*

### 🚀 Peningkatan

- **[Workflow]** menambahkan petunjuk terkait bidang asosiasi ke mode batch dari node pembaruan ([#5426](https://github.com/nocobase/nocobase/pull/5426)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki masalah drawer Edit profil yang tertutup oleh subhalaman ([#5409](https://github.com/nocobase/nocobase/pull/5409)) oleh @zhangzhonghe
  - Variabel node Workflow tidak menampilkan bidang koleksi warisan ([#5415](https://github.com/nocobase/nocobase/pull/5415)) oleh @chenos
  - paginasi tidak diatur ulang setelah membersihkan data filter di blok pemfilteran tabel ([#5411](https://github.com/nocobase/nocobase/pull/5411)) oleh @katherinehhh
- **[Manajer file]** menghapus batas 20 item untuk memuat penyimpanan dalam konfigurasi koleksi template file ([#5430](https://github.com/nocobase/nocobase/pull/5430)) oleh @mytharcher
- **[Aksi: Duplikat rekaman]** Memperbaiki masalah di mana popup edit massal tidak menampilkan konten ([#5412](https://github.com/nocobase/nocobase/pull/5412)) oleh @zhangzhonghe
- **[Visualisasi data]** Memperbaiki masalah nilai default tidak ditampilkan di blok filter bagan ([#5405](https://github.com/nocobase/nocobase/pull/5405)) oleh @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Tanggal rilis: 2024-10-21*

### 🎉 Fitur Baru

- **[uji]** Bidang asosiasi dalam formulir filter mendukung konfigurasi apakah pemilihan ganda diperbolehkan ([#5451](https://github.com/nocobase/nocobase/pull/5451)) oleh @zhangzhonghe
- **[klien]** Menambahkan variabel bernama "Objek induk" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) oleh @zhangzhonghe
  Referensi: [Objek induk](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki variabel parameter pencarian URL tidak diurai ([#5454](https://github.com/nocobase/nocobase/pull/5454)) oleh @zhangzhonghe
  - Memperbaiki bug pembersihan data saat memilih data asosiasi dengan lingkup data di sub-tabel bersarang ([#5441](https://github.com/nocobase/nocobase/pull/5441)) oleh @katherinehhh
  - memperbaiki warna latar belakang baris tabel yang dipilih ([#5445](https://github.com/nocobase/nocobase/pull/5445)) oleh @mytharcher
- **[Blok: Peta]** menghapus konfigurasi level zoom untuk bidang peta di kolom tabel ([#5457](https://github.com/nocobase/nocobase/pull/5457)) oleh @katherinehhh
- **[Manajer file]** memperbaiki pemanggilan hook aturan penyimpanan pada bidang read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) oleh @mytharcher
- **[Sumber data: Utama]** memperbaiki kasus e2e yang gagal karena komponen berubah ([#5437](https://github.com/nocobase/nocobase/pull/5437)) oleh @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Tanggal rilis: 2024-10-21*

### 🚀 Peningkatan

- **[Workflow: node mailer]** menambahkan placeholder ke node mailer ([#5470](https://github.com/nocobase/nocobase/pull/5470)) oleh @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Tanggal rilis: 2024-10-22*

### 🐛 Perbaikan Bug

- **[Koleksi: Pohon]** Memperbaiki masalah di mana koleksi jalur untuk koleksi pohon warisan tidak dibuat secara otomatis ([#5486](https://github.com/nocobase/nocobase/pull/5486)) oleh @2013xile
- **[Kalender]** menampilkan bilah paginasi dengan data di tabel ([#5480](https://github.com/nocobase/nocobase/pull/5480)) oleh @katherinehhh
- **[Manajer file]** memperbaiki file yang tidak dapat diunggah karena hook aturan. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) oleh @mytharcher
- **[Bidang koleksi: Rumus]** Memperbaiki perhitungan rumus yang salah di sub-tabel bertingkat multi-level ([#5469](https://github.com/nocobase/nocobase/pull/5469)) oleh @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Tanggal rilis: 2024-10-23*

### 🚀 Peningkatan

- **[klien]** Menyesuaikan petunjuk di panel konfigurasi pengikatan workflow menjadi tombol ([#5494](https://github.com/nocobase/nocobase/pull/5494)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Manajer file]** memperbaiki unggah dan hancurkan rekaman file dalam blok asosiasi ([#5493](https://github.com/nocobase/nocobase/pull/5493)) oleh @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Tanggal rilis: 2024-10-16*

### 🎉 Fitur Baru

- **[sdk]** Memungkinkan untuk menyimpan informasi klien ke sessionStorage dengan mengatur variabel lingkungan `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) oleh @2013xile
- **[Bidang koleksi: Lampiran (URL)]** Menambahkan Bidang Lampiran (URL) oleh @katherinehhh

### 🚀 Peningkatan

- **[klien]**

  - mengoptimalkan debugging jarak jauh ([#5394](https://github.com/nocobase/nocobase/pull/5394)) oleh @chenos
  - optimasi gaya untuk memusatkan ikon saat tombol aksi hanya menggunakan ikon ([#5413](https://github.com/nocobase/nocobase/pull/5413)) oleh @katherinehhh
  - memperbarui rekaman secara otomatis menutup popup pesan ([#5408](https://github.com/nocobase/nocobase/pull/5408)) oleh @katherinehhh
- **[Workflow: node permintaan HTTP]** Dukungan untuk SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) oleh @chenos

### 🐛 Perbaikan Bug

- **[Formulir publik]** Memperbaiki masalah dengan mengklik pengaturan pada formulir publik ([#5392](https://github.com/nocobase/nocobase/pull/5392)) oleh @katherinehhh
- **[klien]**

  - Memperbaiki masalah tidak menampilkan nilai di kotak input nilai default ([#5400](https://github.com/nocobase/nocobase/pull/5400)) oleh @zhangzhonghe
  - Memperbaiki kesalahan tidak menemukan bidang asosiasi ketika aturan tautan diatur untuk sub-tabel ([#5402](https://github.com/nocobase/nocobase/pull/5402)) oleh @zhangzhonghe
  - memperbaiki pratinjau thumbnail yang salah ketika tipe file tidak didukung secara default ([#5401](https://github.com/nocobase/nocobase/pull/5401)) oleh @mytharcher
- **[Lokalisasi]** Memperbaiki masalah di mana terjemahan di plugin lokalisasi tidak berlaku setelah dipublikasikan ([#5416](https://github.com/nocobase/nocobase/pull/5416)) oleh @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Tanggal rilis: 2024-10-18*

### 🎉 Fitur Baru

- **[Workflow: node Loop]** menambahkan lebih banyak opsi kontrol ke konfigurasi node loop ([#5342](https://github.com/nocobase/nocobase/pull/5342)) oleh @mytharcher
  Referensi: [Node Loop](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Menambahkan tombol uji coba untuk node workflow, dan API untuk mengimplementasikan fungsi pengujian ([#5407](https://github.com/nocobase/nocobase/pull/5407)) oleh @mytharcher
- **[Komponen bidang: mask]** Menambahkan komponen bidang `mask`, mendukung menampilkan data bidang sebagai string bertopeng oleh @gchust
  Referensi: [Mask](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Peningkatan

- **[klien]** mengizinkan judul kolom tabel untuk diatur ulang ke default ([#5439](https://github.com/nocobase/nocobase/pull/5439)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]** memperbaiki opsi komponen bidang yang belum diterjemahkan dengan benar ([#5442](https://github.com/nocobase/nocobase/pull/5442)) oleh @gchust
- **[Workflow: node permintaan HTTP]** memperbaiki pesan kesalahan lama di node permintaan ([#5443](https://github.com/nocobase/nocobase/pull/5443)) oleh @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Tanggal rilis: 2024-10-23*

### 🚀 Peningkatan

- **[klien]** subTable mendukung paginasi ([#5450](https://github.com/nocobase/nocobase/pull/5450)) oleh @katherinehhh
- **[Blok: Kanban]** Menambahkan dukungan untuk mengaktifkan atau menonaktifkan pengurutan seret dan lepas di blok Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) oleh @katherinehhh
- **[Kalender]** menampilkan popup pembuatan saat memilih slot kalender ([#5483](https://github.com/nocobase/nocobase/pull/5483)) oleh @gu-zhichao
- **[Manajer multi-aplikasi]** mendukung variabel lingkungan USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) oleh @chenos
- **[Workflow]** Menambahkan komponen set bidang seperti kartu ([#5464](https://github.com/nocobase/nocobase/pull/5464)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** nilai variabel hilang setelah menyegarkan popup blok markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) oleh @katherinehhh
- **[Visualisasi data]** Memperbaiki masalah saat menggunakan sumber data oracle eksternal untuk plugin visualisasi data, misalnya masalah pemformatan tanggal ([#5436](https://github.com/nocobase/nocobase/pull/5436)) oleh @2013xile
- **[Manajer file]** memperbaiki file yang tidak dapat diunggah karena hook aturan. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
