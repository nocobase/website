---
title: "NocoBase v1.9.16: Menambahkan opsi transformer pesan kesalahan dalam konfigurasi sumber data api restful"
description: "Catatan Rilis v1.9.16"
---

### 🎉 Fitur Baru

- **[Sumber data: REST API]** menambahkan opsi `error message transformer` pada konfigurasi sumber data restful api oleh @cgyrock

### 🚀 Peningkatan

- **[klien]**
  - menampilkan opsi yang diciutkan saat diarahkan kursor pada komponen Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh

  - mengoptimalkan pesan validasi untuk subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh

- **[Workflow]** Menambahkan konteks sumber data "utama" untuk UserSelect, guna menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher

- **[Workflow: Persetujuan]** Menggunakan komponen umum untuk mengurangi kode duplikat oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki bug lazy load di Variable.Input, yang menyebabkan menu opsi variabel di-render ulang secara tidak benar ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher

- **[Aksi: Impor catatan]** Memperbaiki masalah di mana error muncul ketika field dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher

- **[Workflow]** Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher

- **[Workflow: Subflow]** Memperbaiki masalah di mana workflow yang dipilih menampilkan "N/A" ketika jumlah workflow lebih dari 200 oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah izin saat mendapatkan `approvalRecords.reassignee` karena perubahan `RemoteSelect` oleh @mytharcher

  - Memperbaiki masalah di mana aksi cetak tidak berfungsi saat menyegarkan halaman dengan modal terbuka oleh @mytharcher
