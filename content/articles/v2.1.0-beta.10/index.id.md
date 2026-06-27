---
title: "NocoBase v2.1.0-beta.10: Pembersihan terjadwal data checkpoint percakapan AI"
description: "Catatan Rilis v2.1.0-beta.10"
---

### 🎉 Fitur Baru

- **[Karyawan AI]**
  - Memungkinkan penambahan karyawan AI di popup tabel sub ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile

  - Pembersihan terjadwal data checkpoint percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock

- **[Pengawas Aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) oleh @gaston98765

- **[client]** Mendukung penampilan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust

- **[Workflow]** Memperbaiki masalah di mana graceful shutdown tidak menguras semua event ([#8894](https://github.com/nocobase/nocobase/pull/8894)) oleh @mytharcher

- **[Manajer tugas async]** tugas async ditambahkan untuk mendukung pekerja dalam mengirim pesan error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana popup "Pilih rekaman" di subtable gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust

  - Memperbaiki masalah di mana nilai default beberapa bidang tidak berlaku setelah menyegarkan halaman. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) oleh @gchust

- **[database]** Memperbaiki masalah validasi sisi server untuk bidang tanggal ([#8867](https://github.com/nocobase/nocobase/pull/8867)) oleh @2013xile

- **[Manajer sumber data]** Memperbaiki masalah bahwa koleksi yang dibuat oleh karyawan AI selalu kehilangan bidang `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock

- **[Karyawan AI]**
  - Memperbaiki masalah dengan URL yang ditentukan untuk layanan LLM tidak berlaku dalam panggilan model embedding teks. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) oleh @cgyrock

  - Memperbaiki potensi kesalahan variabel undefined dalam skrip migrasi upgrade plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock

- **[Lokalisasi]** localizationTexts:missing pengecualian izin antarmuka ([#8861](https://github.com/nocobase/nocobase/pull/8861)) oleh @jiannx

- **[Aksi: Impor Rekaman Pro]**
  - Memperbaiki event `beforeStop` pada sub aplikasi tidak terpicu oleh @mytharcher

  - Memperbaiki lazy import yang menyebabkan kesalahan SES oleh @mytharcher

  - Memperbaiki masalah di mana tugas async tidak berakhir setelah terjadi kesalahan dalam impor async oleh @cgyrock

- **[AI: Basis Pengetahuan]** Mencegah database vektor dan penyimpanan vektor yang sedang digunakan agar tidak dihapus. oleh @cgyrock

- **[Cetak template]** Memperbaiki kesalahan pencetakan koleksi SQL oleh @jiannx

- **[Manajer email]** Memperbaiki kesalahan halaman ketika email tidak ada oleh @jiannx
