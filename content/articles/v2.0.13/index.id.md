---
title: "NocoBase v2.0.13 : Mendukung tombol pemicu alur kerja untuk mengonfigurasi alur setelah sukses"
description: "Catatan Rilis v2.0.13"
---

### 🎉 Fitur Baru

- **[client]** Dukungan untuk mengonfigurasi alur setelah sukses pada tombol pemicu alur kerja ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher

### 🚀 Peningkatan

- **[Workflow]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher

- **[AI: Basis Pengetahuan]** Memperbarui logika pemuatan dokumen basis pengetahuan. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami error saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan bidang di blok detail tidak berfungsi saat render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust

- **[Penampil File Office]** Mengubah tinggi modal ke nilai yang sesuai untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher

- **[Template UI]** Memperbaiki masalah di mana alur peristiwa blok referensi di blok tabel tidak dapat dikonfigurasi dengan alur peristiwa klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust
