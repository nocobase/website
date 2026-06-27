---
title: "NocoBase v1.9.14: Dukungan pengalihan otomatis ke URL SSO saat tidak terautentikasi"
description: "Catatan Rilis v1.9.14"
---

### 🎉 Fitur Baru

- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO saat tidak terautentikasi oleh @heziqiang

### 🚀 Peningkatan

- **[client]** Menggunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher

- **[Bidang Koleksi: Markdown(Vditor)]** Menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[database]** Perbaikan: menghapus pemrosesan UTC dalam konversi waktu untuk bidang hanya-waktu guna mencegah pergeseran zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu

- **[client]** Memperbaiki remote select yang tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh

- **[Workflow]**
  - Memperbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum dihentikan ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher

  - Memperbaiki masalah di mana tautan tugas mengarah ke halaman error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher

  - Memperbaiki masalah di mana beberapa menu tugas workflow tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher

  - Memperbaiki jumlah tugas yang tidak muncul akibat penyalahgunaan penyedia ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher

- **[Workflow: Node Manual]** Memperbaiki masalah di mana jumlah tugas manual tidak akurat ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher

- **[Visualisasi Data]**
  - Pengaturan bidang filter untuk koleksi sumber data eksternal tidak menampilkan properti spesifik ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile

  - Menyelesaikan masalah di mana kueri grafik tidak mendukung lingkup data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile

- **[Manajer Sumber Data]** Memperbaiki kegagalan pembaruan kata sandi sumber data saat kata sandi database diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock

- **[Aksi: Impor Catatan]** Memperbaiki masalah saat mengimpor data dalam tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock
