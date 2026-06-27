---
title: "Pembaruan Mingguan: Menambahkan Kontrol Konkurensi Tingkat Proses ke Manajer Tugas Dasar"
description: "Ini adalah ringkasan pembaruan fitur dan perbaikan NocoBase dari 15 Januari hingga 22 Januari 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Tanggal rilis: 21-01-2026*

### 🐛 Perbaikan Bug

- **[server]** Perbaiki versi `mathjs` di dependensi umum ([#8475](https://github.com/nocobase/nocobase/pull/8475)) oleh @mytharcher
- **[client]** Perbaiki masalah di mana menu konfigurasi tidak ditampilkan di Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Perbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) oleh @mytharcher
- **[Aksi: Impor Rekam Pro]** Perbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Tanggal rilis: 20-01-2026*

### 🚀 Peningkatan

- **[server]** Dukung konfigurasi daftar putih asal CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) oleh @2013xile
- **[Penangan kesalahan]** Sanitasi kesalahan referensi SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**

  - perbaiki masalah di mana pengaturan pengurutan grup bidang koleksi tidak berpengaruh. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) oleh @katherinehhh
  - perbaiki masalah saat mengedit koleksi di antarmuka grafis ([#8451](https://github.com/nocobase/nocobase/pull/8451)) oleh @katherinehhh
  - Perbaiki masalah di mana tombol "Pengaturan Kolom" tabel tidak berfungsi ([#8441](https://github.com/nocobase/nocobase/pull/8441)) oleh @zhangzhonghe
  - Perbaiki masalah di mana aturan tautan tombol baris tabel memengaruhi status tombol di dalam formulir popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) oleh @zhangzhonghe
- **[Seluler (usang)]** Plugin seluler yang tidak digunakan lagi (digantikan oleh plugin ui-layout dari versi 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) oleh @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Tanggal rilis: 15-01-2026*

### 🚀 Peningkatan

- **[evaluator]** Perbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Perbaiki masalah kinerja saat mengirim pesan dalam aplikasi ke banyak pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - perbaiki data pilih bertingkat tidak dibersihkan setelah pengiriman berhasil di formulir buat ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh
  - Tambahkan toleransi kesalahan untuk skema aksi, untuk menghindari kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher
  - perbaiki masalah dengan tombol kirim di mana lewati validasi wajib tidak berfungsi saat konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh
- **[Bidang koleksi: Banyak ke banyak (array)]** Perbaiki kesalahan saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock
- **[Alur Kerja]** Perbaiki masalah di mana ID skema tidak diperbarui di simpul duplikat ([#8396](https://github.com/nocobase/nocobase/pull/8396)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Tanggal rilis: 19-01-2026*

### 🚀 Peningkatan

- **[server]** Dukung konfigurasi daftar putih asal CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) oleh @2013xile
- **[Aksi: Ekspor rekam]** Tingkatkan lingkup data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya ([#8442](https://github.com/nocobase/nocobase/pull/8442)) oleh @katherinehhh
- **[Aksi: Ekspor rekam Pro]** Tingkatkan lingkup data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki masalah di mana popup "Variabel Kustom" terhalang ([#8463](https://github.com/nocobase/nocobase/pull/8463)) oleh @zhangzhonghe
  - perbaiki masalah saat mengedit koleksi di antarmuka grafis ([#8451](https://github.com/nocobase/nocobase/pull/8451)) oleh @katherinehhh
  - perbaiki masalah di mana pengaturan pengurutan grup bidang koleksi tidak berpengaruh. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) oleh @katherinehhh
  - Perbaiki masalah di mana tinggi modal pintasan melebihi tinggi area pandang ([#8437](https://github.com/nocobase/nocobase/pull/8437)) oleh @zhangzhonghe
  - Perbaiki masalah di mana aturan tautan tombol baris tabel memengaruhi status tombol di dalam formulir popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) oleh @zhangzhonghe
  - Perbaiki masalah di mana status kolom aksi tabel terkontaminasi saat berpindah halaman. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) oleh @gchust
  - Perbaiki masalah di mana tombol "Pengaturan Kolom" tabel tidak berfungsi ([#8441](https://github.com/nocobase/nocobase/pull/8441)) oleh @zhangzhonghe
  - Perbaiki masalah di mana popup pemilih bidang asosiasi file memiliki z-index yang salah, dan konfigurasi popup tidak dapat disimpan dengan benar. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) oleh @gchust
- **[mesin-alur]**

  - Perbaiki masalah di mana variabel dalam params kode runjs diselesaikan sebelum eksekusi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) oleh @gchust
  - Perbaiki masalah di mana variabel popup tidak dapat dipilih di popup buat cepat pemilih data. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) oleh @gchust
  - Perbaiki masalah di mana mengklik menu konfigurasi berulang kali dapat membuka beberapa popup konfigurasi. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) oleh @gchust
- **[Seluler (usang)]** Plugin seluler yang tidak digunakan lagi (digantikan oleh plugin ui-layout dari versi 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) oleh @chenos
- **[Mesin alur]** Perbaiki masalah di mana variabel yang mengandung tanda hubung tidak dapat diurai dengan benar. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) oleh @gchust
- **[Manajer email]** Perbaiki masalah di mana popup konfigurasi email terhalang oleh @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Tanggal rilis: 16-01-2026*

### 🚀 Peningkatan

- **[Mesin alur]** Dukung penyelesaian nilai bidang dalam rekaman formulir saat ini meskipun tidak ditambahkan ke formulir edit. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) oleh @gchust

### 🐛 Perbaikan Bug

- **[mesin-alur]** Perbaiki langkah-langkah alur peristiwa dinamis berjalan dua kali saat membuka popup melalui klik tombol. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) oleh @gchust
- **[Cetak template]** tampilkan bidang spasi di versi 2.0 oleh @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Tanggal rilis: 15-01-2026*

### 🚀 Peningkatan

- **[evaluator]** Perbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher
- **[client]** Editor teks kaya mendukung penyesuaian ukuran font, penyesuaian ukuran gambar, dan pemisah baris lunak ([#8401](https://github.com/nocobase/nocobase/pull/8401)) oleh @jiannx
- **[Karyawan AI]** Ubah hasil pemanggil alur kerja menjadi `execution.output`, dengan secara eksplisit menggunakan simpul output, hasilnya bisa stabil ([#8423](https://github.com/nocobase/nocobase/pull/8423)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Tambahkan toleransi kesalahan untuk skema aksi, untuk menghindari kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher
  - perbaiki pengaturan bidang judul menghilang setelah mengatur URL lampiran dan kemudian mengubah ke bidang lain di item formulir ([#8418](https://github.com/nocobase/nocobase/pull/8418)) oleh @katherinehhh
  - perbaiki bidang judul tidak diperbarui ketika bidang asosiasi diatur ke mode hanya-baca di formulir buat ([#8413](https://github.com/nocobase/nocobase/pull/8413)) oleh @katherinehhh
- **[Mesin alur]** Perbaiki masalah di mana resolusi variabel salah ketika filterByTk adalah sebuah array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) oleh @gchust
- **[Cetak template]** dukung bidang spasi oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Tanggal rilis: 16-01-2026*

### 🐛 Perbaikan Bug

- **[Mesin alur]** Perbaiki masalah di mana variabel yang mengandung tanda hubung tidak dapat diurai dengan benar. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) oleh @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Tanggal rilis: 16-01-2026*

### 🎉 Fitur Baru

- **[test]** tambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar ([#8343](https://github.com/nocobase/nocobase/pull/8343)) oleh @cgyrock

### 🚀 Peningkatan

- **[client]**

  - Editor teks kaya mendukung penyesuaian ukuran font, penyesuaian ukuran gambar, dan pemisah baris lunak ([#8401](https://github.com/nocobase/nocobase/pull/8401)) oleh @jiannx
  - Dukung tentukan kapan menjalankan alur peristiwa. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) oleh @gchust
  - Tingkatkan kinerja render daftar manajer plugin dengan mengubah ke css webkit asli untuk elipsis teks ([#8391](https://github.com/nocobase/nocobase/pull/8391)) oleh @mytharcher
- **[evaluator]** Perbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher
- **[cli]** dukung konfigurasi URL dasar CDN melalui env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) oleh @chenos
- **[mesin-alur]** Tambahkan `rowOrder` ke GridModel untuk memastikan pengurutan baris yang konsisten ([#8371](https://github.com/nocobase/nocobase/pull/8371)) oleh @zhangzhonghe
- **[Mesin alur]** Dukung penyelesaian nilai bidang dalam rekaman formulir saat ini meskipun tidak ditambahkan ke formulir edit. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) oleh @gchust
- **[Karyawan AI]**

  - Optimalkan tombol entri AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) oleh @heziqiang
  - Ubah hasil pemanggil alur kerja menjadi `execution.output`, dengan secara eksplisit menggunakan simpul output, hasilnya bisa stabil ([#8423](https://github.com/nocobase/nocobase/pull/8423)) oleh @mytharcher
  - Sembunyikan builder ai di daftar entri.<br/> Optimalkan alur integrasi LLM.<br/> Perbarui dokumen tentang model ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) oleh @heziqiang
  - Dukung Anthropic dan Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) oleh @heziqiang
- **[Notifikasi: Pesan dalam aplikasi]** Perbaiki masalah kinerja saat mengirim pesan dalam aplikasi ke banyak pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki masalah di mana tinggi modal pintasan melebihi tinggi area pandang ([#8437](https://github.com/nocobase/nocobase/pull/8437)) oleh @zhangzhonghe
  - Perbaiki masalah di mana aturan tautan tombol baris tabel memengaruhi status tombol di dalam formulir popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) oleh @zhangzhonghe
  - Perbaiki masalah di mana status kolom aksi tabel terkontaminasi saat berpindah halaman. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) oleh @gchust
  - Tambahkan toleransi kesalahan untuk skema aksi, untuk menghindari kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher
  - perbaiki bidang judul tidak diperbarui ketika bidang asosiasi diatur ke mode hanya-baca di formulir buat ([#8413](https://github.com/nocobase/nocobase/pull/8413)) oleh @katherinehhh
  - Komponen angka tidak menampilkan nilai ([#8410](https://github.com/nocobase/nocobase/pull/8410)) oleh @chenos
  - perbaiki pengaturan bidang judul menghilang setelah mengatur URL lampiran dan kemudian mengubah ke bidang lain di item formulir ([#8418](https://github.com/nocobase/nocobase/pull/8418)) oleh @katherinehhh
  - perbaiki masalah dengan tombol kirim di mana lewati validasi wajib tidak berfungsi saat konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh
  - perbaiki masalah di mana pengaturan tata letak di blok kartu grid tidak berpengaruh ([#8399](https://github.com/nocobase/nocobase/pull/8399)) oleh @katherinehhh
  - perbaiki data pilih bertingkat tidak dibersihkan setelah pengiriman berhasil di formulir buat ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh
  - perbaiki cegah penugasan ketika karakter Cina dimasukkan di bidang angka ([#8397](https://github.com/nocobase/nocobase/pull/8397)) oleh @katherinehhh
  - selesaikan masalah dengan tombol kirim yang muncul di popup pemilihan file dari bidang asosiasi satu-ke-satu ([#8398](https://github.com/nocobase/nocobase/pull/8398)) oleh @katherinehhh
  - perbaiki logika perbaikan untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh
- **[mesin-alur]** Perbaiki langkah-langkah alur peristiwa dinamis berjalan dua kali saat membuka popup melalui klik tombol. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) oleh @gchust
- **[Mesin alur]** Perbaiki masalah di mana resolusi variabel salah ketika filterByTk adalah sebuah array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) oleh @gchust
- **[Manajer file]** Perbaiki masalah di mana URL file yang dihasilkan salah untuk file yang diunggah ke penyimpanan S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) oleh @mytharcher
- **[Bidang koleksi: Banyak ke banyak (array)]** Perbaiki kesalahan saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock
- **[Alur Kerja]**

  - Perbaiki masalah di mana ID skema tidak diperbarui di simpul duplikat ([#8396](https://github.com/nocobase/nocobase/pull/8396)) oleh @mytharcher
  - Tambahkan ID instance ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID di bawah mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher
- **[Blok: template (usang)]** Memperbaiki masalah di mana halaman edit untuk template warisan (v1) tidak dapat diakses. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) oleh @gchust
- **[Sumber data: REST API]** Tambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher
- **[Multi-ruang]**

  - Ruang terkait saat menambahkan data terkait oleh @jiannx
  - Warna pemilih ruang mengikuti tema oleh @jiannx
- **[Cetak template]**

  - Perbaiki masalah pop-up konfigurasi template yang terhalang oleh @zhangzhonghe
  - dukung bidang spasi oleh @jiannx
  - tampilkan bidang spasi di versi 2.0 oleh @jiannx
- **[Penyimpanan file: S3(Pro)]** Perbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Perbaiki masalah di mana rekaman yang salah dimuat karena parameter yang salah oleh @mytharcher
  - Perbaiki blok nilai tidak ditampilkan karena komponen `ValueBlock.Result` hilang oleh @mytharcher
- **[Manajer email]**

  - perbaiki rantai percakapan oleh @jiannx
  - Tambahkan pemfilteran ke halaman manajemen oleh @jiannx
