---
title: "NocoBase v2.0.27: Menambahkan variabel untuk parameter ukuran halaman"
description: "Catatan Rilis v2.0.27"
---

### 🚀 Peningkatan

- **[Workflow]** Menambahkan variabel untuk parameter ukuran halaman ([#8951](https://github.com/nocobase/nocobase/pull/8951)) oleh @mytharcher

- **[Workflow: Subflow]** Menambahkan logika defensif untuk menghindari workflow menggantung saat terjadi pengecualian oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki pengecualian saat menambahkan node anak ke tabel pohon di jendela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) oleh @jiannx

- **[server]** Menghindari penanganan pesan sinkronisasi setelah aplikasi dihentikan ([#8940](https://github.com/nocobase/nocobase/pull/8940)) oleh @mytharcher

- **[Flow engine]** Menghapus event lama yang disalin dari repositori uiSchema untuk menghindari kesalahan yang muncul saat dipicu ([#8957](https://github.com/nocobase/nocobase/pull/8957)) oleh @mytharcher

- **[Authentication]** Memperbaiki acl untuk mendukung parameter filter status kustom ([#8918](https://github.com/nocobase/nocobase/pull/8918)) oleh @jiannx

- **[Email manager]** Memperbaiki tanda tangan yang tertimpa saat menggunakan template oleh @jiannx
