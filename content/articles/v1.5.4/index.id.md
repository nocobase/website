---
title: "NocoBase v1.5.4: Menambahkan pemuatan ke tindakan duplikat"
description: "Catatan Rilis v1.5.4"
---

### 🚀 Peningkatan

- **[Workflow]** Menambahkan pemuatan pada aksi duplikat ([#6179](https://github.com/nocobase/nocobase/pull/6179)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki kesalahan yang muncul di pengaturan bidang node buat ([#6187](https://github.com/nocobase/nocobase/pull/6187)) oleh @mytharcher

  - Opsi konfigurasi 'Izinkan Pemilihan Ganda' untuk bidang asosiasi tidak ditampilkan di Formulir Filter ([#6174](https://github.com/nocobase/nocobase/pull/6174)) oleh @zhangzhonghe

  - Bidang tetap tersembunyi setelah disembunyikan oleh aturan tautan ([#6182](https://github.com/nocobase/nocobase/pull/6182)) oleh @zhangzhonghe

- **[utils]** mengoptimalkan logika pembacaan storage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) oleh @chenos

- **[Notifikasi: Pesan dalam aplikasi]** Perbaikan: Menambahkan filter pengguna ke subkueri stempel waktu pesan dan judul di API daftar saluran untuk memastikan isolasi data. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) oleh @deepure

- **[Manajer cadangan]** File tidak disalin dari cadangan ke folder unggahan selama pemulihan mode toleran oleh @gchust
