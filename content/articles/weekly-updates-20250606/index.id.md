---
title: "Pembaruan Mingguan NocoBase: Tambahkan Manajemen Kategori Alur Kerja"
description: "Pembaruan minggu ini meliputi: dukungan untuk perkalian dan pembagian dalam konfigurasi transformasi grafik, peningkatan fungsionalitas impor, dan lainnya."
---

Ringkas log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**Minggu ini kami merilis [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0), yang menghadirkan manajemen izin yang ditingkatkan, performa sistem yang dioptimalkan, dan plugin sumber terbuka untuk meningkatkan fungsionalitas dan pengalaman pengguna secara menyeluruh.**

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Tanggal rilis: 29-05-2025*

#### 🎉 Fitur Baru

- **[tidak ditentukan]**
  - Menambahkan dukungan Gitpod untuk memulai lingkungan pengembangan satu klik ([#6922](https://github.com/nocobase/nocobase/pull/6922)) oleh @kerwin612

#### 🚀 Peningkatan

- **[klien]**
  - Mengoptimalkan interaksi tombol Tab pada formulir ([#6942](https://github.com/nocobase/nocobase/pull/6942)) oleh @kerwin612
  - mendukung konfigurasi apakah tautan menu dibuka di jendela baru ([#6918](https://github.com/nocobase/nocobase/pull/6918)) oleh @katherinehhh
  - memvalidasi bidang wajib diisi sebelum menampilkan dialog konfirmasi ([#6931](https://github.com/nocobase/nocobase/pull/6931)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[klien]**

  - mempaginasikan data dropdown bidang asosiasi dengan ukuran halaman 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) oleh @katherinehhh
  - Posisi sorotan yang salah saat menyeret baris tabel ([#6952](https://github.com/nocobase/nocobase/pull/6952)) oleh @chenos
  - Ubah ukuran blok dengan menyeret tidak berfungsi ([#6944](https://github.com/nocobase/nocobase/pull/6944)) oleh @chenos
  - i18n komponen penugasan bidang tidak berfungsi ([#6945](https://github.com/nocobase/nocobase/pull/6945)) oleh @katherinehhh
  - Pesan kesalahan tidak dapat disalin dengan benar ([#6908](https://github.com/nocobase/nocobase/pull/6908)) oleh @kerwin612
- **[Bidang Koleksi: Markdown(Vditor)]** masalah lebar komponen bidang markdown-vditor setelah diperbesar dan diperkecil ([#6946](https://github.com/nocobase/nocobase/pull/6946)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Memperbaiki konten terjemahan oleh @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Tanggal rilis: 29-05-2025*

#### 🚀 Peningkatan

- **[Auth: OIDC]** Abaikan huruf besar/kecil saat mencocokkan pengguna berdasarkan email oleh @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Tanggal rilis: 30-05-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki urutan bidang dalam daftar dropdown tombol filter ([#6962](https://github.com/nocobase/nocobase/pull/6962)) oleh @zhangzhonghe
  - variabel tautan sub-tabel mengambil data asosiasi saat dibersihkan alih-alih menggunakan nilai formulir ([#6963](https://github.com/nocobase/nocobase/pull/6963)) oleh @katherinehhh
  - bidang asosiasi di sub-tabel memicu permintaan ketika variabel iterasi memiliki nilai kosong ([#6969](https://github.com/nocobase/nocobase/pull/6969)) oleh @katherinehhh
- **[Editor tema]** Sembunyikan opsi peralihan tema dan perbaiki gaya popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]** Memperbaiki kesalahan saat lingkup penerima melakukan kueri dengan kondisi asosiasi oleh @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Tanggal rilis: 03-06-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai default formulir filter tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe
  - tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh
  - Memperbaiki masalah di mana opsi 'Konten luapan elipsis' tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai bidang teks satu baris ditampilkan sebagai array dalam mode mudah dibaca ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe
- **[Otentikasi]** Masalah performa yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile
- **[Manajer file]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher
- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki penginisialisasi untuk workbench yang terlewat oleh @mytharcher
- **[Auth: OIDC]** Teks tombol masuk tidak dilokalkan oleh @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Tanggal rilis: 04-06-2025*

#### 🎉 Fitur Baru

- **[Visualisasi data]** Mendukung perkalian dan pembagian dalam konfigurasi transformasi bagan ([#6788](https://github.com/nocobase/nocobase/pull/6788)) oleh @bugstark

#### 🚀 Peningkatan

- **[Formulir publik]** Mendukung penggunaan parameter url sebagai variabel ([#6973](https://github.com/nocobase/nocobase/pull/6973)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]** Memperbaiki penginisialisasi memunculkan kesalahan saat menggunakan sumber data eksternal ([#6983](https://github.com/nocobase/nocobase/pull/6983)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Tanggal rilis: 04-06-2025*

#### 🎉 Fitur Baru

- **[tidak ditentukan]** Menambahkan plugin "Tombol Salin Input" baru untuk bidang teks satu baris ([#6894](https://github.com/nocobase/nocobase/pull/6894)) oleh @kerwin612
- **[Alur Kerja]** Menambahkan manajemen kategori alur kerja ([#6965](https://github.com/nocobase/nocobase/pull/6965)) oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** mendukung konfigurasi apakah tautan menu dibuka di jendela baru ([#6918](https://github.com/nocobase/nocobase/pull/6918)) oleh @katherinehhh
- **[Tindakan: Impor catatan Pro]** Mengoptimalkan performa impor xlsx oleh @aaaaaajie
- **[Auth: OIDC]** Abaikan huruf besar/kecil saat mencocokkan pengguna berdasarkan email oleh @2013xile
- **[Alur Kerja: Persetujuan]** Impor koleksi alur kerja dari plugin alur kerja untuk menghindari duplikasi oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Bidang dan tindakan hanya berlaku setelah menyegarkan halaman ([#6977](https://github.com/nocobase/nocobase/pull/6977)) oleh @zhangzhonghe
  - Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe
  - Tidak dapat memilih variabel saat mengatur nilai default untuk bidang asosiasi ([#6974](https://github.com/nocobase/nocobase/pull/6974)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai bidang teks satu baris ditampilkan sebagai array dalam mode mudah dibaca ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe
  - tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh
  - Memperbaiki masalah di mana opsi 'Konten luapan elipsis' tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai default formulir filter tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe
  - masalah di mana popup bidang asosiasi pilihan menutup pada input pertama saat menambahkan data baru ([#6971](https://github.com/nocobase/nocobase/pull/6971)) oleh @katherinehhh
  - bidang asosiasi di sub-tabel memicu permintaan ketika variabel iterasi memiliki nilai kosong ([#6969](https://github.com/nocobase/nocobase/pull/6969)) oleh @katherinehhh
  - Memperbaiki urutan bidang dalam daftar dropdown tombol filter ([#6962](https://github.com/nocobase/nocobase/pull/6962)) oleh @zhangzhonghe
  - data aturan validasi formulir hilang saat menciutkan panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) oleh @katherinehhh
  - nilai yang dipilih diatur ulang saat memperbarui opsi dropdown multi-pilih melalui aturan tautan ([#6953](https://github.com/nocobase/nocobase/pull/6953)) oleh @katherinehhh
  - variabel tautan sub-tabel mengambil data asosiasi saat dibersihkan alih-alih menggunakan nilai formulir ([#6963](https://github.com/nocobase/nocobase/pull/6963)) oleh @katherinehhh
  - mempaginasikan data dropdown bidang asosiasi dengan ukuran halaman 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) oleh @katherinehhh
  - pemilih tanggal tidak disegarkan setelah beralih dari "antara" kembali ke "adalah" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) oleh @katherinehhh
  - Posisi sorotan yang salah saat menyeret baris tabel ([#6952](https://github.com/nocobase/nocobase/pull/6952)) oleh @chenos
- **[Otentikasi]** Masalah performa yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile
- **[Alur Kerja]** Memperbaiki kesalahan yang muncul saat memfilter alur kerja ([#6978](https://github.com/nocobase/nocobase/pull/6978)) oleh @mytharcher
- **[Manajer file]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher
- **[Editor tema]** Sembunyikan opsi peralihan tema dan perbaiki gaya popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) oleh @zhangzhonghe
- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki penginisialisasi untuk workbench yang terlewat oleh @mytharcher
- **[Auth: OIDC]** Teks tombol masuk tidak dilokalkan oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki kesalahan saat lingkup penerima melakukan kueri dengan kondisi asosiasi oleh @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Tanggal rilis: 04-06-2025*

#### 🚀 Peningkatan

- **[Cetak template]** Menambahkan lebih banyak log. oleh @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Tanggal rilis: 04-06-2025*

#### 🎉 Fitur Baru

- **[Visualisasi data]** Mendukung perkalian dan pembagian dalam konfigurasi transformasi bagan ([#6788](https://github.com/nocobase/nocobase/pull/6788)) oleh @bugstark

#### 🚀 Peningkatan

- **[Formulir publik]** Mendukung penggunaan parameter url sebagai variabel ([#6973](https://github.com/nocobase/nocobase/pull/6973)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]** Memperbaiki penginisialisasi memunculkan kesalahan saat menggunakan sumber data eksternal ([#6983](https://github.com/nocobase/nocobase/pull/6983)) oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Tanggal rilis: 04-06-2025*

#### 🎉 Fitur Baru

- **[tidak ditentukan]**

  - Dukungan baru untuk Gitpod memungkinkan Anda memulai lingkungan pengembangan dengan satu klik dan segera memulai pengembangan. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) oleh @kerwin612
  - Menambahkan plugin "Tombol Salin Input" baru untuk bidang teks satu baris ([#6894](https://github.com/nocobase/nocobase/pull/6894)) oleh @kerwin612
- **[Visualisasi data]** Mendukung perkalian dan pembagian dalam konfigurasi transformasi bagan ([#6788](https://github.com/nocobase/nocobase/pull/6788)) oleh @bugstark
- **[Alur Kerja]** Menambahkan manajemen kategori alur kerja ([#6965](https://github.com/nocobase/nocobase/pull/6965)) oleh @mytharcher
- **[Manajer email]** mendukung pengiriman massal oleh @jiannx

#### 🚀 Peningkatan

- **[klien]**

  - meningkatkan gaya untuk komponen filter rentang tanggal ([#6939](https://github.com/nocobase/nocobase/pull/6939)) oleh @katherinehhh
  - mendukung konfigurasi apakah tautan menu dibuka di jendela baru ([#6918](https://github.com/nocobase/nocobase/pull/6918)) oleh @katherinehhh
  - Memperbaiki masalah di mana kontrol formulir yang tersembunyi menangkap tombol tab, secara signifikan meningkatkan efisiensi operasi formulir ([#6942](https://github.com/nocobase/nocobase/pull/6942)) oleh @kerwin612
  - memvalidasi bidang wajib diisi sebelum menampilkan dialog konfirmasi ([#6931](https://github.com/nocobase/nocobase/pull/6931)) oleh @katherinehhh
- **[Formulir publik]** Mendukung penggunaan parameter url sebagai variabel ([#6973](https://github.com/nocobase/nocobase/pull/6973)) oleh @mytharcher
- **[Tindakan: Impor catatan Pro]** Mengoptimalkan performa impor xlsx oleh @aaaaaajie
- **[Cetak template]** Menambahkan lebih banyak log. oleh @sheldon66
- **[Auth: OIDC]** Abaikan huruf besar/kecil saat mencocokkan pengguna berdasarkan email oleh @2013xile
- **[Alur Kerja: Persetujuan]** Impor koleksi alur kerja dari plugin alur kerja untuk menghindari duplikasi oleh @mytharcher
- **[Manajer email]** menyelesaikan fungsi pengiriman massal oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana nilai bidang teks satu baris ditampilkan sebagai array dalam mode mudah dibaca ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe
  - Memperbaiki urutan bidang dalam daftar dropdown tombol filter ([#6962](https://github.com/nocobase/nocobase/pull/6962)) oleh @zhangzhonghe
  - Bidang dan tindakan hanya berlaku setelah menyegarkan halaman ([#6977](https://github.com/nocobase/nocobase/pull/6977)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana opsi 'Konten luapan elipsis' tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe
  - masalah di mana popup bidang asosiasi pilihan menutup pada input pertama saat menambahkan data baru ([#6971](https://github.com/nocobase/nocobase/pull/6971)) oleh @katherinehhh
  - bidang asosiasi di sub-tabel memicu permintaan ketika variabel iterasi memiliki nilai kosong ([#6969](https://github.com/nocobase/nocobase/pull/6969)) oleh @katherinehhh
  - data aturan validasi formulir hilang saat menciutkan panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) oleh @katherinehhh
  - Memperbaiki masalah di mana nilai default formulir filter tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe
  - i18n komponen penugasan bidang tidak berfungsi ([#6945](https://github.com/nocobase/nocobase/pull/6945)) oleh @katherinehhh
  - tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh
  - pemilih tanggal tidak disegarkan setelah beralih dari "antara" kembali ke "adalah" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) oleh @katherinehhh
  - variabel tautan sub-tabel mengambil data asosiasi saat dibersihkan alih-alih menggunakan nilai formulir ([#6963](https://github.com/nocobase/nocobase/pull/6963)) oleh @katherinehhh
  - nilai yang dipilih diatur ulang saat memperbarui opsi dropdown multi-pilih melalui aturan tautan ([#6953](https://github.com/nocobase/nocobase/pull/6953)) oleh @katherinehhh
  - Posisi sorotan yang salah saat menyeret baris tabel ([#6952](https://github.com/nocobase/nocobase/pull/6952)) oleh @chenos
  - pengaturan visibilitas titik dua label formulir tidak berfungsi ([#6947](https://github.com/nocobase/nocobase/pull/6947)) oleh @katherinehhh
  - mempaginasikan data dropdown bidang asosiasi dengan ukuran halaman 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) oleh @katherinehhh
  - Memperbaiki masalah dengan tombol salin di pop-up kesalahan yang menyalin sebagai [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) oleh @kerwin612
  - Tidak dapat memilih variabel saat mengatur nilai default untuk bidang asosiasi ([#6974](https://github.com/nocobase/nocobase/pull/6974)) oleh @zhangzhonghe
  - Ubah ukuran blok dengan menyeret tidak berfungsi ([#6944](https://github.com/nocobase/nocobase/pull/6944)) oleh @chenos
- **[Alur Kerja: Node manual]** Memperbaiki penginisialisasi memunculkan kesalahan saat menggunakan sumber data eksternal ([#6983](https://github.com/nocobase/nocobase/pull/6983)) oleh @mytharcher
- **[Otentikasi]** Masalah performa yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile
- **[Manajer file]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki kesalahan yang muncul saat memfilter alur kerja ([#6978](https://github.com/nocobase/nocobase/pull/6978)) oleh @mytharcher
- **[Editor tema]** Sembunyikan opsi peralihan tema dan perbaiki gaya popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) oleh @zhangzhonghe
- **[Bidang Koleksi: Markdown(Vditor)]** masalah lebar komponen bidang markdown-vditor setelah diperbesar dan diperkecil ([#6946](https://github.com/nocobase/nocobase/pull/6946)) oleh @katherinehhh
- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki penginisialisasi untuk workbench yang terlewat oleh @mytharcher
- **[Auth: OIDC]** Teks tombol masuk tidak dilokalkan oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki kesalahan saat lingkup penerima melakukan kueri dengan kondisi asosiasi oleh @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Tanggal rilis: 04-06-2025*

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe
