---
title: "NocoBase v1.6.20: Jadikan plugin Departemen, URL Lampiran, dan Pesan Respons Alur Kerja gratis"
description: "Catatan Rilis v1.6.20"
---

### 🎉 Fitur Baru

- **[Departemen]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Workflow menjadi gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos

### 🐛 Perbaikan Bug

- **[klien]**
  - Formulir filter tidak boleh menampilkan peringatan "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe

  - Opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh

  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lolos validasi, pemfilteran tetap terpicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe

  - Beralih ke menu grup tidak boleh melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe

- **[Penyimpanan file: S3(Pro)]**
  - Atur bahasa oleh @jiannx

  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx

- **[Manajer migrasi]** opsi lewati pencadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust
