---
title: "NocoBase v1.8.7: Dukungan untuk menjalankan node uji coba"
description: "Catatan Rilis v1.8.7"
---

### 🎉 Fitur Baru

- **[Workflow: node perhitungan tanggal]** Mendukung uji coba node oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe

- **[Workflow]** Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Aturan gaya tidak berfungsi pada kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh

  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe

  - Menghindari pemilihan bidang non-asosiasi di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher

- **[Workflow: Subflow]** Memperbaiki error yang muncul saat sinyal recall tiba tetapi eksekusi yang tertunda tidak ada pada instance saat ini oleh @mytharcher
