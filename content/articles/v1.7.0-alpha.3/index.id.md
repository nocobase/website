---
title: "NocoBase v1.7.0-alpha.3: Mendukung aksi tabel inline dengan mode hanya ikon"
description: "Catatan Rilis v1.7.0-alpha.3"
---

### 🎉 Fitur Baru

- **[klien]** Mendukung aksi tabel inline dengan mode hanya ikon, tampilkan nama aksi saat dihover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) oleh @katherinehhh

### 🚀 Peningkatan

- **[Manajer Berkas]** Menyederhanakan logika pembuatan URL berkas dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher

- **[Penyimpanan Berkas: S3(Pro)]**
  - Mengubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe

  - Mengubah ke cara sederhana untuk menghasilkan URL berkas oleh @mytharcher

- **[Manajer Cadangan]** Mengizinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**
  - Field yang hilang dalam konfigurasi aturan tautan ([#6488](https://github.com/nocobase/nocobase/pull/6488)) oleh @katherinehhh

  - Warna ikon di sudut kanan atas halaman tidak berubah sesuai tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe

  - Field teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh

  - Gaya input tidak benar untuk pengaturan nilai default formulir ([#6490](https://github.com/nocobase/nocobase/pull/6490)) oleh @gchust

  - Mengklik tombol reset pada formulir filter tidak dapat membersihkan kondisi penyaringan blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe

- **[Workflow: Node manual]**
  - Mengubah nama migrasi untuk memastikan eksekusi ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher

  - Memperbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher

  - Memperbaiki field judul workflow di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher

  - Memperbaiki error migrasi saat kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos

  - Menghindari koleksi yang disinkronkan dari field ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher

- **[Workflow]** Tidak menghitung tugas saat workflow dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher

- **[Variabel dan rahasia]** Tombol tidak ditampilkan di drawer buat variabel baru ([#6485](https://github.com/nocobase/nocobase/pull/6485)) oleh @gchust

- **[Workflow: Node agregat]** Memperbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher

- **[Embed NocoBase]** Halaman menampilkan kosong oleh @zhangzhonghe

- **[Manajer Cadangan]** Tidak dapat memulai server saat pengaturan cadangan default hilang oleh @gchust

- **[Workflow: Persetujuan]**
  - Memperbaiki error field asosiasi berkas di formulir proses oleh @mytharcher

  - Memperbaiki jumlah tugas berdasarkan hook oleh @mytharcher
