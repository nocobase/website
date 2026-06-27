---
title: "NocoBase v1.8.4: Dukungan untuk mengonfigurasi rahasia otentikasi independen untuk sub-aplikasi"
description: "Catatan Rilis v1.8.4"
---

### 🎉 Fitur Baru

- **[Multi-app manager]** Mendukung konfigurasi rahasia auth independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher

- **[Workflow: CC]** Menambahkan node CC ke workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher

### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Optimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe

- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

### 🐛 Perbaikan Bug

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki timestamp BigInt dalam format string yang menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Menghindari error saat pengguna tidak ada oleh @mytharcher

  - Memuat ulang asosiasi pada record oleh @mytharcher

  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher
