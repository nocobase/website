---
title: "NocoBase v1.6.17: Dukungan untuk mencari field di komponen Filter"
description: "Catatan Rilis v1.6.17"
---

### 🚀 Peningkatan

- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher

- **[client]**
  - Mendukung pencarian field di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher

  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher

- **[Error handler]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66

- **[IP restriction]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66

- **[File storage: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Aturan dengan kondisi 'any' tidak berlaku ketika daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh

  - Masalah data dengan blok Gantt di koleksi pohon ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh

  - Field relasi di form filter melaporkan error setelah halaman di-refresh karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe

  - Kegagalan penguraian variabel ketika parameter URL mengandung karakter Mandarin ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh

- **[Users]** Masalah dengan penguraian skema form profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile

- **[Mobile]** Field pilihan tunggal dengan filter 'contains' di perangkat seluler tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh

- **[Action: Export records]** Parameter filter hilang saat mengekspor data setelah mengubah paginasi ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh

- **[Email manager]** Memperbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx

- **[File storage: S3(Pro)]]** Melempar error ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (diatur ke default) oleh @mytharcher

- **[Workflow: Approval]** Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher

- **[Migration manager]** Waktu pembuatan log migrasi ditampilkan secara tidak benar di beberapa lingkungan oleh @gchust
