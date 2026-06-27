---
title: "NocoBase v1.6.25: Tambahkan publish ci untuk lisensi kit"
description: "Catatan Rilis v1.6.25"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan publish ci untuk license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) oleh @jiannx

- **[Visualisasi data: ECharts]** Menambahkan pengaturan "Y-Axis inverse" untuk diagram batang oleh @2013xile

### 🚀 Peningkatan

- **[utils]** Meningkatkan tinggi daftar bidang tombol filter dan mengurutkan/mengkategorikan bidang ([#6779](https://github.com/nocobase/nocobase/pull/6779)) oleh @zhangzhonghe

- **[client]** Mengoptimalkan gaya tombol tambah sub-tabel dan menyelaraskan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh

- **[Manajer file]** Menambahkan opsi batas waktu OSS default 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher

- **[Kebijakan kata sandi]** Mengubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile

- **[WeCom]** Mengutamakan email perusahaan daripada email pribadi saat memperbarui email pengguna oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Di blok collapse, mengklik tombol hapus di kotak pencarian bidang relasi tidak boleh menghapus rentang data ([#6782](https://github.com/nocobase/nocobase/pull/6782)) oleh @zhangzhonghe

  - Bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh

  - Melarang memindahkan menu sebelum atau sesudah tab halaman ([#6777](https://github.com/nocobase/nocobase/pull/6777)) oleh @zhangzhonghe

  - Blok tabel menampilkan data duplikat saat memfilter ([#6792](https://github.com/nocobase/nocobase/pull/6792)) oleh @zhangzhonghe

  - Di formulir filter, mengganti operator bidang lalu menyegarkan halaman menyebabkan kesalahan ([#6781](https://github.com/nocobase/nocobase/pull/6781)) oleh @zhangzhonghe

- **[database]**
  - Menghindari kesalahan yang muncul saat tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher

  - Menambahkan unavailableActions ke koleksi sql dan koleksi view ([#6765](https://github.com/nocobase/nocobase/pull/6765)) oleh @katherinehhh

- **[create-nocobase-app]** Memperbaiki sementara masalah mariadb dengan menurunkan versi ke 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) oleh @chenos

- **[Autentikasi]** Melarang mengubah nama autentikator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile

- **[Cetak template]** Perbaikan: Memperbaiki logika validasi izin untuk mencegah tindakan tidak sah. oleh @sheldon66

- **[Penyimpanan file: S3(Pro)]** URL akses kedaluwarsa tidak valid oleh @jiannx

- **[Blok: Pohon]** Setelah terhubung melalui kunci asing, mengklik untuk memicu filter menghasilkan kondisi filter kosong oleh @zhangzhonghe
