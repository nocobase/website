---
title: "NocoBase v2.0.0-alpha.39: Adaptasi Komponen untuk Perangkat Seluler"
description: "Catatan Rilis v2.0.0-alpha.39"
---

### 🚀 Peningkatan

- **[client]** Adaptasi Komponen untuk Perangkat Seluler ([#7870](https://github.com/nocobase/nocobase/pull/7870)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana konfigurasi field JS default tidak menggunakan pengaturan mode tampilan. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) oleh @gchust

  - Memperbaiki masalah di mana template duplikat tidak muncul, yang disebabkan oleh menyeret lalu menghapus template yang direferensikan ([#7847](https://github.com/nocobase/nocobase/pull/7847)) oleh @zhangzhonghe

  - Memperbaiki masalah tentang tidak dapat mengatur nilai default field tanggal di model blok form filter. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan untuk form persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana operasi edit cepat di blok tabel tidak memperbarui data dengan benar. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) oleh @gchust

  - Memperbaiki masalah di mana field teks kaya tidak dapat memasukkan nilai default dan field pilihan ganda tidak dapat memilih beberapa opsi untuk nilai default. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) oleh @gchust

- **[Manajer multi-aplikasi (usang)]** Setelah sub aplikasi berhenti, publikasikan pesan sinkronisasi untuk memberi tahu node lain agar menghentikan sub aplikasi yang sesuai ([#7849](https://github.com/nocobase/nocobase/pull/7849)) oleh @2013xile

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana aturan tautan untuk form persetujuan tidak berfungsi oleh @zhangzhonghe

- **[Manajer email]** Kesalahan refresh ShadowHtml oleh @jiannx
