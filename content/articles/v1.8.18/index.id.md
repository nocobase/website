---
title: "NocoBase v1.8.18: Salin ID Instance terbaru setiap kali di pengaturan lisensi"
description: "Catatan Rilis v1.8.18"
---

### 🚀 Peningkatan

- **[Alur Kerja]** Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom guna meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher

- **[Pengaturan lisensi]** Di pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**
  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh

  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher

- **[Seluler]** format tampilan bidang tanggal yang salah di perangkat seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh

- **[Penampil File Office]** Memperbaiki kesalahan yang muncul saat mengunggah file ke bidang URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher

- **[Alur Kerja]** Memperbaiki kesalahan yang muncul dan data formulir yang hilang saat mengedit kategori alur kerja ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher

- **[Alur Kerja: node pengirim surel]** Memperbaiki masalah di mana node surel mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher

- **[Alur Kerja: Acara tindakan kustom]** Menghapus baris yang dipilih setelah berhasil memicu tindakan pada beberapa catatan oleh @mytharcher

- **[Cetak templat]** Pencetakan bidang pilih-radio dalam beberapa baris data oleh @jiannx

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana memuat data sumber data eksternal dalam catatan persetujuan menghasilkan kesalahan 404 oleh @mytharcher
