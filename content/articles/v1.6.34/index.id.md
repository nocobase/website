---
title: "NocoBase v1.6.34: Dukung pendefinisian catatan unik berdasarkan beberapa bidang saat mengimpor pengaturan"
description: "Catatan Rilis v1.6.34"
---

### 🎉 Fitur Baru

- **[Aksi: Impor Rekaman Pro]**
  - Mendukung pendefinisian rekaman unik berdasarkan beberapa bidang saat pengaturan impor oleh @aaaaaajie

  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat pengaturan impor oleh @aaaaaajie

### 🚀 Peningkatan

- **[tidak ditentukan]** Upgrade versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh

  - Pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh

- **[tidak ditentukan]** Gunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher

- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi dalam asosiasi banyak-ke-banyak ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie

- **[Aksi: Ekspor rekaman]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie

- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos

- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana tindakan "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66

- **[Alur kerja: Aksi kustom]** Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]**
  - Memperbaiki url pratinjau dan parameter unggah oleh @mytharcher

  - Memperbaiki parameter unggah yang duplikat oleh @mytharcher

- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher

- **[Alur kerja: Persetujuan]**
  - Memperbaiki id rekaman yang salah untuk ViewAction oleh @mytharcher

  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher
