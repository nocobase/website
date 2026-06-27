---
title: "NocoBase v2.1.0-alpha.9: Memungkinkan menambahkan karyawan AI di popup tabel sub"
description: "Catatan Rilis v2.1.0-alpha.9"
---

### 🎉 Fitur Baru

- **[AI employees]** Memungkinkan penambahan karyawan AI di popup sub tabel ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile

- **[AI: MCP server]** Menambahkan plugin server MCP baru untuk memungkinkan pembangunan sistem NocoBase dan mendukung alur kerja bisnis. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) oleh @2013xile

### 🚀 Peningkatan

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) oleh @gaston98765

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah validasi sisi server untuk bidang tanggal ([#8867](https://github.com/nocobase/nocobase/pull/8867)) oleh @2013xile

- **[client]**
  - Memperbaiki bidang yang dapat dihubungkan tidak ditampilkan saat menautkan blok data di bawah sumber data eksternal ([#8848](https://github.com/nocobase/nocobase/pull/8848)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana menambahkan blok data atau menyegarkan halaman akan memicu penyegaran ganda. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) oleh @gchust

  - Memperbaiki masalah di mana nilai default beberapa bidang tidak berlaku setelah menyegarkan halaman. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) oleh @gchust

  - Memperbaiki tinggi blok tabel yang tidak valid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) oleh @jiannx

- **[Localization]**
  - localizationTexts: pengecualian izin antarmuka yang hilang ([#8861](https://github.com/nocobase/nocobase/pull/8861)) oleh @jiannx

  - entri yang tidak ditemukan tidak akan dikirimkan dalam status non-pengeditan halaman. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) oleh @jiannx

- **[Form drafts]** Memperbaiki masalah di mana data draf formulir hilang saat popup dibuka beberapa kali. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) oleh @gchust

- **[UI templates]** Memperbaiki kesalahan yang terjadi saat menggunakan blok formulir edit dan templat blok detail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) oleh @gchust

- **[AI: Knowledge base]** Mencegah database vektor dan penyimpanan vektor yang sedang digunakan agar tidak dihapus. oleh @cgyrock

- **[Action: Import records Pro]** Memperbaiki masalah di mana beberapa pilihan tidak dapat dibuat untuk bidang duplikat dalam konfigurasi impor. oleh @jiannx

- **[Email manager]** Penyesuaian penerima balas dan balas ke semua, memperbaiki kegagalan penambahan bidang tabel dan masalah lainnya oleh @jiannx

- **[Migration manager]** Memperbaiki masalah di mana tabel sistem tidak dapat dipilih dalam aturan kustom oleh @cgyrock
