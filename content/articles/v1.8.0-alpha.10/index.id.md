---
title: "NocoBase v1.8.0-alpha.10: Dukung pemuatan sesuai permintaan koleksi dari sumber data eksternal"
description: "Catatan Rilis v1.8.0-alpha.10"
---

### 🎉 Fitur Baru

- **[Manajer sumber data]** ✨ Dukungan pemuatan koleksi sesuai permintaan dari sumber data eksternal ([#6979](https://github.com/nocobase/nocobase/pull/6979)) oleh @aaaaaajie

- **[Alur kerja: Node permintaan HTTP]** Dukungan permintaan `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) oleh @shushu992

- **[Sumber data: SQL Server Eksternal]** Dukungan pemuatan koleksi sesuai permintaan dari sumber data eksternal oleh @aaaaaajie

### 🐛 Perbaikan Bug

- **[klien]**
  - Saat variabel parameter kueri URL kosong, kondisi lingkup data tidak dihapus ([#7104](https://github.com/nocobase/nocobase/pull/7104)) oleh @zhangzhonghe

  - Batasan rentang yang salah pada bidang tanggal dengan waktu ([#7107](https://github.com/nocobase/nocobase/pull/7107)) oleh @katherinehhh

- **[Seluler]** Memperbaiki masalah z-index pada popup seluler ([#7110](https://github.com/nocobase/nocobase/pull/7110)) oleh @zhangzhonghe

- **[Kalender]** Masalah bidang tanggal pada formulir buat cepat di blok kalender ([#7106](https://github.com/nocobase/nocobase/pull/7106)) oleh @katherinehhh

- **[Alur kerja: Persetujuan]**
  - Memperbaiki API variabel lama yang memicu kesalahan oleh @mytharcher

  - Memperbaiki gaya seluler oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat koleksi terkait persetujuan dihapus oleh @mytharcher

- **[Manajer email]** Lampiran tidak ditampilkan oleh @jiannx
