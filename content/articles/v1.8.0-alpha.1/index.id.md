---
title: "NocoBase v1.8.0-alpha.1: Tambahkan manajemen kategori alur kerja"
description: "Catatan Rilis v1.8.0-alpha.1"
---

### 🎉 Fitur Baru

- **[undefined]**

  - Dukungan baru untuk Gitpod memungkinkan Anda memulai lingkungan pengembangan dengan satu klik dan segera memulai pengembangan. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) oleh @kerwin612
  - Tambahkan plugin "Input Copy Button" baru untuk bidang teks satu baris ([#6894](https://github.com/nocobase/nocobase/pull/6894)) oleh @kerwin612
- **[Visualisasi Data]** Mendukung perkalian dan pembagian dalam konfigurasi transformasi grafik ([#6788](https://github.com/nocobase/nocobase/pull/6788)) oleh @bugstark
- **[Alur Kerja]** Tambahkan manajemen kategori alur kerja ([#6965](https://github.com/nocobase/nocobase/pull/6965)) oleh @mytharcher
- **[Manajer Email]** mendukung pengiriman massal oleh @jiannx

### 🚀 Peningkatan

- **[klien]**

  - meningkatkan gaya untuk komponen filter rentang tanggal ([#6939](https://github.com/nocobase/nocobase/pull/6939)) oleh @katherinehhh
  - mendukung konfigurasi apakah tautan menu dibuka di jendela baru ([#6918](https://github.com/nocobase/nocobase/pull/6918)) oleh @katherinehhh
  - Memperbaiki masalah di mana kontrol formulir yang tersembunyi menangkap tombol tab, secara signifikan meningkatkan efisiensi operasi formulir ([#6942](https://github.com/nocobase/nocobase/pull/6942)) oleh @kerwin612
  - memvalidasi bidang wajib sebelum menampilkan dialog konfirmasi ([#6931](https://github.com/nocobase/nocobase/pull/6931)) oleh @katherinehhh
- **[Formulir Publik]** Mendukung penggunaan parameter url sebagai variabel ([#6973](https://github.com/nocobase/nocobase/pull/6973)) oleh @mytharcher
- **[Aksi: Impor Rekam Pro]** Optimalkan kinerja impor xlsx oleh @aaaaaajie
- **[Cetak Template]** Tambahkan lebih banyak log. oleh @sheldon66
- **[Auth: OIDC]** Abaikan huruf besar/kecil saat mencocokkan pengguna berdasarkan email oleh @2013xile
- **[Alur Kerja: Persetujuan]** Impor koleksi alur kerja dari plugin alur kerja untuk menghindari duplikasi oleh @mytharcher
- **[Manajer Email]** lengkapi fungsi pengiriman massal oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai bidang teks satu baris ditampilkan sebagai array dalam mode mudah dibaca ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe
  - Memperbaiki urutan bidang dalam daftar dropdown tombol filter ([#6962](https://github.com/nocobase/nocobase/pull/6962)) oleh @zhangzhonghe
  - Bidang dan tindakan hanya berlaku setelah menyegarkan halaman ([#6977](https://github.com/nocobase/nocobase/pull/6977)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana opsi 'Konten overflow elipsis' tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe
  - masalah di mana popup bidang asosiasi pilihan menutup pada input pertama saat menambahkan data baru ([#6971](https://github.com/nocobase/nocobase/pull/6971)) oleh @katherinehhh
  - bidang asosiasi di sub-tabel memicu permintaan ketika variabel iterasi memiliki nilai kosong ([#6969](https://github.com/nocobase/nocobase/pull/6969)) oleh @katherinehhh
  - data aturan validasi formulir hilang saat menciutkan panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) oleh @katherinehhh
  - Memperbaiki masalah di mana nilai default formulir filter tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe
  - i18n komponen penugasan bidang tidak berfungsi ([#6945](https://github.com/nocobase/nocobase/pull/6945)) oleh @katherinehhh
  - tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh
  - pemilih tanggal tidak disegarkan setelah beralih dari "di antara" kembali ke "adalah" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) oleh @katherinehhh
  - variabel tautan sub-tabel mengambil data asosiasi saat menghapus alih-alih menggunakan nilai formulir ([#6963](https://github.com/nocobase/nocobase/pull/6963)) oleh @katherinehhh
  - nilai yang dipilih diatur ulang saat memperbarui opsi dropdown multi-pilih melalui aturan tautan ([#6953](https://github.com/nocobase/nocobase/pull/6953)) oleh @katherinehhh
  - Posisi sorotan yang salah saat menyeret baris tabel ([#6952](https://github.com/nocobase/nocobase/pull/6952)) oleh @chenos
  - pengaturan visibilitas titik dua label formulir tidak berfungsi ([#6947](https://github.com/nocobase/nocobase/pull/6947)) oleh @katherinehhh
  - paginasi data dropdown bidang asosiasi dengan ukuran halaman 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) oleh @katherinehhh
  - Memperbaiki masalah dengan tombol salin di popup kesalahan yang menyalin sebagai [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) oleh @kerwin612
  - Tidak dapat memilih variabel saat mengatur nilai default untuk bidang asosiasi ([#6974](https://github.com/nocobase/nocobase/pull/6974)) oleh @zhangzhonghe
  - Ubah ukuran blok dengan menyeret tidak berfungsi ([#6944](https://github.com/nocobase/nocobase/pull/6944)) oleh @chenos
- **[Alur Kerja: Node manual]** Memperbaiki penginisialisasi melempar kesalahan saat menggunakan sumber data eksternal ([#6983](https://github.com/nocobase/nocobase/pull/6983)) oleh @mytharcher
- **[Otentikasi]** Masalah kinerja yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile
- **[Manajer File]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki kesalahan yang muncul saat memfilter alur kerja ([#6978](https://github.com/nocobase/nocobase/pull/6978)) oleh @mytharcher
- **[Editor Tema]** Sembunyikan opsi peralihan tema dan perbaiki gaya popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) oleh @zhangzhonghe
- **[Bidang Koleksi: Markdown(Vditor)]** masalah lebar komponen bidang markdown-vditor setelah diperbesar dan diperkecil ([#6946](https://github.com/nocobase/nocobase/pull/6946)) oleh @katherinehhh
- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki penginisialisasi untuk workbench yang terlewat oleh @mytharcher
- **[Auth: OIDC]** Teks tombol masuk tidak dilokalkan oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki kesalahan saat lingkup penerima tugas melakukan kueri dengan kondisi asosiasi oleh @mytharcher
