---
title: "NocoBase v1.9.0-beta.14: Ekspos variabel `approvalId` untuk digunakan dari pemicu persetujuan"
description: "Catatan Rilis v1.9.0-beta.14"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mengekspos variabel `approvalId` untuk digunakan dari pemicu persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Mengoptimalkan metode pemuatan sumber daya l10n untuk mencegah pemblokiran event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) oleh @2013xile

- **[cache]** Menghindari overhead kinerja yang disebabkan oleh kloning filter Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) oleh @2013xile

- **[Aksi: Impor catatan]** Peningkatan pesan kesalahan saat header tabel hilang ([#7656](https://github.com/nocobase/nocobase/pull/7656)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Mencegah pemutusan kata pada label formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) oleh @katherinehhh

- **[Workflow]** Memperbaiki kesalahan logger yang muncul saat aplikasi berhenti ([#7639](https://github.com/nocobase/nocobase/pull/7639)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah batas waktu transaksi yang disebabkan oleh transaksi yang tidak dikembalikan dengan benar saat terjadi kesalahan basis data setelah pengajuan persetujuan oleh @mytharcher

  - Memperbaiki masalah jumlah tugas yang tidak diperbarui setelah menambahkan penanggung jawab oleh @mytharcher

  - Memperbaiki masalah variabel yang tidak diuraikan dalam formulir pengajuan persetujuan oleh @mytharcher

- **[Manajer Email]** menangkap kesalahan sinkron oleh @jiannx
