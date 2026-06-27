---
title: "NocoBase v1.9.3: Perbaiki error yang muncul saat duplikasi alur kerja persetujuan"
description: "Catatan Rilis v1.9.3"
---

### 🚀 Peningkatan

- **[database]** Menambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher

- **[Workflow]** Mendukung blok data dalam workflow untuk menggunakan menu pengaturan detail konsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Mengisolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher

- **[client]** Memperbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe

- **[database]** Deteksi field indeks yang salah saat nama field menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile

- **[Workflow]** Memperbaiki masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi event antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher

- **[Mobile (usang)]** Memperbaiki masalah di mana popup nilai default field tanggal di perangkat seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe

- **[Workflow: Persetujuan]** Memperbaiki error yang muncul saat workflow persetujuan duplikat oleh @mytharcher

- **[Manajer Email]** koleksi mailMessages menambahkan indeks oleh @jiannx
