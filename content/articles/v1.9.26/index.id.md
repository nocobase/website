---
title: "NocoBase v1.9.26: Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi snippet"
description: "Catatan Rilis v1.9.26"
---

### 🚀 Peningkatan

- **[acl]** Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi cuplikan ([#8155](https://github.com/nocobase/nocobase/pull/8155)) oleh @mytharcher

- **[Kontrol akses]** Melarang penugasan peran root kepada pengguna ([#8180](https://github.com/nocobase/nocobase/pull/8180)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Pengaturan lisensi]**
  - Memperbaiki pengecualian build ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) oleh @jiannx

  - Optimalisasi lisensi dan penambahan informasi petunjuk ([#7993](https://github.com/nocobase/nocobase/pull/7993)) oleh @jiannx

- **[Manajer berkas]** Memperbaiki masalah pratinjau berkas `.txt` di OSS yang mendapatkan charset salah ([#8161](https://github.com/nocobase/nocobase/pull/8161)) oleh @mytharcher

- **[Aksi: Impor catatan]** Menunggu secara sinkron hingga event `afterCreate` yang dipicu oleh impor selesai. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) oleh @2013xile

- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki masalah gagal memuat untuk tabel dengan nama huruf kapital oleh @2013xile

- **[Sumber data: SQL Server eksternal]** Memperbaiki masalah opsi `encrypt` dan `trustServerCertificate` yang tidak tersedia oleh @2013xile
