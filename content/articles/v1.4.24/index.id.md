---
title: "NocoBase v1.4.24: input komponen datePicker hanya baca"
description: "Catatan Rilis v1.4.24"
---

### 🚀 Peningkatan

- **[client]** Input komponen datePicker hanya baca ([#6061](https://github.com/nocobase/nocobase/pull/6061)) oleh @Cyx649312038

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki pemuatan field asosiasi modal yang salah di blok tabel ([#6060](https://github.com/nocobase/nocobase/pull/6060)) oleh @katherinehhh

  - Memperbaiki masalah gaya di sub-tabel dalam blok detail ([#6049](https://github.com/nocobase/nocobase/pull/6049)) oleh @katherinehhh

  - Memperbaiki format field angka dalam mode readPretty yang memengaruhi mode edit ([#6050](https://github.com/nocobase/nocobase/pull/6050)) oleh @katherinehhh

  - Memperbaiki masalah gaya sel header tabel di ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) oleh @katherinehhh

- **[database]** memperbaiki masalah saat menginisialisasi field sort dengan primary key ([#6059](https://github.com/nocobase/nocobase/pull/6059)) oleh @chareice

- **[Visualisasi Data]** Menghapus klausa `LIMIT` saat menggunakan fungsi agregat tanpa mengatur dimensi dalam kueri grafik ([#6062](https://github.com/nocobase/nocobase/pull/6062)) oleh @2013xile

- **[Manajer Cadangan]** Memperbaiki kesalahan unduhan cadangan untuk pengguna yang hanya masuk ke sub-aplikasi oleh @gchust
