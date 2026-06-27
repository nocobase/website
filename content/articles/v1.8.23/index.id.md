---
title: "NocoBase v1.8.23: Optimasi kueri hitung API daftar"
description: "Catatan Rilis v1.8.23"
---

### 🚀 Peningkatan

- **[database]** Mengoptimalkan kueri hitungan API daftar untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie

- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher

- **[Alur kerja: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - kesalahan render bidang asosiasi saat beralih ke komponen tag di blok formulir edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh

  - masalah batas waktu saat tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh

- **[Seluler]** bidang tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh

- **[Formulir publik]** nilai default bidang formulir publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh

- **[Aksi: Impor catatan]** Memperbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie

- **[Koleksi: Pohon]** Hapus event basis data yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile

- **[Alur kerja: Event aksi kustom]** Memperbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher

- **[Alur kerja: Subalur]** Memperbaiki masalah subproses yang dilanjutkan dan dijalankan beberapa kali oleh @mytharcher

- **[Alur kerja: Persetujuan]** Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan terkait di tabel alur proses tidak akan ditampilkan oleh @mytharcher
