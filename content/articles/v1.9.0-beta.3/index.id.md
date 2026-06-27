---
title: "NocoBase v1.9.0-beta.3: Dukungan untuk mengonfigurasi rahasia otentikasi independen untuk sub-aplikasi"
description: "Catatan Rilis v1.9.0-beta.3"
---

### 🎉 Fitur Baru

- **[Multi-app manager]** Mendukung konfigurasi rahasia auth independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher

- **[Workflow: CC]** Menambahkan node CC ke workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher

- **[Workflow: Approval]** Menambahkan inisialisator untuk pemicu oleh @mytharcher

### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Mengoptimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe

- **[Workflow]** Mengonversi operan menjadi string sebelum perbandingan string dalam kalkulasi logika ([#7190](https://github.com/nocobase/nocobase/pull/7190)) oleh @mytharcher

- **[Multi-app manager]**
  - Menambahkan opsi database dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher

  - Menambahkan opsi database dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher

- **[Bidang koleksi: Kode]** Menambahkan pengaturan indentasi oleh @mytharcher

- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**
  - masalah di mana bidang lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe

  - kesalahan saat menetapkan nilai di blok daftar menggunakan bidang urutan kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh

  - Lipat filter: Filter tidak dipicu selama inisialisasi halaman setelah menetapkan nilai default untuk bidang ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe

  - penetapan nilai gagal di formulir edit ketika nilai dan opsi keduanya diatur untuk bidang pilihan ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh

  - Aksi popup: Tampilan halaman tidak sesuai harapan setelah mengganti tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe

  - Judul tab browser tidak disinkronkan saat beralih antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana komponen pilihan dropdown terhalang oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe

- **[acl]** Memperbaiki kesalahan saat menghapus peran di bawah mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie

- **[Autentikasi]** Memperbaiki masalah di mana halaman login tidak dapat digulir ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe

- **[Multi-app manager]** Memperbaiki opsi auth di posisi yang tidak diharapkan ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki stempel waktu BigInt dalam format string yang menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher

- **[Aksi: Permintaan kustom]** masalah penguraian variabel di URL selama navigasi rute setelah permintaan kustom berhasil ([#7186](https://github.com/nocobase/nocobase/pull/7186)) oleh @katherinehhh

- **[Blok: Kanban]** memperbaiki masalah UI subtable di Kanban dan menambahkan dukungan untuk pengaturan lebar kolom Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) oleh @katherinehhh

- **[Workflow: Approval]**
  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher

  - Memperbaiki bug blok dan asosiasi oleh @mytharcher

  - Memuat ulang asosiasi pada rekaman oleh @mytharcher

  - Untuk menghindari kesalahan saat pengguna tidak ada oleh @mytharcher
