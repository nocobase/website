---
title: "NocoBase v1.5.7: Hapus pencatatan error konsol untuk percobaan ulang koneksi SSE"
description: "Catatan Rilis v1.5.7"
---

### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Hapus pencatatan error konsol untuk percobaan ulang koneksi SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[klien]**
  - pengaturan drag yang hilang pada modal operasi pembuatan cepat data relasi ([#6201](https://github.com/nocobase/nocobase/pull/6201)) oleh @katherinehhh

  - masalah pemformatan angka presisi tinggi tidak diterapkan ([#6202](https://github.com/nocobase/nocobase/pull/6202)) oleh @katherinehhh

  - Memperbaiki masalah di mana membersihkan field asosiasi dalam formulir tidak benar-benar menghapus nilai field saat mengirimkan formulir ([#5540](https://github.com/nocobase/nocobase/pull/5540)) oleh @zhangzhonghe

  - Blok tidak menyegarkan setelah pengiriman formulir ([#6206](https://github.com/nocobase/nocobase/pull/6206)) oleh @zhangzhonghe

  - nilai field tertaut tetap ada saat pengiriman setelah field relasi direset ([#6207](https://github.com/nocobase/nocobase/pull/6207)) oleh @katherinehhh

  - aksi pembaruan ditampilkan untuk baris tanpa izin pembaruan di tabel ([#6204](https://github.com/nocobase/nocobase/pull/6204)) oleh @katherinehhh

- **[Field koleksi: Urutkan]** Perbaiki tipe field urutkan tidak terdaftar di sumber data eksternal ([#6212](https://github.com/nocobase/nocobase/pull/6212)) oleh @mytharcher

- **[Autentikasi]** Masalah autentikasi WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) oleh @2013xile

- **[Field koleksi: Lampiran(URL)]** Perbaiki URL permintaan yang tidak berlaku di hook oleh @mytharcher
