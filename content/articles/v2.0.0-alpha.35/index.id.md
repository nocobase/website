---
title: "NocoBase v2.0.0-alpha.35: mendukung operasi tertunda dalam model aliran"
description: "Catatan Rilis v2.0.0-alpha.35"
---

### 🚀 Peningkatan

- **[flow-engine]** Mendukung operasi tertunda dalam model aliran ([#7786](https://github.com/nocobase/nocobase/pull/7786)) oleh @gchust

- **[Workflow: JavaScript]** Memperbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi tingkat atas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah halaman berikutnya kosong pada blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh

  - Memperbaiki lebar aksi tabel dan jsColumn yang tidak diterapkan ([#7777](https://github.com/nocobase/nocobase/pull/7777)) oleh @katherinehhh

  - Cakupan data blok tidak berfungsi jika diatur oleh aliran peristiwa halaman ([#7788](https://github.com/nocobase/nocobase/pull/7788)) oleh @gchust

- **[Workflow]** Menambahkan `workflowId` sebagai data identitas untuk log workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher

- **[Workflow: Variabel kustom]** Memperbaiki kesalahan yang muncul saat tidak ada konfigurasi di node variabel oleh @mytharcher

- **[Manajer Email]** Koleksi mailMessages menambahkan indeks oleh @jiannx
