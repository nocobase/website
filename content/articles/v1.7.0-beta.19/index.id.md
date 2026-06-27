---
title: "NocoBase v1.7.0-beta.19: Dukungan variabel di sisi kiri kondisi aturan keterkaitan"
description: "Catatan Rilis v1.7.0-beta.19"
---

### 🎉 Fitur Baru

- **[client]** mendukung variabel di sisi kiri kondisi aturan tautan ([#6609](https://github.com/nocobase/nocobase/pull/6609)) oleh @katherinehhh

- **[Workflow: simpul kalkulasi tanggal]** Menambahkan fungsi `changeTimezone` untuk mengubah nilai zona waktu guna pemformatan oleh @mytharcher

### 🚀 Peningkatan

- **[client]**
  - mendukung rekaman tabel yang dipilih dalam permintaan kustom ([#6647](https://github.com/nocobase/nocobase/pull/6647)) oleh @katherinehhh

  - Menambahkan API tunda untuk skenario yang dibuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki kesalahan build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie

- **[client]**
  - Memperbaiki kesalahan yang muncul saat kursor mouse melayang di atas blok template yang direferensikan dalam konfigurasi simpul persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher

  - masalah tampilan deskripsi bidang di alur kerja ([#6680](https://github.com/nocobase/nocobase/pull/6680)) oleh @katherinehhh

  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher

  - bidang asosiasi kustom tidak menampilkan pengaturan komponen bidang ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh

  - aturan tautan kompatibilitas dengan data lama ([#6686](https://github.com/nocobase/nocobase/pull/6686)) oleh @katherinehhh

  - lazy load yang kehilangan komponen ui akan menyebabkan kesalahan render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust

  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher

- **[Workflow: Simpul manual]** Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher

- **[Aksi: Impor rekaman]** memperbaiki kesalahan saat mengimpor bidang waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie

- **[Workflow: Peristiwa aksi kustom]** Memperbaiki kasus uji oleh @mytharcher

- **[Manajer cadangan]** terjadi kesalahan waktu habis saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust
