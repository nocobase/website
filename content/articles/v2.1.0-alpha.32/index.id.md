---
title: "NocoBase v2.1.0-alpha.32: menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2"
description: "Catatan Rilis v2.1.0-alpha.32"
---

### 🎉 Fitur Baru

- **[client]** menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) oleh @katherinehhh

- **[flow-engine]** Memigrasikan `plugin-environment-variables` ke client-v2 dengan halaman pengaturan berbasis React dan variabel runtime `$env` yang terdaftar secara global; menambahkan entri client-v2 ke `plugin-file-manager` dengan halaman konfigurasi penyimpanan berbasis React dan bidang unggah berbasis FlowModel, aksi unggah, serta pratinjau. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) oleh @Molunerfinn

### 🚀 Peningkatan

- **[undefined]** mendukung env saat ini yang terikat sesi di nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana popup nilai default untuk bidang asosiasi di formulir buat akan ditampilkan secara tidak benar. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) oleh @gchust

  - Memperbaiki masalah di mana kode JS tidak dapat diedit lagi setelah bidang JS diatur menjadi hanya-baca. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) oleh @gchust

  - Memperbaiki masalah di mana tab halaman v2 tidak sinkron segera setelah menyimpan pengaturan ([#9396](https://github.com/nocobase/nocobase/pull/9396)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana penugasan bidang sub-tabel tidak akan berlaku dalam aturan tautan bidang. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) oleh @gchust

- **[Bidang Koleksi: Markdown(Vditor)]** memperbaiki tooltip bidang markdown yang tersembunyi di tata letak formulir horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) oleh @katherinehhh

- **[Klien WEB]** Memperbaiki pemfilteran tipe rute saat menggunakan label yang diterjemahkan ([#9425](https://github.com/nocobase/nocobase/pull/9425)) oleh @zhangzhonghe

- **[Seluler (tidak digunakan lagi)]** Memperbaiki popup pesan seluler yang tidak dapat ditutup atau digulir ([#9424](https://github.com/nocobase/nocobase/pull/9424)) oleh @zhangzhonghe

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana bidang JS muncul di pengaturan proses persetujuan oleh @zhangzhonghe
