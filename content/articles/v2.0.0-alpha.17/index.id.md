---
title: "NocoBase v2.0.0-alpha.17: Menambahkan dukungan untuk pendengar acara klik baris tabel"
description: "Catatan Rilis v2.0.0-alpha.17"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan dukungan untuk pendengar peristiwa klik baris tabel, memungkinkan pengguna untuk menjalankan tindakan tertentu saat sebuah baris dalam tabel diklik ([#7622](https://github.com/nocobase/nocobase/pull/7622)) oleh @zhangzhonghe

- **[Workflow: Approval]** Mengekspos variabel `approvalId` untuk digunakan dari pemicu persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah terjemahan yang tidak berfungsi di komponen antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) oleh @zhangzhonghe

- **[Data source: Main]** Memperbaiki masalah metadata yang tidak tersinkronisasi di beberapa node setelah membuat bidang asosiasi terbalik ([#7628](https://github.com/nocobase/nocobase/pull/7628)) oleh @mytharcher

- **[plugin-demo-platform]** demo mendukung penghentian aplikasi secara otomatis oleh @jiannx

- **[Multi-app]**
  - migrasi multi-aplikasi tidak memicu hooks oleh @jiannx

  - proxy multi-aplikasi mendukung cache oleh @jiannx
