---
title: "NocoBase v1.7.0-alpha.1: Dukungan menggunakan simpul akhir untuk menentukan status"
description: "Catatan Rilis v1.7.0-alpha.1"
---

### 🎉 Fitur Baru

- **[Workflow: Event pasca-tindakan]** Mendukung penggunaan node akhir untuk menentukan status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) oleh @mytharcher

### 🚀 Peningkatan

- **[Workflow]** Memperbaiki API 401 saat tidak masuk ([#6412](https://github.com/nocobase/nocobase/pull/6412)) oleh @mytharcher

- **[Manajer Email]** Menggunakan struktur dan gaya elemen yang sama secara global untuk tombol toolbar oleh @mytharcher

- **[Workflow: Persetujuan]** Menyesuaikan UI pusat tugas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Tidak dapat memindahkan halaman ke dalam grup ([#6413](https://github.com/nocobase/nocobase/pull/6413)) oleh @zhangzhonghe

  - Menu tingkat dalam tidak menampilkan ikon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) oleh @zhangzhonghe

- **[Autentikasi]** Pengguna tanpa peran harus diarahkan ke halaman pesan kesalahan. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) oleh @sheldon66

- **[Workflow: Event tindakan kustom]** Konfigurasi aturan tautan yang hilang untuk tombol 'Picu Workflow' oleh @katherinehhh

- **[Manajer Cadangan]** Data kunci enkripsi hilang saat pemulihan cadangan oleh @gchust

- **[Workflow: Persetujuan]** Menghindari konflik pada kunci unik oleh @mytharcher
