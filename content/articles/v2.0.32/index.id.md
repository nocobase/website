---
title: "NocoBase v2.0.32: Menambahkan daftar isi ke README"
description: "Catatan Rilis v2.0.32"
---

### 🚀 Perbaikan

- **[tidak ditentukan]** Menambahkan daftar isi ke README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) oleh @gaston98765

### 🐛 Perbaikan Bug

- **[klien]**
  - bidang relasi subform gagal disimpan ([#9004](https://github.com/nocobase/nocobase/pull/9004)) oleh @jiannx

  - subform dari bidang tidak menampilkan data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) oleh @jiannx

  - Memperbaiki masalah di mana ctx.request tidak dapat menimpa header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) oleh @gchust

- **[server]** Menambahkan pemeriksaan serving untuk menghindari status aplikasi diperbarui oleh instance non-serving ([#8959](https://github.com/nocobase/nocobase/pull/8959)) oleh @mytharcher

- **[Karyawan AI]**
  - Memperbaiki masalah saat menggunakan model deepseek atau minmax di dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) oleh @cgyrock

  - Memperbaiki masalah di mana pembatalan penalaran karyawan AI menyebabkan layanan crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) oleh @cgyrock

- **[Workflow: Node permintaan HTTP]** Membersihkan hasil node permintaan workflow untuk menghindari paparan konfigurasi permintaan, mengatur default node baru untuk hanya mengembalikan data respons, dan menambahkan log debug untuk permintaan yang gagal. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) oleh @mytharcher

- **[Bidang koleksi: Urutkan]** fix(field-sort): mencegah crash saat atribut scopeKey tidak terdefinisi ([#9019](https://github.com/nocobase/nocobase/pull/9019)) oleh @gaston98765

- **[Blok: GridCard]** Memperbaiki masalah tombol tidak disegarkan saat grid card disegarkan ([#9021](https://github.com/nocobase/nocobase/pull/9021)) oleh @jiannx

- **[Workflow: Persetujuan]**
  - Menambahkan fault-tolerant saat workflow dihapus, untuk menghindari error muat di daftar tugas oleh @mytharcher

  - Menambahkan fault-tolerant untuk `latestRound` yang tidak ada oleh @mytharcher
