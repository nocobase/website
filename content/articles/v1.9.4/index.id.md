---
title: "NocoBase v1.9.4: Optimalkan logika kontrol izin untuk operasi bidang asosiasi"
description: "Catatan Rilis v1.9.4"
---

### 🚀 Peningkatan

- **[Kontrol akses]** Optimalkan logika kontrol izin untuk operasi field asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile

- **[Workflow: JavaScript]** Perbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi tingkat atas oleh @mytharcher

- **[Auth: OIDC]** Tingkatkan batas waktu permintaan oleh @2013xile

### 🐛 Perbaikan Bug

- **[server]** Perbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses worker yang mengirim pesan melalui antrian pesan menyebabkan error ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher

- **[client]** Perbaiki masalah halaman berikutnya yang kosong pada blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh

- **[Workflow]**
  - Tambahkan `workflowId` sebagai data identitas untuk log workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher

  - Perbaiki masalah di mana plugin workflow masih mengonsumsi event antrian saat tidak dalam mode worker pada mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher

- **[Users]** Refresh indeks yang salah saat nama field menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile

- **[Workflow: Custom variable]** Perbaiki error yang muncul saat tidak ada konfigurasi di node variabel oleh @mytharcher
