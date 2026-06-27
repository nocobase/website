---
title: "NocoBase v1.9.0-alpha.3: Mendukung menampilkan tabel yang ditentukan plugin di sumber data utama"
description: "Catatan Rilis v1.9.0-alpha.3"
---

### 🎉 Fitur Baru

- **[Sumber data: Utama]** Mendukung penampilan tabel yang ditentukan plugin di sumber data utama. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) oleh @aaaaaajie

- **[Workflow: node perhitungan tanggal]** Mendukung uji coba eksekusi node oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe

- **[Workflow]** Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Aturan gaya tidak berfungsi pada kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh

  - Menghindari pemilihan field non-asosiasi di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher

  - Perbaiki error: Tidak dapat menyelesaikan 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) oleh @zhangzhonghe

  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe

- **[database]** Memperbaiki error saat mengaktifkan paginasi sederhana untuk tabel sumber data eksternal ([#7222](https://github.com/nocobase/nocobase/pull/7222)) oleh @aaaaaajie

- **[Field koleksi: Urutkan]** Kehilangan pemilihan field urutan saat menduplikasi rekaman ([#7116](https://github.com/nocobase/nocobase/pull/7116)) oleh @katherinehhh

- **[Workflow: Subflow]** Memperbaiki error yang muncul saat sinyal recall tiba tetapi eksekusi yang tertunda tidak ada di instance saat ini oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki beberapa level asosiasi saat mengirimkan persetujuan oleh @mytharcher

  - Menambahkan toleransi kesalahan untuk persetujuan yang dihapus di daftar rekaman oleh @mytharcher

- **[Manajer email]** Kinerja optimal daftar pesan email oleh @jiannx
