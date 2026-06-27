---
title: "NocoBase v1.7.0-beta.27: dukungan variabel pada judul dan konten konfirmasi sekunder"
description: "Catatan Rilis v1.7.0-beta.27"
---

### 🎉 Fitur Baru

- **[client]** dukungan variabel pada judul dan konten konfirmasi sekunder ([#6787](https://github.com/nocobase/nocobase/pull/6787)) oleh @katherinehhh

- **[Cetak template]**
  - Dukungan untuk rendering gambar dinamis dan barcode dalam template dokumen. oleh @sheldon66

  - Fitur: Dukungan opsi Pilih `{ label, value }` dalam pencetakan template. oleh @sheldon66

- **[Blok: Pohon]** blok pohon filter mendukung aturan tautan oleh @katherinehhh

- **[Visualisasi data: ECharts]** Tambahkan pengaturan "Balik sumbu Y" untuk diagram batang oleh @2013xile

### 🚀 Peningkatan

- **[client]** optimalkan gaya tombol tambah sub-tabel dan ratakan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh

- **[Manajer file]** Tambahkan opsi batas waktu OSS default 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher

- **[Kebijakan kata sandi]** Ubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile

### 🐛 Perbaikan Bug

- **[database]**
  - Perbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher

  - Hindari kesalahan yang muncul saat tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher

- **[client]**
  - saat pemilihan variabel memerlukan pemuatan asinkron, menu terakhir yang dipilih hilang. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) oleh @gchust

  - Perbaiki masalah di mana sub-bidang dari bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe

  - masalah dengan mengonfigurasi aturan tautan di subform (popup) dalam subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh

  - beberapa pesan kesalahan ditampilkan saat aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh

  - bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) oleh @katherinehhh

- **[Otentikasi]** Tidak mengizinkan mengubah nama autentikator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile

- **[Aksi: Permintaan kustom]** respons permintaan kustom yang disetel ke variabel tidak ditampilkan dengan benar ([#6793](https://github.com/nocobase/nocobase/pull/6793)) oleh @katherinehhh
