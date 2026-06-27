---
title: "NocoBase v1.9.0-beta.5: Dukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan"
description: "Catatan Rilis v1.9.0-beta.5"
---

### 🎉 Fitur Baru

- **[server]** Mendukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan ([#7273](https://github.com/nocobase/nocobase/pull/7273)) oleh @aaaaaajie

- **[Workflow: Node paralel]** Menambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher

- **[Auth: SAML 2.0]** Mendukung pengalihan otomatis ke URL SSO saat pengguna tidak terautentikasi oleh @2013xile

- **[Adaptor antrean Redis]** Menambahkan adaptor Redis untuk antrean event oleh @mytharcher

- **[Workflow: node kalkulasi tanggal]** Mendukung uji coba node oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Membuat antrean memori bersamaan tersedia saat item yang diproses tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher

- **[database]** Secara otomatis mengaktifkan paginasi sederhana saat dataset melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie

- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe

- **[Integrasi AI]** Menghapus `await` untuk memanggil `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) oleh @mytharcher

- **[Workflow: Node manual]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe

- **[Workflow]**
  - Menambahkan konstanta tipe json untuk variabel uji ([#7274](https://github.com/nocobase/nocobase/pull/7274)) oleh @mytharcher

  - Menggunakan pencatatan log alih-alih melempar error saat eksekusi tidak boleh berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher

  - Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher

- **[Bidang koleksi: Formula]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher

- **[Adaptor antrean Redis]** Membuat antrean bersamaan tersedia saat item yang diproses tidak penuh untuk adaptor Redis oleh @mytharcher

- **[Workflow: Kalkulasi JSON]** Membuat node kueri JSON dapat diuji oleh @mytharcher

- **[Workflow: Persetujuan]** Mendukung penghapusan persetujuan saat data terkait dihapus oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Pencarian fuzzy tidak berfungsi di bidang asosiasi pilih saat menggunakan formula sebagai bidang judul ([#7280](https://github.com/nocobase/nocobase/pull/7280)) oleh @katherinehhh

  - Variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh

  - Setelah perubahan bidang, bidang asosiasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie

  - Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe

  - Menghindari bidang non-asosiasi untuk dipilih di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher

  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe

  - Aturan gaya tidak berfungsi di kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh

  - Masalah tampilan saat variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh

  - Masalah tampilan untuk bidang asosiasi dalam aturan tautan ([#7220](https://github.com/nocobase/nocobase/pull/7220)) oleh @katherinehhh

  - Memperbaiki error: Can't resolve 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) oleh @zhangzhonghe

- **[database]**
  - Menyelesaikan kegagalan paginasi sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie

  - Memperbaiki masalah di mana pengurutan kunci primer default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie

  - Memperbaiki kegagalan saat mengekspor dataset besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie

  - Memperbaiki error saat mengaktifkan paginasi sederhana untuk tabel sumber data eksternal ([#7222](https://github.com/nocobase/nocobase/pull/7222)) oleh @aaaaaajie

- **[auth]** Memperbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile

- **[Workflow]** Memperbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher

- **[Aksi: Edit massal]** Tidak dapat melakukan edit massal dan pembaruan massal di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe

- **[Manajer sumber data]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie

- **[Bidang koleksi: Urutkan]** Pemilihan bidang urutkan hilang saat menduplikasi rekaman ([#7116](https://github.com/nocobase/nocobase/pull/7116)) oleh @katherinehhh

- **[Sumber data: Oracle Eksternal]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi oleh @aaaaaajie

- **[Workflow: Subflow]** Memperbaiki error yang muncul saat sinyal recall tiba tetapi eksekusi yang tertunda tidak ada di instance saat ini oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki beberapa level asosiasi saat mengirimkan persetujuan oleh @mytharcher

  - URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menampilkan error 404 oleh @zhangzhonghe

  - Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher

  - Menambahkan toleransi kesalahan untuk persetujuan yang dihapus dalam daftar rekaman oleh @mytharcher

  - Memperbaiki pengecualian saat menghapus rekaman oleh @mytharcher

- **[Manajer email]** Koleksi hubungan pesan dan label mengalami pengecualian di bawah mysql oleh @jiannx
