---
title: "NocoBase v1.9.32: Perbaiki stack overflow yang disebabkan oleh infinite loop dalam lazy loading field asosiasi tampilan"
description: "Catatan Rilis v1.9.32"
---

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan variabel sistem baru dalam workflow, termasuk `instanceId` dan `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki stack overflow yang disebabkan oleh infinite loop dalam lazy loading field asosiasi tampilan ([#8262](https://github.com/nocobase/nocobase/pull/8262)) oleh @zhangzhonghe

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris dalam pesan error selalu 1 ketika error terjadi dalam aksi impor ([#8244](https://github.com/nocobase/nocobase/pull/8244)) oleh @mytharcher

- **[Workflow: Node manual]** Memperbaiki masalah di mana error terjadi saat membatalkan eksekusi workflow yang telah dihapus ([#8258](https://github.com/nocobase/nocobase/pull/8258)) oleh @mytharcher

- **[Field koleksi: Sequence]** Memperbaiki error ketika perintah perbaikan field-sequence menemukan koleksi yang tidak ada di lingkungan saat ini. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) oleh @cgyrock

- **[Aksi: Impor rekaman Pro]** Memperbaiki logika pengecekan unik yang akan memunculkan error ketika nilai field unik adalah null oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki rollback duplikat dari transaksi yang sama oleh @mytharcher
