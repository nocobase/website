---
title: "NocoBase v1.7.8: Menambahkan variabel lingkungan untuk mengontrol metode output log audit"
description: "Catatan Rilis v1.7.8"
---

### 🎉 Fitur Baru

- **[Log audit]** Menambahkan variabel lingkungan `AUDIT_LOGGER_TRANSPORT` untuk mengontrol metode output log audit oleh @2013xile

### 🚀 Peningkatan

- **[Kalender]** Mendukung pengaturan hari awal minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh

- **[Field koleksi: Banyak ke banyak (array)]** Kesalahan terkait izin saat menampilkan field many-to-many(many) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie

### 🐛 Perbaikan Bug

- **[klien]**
  - Masalah penutupan otomatis saat mengonfigurasi field di form popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh

  - Opsi field pilihan tidak berfungsi di aturan tautan form filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh

  - Aturan validasi form filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe

  - Memperbaiki field tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe

- **[Aksi: Impor rekaman]** Memperbaiki kegagalan impor tabel anak saat field relasional terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie

- **[Visualisasi data]** Field grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile

- **[Alur kerja]** Memperbaiki kesalahan yang muncul di aksi eksekusi manual saat pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher

- **[Alur kerja: Persetujuan]**
  - Untuk menghindari kesalahan field yang tidak terdefinisi oleh @mytharcher

  - Memperbaiki kesalahan API saat menyegarkan halaman detail oleh @mytharcher

- **[WeCom]** Menambahkan pemeriksaan jalur callback di middleware gateway oleh @2013xile
