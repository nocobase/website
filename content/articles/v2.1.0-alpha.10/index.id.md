---
title: "NocoBase v2.1.0-alpha.10: Pembersihan terjadwal data checkpoint percakapan AI"
description: "Catatan Rilis v2.1.0-alpha.10"
---

### 🎉 Fitur Baru

- **[IdP: OAuth]** Menambahkan plugin IdP: OAuth baru untuk memungkinkan layanan MCP melakukan autentikasi melalui OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) oleh @2013xile

- **[Karyawan AI]** Pembersihan terjadwal data checkpoint percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock

- **[Pengawas aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos

- **[client]** Mendukung penampilan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust

- **[undefined]** Menambahkan entri client-v2 khusus dan membangunnya secara independen dengan rsbuild sambil mempertahankan v1 tidak berubah. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) oleh @Molunerfinn

- **[Workflow]**
  - Memperbaiki masalah di mana graceful shutdown tidak menguras semua event ([#8894](https://github.com/nocobase/nocobase/pull/8894)) oleh @mytharcher

  - Menambahkan daftar filter eksekusi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher

- **[Manajer tugas async]** tugas async ditambahkan untuk mendukung pekerja dalam mengirim pesan error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock

- **[Workflow: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai bidang terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx

  - Memperbaiki masalah di mana popup “Pilih rekaman” di sub-tabel gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust

- **[resourcer]** Mencegah array parameter `filterByTk` secara otomatis dikonversi menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile

- **[server]** Memperbaiki masalah di mana event siklus hidup yang dikirim oleh worker menyebabkan aplikasi serving berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher

- **[Manajer sumber data]** Memperbaiki masalah bahwa koleksi yang dibuat oleh karyawan AI selalu kehilangan bidang `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock

- **[Karyawan AI]**
  - Memperbaiki masalah dengan URL yang ditentukan untuk layanan LLM tidak berpengaruh dalam panggilan model text embedding. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) oleh @cgyrock

  - Memperbaiki potensi kesalahan variabel tidak terdefinisi dalam skrip migrasi upgrade plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock

- **[Tindakan: Impor rekaman Pro]**
  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan error impor, karena stream telah dibaca secara duplikat oleh @mytharcher

  - Memperbaiki masalah di mana error muncul saat mengimpor dalam mode sinkron oleh @mytharcher

  - Memperbaiki event `beforeStop` pada sub aplikasi tidak terpicu oleh @mytharcher

  - Memperbaiki masalah di mana tugas async tidak berakhir setelah terjadi error dalam impor async oleh @cgyrock

  - Memperbaiki impor lambat yang menyebabkan error SES oleh @mytharcher

- **[Cetak template]** Memperbaiki error pencetakan koleksi SQL oleh @jiannx

- **[Workflow: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher

- **[Manajer email]** Memperbaiki error halaman ketika email tidak ada oleh @jiannx

- **[Manajer migrasi]** Memperbaiki masalah di mana migrasi terhenti karena error yang disebabkan oleh lingkungan target yang tidak memiliki tabel baru yang dibuat selama proses migrasi unggah. oleh @Andrew1989Y
