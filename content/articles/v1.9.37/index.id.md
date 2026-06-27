---
title: "NocoBase v1.9.37: Perbarui versi math.js untuk mendukung lebih banyak fungsi"
description: "Catatan Rilis v1.9.37"
---

### 🚀 Peningkatan

- **[evaluators]** Memperbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah kinerja saat mengirim pesan dalam aplikasi ke banyak pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki data pilihan bertingkat (cascading select) yang tidak terhapus setelah pengiriman berhasil pada formulir pembuatan ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh

  - Menambahkan toleransi kesalahan pada skema aksi, untuk mencegah kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher

  - Memperbaiki masalah pada tombol kirim di mana validasi wajib diisi (skip required validation) tidak berfungsi saat konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh

- **[Field koleksi: Banyak ke banyak (array)]** Memperbaiki error saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock

- **[Workflow]** Memperbaiki masalah di mana ID skema tidak diperbarui pada node duplikat ([#8396](https://github.com/nocobase/nocobase/pull/8396)) oleh @mytharcher
