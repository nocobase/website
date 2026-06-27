---
title: "NocoBase v1.6.5: Sederhanakan logika pembuatan URL file dan API"
description: "Catatan Rilis v1.6.5"
---

### 🚀 Peningkatan

- **[Manajer Berkas]** Menyederhanakan logika pembuatan URL berkas dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher

- **[Penyimpanan Berkas: S3(Pro)]** Ubah ke cara sederhana untuk menghasilkan URL berkas oleh @mytharcher

- **[Manajer Cadangan]** Izinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**
  - bidang teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh

  - Warna ikon di sudut kanan atas halaman tidak berubah mengikuti tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe

  - Mengklik tombol reset pada formulir filter tidak dapat menghapus kondisi penyaringan blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe

- **[Alur Kerja: Node Manual]**
  - Perbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher

  - Ubah nama migrasi untuk memastikan dapat dijalankan ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher

  - Perbaiki bidang judul alur kerja di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher

  - Perbaiki error migrasi ketika kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos

  - Hindari sinkronisasi koleksi dari bidang ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher

- **[Alur Kerja: Node Agregat]** Perbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher

- **[Alur Kerja]** Jangan menghitung tugas ketika alur kerja dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher

- **[Manajer Cadangan]** Tidak dapat memulai server ketika pengaturan cadangan default hilang oleh @gchust

- **[Alur Kerja: Persetujuan]**
  - Perbaiki error bidang asosiasi berkas di formulir proses oleh @mytharcher

  - Perbaiki jumlah tugas berdasarkan kait (hooks) oleh @mytharcher
