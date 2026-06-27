---
title: "NocoBase v2.1.0-beta.23: Menambahkan kolom dibuat dan diperbarui oleh untuk alur kerja"
description: "Catatan Rilis v2.1.0-beta.23"
---

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan kolom dibuat oleh dan diperbarui oleh untuk workflow ([#9217](https://github.com/nocobase/nocobase/pull/9217)) oleh @mytharcher

### 🚀 Peningkatan

- **[tidak ditentukan]**
  - Meningkatkan panduan instalasi AI Agent untuk mencegah Agent melewati wizard `--ui` dan mendeteksi secara otomatis manajer versi Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) oleh @Molunerfinn

  - Memperbarui dokumentasi AI untuk mewajibkan NocoBase >= 2.1.0-beta.20 dan merekomendasikan versi beta terbaru. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) oleh @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) oleh @Molunerfinn

- **[client-v2]** Memisahkan client v2 dari client v1, dan menghapus ketergantungannya pada client v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[tidak ditentukan]** Memperbaiki pemilih bahasa yang menghasilkan URL tidak benar (misalnya, `/cn/es/` bukan `/es/`) di situs dokumentasi. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) oleh @Molunerfinn

- **[client]** Mengatur tinggi maksimum popover dan pengaman gulir agar area submit tetap dapat dijangkau ([#9226](https://github.com/nocobase/nocobase/pull/9226)) oleh @jiannx

- **[Visualisasi Data]** Memperbaiki pemilih kolom kosong dalam konfigurasi kueri grafik di halaman alur ([#9276](https://github.com/nocobase/nocobase/pull/9276)) oleh @2013xile

- **[Autentikasi]** Memperbaiki sesi lama yang tetap aktif setelah perubahan kata sandi ([#9261](https://github.com/nocobase/nocobase/pull/9261)) oleh @2013xile
