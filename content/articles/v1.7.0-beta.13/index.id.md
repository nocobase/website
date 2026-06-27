---
title: "NocoBase v1.7.0-beta.13: Dukungan menggunakan templat blok untuk formulir proses persetujuan"
description: "Catatan Rilis v1.7.0-beta.13"
---

### 🚀 Peningkatan

- **[database]**
  - Menambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher

  - Menambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher

- **[client]** mendukung konfigurasi visibilitas titik dua pada label bidang formulir berdasarkan tata letak ([#6561](https://github.com/nocobase/nocobase/pull/6561)) oleh @katherinehhh

- **[Manajer Berkas]** Menambahkan opsi trim untuk bidang teks pada koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher

- **[Alur Kerja]** Memperbaiki kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Mendukung penggunaan templat blok untuk formulir proses persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]**
  - Menghindari perubahan bidang "datetimeNoTz" saat nilai tidak berubah dalam pembaruan rekaman ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher

  - Saat menghapus rekaman satu-ke-banyak, baik `filter` dan `filterByTk` diberikan dan `filter` menyertakan bidang asosiasi, maka `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile

- **[client]**
  - Memperbaiki properti `disabled` yang tidak berfungsi ketika `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher

  - masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh

  - bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh

  - tombol kirim dan segarkan tidak menampilkan mode hanya-ikon dengan benar ([#6592](https://github.com/nocobase/nocobase/pull/6592)) oleh @katherinehhh

- **[Formulir publik]** Izin tampilan mencakup daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos

- **[Autentikasi]** penugasan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile

- **[Bidang koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang dalam koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile

- **[Alur Kerja]** Memperbaiki opsi sinkronisasi yang ditampilkan secara tidak benar ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher

- **[Blok: Peta]** validasi manajemen peta tidak boleh lolos dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh

- **[Auth: OIDC]** Pengalihan yang salah terjadi ketika jalur callback adalah string 'null' oleh @2013xile

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher

  - Memperbaiki mode cabang ketika `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher
