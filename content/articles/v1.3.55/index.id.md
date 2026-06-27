---
title: "NocoBase v1.3.55: Menggunakan ikon dengan makna yang lebih akurat untuk penginisialisasi blok"
description: "Catatan Rilis v1.3.55"
---

### 🚀 Peningkatan

- **[client]** Menggunakan ikon dengan makna yang lebih akurat untuk penginisialisasi blok ([#5757](https://github.com/nocobase/nocobase/pull/5757)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki kasus E2E berdasarkan ikon yang diubah ([#5768](https://github.com/nocobase/nocobase/pull/5768)) oleh @mytharcher

  - Memperbaiki bidang pilih agar menampilkan kosong saat data tidak ada ([#5762](https://github.com/nocobase/nocobase/pull/5762)) oleh @katherinehhh

- **[database]** Memperbaiki pembaruan nilai asosiasi hasOne/belongsTo tanpa kunci asing ([#5754](https://github.com/nocobase/nocobase/pull/5754)) oleh @chareice

- **[Manajer sumber data]** Memperbaiki tampilan kunci sumber yang salah ([#5771](https://github.com/nocobase/nocobase/pull/5771)) oleh @katherinehhh

- **[Alur kerja: Aksi kustom]**
  - Mengizinkan semua peran untuk memicu aksi kustom di sumber data eksternal oleh @mytharcher

  - Memperbaiki sumber data default sebagai utama oleh @mytharcher

  - Memperbaiki kesalahan sumber data saat tidak cocok oleh @mytharcher

  - Memperbaiki pemicu aksi kustom yang tidak aktif pada asosiasi oleh @mytharcher
