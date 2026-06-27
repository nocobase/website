---
title: "NocoBase v1.7.0-beta.17: Mendukung penyegaran data di blok data lain setelah memperbarui data di suatu blok"
description: "Catatan Rilis v1.7.0-beta.17"
---

### 🎉 Fitur Baru

- **[Departemen]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Workflow menjadi gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos

- **[Aksi: Pembaruan massal]** Mendukung penyegaran data di blok data lain setelah memperbarui data di suatu blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[Workflow]** Mendukung URL popup tetap untuk tugas workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Beralih ke menu grup seharusnya tidak melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe

  - Formulir filter seharusnya tidak menampilkan peringatan "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe

  - Memperbaiki masalah gambar pratinjau yang terhalang ([#6651](https://github.com/nocobase/nocobase/pull/6651)) oleh @zhangzhonghe

  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lolos validasi, pemfilteran tetap terpicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe

  - Opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh

  - Di blok formulir, nilai default dari konfigurasi bidang akan ditampilkan sebagai string variabel asli lalu menghilang ([#6649](https://github.com/nocobase/nocobase/pull/6649)) oleh @zhangzhonghe

- **[Bidang koleksi: Lampiran(URL)]** hanya mengizinkan koleksi file dengan akses URL publik ([#6664](https://github.com/nocobase/nocobase/pull/6664)) oleh @katherinehhh

- **[Penyimpanan file: S3(Pro)]**
  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx

  - Mengatur bahasa oleh @jiannx

- **[Workflow: Persetujuan]** Mendukung URL tetap untuk item persetujuan di pusat tugas oleh @mytharcher

- **[Manajer migrasi]** opsi lewati cadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust
