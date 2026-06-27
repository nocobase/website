---
title: "NocoBase v2.1.0-beta.30: Menambahkan dukungan aturan tautan untuk item menu halaman"
description: "Catatan Rilis v2.1.0-beta.30"
---

### 🎉 Fitur Baru

- **[klien]**
  - Menambahkan dukungan aturan tautan untuk item menu halaman ([#9304](https://github.com/nocobase/nocobase/pull/9304)) oleh @zhangzhonghe

  - menambahkan variabel bahasa pengguna saat ini di v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client-v2]** Menyaring menu v1 di tata letak v2 dan hanya menampilkan menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) oleh @zhangzhonghe

- **[undefined]** mendukung env saat ini berdasarkan sesi di nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) oleh @chenos

- **[Karyawan AI]** Karyawan AI mendukung pemrosesan paralel dari beberapa percakapan ([#9344](https://github.com/nocobase/nocobase/pull/9344)) oleh @cgyrock

- **[Departemen]** mengoptimalkan gaya daftar departemen dengan menambahkan ikon dan menyesuaikan jarak ([#9435](https://github.com/nocobase/nocobase/pull/9435)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[build]** Memperbaiki kegagalan build plugin ketika kode klien v1 mengimpor entri `/client-v2` plugin lain. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) oleh @Molunerfinn

- **[klien]**
  - menyembunyikan komponen subtabel untuk bidang asosiasi ke-banyak di subtabel v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) oleh @katherinehhh

  - Memperbaiki masalah intermiten di mana aturan tautan tombol aksi gagal berlaku. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) oleh @gchust

- **[Manajer koleksi grafis]** memperbaiki tata letak otomatis antarmuka grafis yang memunculkan kesalahan filter tindakan pembaruan ([#9421](https://github.com/nocobase/nocobase/pull/9421)) oleh @katherinehhh

- **[Blok: Pohon]** Meningkatkan pengaturan blok filter pohon dan memperbaiki asosiasi yang tidak didukung, fallback bidang judul, dan perilaku reset pencarian. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) oleh @jiannx
