---
title: "NocoBase v1.7.0-beta.34: Peningkatan Fungsionalitas Impor"
description: "Catatan Rilis v1.7.0-beta.34"
---

### 🎉 Fitur Baru

- **[tidak ditentukan]** Dukungan baru untuk Gitpod memungkinkan Anda memulai lingkungan pengembangan dengan satu klik dan segera memulai pengembangan. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) oleh @kerwin612
- **[Aksi: Impor Rekam Pro]**

  - Mendukung pendefinisian rekaman unik berdasarkan beberapa bidang saat mengatur impor oleh @aaaaaajie
  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat mengatur impor oleh @aaaaaajie
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan tinggi untuk bidang editor kode oleh @mytharcher
- **[Manajer Email]**

  - mendukung penandaan email sebagai todo dan menambahkan catatan oleh @jiannx
  - mendukung pengaturan label dan penggabungan oleh @jiannx

### 🚀 Peningkatan

- **[klien]**

  - meningkatkan gaya untuk komponen filter rentang tanggal ([#6939](https://github.com/nocobase/nocobase/pull/6939)) oleh @katherinehhh
  - Memperbaiki masalah di mana kontrol formulir yang tersembunyi menangkap tombol tab, secara signifikan meningkatkan efisiensi operasi formulir ([#6942](https://github.com/nocobase/nocobase/pull/6942)) oleh @kerwin612
  - memvalidasi bidang wajib sebelum menampilkan dialog konfirmasi ([#6931](https://github.com/nocobase/nocobase/pull/6931)) oleh @katherinehhh
  - menyesuaikan tampilan konten opsi filter tanggal ([#6928](https://github.com/nocobase/nocobase/pull/6928)) oleh @katherinehhh
- **[tidak ditentukan]** Upgrade versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - pengaturan visibilitas titik dua label formulir tidak berfungsi ([#6947](https://github.com/nocobase/nocobase/pull/6947)) oleh @katherinehhh
  - Ubah ukuran blok dengan menyeret tidak berfungsi ([#6944](https://github.com/nocobase/nocobase/pull/6944)) oleh @chenos
  - i18n komponen penugasan bidang tidak berfungsi ([#6945](https://github.com/nocobase/nocobase/pull/6945)) oleh @katherinehhh
  - Pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh
  - Variabel kondisi bersarang dalam aturan tautan tidak dirender dengan benar ([#6929](https://github.com/nocobase/nocobase/pull/6929)) oleh @katherinehhh
  - Pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh
  - Memperbaiki masalah dengan tombol salin di pop-up kesalahan yang menyalin sebagai [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) oleh @kerwin612
  - Penguraian variabel tanggal yang salah dalam batas rentang tanggal ([#6930](https://github.com/nocobase/nocobase/pull/6930)) oleh @katherinehhh
- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi dalam asosiasi banyak-ke-banyak ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie
- **[tidak ditentukan]** Gunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher
- **[Bidang Koleksi: Markdown(Vditor)]** Masalah lebar komponen bidang markdown-vditor setelah memperbesar dan memperkecil ([#6946](https://github.com/nocobase/nocobase/pull/6946)) oleh @katherinehhh
- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos
- **[Notifikasi: Pesan dalam aplikasi]** Menyelesaikan masalah di mana tindakan "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66
- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos
- **[Aksi: Ekspor rekaman]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie
- **[Alur Kerja: Acara tindakan kustom]** Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki parameter unggahan duplikat oleh @mytharcher
  - Memperbaiki URL pratinjau dan parameter unggahan oleh @mytharcher
- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki id rekaman yang salah untuk ViewAction oleh @mytharcher
  - Memperbaiki lokal oleh @mytharcher
  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher
- **[Manajer Email]**

  - perbaikan: hapus kolom tindakan oleh @jiannx
  - perbaikan kesalahan modal tambah catatan oleh @jiannx
  - perbaikan izin api koleksi mailMessageNotes dan mailMessageLabels oleh @jiannx
