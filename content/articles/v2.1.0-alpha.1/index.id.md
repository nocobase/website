---
title: "NocoBase v2.1.0-alpha.1: Perbaiki UI penugasan bidang tanggal/waktu untuk mendukung pemilihan tanggal/waktu relatif"
description: "Catatan Rilis v2.1.0-alpha.1"
---

### 🎉 Fitur Baru

- **[Aksi: Edit massal]** edit massal 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]**
  - Memperbaiki UI penugasan bidang tanggal/waktu untuk mendukung pemilihan tanggal/waktu relatif. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) oleh @gchust

  - Mendukung penentuan bidang judul untuk bidang asosiasi saat menetapkan bidang. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) oleh @gchust

  - Tabel 2.0 mendukung pengurutan seret dan lepas ([#8540](https://github.com/nocobase/nocobase/pull/8540)) oleh @jiannx

  - Memindahkan pengaturan penugasan bidang dan nilai default ke konfigurasi tingkat formulir. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) oleh @chenos

- **[Lokalisasi]** secara otomatis membuat kunci i18n yang hilang ([#8588](https://github.com/nocobase/nocobase/pull/8588)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[mesin-alur]** Memperbaiki masalah di mana submenu bidang filter tidak dapat diperluas saat ada kata kunci pencarian. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) oleh @gchust

- **[klien]**
  - Memperbaiki masalah di mana menetapkan satu catatan ke bidang relasi banyak-ke-banyak menghasilkan hasil yang salah. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) oleh @gchust

  - mengurai tanggal menggunakan pemilih tanggal dan menambahkan validasi kekuatan kata sandi, dll. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) oleh @jiannx

  - Memperbaiki masalah jarak yang disebabkan oleh aksi tertaut yang tersembunyi di kolom aksi tabel ([#8646](https://github.com/nocobase/nocobase/pull/8646)) oleh @zhangzhonghe

  - memperbaiki kesalahan sintaks resolusi saat item markdown merender Liquid yang tidak valid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) oleh @katherinehhh

  - Memperbaiki permintaan parsing backend yang tidak perlu untuk properti bidang to-many di blok formulir. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) oleh @gchust

  - Memperbaiki masalah di mana `Action.Modal` tidak dapat ditutup setelah beberapa interaksi ([#8642](https://github.com/nocobase/nocobase/pull/8642)) oleh @mytharcher

  - memperbaiki format angka yang hilang untuk bidang rumus angka dan pengaturan format tanggal untuk bidang rumus tanggal ([#8625](https://github.com/nocobase/nocobase/pull/8625)) oleh @katherinehhh

  - memperbaiki rendering batas atas yang tidak lengkap pada item formulir pertama ([#8623](https://github.com/nocobase/nocobase/pull/8623)) oleh @katherinehhh

  - Memperbaiki masalah di mana bidang lampiran asosiasi yang dibersihkan tidak disimpan setelah dikirimkan dalam formulir edit ([#8616](https://github.com/nocobase/nocobase/pull/8616)) oleh @katherinehhh

  - memperbaiki data yang difilter salah di dropdown asosiasi saat bidang judul adalah kunci asing ([#8619](https://github.com/nocobase/nocobase/pull/8619)) oleh @katherinehhh

  - memperbaiki tidak dapat mengembalikan data yang dipilih di komponen bidang pemilih catatan setelah diedit ([#8610](https://github.com/nocobase/nocobase/pull/8610)) oleh @katherinehhh

  - Memperbaiki opsi komponen bidang tidak diperbarui secara real-time saat bidang asosiasi mengganti pola ([#8611](https://github.com/nocobase/nocobase/pull/8611)) oleh @katherinehhh

- **[utils]** Memperbaiki masalah keamanan mesin evaluator `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) oleh @mytharcher

- **[Karyawan AI]**
  - Memperbaiki masalah di mana tautan kutipan dari pencarian web AI tidak ditampilkan di kotak obrolan ([#8651](https://github.com/nocobase/nocobase/pull/8651)) oleh @cgyrock

  - memperbaiki kesalahan parameter API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) oleh @cgyrock

- **[Manajer file]** memperbaiki masalah di mana komponen bidang file masih dapat membuka dialog pemilih saat dinonaktifkan ([#8617](https://github.com/nocobase/nocobase/pull/8617)) oleh @katherinehhh
