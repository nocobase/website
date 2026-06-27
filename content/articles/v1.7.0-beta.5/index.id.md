---
title: "NocoBase v1.7.0-beta.5: Mendukung aksi tabel inline dengan mode hanya ikon"
description: "Catatan Rilis v1.7.0-beta.5"
---

### 🎉 Fitur Baru

- **[client]** Mendukung aksi tabel inline dengan mode hanya ikon, tampilkan nama aksi saat di-hover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) oleh @katherinehhh

### 🚀 Peningkatan

- **[Manajer Berkas]** Menyederhanakan logika pembuatan URL berkas dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher

- **[Penyimpanan Berkas: S3(Pro)]**
  - Mengubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe

  - Mengubah ke cara sederhana untuk membuat URL berkas oleh @mytharcher

- **[Manajer Cadangan]** Mengizinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

### 🐛 Perbaikan Bug

- **[client]**
  - Warna ikon di sudut kanan atas halaman tidak berubah sesuai tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe

  - Bidang teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh

  - Mengklik tombol reset pada formulir filter tidak dapat membersihkan kondisi filter blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe

- **[Alur Kerja: Node Manual]**
  - Perbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher

  - Ubah nama migrasi untuk memastikan eksekusi ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher

  - Perbaiki bidang judul alur kerja di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher

  - Hindari koleksi yang disinkronkan dari bidang ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher

  - Perbaiki kesalahan migrasi saat kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos

- **[Alur Kerja]** Jangan menghitung tugas saat alur kerja dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher

- **[Alur Kerja: Node Agregat]** Perbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher

- **[Sematkan NocoBase]** Halaman menampilkan kosong oleh @zhangzhonghe

- **[Manajer Cadangan]** Tidak dapat memulai server saat pengaturan cadangan default hilang oleh @gchust

- **[Alur Kerja: Persetujuan]**
  - Perbaiki kesalahan bidang asosiasi berkas di formulir proses oleh @mytharcher

  - Perbaiki jumlah tugas berdasarkan hooks oleh @mytharcher
