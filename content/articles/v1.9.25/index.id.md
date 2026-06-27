---
title: "NocoBase v1.9.25: Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor"
description: "Catatan Rilis v1.9.25"
---

### 🚀 Peningkatan

- **[Alur Kerja]**
  - Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor, guna menghindari eksekusi yang menggantung ([#8156](https://github.com/nocobase/nocobase/pull/8156)) oleh @mytharcher

  - Menggunakan pemuatan lambat untuk data asosiasi pada kanvas alur kerja guna meningkatkan performa ([#8142](https://github.com/nocobase/nocobase/pull/8142)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[acl]** Memperbaiki masalah di mana API `acl.can` mengembalikan `null` saat peran adalah `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) oleh @mytharcher

- **[Alur Kerja: Node Manual]** Memperbaiki masalah daftar tugas manual yang menggunakan API yang salah ([#8144](https://github.com/nocobase/nocobase/pull/8144)) oleh @mytharcher

- **[Enkripsi permintaan HTTP]** Menggunakan tanda kurung untuk format array dalam penguraian qs oleh @chenos

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana terjadi kesalahan saat membatalkan eksekusi ketika alur kerjanya telah dihapus oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki masalah di mana baris baru dalam data hilang selama migrasi. oleh @cgyrock
