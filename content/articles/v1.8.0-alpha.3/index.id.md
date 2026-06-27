---
title: "NocoBase v1.8.0-alpha.3: Optimalkan masalah kinerja saat memproses file XLSX besar"
description: "Catatan Rilis v1.8.0-alpha.3"
---

### 🚀 Peningkatan

- **[Aksi: Edit batch]** Gunakan `filterByTk` sebagai pengganti `filter` dalam mode terpilih ([#6994](https://github.com/nocobase/nocobase/pull/6994)) oleh @mytharcher

- **[Aksi: Impor catatan Pro]** Optimalkan masalah kinerja saat memproses file XLSX besar (dataset dengan baris/kolom tinggi), mencegah kerusakan atau pembekuan sistem. oleh @aaaaaajie

### 🐛 Perbaikan Bug

- **[klien]**
  - Judul field hilang pada komponen assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) oleh @katherinehhh

  - Item menu terakhir tidak dapat dipilih dalam daftar menu pindah ([#6997](https://github.com/nocobase/nocobase/pull/6997)) oleh @zhangzhonghe

  - Konten ditampilkan salah pada halaman yang dibuka melalui tautan popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) oleh @zhangzhonghe

- **[Alur Kerja]**
  - Perbaiki filter tidak diperbarui saat mengganti tab kategori ([#6989](https://github.com/nocobase/nocobase/pull/6989)) oleh @mytharcher

  - Perbaiki statistik alur kerja tidak dibuat secara otomatis ([#6993](https://github.com/nocobase/nocobase/pull/6993)) oleh @mytharcher
