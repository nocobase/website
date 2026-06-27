---
title: "NocoBase v1.9.41: Perbaiki jalur rute tautan alur kerja"
description: "Catatan Rilis v1.9.41"
---

### 🚀 Perbaikan

- **[Klien]** Mendukung penonaktifan parameter tambahan default yang redundan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Alur Kerja]** Menambahkan toleransi kesalahan untuk komponen pemilih catatan koleksi, untuk menghindari kesalahan yang muncul saat koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher

- **[Manajer Berkas]** Mengamankan jalur berkas untuk penyimpanan lokal, untuk menghindari jalur akses keluar dari root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher

- **[Alur Kerja: Subalur]** Memperbaiki jalur rute tautan alur kerja oleh @mytharcher
