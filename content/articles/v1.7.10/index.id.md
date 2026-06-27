---
title: "NocoBase v1.7.10: Perbaikan Bug"
description: "Catatan Rilis v1.7.10"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana aturan keterkaitan menyebabkan perulangan tak terbatas ([#7050](https://github.com/nocobase/nocobase/pull/7050)) oleh @zhangzhonghe

  - Perbaikan: menggunakan optional chaining untuk menolak permintaan dengan aman di APIClient ketika handler mungkin tidak terdefinisi ([#7054](https://github.com/nocobase/nocobase/pull/7054)) oleh @sheldon66

  - Penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh

- **[Visualisasi Data]** tampilan yang salah pada bidang tanggal antara di filter grafik ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh

- **[Dokumentasi API]** plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt

- **[Aksi: Impor catatan]** Memperbaiki impor xlsx untuk membatasi bidang textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie
