---
title: "NocoBase v2.1.0-beta.9: Perbaiki masalah tabel sistem tidak dapat dipilih dalam aturan kustom"
description: "Catatan Rilis v2.1.0-beta.9"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - memperbaiki tinggi blok tabel yang tidak valid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) oleh @jiannx

  - Memperbaiki masalah di mana menambahkan blok data atau menyegarkan halaman akan memicu penyegaran ganda. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) oleh @gchust

  - Memperbaiki bidang yang dapat dihubungkan tidak ditampilkan saat menautkan blok data di bawah sumber data eksternal ([#8848](https://github.com/nocobase/nocobase/pull/8848)) oleh @zhangzhonghe

- **[Template UI]** Memperbaiki kesalahan yang terjadi saat menggunakan blok formulir edit dan template blok detail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) oleh @gchust

- **[Draf formulir]** Memperbaiki masalah di mana data draf formulir hilang saat popup dibuka beberapa kali. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) oleh @gchust

- **[Lokalisasi]** entri yang tidak ditemukan tidak akan dikirimkan dalam status non-pengeditan halaman. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) oleh @jiannx

- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana pemilihan ganda tidak dapat dilakukan untuk bidang duplikat dalam konfigurasi yang diimpor. oleh @jiannx

- **[Manajer email]** penyesuaian penerima balas dan balas ke semua, memperbaiki kegagalan penambahan bidang tabel dan masalah lainnya oleh @jiannx

- **[Manajer migrasi]** Memperbaiki masalah di mana tabel sistem tidak dapat dipilih dalam aturan kustom oleh @cgyrock
