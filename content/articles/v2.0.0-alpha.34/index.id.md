---
title: "NocoBase v2.0.0-alpha.34: Perbaikan Bug"
description: "Catatan Rilis v2.0.0-alpha.34"
---

### 🚀 Peningkatan

- **[database]** Menambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana tombol aksi pada blok tabel tidak diperbarui dengan benar setelah berpindah halaman, memastikan fungsinya sesuai dengan data halaman saat ini. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) oleh @gchust

- **[client]**
  - Memperbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe

  - Memperbaiki ellipsis pada field judul asosiasi tidak diterapkan ([#7778](https://github.com/nocobase/nocobase/pull/7778)) oleh @katherinehhh

  - Aturan tautan aksi perbarui rekaman tidak berfungsi ([#7774](https://github.com/nocobase/nocobase/pull/7774)) oleh @gchust

- **[database]** Deteksi field indeks yang salah saat nama field menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile

- **[Mobile (tidak digunakan lagi)]** Memperbaiki masalah di mana popup nilai default field tanggal di perangkat seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe
