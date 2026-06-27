---
title: "NocoBase v1.9.15: Perbaikan Bug"
description: "Catatan Rilis v1.9.15"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Menghindari error yang muncul saat membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher

  - Memperbaiki error saat menambahkan catatan anak di blok tabel asosiasi pohon ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh

- **[Departemen]** Memperbaiki masalah di mana bidang terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang

- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian bidang induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile

- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana bidang array m2m dalam sub-tabel tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki tidak adanya data pemohon dalam konteks eksekusi setelah pengguna mengirim ulang oleh @mytharcher

  - Memperbaiki masalah di mana komentar dalam hasil pekerjaan menjadi null setelah pengguna mengirim persetujuan dengan komentar oleh @mytharcher
