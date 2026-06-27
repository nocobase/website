---
title: "NocoBase v1.9.12: Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas"
description: "Catatan Rilis v1.9.12"
---

### 🚀 Peningkatan

- **[Klien]** Menambahkan status pemuatan untuk tombol aksi perbarui catatan dan hapus catatan, menghindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher

- **[Pengelola tugas asinkron]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron guna memberikan alasan spesifik kepada pengguna atas kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher

- **[Aksi: Impor catatan Pro]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron guna memberikan alasan spesifik kepada pengguna atas kegagalan tugas oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki pemilihan variabel di AssigneeSelect, membatasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher

  - Mengurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan kinerja yang lebih baik oleh @mytharcher

  - Membuat payload dari eksekusi manual (atau dipicu oleh node sub-alur) kompatibel dengan catatan atau kunci utama. Menghindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Pengelola tugas asinkron]** Menambahkan aturan migrasi untuk koleksi `asyncTasks`, menghindari catatan tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Memperbaiki file bahasa oleh @mytharcher
