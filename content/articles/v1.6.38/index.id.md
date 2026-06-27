---
title: "NocoBase v1.6.38: Perbaikan Bug"
description: "Catatan Rilis v1.6.38"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe

  - Memperbaiki masalah nilai default formulir filter yang tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe

  - Tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh

  - Memperbaiki masalah opsi 'Konten overflow elipsis' yang tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe

  - Memperbaiki masalah nilai bidang teks satu baris yang ditampilkan sebagai array dalam mode baca-mudah ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe

- **[Otentikasi]** Masalah kinerja yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile

- **[Manajer Berkas]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher

- **[Alur Kerja: Aksi kustom]** Memperbaiki penginisialisasi untuk meja kerja yang terlewat oleh @mytharcher

- **[Auth: OIDC]** Teks tombol masuk tidak dilokalisasi oleh @2013xile
