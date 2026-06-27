---
title: "NocoBase v1.7.0-beta.14: Menambahkan modul lokalisasi"
description: "Catatan Rilis v1.7.0-beta.14"
---

### 🎉 Fitur Baru

- **[Penyimpanan skema UI]** Menambahkan modul lokalisasi untuk UISchema, memungkinkan terjemahan kustom untuk judul dan deskripsi skema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) oleh @chenos

### 🚀 Peningkatan

- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher

- **[client]**
  - Mendukung pencarian field di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher

  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher

- **[Workflow]** Mengoptimalkan logika penyimpanan job ([#6613](https://github.com/nocobase/nocobase/pull/6613)) oleh @mytharcher

- **[Penanganan error]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66

- **[Pembatasan IP]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66

- **[Penyimpanan file: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Field relasi di form filter melaporkan error setelah halaman di-refresh karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe

  - masalah data dengan blok Gantt di koleksi tree ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh

  - area kosong antara judul halaman konfigurasi template blok dan menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) oleh @gchust

  - aturan dengan kondisi 'any' tidak berfungsi saat daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh

  - properti x-disabled tidak berfungsi pada field form ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh

  - kegagalan parsing variabel saat parameter URL mengandung karakter China ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh

  - masalah tampilan label field untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh

- **[Aksi: Ekspor rekaman]** parameter filter hilang saat mengekspor data setelah mengubah paginasi ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh

- **[Pengguna]** Masalah dengan parsing skema form profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile

- **[Mobile]** field pilihan tunggal dengan filter 'contains' di mobile tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh

- **[Kontrol akses]** Memperbaiki logika kalkulasi union peran ([#6605](https://github.com/nocobase/nocobase/pull/6605)) oleh @aaaaaajie

- **[Blok: template]** Memodifikasi dan menghapus field yang sama dari template dan blok, setelah membuat blok dari template, dapat menyebabkan error rendering ([#6626](https://github.com/nocobase/nocobase/pull/6626)) oleh @gchust

- **[Manajer email]**
  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx

  - memperbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx

- **[Penyimpanan file: S3(Pro)]**
  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx

  - Melempar error ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (disetel ke default) oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher

- **[Manajer migrasi]** waktu pembuatan log migrasi ditampilkan secara tidak benar di beberapa lingkungan oleh @gchust
