---
title: "NocoBase v2.0.0-alpha.36: Optimalkan gaya toolbar untuk tab halaman"
description: "Catatan Rilis v2.0.0-alpha.36"
---

### 🚀 Peningkatan

- **[flow-engine]** Optimalkan gaya toolbar untuk tab halaman ([#7795](https://github.com/nocobase/nocobase/pull/7795)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[flow-engine]**
  - Memperbaiki masalah di mana variabel pada bidang asosiasi subform tidak terselesaikan dengan benar saat bidang tersebut diubah melalui antarmuka pengguna. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) oleh @gchust

  - Kesalahan pada formulir edit untuk rekaman dengan kunci utama ganda ([#7798](https://github.com/nocobase/nocobase/pull/7798)) oleh @gchust

  - Memperbaiki masalah di mana beberapa konfigurasi untuk aksi "Buka Tampilan" tidak diterapkan, memastikan aksi sekarang berfungsi sesuai yang diinginkan untuk semua konfigurasi yang ditentukan. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) oleh @gchust

- **[client]**
  - Memperbaiki bidang pemilih koleksi yang tidak dapat memilih koleksi dengan benar ([#7794](https://github.com/nocobase/nocobase/pull/7794)) oleh @katherinehhh

  - Tidak dapat menyembunyikan kolom aksi pada blok tabel ([#7804](https://github.com/nocobase/nocobase/pull/7804)) oleh @gchust

  - Mendukung pemilihan seluruh objek variabel dalam prompt karyawan AI ([#7791](https://github.com/nocobase/nocobase/pull/7791)) oleh @gchust

- **[Users]** Refresh indeks yang salah saat nama bidang menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile
