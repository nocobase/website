---
title: "NocoBase v2.0.0-beta.10: Optimalkan tombol entri AI"
description: "Catatan Rilis v2.0.0-beta.10"
---

### 🚀 Peningkatan

- **[klien]** Mendukung penentuan kapan menjalankan alur peristiwa. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) oleh @gchust
- **[Karyawan AI]**

  - Optimalkan tombol entri AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) oleh @heziqiang
  - Sembunyikan builder AI dalam daftar entri.<br/> Optimalkan alur integrasi LLM.<br/> Perbarui dokumentasi tentang model AI gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) oleh @heziqiang
- **[Notifikasi: Pesan dalam aplikasi]** Perbaiki masalah kinerja saat mengirim pesan dalam aplikasi ke banyak pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - komponen input angka tidak menampilkan nilai ([#8410](https://github.com/nocobase/nocobase/pull/8410)) oleh @chenos
  - perbaiki data pilih bertingkat tidak terhapus setelah pengiriman berhasil di form buat ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh
  - perbaiki masalah pada tombol kirim di mana validasi wajib diisi tidak berfungsi saat konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh
  - selesaikan masalah tombol kirim yang muncul di popup pemilihan file pada field relasi satu-ke-satu ([#8398](https://github.com/nocobase/nocobase/pull/8398)) oleh @katherinehhh
  - perbaiki selesaikan masalah di mana pengaturan tata letak di blok kartu grid tidak berpengaruh ([#8399](https://github.com/nocobase/nocobase/pull/8399)) oleh @katherinehhh
  - perbaiki cegah penugasan saat karakter Mandarin dimasukkan di field angka ([#8397](https://github.com/nocobase/nocobase/pull/8397)) oleh @katherinehhh
- **[Field koleksi: Banyak ke banyak (array)]** Perbaiki error saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock
- **[Multi-ruang]**

  - Ruang terkait saat menambahkan data terkait oleh @jiannx
  - Warna pemilih ruang mengikuti tema oleh @jiannx
