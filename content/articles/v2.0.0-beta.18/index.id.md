---
title: "NocoBase v2.0.0-beta.18: dukungan env.ESM_CDN_BASE_URL"
description: "Catatan Rilis v2.0.0-beta.18"
---

### 🎉 Fitur Baru

- **[flow-engine]** dukungan env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) oleh @chenos

### 🚀 Peningkatan

- **[acl]** acl menambahkan metode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) oleh @jiannx

- **[client]** Dukungan untuk menonaktifkan parameter appends default yang redundan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile

- **[Auth: DingTalk]** Menggunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang ada yang bergantung pada mobile oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana alur peristiwa gagal diterapkan saat menyegarkan blok target di seluruh popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) oleh @gchust

  - Memperbaiki masalah di mana data halaman disegarkan secara tidak benar setelah membuka dan menutup popup untuk pertama kalinya. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) oleh @gchust

  - Memperbaiki masalah yang menyebabkan blok data disegarkan berulang kali setelah mengirimkan formulir. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) oleh @gchust

  - memperbaiki bidang nanoid yang tidak menghasilkan ulang nilai default setelah pengiriman pembuatan ([#8538](https://github.com/nocobase/nocobase/pull/8538)) oleh @katherinehhh

  - memperbaiki tampilan yang salah saat mengatur nilai default untuk model bidang cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) oleh @katherinehhh

- **[flow-engine]** Memperbaiki pemuatan yang salah dari beberapa pustaka ESM di runjs karena salah klasifikasi sebagai modul AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) oleh @gchust

- **[File manager]** Mengamankan jalur file untuk penyimpanan lokal, untuk menghindari jalur akses keluar dari root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher

- **[Workflow]** Menambahkan toleransi kesalahan untuk komponen pilih catatan koleksi, untuk menghindari kesalahan yang muncul saat koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher

- **[AI employees]** Memperbaiki pengecualian yang terjadi saat alat dipanggil secara otomatis selama pemodelan data ai ([#8532](https://github.com/nocobase/nocobase/pull/8532)) oleh @cgyrock

- **[Action: Import records Pro]** Memperbaiki jumlah angka dalam hasil impor dan terjemahan pesan oleh @mytharcher

- **[Workflow: Subflow]** Memperbaiki jalur rute tautan workflow oleh @mytharcher

- **[Template print]** memperbaiki masalah tampilan daftar bidang dalam konfigurasi aksi cetak template oleh @katherinehhh

- **[Workflow: Approval]**
  - Memperbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika workflow audiens dinonaktifkan oleh @mytharcher

  - Menambahkan toleransi kesalahan pada workflow yang dihapus, untuk menghindari kesalahan pemuatan dalam daftar tugas oleh @mytharcher

- **[WeCom]** Memperbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis saat mobile tidak ada oleh @2013xile
