---
title: "NocoBase v1.7.6: Perbaikan Bug"
description: "Catatan Rilis v1.7.6"
---

### 🚀 Peningkatan

- **[client]** Melarang pemindahan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie

  - Memperbaiki masalah parameter filter blok yang salah ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe

  - Variabel objek saat ini tidak valid dalam aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe

  - Tidak dapat menghapus indikator bidang wajib di sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe

- **[undefined]** Hapus ketergantungan basis data untuk possibleTypes, terapkan konfigurasi berbasis API oleh @aaaaaajie

- **[Mobile]** Optimalkan masalah lag pada popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe

- **[Manajer sumber data]** Hapus ketergantungan basis data untuk possibleTypes, terapkan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie

- **[Aksi: Impor catatan]** Memperbaiki kesalahan yang terjadi saat pengeditan batch ketika mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie

- **[Workflow]** Memperbaiki kesalahan UI ketika workflow tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher

- **[Workflow: JavaScript]** Memperbaiki require untuk jalur relatif oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki kesalahan yang muncul saat workflow dihapus oleh @mytharcher

  - Memuat ulang asosiasi file dari snapshot untuk menghindari kedaluwarsa URL oleh @mytharcher

  - Memperbaiki variabel pemicu oleh @mytharcher
