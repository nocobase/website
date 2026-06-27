---
title: "NocoBase v1.9.33: Dukungan konfigurasi metode penggantian nama file"
description: "Catatan Rilis v1.9.33"
---

### 🎉 Fitur Baru

- **[client]** Mendukung komponen pemeliharaan yang ditentukan plugin saat aplikasi memasuki status pemeliharaan ([#8252](https://github.com/nocobase/nocobase/pull/8252)) oleh @cgyrock

- **[File manager]** Mendukung konfigurasi metode penggantian nama file ([#8231](https://github.com/nocobase/nocobase/pull/8231)) oleh @JAVA-LW

- **[File storage: S3(Pro)]** Menambahkan opsi mode penggantian nama untuk penyimpanan S3 Pro oleh @mytharcher

### 🚀 Peningkatan

- **[Migration manager]** Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[database]**
  - Menyertakan through scope saat melakukan kueri relasi m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) oleh @2013xile

  - Memperbaiki objek `appends` di `OptionsParser`, dan meningkatkan `arrayLimit` untuk parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) oleh @mytharcher

- **[client]** Memperbaiki masalah error yang muncul di pengaturan blok formulir filter pada field m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) oleh @mytharcher

- **[Async task manager]** Memperbaiki bahasa untuk pembatalan tugas latar belakang ([#8245](https://github.com/nocobase/nocobase/pull/8245)) oleh @mytharcher

- **[File manager]** Memperbaiki masalah error saat mengunggah file lebih besar dari 5MB ke AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) oleh @mytharcher

- **[Workflow]** Memperbaiki event database yang menjadi tidak valid setelah menyegarkan sumber data eksternal ([#8207](https://github.com/nocobase/nocobase/pull/8207)) oleh @cgyrock

- **[Collection: Tree]** Memperbarui jalur setelah membuat node koleksi tree secara massal ([#8267](https://github.com/nocobase/nocobase/pull/8267)) oleh @2013xile

- **[Data source: External PostgreSQL]** Memperbaiki event database yang menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock

- **[Data source: External Oracle]** Memperbaiki event database yang menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock
