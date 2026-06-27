---
title: "NocoBase v2.0.0-alpha.46: Dukungan untuk mengganti kelas model aliran secara dinamis"
description: "Catatan Rilis v2.0.0-alpha.46"
---

### 🚀 Peningkatan

- **[flow-engine]** Mendukung perubahan kelas model aliran secara dinamis ([#7952](https://github.com/nocobase/nocobase/pull/7952)) oleh @gchust

- **[Karyawan AI]** Plugin karyawan AI menambahkan hook upgrade ([#7951](https://github.com/nocobase/nocobase/pull/7951)) oleh @heziqiang

- **[Manajer tugas asinkron]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron guna memberikan alasan spesifik kepada pengguna atas kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Membuat payload dari eksekusi manual (atau dipicu oleh node sub-aliran) kompatibel dengan record atau primary key. Hindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher

  - Mengurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan performa yang lebih baik oleh @mytharcher

  - Memperbaiki pemilihan variabel di AssigneeSelect, membatasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** memperbaiki teks field yang otomatis membungkus di blok detail saat konten melebihi lebar ([#7955](https://github.com/nocobase/nocobase/pull/7955)) oleh @katherinehhh

- **[Manajer tugas asinkron]** Menambahkan aturan migrasi untuk koleksi `asyncTasks`, hindari record tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher

- **[Manajer file]** memperbaiki unggah file ke penyimpanan yang ditentukan alih-alih penyimpanan default ([#7947](https://github.com/nocobase/nocobase/pull/7947)) oleh @katherinehhh

- **[Alur Kerja: Persetujuan]** Memperbaiki file bahasa oleh @mytharcher
