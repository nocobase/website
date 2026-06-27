---
title: "NocoBase v1.4.31: mengoptimalkan komponen filter dalam formulir filter agar sesuai dengan pengaturan yang dapat difilter"
description: "Catatan Rilis v1.4.31"
---

### 🚀 Peningkatan

- **[client]** mengoptimalkan komponen filter pada form filter agar sesuai dengan pengaturan filterable ([#6110](https://github.com/nocobase/nocobase/pull/6110)) oleh @katherinehhh

- **[Manajer Berkas]** Mengizinkan penghapusan berkas saat rekaman berkas (lampiran) dihapus ([#6127](https://github.com/nocobase/nocobase/pull/6127)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]**
  - memperbaiki filter berdasarkan kolom uuid ([#6138](https://github.com/nocobase/nocobase/pull/6138)) oleh @chareice

  - Memperbaiki pembaruan koleksi yang tidak memiliki kunci utama ([#6124](https://github.com/nocobase/nocobase/pull/6124)) oleh @chareice

- **[client]**
  - Halaman manajemen sumber data melaporkan kesalahan ([#6141](https://github.com/nocobase/nocobase/pull/6141)) oleh @zhangzhonghe

  - Ketika kondisi aturan tautan melibatkan kolom asosiasi yang tidak ditampilkan, aturan tautan tombol menjadi tidak efektif ([#6140](https://github.com/nocobase/nocobase/pull/6140)) oleh @zhangzhonghe

  - Memperbaiki tampilan variabel yang salah pada form tambah cepat kolom asosiasi ([#6119](https://github.com/nocobase/nocobase/pull/6119)) oleh @katherinehhh

  - Konten tidak ditampilkan di popup tambah cepat ([#6123](https://github.com/nocobase/nocobase/pull/6123)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana blok kolom asosiasi tidak meminta data ([#6125](https://github.com/nocobase/nocobase/pull/6125)) oleh @zhangzhonghe

  - Memperbaiki aturan tautan di sub-tabel/sub-form yang memengaruhi blok di popup kolom asosiasi ([#5543](https://github.com/nocobase/nocobase/pull/5543)) oleh @katherinehhh

- **[Kolom koleksi: pembagian administratif China]** memperbaiki izin acl dengan chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) oleh @chareice

- **[Alur Kerja]** Memperbaiki SQL yang dihasilkan secara tidak benar ([#6128](https://github.com/nocobase/nocobase/pull/6128)) oleh @mytharcher

- **[Kolom koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana pembaruan kolom banyak ke banyak (array) di sub-form tidak berfungsi ([#6136](https://github.com/nocobase/nocobase/pull/6136)) oleh @2013xile

- **[Seluler]** Memperbaiki pilihan dalam mode hanya-baca yang dapat diklik dan masalah luapan teks di perangkat seluler ([#6130](https://github.com/nocobase/nocobase/pull/6130)) oleh @katherinehhh
