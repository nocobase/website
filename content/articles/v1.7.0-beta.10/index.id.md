---
title: "NocoBase v1.7.0-beta.10: Dukungan konfigurasi variabel setelah pengiriman"
description: "Catatan Rilis v1.7.0-beta.10"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi variabel setelah pengiriman, memungkinkan pengalihan dengan ID data saat ini ([#6465](https://github.com/nocobase/nocobase/pull/6465)) oleh @katherinehhh

- **[Bidang koleksi: Markdown(Vditor)]** Vditor mendukung S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[client]**
  - Hanya mendukung pratinjau file teks biasa ([#6563](https://github.com/nocobase/nocobase/pull/6563)) oleh @mytharcher

  - Optimalkan pesan error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) oleh @chenos

  - Batasi tindakan yang tersedia untuk properti bidang yang berbeda dalam aturan tautan ([#6548](https://github.com/nocobase/nocobase/pull/6548)) oleh @katherinehhh

- **[Manajer file]** Sesuaikan API `getFileData` penyimpanan ([#6553](https://github.com/nocobase/nocobase/pull/6553)) oleh @mytharcher

- **[Kontrol akses]** Optimalkan urutan dan gaya peralihan peran ([#6555](https://github.com/nocobase/nocobase/pull/6555)) oleh @aaaaaajie

- **[Bidang koleksi: Urutan]** Mendukung pengaturan urutan sebagai bidang judul untuk blok kalender ([#6562](https://github.com/nocobase/nocobase/pull/6562)) oleh @katherinehhh

- **[Alur kerja]** Pisahkan kolom yang dieksekusi ke tabel statistik ([#6534](https://github.com/nocobase/nocobase/pull/6534)) oleh @mytharcher

- **[Alur kerja: Acara tindakan kustom]** Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher

- **[Alur kerja: Persetujuan]**
  - Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher

  - Mendukung untuk melewati validator dalam pengaturan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Browser versi lama akan menampilkan halaman kosong ([#6571](https://github.com/nocobase/nocobase/pull/6571)) oleh @zhangzhonghe

  - Opsi 'Konten overflow elipsis' memerlukan penyegaran halaman agar status toggle berlaku ([#6520](https://github.com/nocobase/nocobase/pull/6520)) oleh @zhangzhonghe

  - Masalah dengan tampilan bidang tanggal dalam pemfilteran lingkup data ([#6564](https://github.com/nocobase/nocobase/pull/6564)) oleh @katherinehhh

  - Tidak dapat membuka modal lain di dalam modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) oleh @zhangzhonghe

  - Tindakan simpan sebagai template akan gagal jika berisi bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust

  - Menu atas halaman menampilkan kosong ([#6551](https://github.com/nocobase/nocobase/pull/6551)) oleh @zhangzhonghe

  - Penugasan bidang dengan nilai null tidak efektif ([#6549](https://github.com/nocobase/nocobase/pull/6549)) oleh @katherinehhh

- **[Alur kerja]**
  - Pastikan kunci alur kerja dibuat sebelum disimpan ([#6567](https://github.com/nocobase/nocobase/pull/6567)) oleh @mytharcher

  - Perbaiki error yang muncul saat mengonfigurasi opsi hapus otomatis ([#6560](https://github.com/nocobase/nocobase/pull/6560)) oleh @mytharcher

- **[Formulir publik]** Masalah dengan judul halaman formulir publik yang menampilkan 'Memuat...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) oleh @katherinehhh

- **[Seluler]** Sesuaikan ukuran font yang ditampilkan di ponsel menjadi 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) oleh @zhangzhonghe

- **[Variabel dan rahasia]** Tombol filter ikon hilang, jumlah filter tidak ditampilkan, dan data tidak disegarkan setelah memfilter saat berpindah halaman ([#6568](https://github.com/nocobase/nocobase/pull/6568)) oleh @katherinehhh

- **[Otentikasi]** Masalah lokalisasi untuk bidang halaman pendaftaran ([#6556](https://github.com/nocobase/nocobase/pull/6556)) oleh @2013xile

- **[Dokumentasi API]** Halaman dokumentasi API tidak dapat digulir ([#6566](https://github.com/nocobase/nocobase/pull/6566)) oleh @zhangzhonghe

- **[Alur kerja: Acara pasca-tindakan]** Beberapa catatan dalam tindakan massal harus memicu beberapa kali ([#6559](https://github.com/nocobase/nocobase/pull/6559)) oleh @mytharcher

- **[Blok: template]**
  - Aturan tautan blok formulir belum disinkronkan dengan benar dari template ([#6550](https://github.com/nocobase/nocobase/pull/6550)) oleh @gchust

  - Menu simpan sebagai template duplikat di blok detail ([#6558](https://github.com/nocobase/nocobase/pull/6558)) oleh @gchust

- **[Alur kerja: Persetujuan]** Perbaiki nilai formulir persetujuan untuk dikirimkan oleh @mytharcher
