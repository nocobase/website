---
title: "NocoBase v1.6.3: Memungkinkan pengaturan tooltip kustom untuk tombol masuk"
description: "Catatan Rilis v1.6.3"
---

### 🎉 Fitur Baru

- **[WeCom]** Memungkinkan pengaturan tooltip kustom untuk tombol masuk oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki karakter khusus dalam URL gambar yang menyebabkan tidak tampil ([#6459](https://github.com/nocobase/nocobase/pull/6459)) oleh @mytharcher

  - Nomor halaman tidak tepat saat menambahkan data setelah ukuran halaman subtabel berubah ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh

  - Gaya logo tidak konsisten dengan yang sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe

- **[Workflow: Node manual]** Memperbaiki error yang muncul saat migrasi ([#6445](https://github.com/nocobase/nocobase/pull/6445)) oleh @mytharcher

- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile

- **[Manajer file]** Memperbaiki beberapa masalah pada manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher

- **[Aksi: Permintaan kustom]** Error validasi izin sisi server pada permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh

- **[Manajer sumber data]** Mengganti sumber data dalam manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh

- **[Aksi: Edit massal]** Memperbaiki workflow tidak dapat dipicu dalam pengiriman edit massal ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher

- **[Workflow: Event aksi kustom]** Menghapus `only` dalam kasus uji E2E oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki data asosiasi tidak tampil di formulir persetujuan oleh @mytharcher

  - Memperbaiki error yang muncul saat menyetujui pada sumber data eksternal oleh @mytharcher
