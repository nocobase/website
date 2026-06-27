---
title: "NocoBase v2.0.0-alpha.65: menambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar"
description: "Catatan Rilis v2.0.0-alpha.65"
---

### 🎉 Fitur Baru

- **[test]** menambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar ([#8343](https://github.com/nocobase/nocobase/pull/8343)) oleh @cgyrock

### 🚀 Peningkatan

- **[client]**
  - Editor teks kaya mendukung penyesuaian ukuran font, penyesuaian ukuran gambar, dan pemisahan baris lunak ([#8401](https://github.com/nocobase/nocobase/pull/8401)) oleh @jiannx

  - Mendukung penentuan kapan alur peristiwa dijalankan. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) oleh @gchust

  - Meningkatkan performa render daftar manajer plugin dengan mengubah ke css webkit asli untuk elipsis teks ([#8391](https://github.com/nocobase/nocobase/pull/8391)) oleh @mytharcher

- **[evaluators]** Memperbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher

- **[cli]** mendukung konfigurasi URL dasar CDN melalui env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) oleh @chenos

- **[flow-engine]** Menambahkan `rowOrder` ke GridModel untuk memastikan pengurutan baris yang konsisten ([#8371](https://github.com/nocobase/nocobase/pull/8371)) oleh @zhangzhonghe

- **[Flow engine]** Mendukung penyelesaian nilai bidang dalam catatan formulir saat ini meskipun tidak ditambahkan ke formulir edit. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) oleh @gchust

- **[AI employees]**
  - Mengoptimalkan tombol entri AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) oleh @heziqiang

  - Mengubah hasil pemanggil alur kerja menjadi `execution.output`, dengan secara eksplisit menggunakan node output, hasilnya bisa stabil ([#8423](https://github.com/nocobase/nocobase/pull/8423)) oleh @mytharcher

  - Menyembunyikan builder ai dalam daftar entri.<br/> Mengoptimalkan alur integrasi LLM.<br/> Memperbarui dokumentasi tentang model ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) oleh @heziqiang

  - Mendukung Anthropic dan Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) oleh @heziqiang

- **[Notification: In-app message]** Memperbaiki masalah performa saat mengirim pesan dalam aplikasi ke banyak pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana tinggi modal pintasan melebihi tinggi area pandang ([#8437](https://github.com/nocobase/nocobase/pull/8437)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aturan tautan tombol baris tabel memengaruhi status tombol di dalam formulir popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana status kolom aksi tabel terkontaminasi saat berpindah halaman. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) oleh @gchust

  - Menambahkan toleransi kesalahan untuk skema aksi, untuk menghindari kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher

  - memperbaiki bidang judul i tidak diperbarui ketika bidang asosiasi diatur ke mode hanya-baca dalam formulir buat ([#8413](https://github.com/nocobase/nocobase/pull/8413)) oleh @katherinehhh

  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) oleh @chenos

  - memperbaiki pengaturan bidang judul yang hilang setelah mengatur URL lampiran dan kemudian mengubah ke bidang lain dalam item formulir ([#8418](https://github.com/nocobase/nocobase/pull/8418)) oleh @katherinehhh

  - memperbaiki masalah dengan tombol kirim di mana validasi wajib yang dilewati tidak berfungsi saat konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh

  - memperbaiki masalah penyelesaian di mana pengaturan tata letak di blok kartu grid tidak berpengaruh ([#8399](https://github.com/nocobase/nocobase/pull/8399)) oleh @katherinehhh

  - memperbaiki data pilih bertingkat yang tidak dibersihkan setelah pengiriman berhasil dalam formulir buat ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh

  - memperbaiki mencegah penugasan ketika karakter Mandarin dimasukkan di bidang angka ([#8397](https://github.com/nocobase/nocobase/pull/8397)) oleh @katherinehhh

  - menyelesaikan masalah dengan tombol kirim yang muncul di popup pemilihan file dari bidang asosiasi satu-ke-satu ([#8398](https://github.com/nocobase/nocobase/pull/8398)) oleh @katherinehhh

  - memperbaiki logika penyempurnaan untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh

- **[flow-engine]** Memperbaiki langkah-langkah alur peristiwa dinamis yang berjalan dua kali saat membuka popup melalui klik tombol. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) oleh @gchust

- **[Flow engine]** Memperbaiki masalah di mana resolusi variabel salah ketika filterByTk adalah sebuah array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) oleh @gchust

- **[File manager]** Memperbaiki masalah di mana URL file yang dihasilkan salah untuk file yang diunggah ke penyimpanan S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) oleh @mytharcher

- **[Collection field: Many to many (array)]** Memperbaiki kesalahan saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock

- **[Workflow]**
  - Memperbaiki masalah di mana ID skema tidak diperbarui dalam node duplikat ([#8396](https://github.com/nocobase/nocobase/pull/8396)) oleh @mytharcher

  - Menambahkan ID instance ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID di bawah mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher

- **[Block: template (deprecated)]** Memperbaiki masalah di mana halaman edit untuk template warisan (v1) tidak dapat diakses. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) oleh @gchust

- **[Data source: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher

- **[Multi-space]**
  - Ruang terkait saat menambahkan data terkait oleh @jiannx

  - Warna pemilih ruang mengikuti tema oleh @jiannx

- **[Template print]**
  - Memperbaiki masalah pop-up template konfigurasi yang terhalang oleh @zhangzhonghe

  - mendukung bidang ruang oleh @jiannx

  - menampilkan bidang ruang di versi 2.0 oleh @jiannx

- **[File storage: S3(Pro)]** Memperbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher

- **[Workflow: Approval]**
  - Memperbaiki masalah di mana catatan yang salah dimuat karena parameter yang salah oleh @mytharcher

  - Memperbaiki blok nilai tidak ditampilkan karena komponen `ValueBlock.Result` yang hilang oleh @mytharcher

- **[Email manager]**
  - memperbaiki rantai percakapan oleh @jiannx

  - 管理页面添加筛选 oleh @jiannx
