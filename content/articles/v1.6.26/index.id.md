---
title: "NocoBase v1.6.26: Blok Iframe mendukung konfigurasi atribut allow"
description: "Catatan Rilis v1.6.26"
---

### 🎉 Fitur Baru

- **[Blok: iframe]** Blok iframe mendukung konfigurasi atribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) oleh @zhangzhonghe

- **[Cetak template]** Fitur: Mendukung opsi Select `{ label, value }` dalam pencetakan template. oleh @sheldon66

### 🐛 Perbaikan Bug

- **[client]**
  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat kursor mouse diarahkan ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe

  - Ketika komponen bidang relasi pada formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan pemilihan ganda" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe

  - beberapa pesan kesalahan ditampilkan saat aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh

  - masalah dengan konfigurasi aturan tautan di subform (popup) dalam subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh

  - Memperbaiki masalah di mana sub-bidang dari bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe

  - masalah gaya bilah paginasi subtable dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh

  - Pemilih tabel di formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe

- **[database]**
  - Memperbaiki asosiasi belongs-to tidak dimuat di appends ketika foreign key adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher

  - Memperbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher

- **[Bidang koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh

- **[Alur kerja: Aksi kustom event]** masalah tautan aksi alur kerja yang dipicu oleh @katherinehhh
