---
title: "NocoBase v2.0.53: Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan."
description: "Catatan Rilis v2.0.53"
---

### 🚀 Perbaikan

- **[flow-engine]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki pencegahan pembukaan edit cepat untuk bidang asosiasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh

  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx

  - Memperbaiki bidang pilihan ganda di blok data v2 yang seharusnya menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh

- **[Blok: Formulir multi-langkah]** Memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh
