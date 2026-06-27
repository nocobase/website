---
title: "NocoBase v2.1.0-beta.1: Memperbarui pengawas aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario"
description: "Catatan Rilis v2.1.0-beta.1"
---

### 🎉 Fitur Baru

- **[server]** Refaktor supervisor aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario ([#8043](https://github.com/nocobase/nocobase/pull/8043)) oleh @2013xile

### 🚀 Peningkatan

- **[client]**
  - Meningkatkan UI penugasan bidang tanggal/waktu untuk mendukung pemilihan tanggal/waktu relatif. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) oleh @gchust

  - Mendukung penentuan bidang judul untuk bidang asosiasi saat menetapkan bidang. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) oleh @gchust

### 🐛 Perbaikan Bug

- **[flow-engine]**
  - Memperbaiki masalah di mana submenu bidang filter tidak dapat diperluas saat ada kata kunci pencarian. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) oleh @gchust

  - Memperbaiki aksi hapus kolom yang tidak berfungsi pada edit sub-tabel popup saat createModelOptions dikonfigurasi ([#8560](https://github.com/nocobase/nocobase/pull/8560)) oleh @katherinehhh

- **[client]**
  - Memperbaiki masalah di mana menetapkan satu rekaman ke bidang relasi many-to-many menghasilkan hasil yang salah. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) oleh @gchust

  - Mengurai tanggal menggunakan pemilih tanggal dan menambahkan validasi kekuatan kata sandi, dll ([#8647](https://github.com/nocobase/nocobase/pull/8647)) oleh @jiannx

  - Memperbaiki masalah jarak yang disebabkan oleh aksi tertaut yang tersembunyi di kolom aksi tabel ([#8646](https://github.com/nocobase/nocobase/pull/8646)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana `Action.Modal` tidak dapat ditutup setelah beberapa interaksi ([#8642](https://github.com/nocobase/nocobase/pull/8642)) oleh @mytharcher

  - Memperbaiki kesalahan sintaks saat item markdown merender Liquid yang tidak valid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) oleh @katherinehhh

  - Memperbaiki permintaan parsing backend yang tidak perlu untuk properti bidang to-many di blok formulir. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) oleh @gchust

  - Memperbaiki format angka yang hilang untuk bidang rumus angka dan pengaturan format tanggal untuk bidang rumus tanggal ([#8625](https://github.com/nocobase/nocobase/pull/8625)) oleh @katherinehhh

  - Memperbaiki rendering batas atas yang tidak lengkap pada item formulir pertama ([#8623](https://github.com/nocobase/nocobase/pull/8623)) oleh @katherinehhh

  - Memperbaiki: menyembunyikan "Aktifkan tabel pohon" dan "Perluas semua baris secara default" untuk koleksi non-pohon ([#8566](https://github.com/nocobase/nocobase/pull/8566)) oleh @katherinehhh

- **[utils]** Memperbaiki masalah keamanan mesin evaluator `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) oleh @mytharcher

- **[AI employees]**
  - Memperbaiki masalah di mana tautan kutipan dari pencarian web AI tidak ditampilkan di kotak obrolan ([#8651](https://github.com/nocobase/nocobase/pull/8651)) oleh @cgyrock

  - Memperbaiki kesalahan parameter API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) oleh @cgyrock

- **[Template print]** Memperbaiki bidang dengan kunci yang sama menyebabkan kesalahan rendering oleh @jiannx

- **[Workflow: Approval]**
  - Memperbaiki masalah di mana kesalahan muncul saat menyetujui rekaman yang dihapus oleh @mytharcher

  - Memperbaiki masalah di mana data persetujuan tidak ditampilkan di popup detail rekaman jika mode alur kerja diatur ke "Sebelum menyimpan" oleh @mytharcher
