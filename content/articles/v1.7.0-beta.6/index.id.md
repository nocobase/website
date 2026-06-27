---
title: "NocoBase v1.7.0-beta.6: Dukungan untuk mengonfigurasi presisi hasil agregasi"
description: "Catatan Rilis v1.7.0-beta.6"
---

### 🎉 Fitur Baru

- **[client]** Mendukung kolom teks panjang sebagai kolom judul untuk kolom asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh

- **[Workflow: Node Agregasi]** Mendukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[evaluators]** Mengembalikan pembulatan desimal ke 9 digit ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher

- **[Workflow]** Memperbaiki jumlah tugas lama setelah workflow dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher

- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie

- **[Manajer file]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos

- **[Manajer cadangan]**
  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust

  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust

- **[Workflow: Persetujuan]**
  - Memperbaiki tombol aksi yang hilang di tabel proses oleh @mytharcher

  - Mengubah persetujuan yang dikembalikan menjadi todo oleh @mytharcher
