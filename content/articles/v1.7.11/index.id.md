---
title: "NocoBase v1.7.11: Dukung penyalinan konten bidang teks satu klik"
description: "Catatan Rilis v1.7.11"
---

### 🎉 Fitur Baru

- **[Salin teks]** Mendukung penyalinan konten bidang teks dengan satu klik ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**
  - Pemilih bidang asosiasi tidak menghapus data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh

  - Memperbaiki petunjuk ukuran unggahan ([#7057](https://github.com/nocobase/nocobase/pull/7057)) oleh @mytharcher

- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos

- **[Workflow: Node Loop]** Memperbaiki cabang loop yang berjalan saat kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki statistik tugas yang tidak diperbarui saat eksekusi dibatalkan oleh @mytharcher

  - Memperbaiki variabel pemicu saat memfilter berdasarkan jenis oleh @mytharcher
