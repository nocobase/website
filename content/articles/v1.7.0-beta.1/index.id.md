---
title: "NocoBase v1.7.0-beta.1: kompatibel dengan pengaturan kontrol akses tombol historis"
description: "Catatan Rilis v1.7.0-beta.1"
---

### 🎉 Fitur Baru

- **[client]** Kompatibel dengan pengaturan kontrol akses tombol historis ([#6376](https://github.com/nocobase/nocobase/pull/6376)) oleh @katherinehhh

- **[Workflow: Post-action event]** Mendukung penggunaan node akhir untuk menentukan status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) oleh @mytharcher

- **[Workflow: Response message]** Mendukung penggunaan dalam pemicu aksi oleh @mytharcher

### 🚀 Peningkatan

- **[Workflow]** Memperbaiki API 401 saat tidak login ([#6412](https://github.com/nocobase/nocobase/pull/6412)) oleh @mytharcher

- **[Workflow: Manual node]** Menyesuaikan UI pusat tugas workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) oleh @mytharcher

- **[Email manager]** Menggunakan struktur dan gaya elemen yang sama secara global untuk tombol toolbar oleh @mytharcher

- **[Workflow: Approval]** Menyesuaikan UI pusat tugas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Tidak dapat memindahkan halaman ke dalam grup ([#6413](https://github.com/nocobase/nocobase/pull/6413)) oleh @zhangzhonghe

  - Menu tingkat dalam tidak menampilkan ikon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) oleh @zhangzhonghe

  - Masalah konteks tema FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) oleh @katherinehhh

- **[Workflow: Manual node]** Menghindari konflik pada kunci unik ([#6407](https://github.com/nocobase/nocobase/pull/6407)) oleh @mytharcher

- **[Data source manager]** Error saat mengedit field di sumber data eksternal ([#6402](https://github.com/nocobase/nocobase/pull/6402)) oleh @katherinehhh

- **[Authentication]** Pengguna tanpa peran harus diarahkan ke halaman pesan error. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) oleh @sheldon66

- **[Workflow: Custom action event]** Konfigurasi aturan tautan yang hilang untuk tombol 'Trigger Workflow' oleh @katherinehhh

- **[Backup manager]** Data kunci enkripsi hilang saat pemulihan cadangan oleh @gchust

- **[Workflow: Approval]** Menghindari konflik pada kunci unik oleh @mytharcher
