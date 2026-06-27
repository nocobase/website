---
title: "NocoBase v1.6.15: Tambahkan opsi trim untuk bidang teks"
description: "Catatan Rilis v1.6.15"
---

### 🚀 Peningkatan

- **[database]**
  - Menambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher

  - Menambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher

- **[Manajer Berkas]** Menambahkan opsi trim untuk bidang teks pada koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher

- **[Alur Kerja]** Memperbaiki kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Mendukung penggunaan templat blok untuk formulir proses persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Menghindari perubahan bidang "datetimeNoTz" saat nilai tidak berubah dalam pembaruan catatan ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher

- **[klien]**
  - Bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh

  - Memperbaiki properti `disabled` tidak berfungsi saat `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher

  - Masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh

- **[Bidang koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang dalam koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile

- **[Formulir publik]** Izin tampilan mencakup daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos

- **[Autentikasi]** Penetapan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile

- **[Alur Kerja]** Memperbaiki opsi sinkronisasi yang ditampilkan secara tidak benar ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher

- **[Blok: Peta]** Validasi manajemen peta tidak boleh lolos dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher

  - Memperbaiki mode cabang saat `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher
