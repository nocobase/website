---
title: "NocoBase v2.1.10: Menambahkan dukungan untuk menggunakan variabel pengguna saat ini di URL dan header klien MCP jarak jauh"
description: "Catatan Rilis v2.1.10"
---

### 🎉 Fitur Baru

- **[ai]** Menambahkan dukungan untuk menggunakan variabel pengguna saat ini di URL dan header klien MCP jarak jauh. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) oleh @cgyrock
- **[cli]** Mendukung skrip hook instalasi ([#9824](https://github.com/nocobase/nocobase/pull/9824)) oleh @chenos

### 🚀 Peningkatan

- **[client-v2]** Menampilkan aturan validasi tingkat bidang sebagai aturan warisan hanya-baca di pengaturan validasi bidang UI. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) oleh @katherinehhh
- **[Flow engine]** Menambahkan blok saat ini ke konteks pengguna secara default saat membangun karyawan AI menggunakan API Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) oleh @gchust

### 🐛 Perbaikan Bug

- **[client-v2]** Memperbaiki blok yang tidak diperbarui setelah pengaturan blok diperbarui. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) oleh @gchust
- **[Workflow: Aksi kustom]**

  - Memperbaiki aksi pemicu workflow konteks kustom sehingga variabel frontend dalam payload permintaan diselesaikan sebelum pengiriman di tombol aksi v2 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) oleh @mytharcher
  - Memperbaiki pemilih pengikatan workflow aksi kustom v2 sehingga workflow yang diaktifkan difilter dengan nilai boolean dan dapat didaftar dengan benar. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) oleh @mytharcher
- **[Blok: Gantt]** Memperbaiki pengaturan template popup tugas Gantt yang tidak diterapkan atau dihapus dengan benar. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) oleh @jiannx
- **[Workflow: Persetujuan]**

  - Memperbaiki validasi node aksi persetujuan untuk mengizinkan `null` untuk `applyDetail` atau `approvalUid` dan melewati pemrosesan kecuali referensi string disediakan oleh @mytharcher
  - Memperbaiki masalah di mana persetujuan terkait tidak dimuat atau diperbarui dengan benar oleh @zhangzhonghe
