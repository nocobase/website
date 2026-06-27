---
title: "NocoBase v2.0.58: Menambahkan API administrator untuk menjalankan ulang eksekusi alur kerja yang sudah dimulai dari awal atau dari node tertentu"
description: "Catatan Rilis v2.0.58"
---

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan API administrator untuk menjalankan ulang eksekusi workflow yang sudah dimulai dari awal atau dari node tertentu. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menghapus opsi Tersembunyi dari pengaturan item menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki sinkronisasi nilai popup pemilih tanggal di perangkat seluler ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh

  - Memperbaiki format waktu yang dipertahankan untuk kolom waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh

  - Meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh

  - Memperbaiki sinkronisasi status tersembunyi untuk tautan subform ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh

  - Memperbaiki masalah di mana subtabel dalam subform tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh

  - Memperbaiki tab halaman yang menghilang setelah mengganti menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe

- **[flow-engine]** Memperbaiki masalah di mana aturan tautan aksi tabel akan dijalankan secara tidak benar setelah formulir berhasil dikirim dalam popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust

- **[Workflow: Acara aksi kustom]** Memperbaiki tombol aksi kustom tabel dengan konteks beberapa rekaman yang secara tidak benar mengizinkan workflow konteks kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher

- **[Manajer file]**
  - Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher

  - Memperbaiki pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
