---
title: "NocoBase v2.2.0-beta.5: Menambahkan catatan versi skema untuk konfigurasi env"
description: "Catatan Rilis v2.2.0-beta.5"
---

### 🚀 Peningkatan

* **[cli]** Menambahkan catatan versi skema untuk konfigurasi env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) oleh @chenos
* **[Manajer Berkas]** Peningkatan pratinjau PDF: berkas PDF lintas-asal kini menggunakan pratinjau bawaan peramban, sementara berkas PDF dari asal yang sama tetap dirender dengan PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) oleh @mytharcher

### 🐛 Perbaikan Bug

* **[client-v2]**
  * Memperbaiki masalah di mana pengaturan alur peristiwa tidak dapat diubah lagi setelah blok diubah menjadi templat. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) oleh @gchust
  * Memperbaiki masalah di mana opsi dropdown kotak centang pada formulir filter v2 tidak menampilkan teks yang telah diterjemahkan. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) oleh @katherinehhh
  * Memperbaiki tampilan dan pengaturan format yang salah ketika bidang judul dari bidang relasi tabel v2 menggunakan bidang waktu, tanggal, atau datetime. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) oleh @katherinehhh
* **[Mesin alur]** Memperbaiki data yang salah pada formulir catatan saat ini dan data detail di dalam popup selama pembuatan AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) oleh @gchust
* **[Alur kerja: Aksi kustom]** Memperbaiki masalah di mana tombol pemicu alur kerja panel aksi v2 masih menampilkan keberhasilan dan mengirim permintaan ketika tidak ada alur kerja yang terikat. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) oleh @mytharcher
* **[Karyawan AI]** Memperbaiki masalah di mana karyawan AI tidak dapat mengisi data sub-tabel dengan benar. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) oleh @gchust
