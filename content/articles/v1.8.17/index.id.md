---
title: "NocoBase v1.8.17: Dukungan untuk menggunakan judul tugas yang konsisten untuk semua node persetujuan dalam alur kerja yang sama"
description: "Catatan Rilis v1.8.17"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam workflow yang sama oleh @mytharcher

### 🚀 Peningkatan

- **[Autentikasi]** Menghapus parameter token dari URL setelah berhasil masuk ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile

- **[Cetak template]** Mendukung array field m2m oleh @jiannx

### 🐛 Perbaikan Bug

- **[Mobile]** Memperbaiki masalah data pengiriman formulir dalam dialog persetujuan di perangkat mobile yang tidak sesuai ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe

- **[Workflow]** Memperbaiki terjemahan judul halaman di pusat tugas workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher

- **[Kalender]** Tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher

- **[Manajer file]** Menghapus petunjuk batas ukuran unggah file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]**
  - Menandai parameter bermasalah `attachmentField` sebagai tidak digunakan lagi oleh @mytharcher

  - Memperbaiki masalah metode autentikasi IAM yang tidak dapat digunakan untuk mengunggah file oleh @mytharcher
