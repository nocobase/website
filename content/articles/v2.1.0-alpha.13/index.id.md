---
title: "NocoBase v2.1.0-alpha.13: menambahkan variabel js ke alur peristiwa"
description: "Catatan Rilis v2.1.0-alpha.13"
---

### 🎉 Fitur Baru

- **[client]** menambahkan variabel js ke alur event ([#8938](https://github.com/nocobase/nocobase/pull/8938)) oleh @jiannx

### 🚀 Peningkatan

- **[client]** mendukung pengaturan gaya bidang melalui runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) oleh @jiannx

- **[flow-engine]** Meningkatkan validasi skema untuk api pembuatan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust

- **[Workflow: Pre-action event]** Menambahkan aturan validasi untuk pemicu dan node ([#8971](https://github.com/nocobase/nocobase/pull/8971)) oleh @mytharcher

- **[Workflow]** Menambahkan variabel untuk parameter ukuran halaman ([#8951](https://github.com/nocobase/nocobase/pull/8951)) oleh @mytharcher

- **[Workflow: Webhook]** Menambahkan validasi untuk pembuatan API pemicu / node oleh @mytharcher

- **[Workflow: Subflow]**
  - Menambahkan validasi untuk pembuatan API node oleh @mytharcher

  - Menambahkan logika defensif untuk menghindari workflow menggantung saat terjadi pengecualian oleh @mytharcher

- **[Workflow: Approval]** Menambahkan validasi untuk API pemicu / node oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki pengecualian saat menambahkan node anak ke tabel pohon di jendela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) oleh @jiannx

- **[server]** Menghindari penanganan pesan sinkron setelah aplikasi berhenti ([#8940](https://github.com/nocobase/nocobase/pull/8940)) oleh @mytharcher

- **[Action: Export records]** Membatasi konfigurasi impor dan ekspor bidang terkait multi-lapis ([#8893](https://github.com/nocobase/nocobase/pull/8893)) oleh @jiannx

- **[Data visualization]** Memperbaiki statistik data yang tidak normal pada bagan peran root setelah mengaktifkan plugin ruang ([#8969](https://github.com/nocobase/nocobase/pull/8969)) oleh @jiannx

- **[Action: Import records]** Memperbaiki masalah kegagalan impor setelah membuka plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) oleh @jiannx

- **[Workflow: JavaScript]** Memperbaiki masalah keamanan ([#8967](https://github.com/nocobase/nocobase/pull/8967)) oleh @mytharcher

- **[AI employees]** Menyesuaikan jarak antar komponen kartu alat di AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) oleh @cgyrock

- **[Flow engine]** Menghapus event lama yang disalin dari repositori uiSchema untuk menghindari kesalahan yang muncul saat memicu ([#8957](https://github.com/nocobase/nocobase/pull/8957)) oleh @mytharcher

- **[Authentication]** memperbaiki acl untuk mendukung parameter penyaringan status kustom ([#8918](https://github.com/nocobase/nocobase/pull/8918)) oleh @jiannx

- **[Action: Import records Pro]** membatasi konfigurasi impor dan ekspor bidang terkait multi-lapis oleh @jiannx

- **[Email manager]** Memperbaiki tanda tangan yang tertimpa saat menggunakan template oleh @jiannx
