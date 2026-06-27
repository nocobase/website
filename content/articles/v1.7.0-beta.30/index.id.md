---
title: "NocoBase v1.7.0-beta.30: Perbaikan Bug"
description: "Catatan Rilis v1.7.0-beta.30"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Ketika komponen bidang relasi pada formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan pemilihan ganda" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe

  - Pemilih tabel pada formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe

  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat kursor mouse diarahkan ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe

  - beberapa bidang asosiasi gagal dikirim saat menampilkan bidang dari koleksi asosiasi ([#6833](https://github.com/nocobase/nocobase/pull/6833)) oleh @katherinehhh

  - tidak dapat menyeret tombol lain ke tombol duplikat ([#6822](https://github.com/nocobase/nocobase/pull/6822)) oleh @katherinehhh

  - masalah gaya bilah paginasi subtabel dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh

- **[database]** Memperbaiki asosiasi belongs-to tidak dimuat di appends ketika kunci asing adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher

- **[Bidang koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh
