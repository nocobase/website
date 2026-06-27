---
title: "NocoBase v1.8.8: Menambahkan mode \"Semua terselesaikan\" untuk node paralel"
description: "Catatan Rilis v1.8.8"
---

### 🎉 Fitur Baru

- **[Workflow: Node paralel]** Menambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher

- **[Adaptor antrian Redis]** Menambahkan adaptor Redis untuk antrian event oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Membuat antrian memori konkuren tersedia saat pemrosesan item tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher

- **[database]** Secara otomatis mengaktifkan paginasi sederhana ketika dataset melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie

- **[Workflow: Node manual]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe

- **[Adaptor antrian Redis]** Membuat antrian konkuren tersedia saat pemrosesan item tidak penuh untuk adaptor Redis oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh

  - Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie

  - Setelah perubahan bidang, bidang asosiasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe

  - masalah tampilan ketika variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh

- **[database]**
  - Mengatasi kegagalan paginasi sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie

  - Memperbaiki kegagalan saat mengekspor dataset besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie

  - Memperbaiki masalah di mana pengurutan kunci primer default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie

- **[auth]** Memperbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile

- **[Manajer sumber data]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie

- **[Aksi: Edit batch]** Tidak dapat melakukan edit batch dan pembaruan batch di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe

- **[Workflow]** Memperbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher

- **[Sumber data: Oracle Eksternal]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi oleh @aaaaaajie

- **[Workflow: Persetujuan]** URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menampilkan kesalahan 404 oleh @zhangzhonghe

- **[Manajer email]** relasi koleksi pesan dan label mengalami pengecualian di bawah mysql oleh @jiannx
