---
title: "NocoBase v1.4.20: Izinkan mengurutkan alur kerja saat mengikat ke tombol aksi"
description: "Catatan Rilis v1.4.20"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan metode app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) oleh @chenos

### 🚀 Peningkatan

- **[client]**
  - Memungkinkan pengurutan alur kerja saat mengikat ke tombol aksi ([#6017](https://github.com/nocobase/nocobase/pull/6017)) oleh @mytharcher

  - Mengubah tautan referensi evaluator ke situs dokumentasi ([#6021](https://github.com/nocobase/nocobase/pull/6021)) oleh @mytharcher

  - Mendukung maxTagCount: 'responsive' pada komponen dropdown multi-pilih ([#6007](https://github.com/nocobase/nocobase/pull/6007)) oleh @katherinehhh

  - Mengatur waktu akhir default untuk komponen rentang waktu di blok filter menjadi 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) oleh @katherinehhh

- **[Aksi: Edit massal]** Memperbarui tombol kirim formulir edit massal: menghapus penetapan kolom dan aturan tautan ([#6008](https://github.com/nocobase/nocobase/pull/6008)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki validasi wajib yang tidak berfungsi setelah menghapus data di editor teks kaya ([#6006](https://github.com/nocobase/nocobase/pull/6006)) oleh @katherinehhh

  - Memperbaiki masalah ketidaksejajaran saat tombol kolom aksi disembunyikan ([#6014](https://github.com/nocobase/nocobase/pull/6014)) oleh @katherinehhh

  - Memperbaiki masalah tombol Buat Koleksi saat mengklik tab Koleksi di halaman REST API ([#5992](https://github.com/nocobase/nocobase/pull/5992)) oleh @katherinehhh

  - Memperbaiki masalah di mana targetKey tidak dapat memilih bidang NanoID dalam relasi satu-ke-banyak ([#5999](https://github.com/nocobase/nocobase/pull/5999)) oleh @katherinehhh

  - Memperbaiki gaya tombol pengaturan di tema kompak ([#6001](https://github.com/nocobase/nocobase/pull/6001)) oleh @katherinehhh

  - Memperbaiki gaya komponen daftar ([#5998](https://github.com/nocobase/nocobase/pull/5998)) oleh @mytharcher

  - Memperbaiki masalah di mana header yang disertakan dalam permintaan klien ditimpa ([#6009](https://github.com/nocobase/nocobase/pull/6009)) oleh @2013xile

  - Memperbaiki foreignKey, targetKey, dan sourceKey harus mendukung pemfilteran berdasarkan karakter Mandarin ([#5997](https://github.com/nocobase/nocobase/pull/5997)) oleh @katherinehhh

- **[Aksi: Impor catatan]** Memperbaiki impor dengan asosiasi milik-ke-banyak yang menggunakan target key berbeda ([#6024](https://github.com/nocobase/nocobase/pull/6024)) oleh @chareice

- **[Blok: Peta]** Memperbaiki bidang peta di blok detail agar dirender sebagai blok peta ([#6010](https://github.com/nocobase/nocobase/pull/6010)) oleh @katherinehhh

- **[Sematkan NocoBase]** Token untuk sematan bertentangan dengan autentikasi oleh @chenos
