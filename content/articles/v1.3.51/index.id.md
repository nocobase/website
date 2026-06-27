---
title: "NocoBase v1.3.51: Perbaikan Bug"
description: "Catatan Rilis v1.3.51"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki pemeriksaan izin kolom yang tidak terpengaruh oleh konteks kolom asosiasi ([#5672](https://github.com/nocobase/nocobase/pull/5672)) oleh @katherinehhh

  - Memperbaiki aturan tautan yang menyimpan perubahan nilai kosong menjadi nilai kosong statis ([#5667](https://github.com/nocobase/nocobase/pull/5667)) oleh @katherinehhh

- **[Kolom koleksi: Banyak ke banyak (array)]** Memperbaiki masalah saat mengambil rekaman dalam koleksi asosiasi dengan kolom banyak ke banyak (array) yang menyebabkan kesalahan ([#5661](https://github.com/nocobase/nocobase/pull/5661)) oleh @2013xile

- **[Blok: Gantt]** Memperbaiki template blok gantt yang salah memanggil blok kalender saat menambahkan ([#5673](https://github.com/nocobase/nocobase/pull/5673)) oleh @katherinehhh

- **[Visualisasi data]** Memperbaiki masalah di mana transformasi data tidak berfungsi pada tooltip di grafik sumbu ganda ([#5649](https://github.com/nocobase/nocobase/pull/5649)) oleh @2013xile
