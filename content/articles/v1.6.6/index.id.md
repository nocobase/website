---
title: "NocoBase v1.6.6: Dukungan bidang teks panjang sebagai bidang judul untuk bidang asosiasi"
description: "Catatan Rilis v1.6.6"
---

### 🎉 Fitur Baru

- **[client]** Mendukung kolom teks panjang sebagai kolom judul untuk kolom asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh

- **[Workflow: Node agregat]** Mendukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

### 🚀 Peningkatan

- **[Penyimpanan file: S3(Pro)]** Mengubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[evaluators]** Mengembalikan jumlah desimal pembulatan menjadi 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher

- **[Manajer file]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos

- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie

- **[Workflow]** Memperbaiki jumlah tugas lama setelah workflow dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher

- **[Embed NocoBase]** Halaman menampilkan layar kosong oleh @zhangzhonghe

- **[Manajer cadangan]**
  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust

  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust

- **[Workflow: Persetujuan]**
  - Mengubah persetujuan yang dikembalikan menjadi todo oleh @mytharcher

  - Memperbaiki tombol aksi yang hilang di tabel proses oleh @mytharcher
