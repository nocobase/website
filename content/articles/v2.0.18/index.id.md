---
title: "NocoBase v2.0.18: Memungkinkan penambahan karyawan AI di popup sub-tabel"
description: "Catatan Rilis v2.0.18"
---

### 🎉 Fitur Baru

- **[Karyawan AI]**
  - Pembersihan terjadwal data checkpoint percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock

  - Memungkinkan penambahan karyawan AI di popup sub-tabel ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile

- **[Supervisor Aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos

- **[client]** Mendukung penampilan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust

- **[Manajer tugas async]** tugas async ditambahkan untuk mendukung pekerja dalam mengirim pesan error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana popup "Pilih rekaman" di sub-tabel gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust

- **[Karyawan AI]** Memperbaiki potensi kesalahan variabel undefined dalam skrip migrasi upgrade plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock

- **[Aksi: Impor rekaman Pro]** Memperbaiki masalah di mana tugas async tidak berakhir setelah terjadi error dalam impor async oleh @cgyrock
