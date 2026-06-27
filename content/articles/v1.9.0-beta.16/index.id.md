---
title: "NocoBase v1.9.0-beta.16: Dukungan mode pemicu \"Sebelum data disimpan\""
description: "Catatan Rilis v1.9.0-beta.16"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung mode pemicu "Sebelum data disimpan" oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Menambahkan log gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) oleh @2013xile

- **[Workflow: node notifikasi]** Menambahkan opsi `ignoreFail` untuk node notifikasi, yang memungkinkan workflow untuk melanjutkan ketika pengiriman notifikasi gagal ([#7736](https://github.com/nocobase/nocobase/pull/7736)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki konfigurasi aturan tautan pemindaian kode QR di panel aksi ([#7693](https://github.com/nocobase/nocobase/pull/7693)) oleh @katherinehhh

  - Memperbaiki kegagalan aturan tautan blok iframe di dalam modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) oleh @katherinehhh

- **[database]** Melewati sinkronisasi nilai default untuk kolom JSON MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) oleh @2013xile

- **[Workflow]**
  - Memperbaiki masalah di mana, dalam mode pemisahan layanan, penanganan antrian tertunda di memori yang tidak tepat menyebabkan beberapa workflow tidak berjalan ([#7692](https://github.com/nocobase/nocobase/pull/7692)) oleh @mytharcher

  - Memperbaiki nilai status eksekusi ketika dibuat dengan deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) oleh @mytharcher

  - Memperbaiki masalah di mana, setelah menghapus node yang memulai percabangan, kunci dari node pertama yang dipertahankan di dalam cabang berubah secara tidak benar menjadi nilai baru ([#7665](https://github.com/nocobase/nocobase/pull/7665)) oleh @mytharcher

- **[Kontrol akses]** Memperbaiki urutan middleware dari `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) oleh @2013xile

- **[Manajer file]** Memperbaiki masalah file `.msg` yang tidak dapat diunggah dengan benar ([#7662](https://github.com/nocobase/nocobase/pull/7662)) oleh @mytharcher

- **[Workflow: node manual]** Memperbaiki masalah di mana tugas manual menghilang setelah workflow dinonaktifkan ([#7687](https://github.com/nocobase/nocobase/pull/7687)) oleh @mytharcher

- **[Bidang koleksi: divisi administratif China]** Impor data gagal ketika kota dan area memiliki nama yang sama ([#7673](https://github.com/nocobase/nocobase/pull/7673)) oleh @2013xile

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah terjemahan teks status dalam notifikasi penyelesaian persetujuan, menggunakan bahasa default sistem untuk terjemahan ketika pengguna belum mengatur preferensi bahasa oleh @mytharcher

  - Memperbaiki locale oleh @mytharcher
