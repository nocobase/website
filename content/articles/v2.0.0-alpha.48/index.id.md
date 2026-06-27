---
title: "NocoBase v2.0.0-alpha.48: Menambahkan blok peta 2.0"
description: "Catatan Rilis v2.0.0-alpha.48"
---

### 🎉 Fitur Baru

- **[Blok: Peta]** menambahkan blok peta 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) oleh @katherinehhh

- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO saat tidak terautentikasi oleh @heziqiang

### 🐛 Perbaikan Bug

- **[client]**
  - Menghindari error yang muncul saat membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher

  - Memperbaiki error saat menambahkan record anak di blok tabel pohon asosiasi ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh

  - Memperbaiki masalah tampilan saat field markdown di-ellipsis dalam mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) oleh @katherinehhh

  - Memperbaiki hasil pencarian yang tidak lengkap di kaskade selector ([#7990](https://github.com/nocobase/nocobase/pull/7990)) oleh @katherinehhh

  - Memperbaiki masalah di mana status tab halaman dan rute tidak sesuai ([#7991](https://github.com/nocobase/nocobase/pull/7991)) oleh @zhangzhonghe

  - Memperbaiki remote select jarak jauh yang tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh

- **[database]** Perbaikan: menghapus pemrosesan UTC dalam konversi waktu untuk field hanya-waktu guna mencegah pergeseran akibat zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu

- **[Workflow]**
  - Memperbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum berhenti ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher

  - Memperbaiki masalah di mana beberapa menu tugas workflow tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher

  - Memperbaiki masalah di mana tautan tugas mengarah ke halaman error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher

- **[Visualisasi data]** Pengaturan field filter untuk koleksi sumber data eksternal tidak menampilkan properti spesifik ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile

- **[Manajer sumber data]** Memperbaiki kegagalan pembaruan kata sandi sumber data saat kata sandi database diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock

- **[Aksi: Impor record]** Memperbaiki masalah saat mengimpor data di tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock

- **[Workflow: Node manual]** Memperbaiki masalah di mana jumlah tugas manual tidak akurat ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki tidak adanya data pemohon dalam konteks eksekusi setelah pengguna mengirim ulang oleh @mytharcher

  - Memperbaiki masalah di mana komentar dalam hasil pekerjaan menjadi null setelah pengguna mengirim persetujuan dengan komentar oleh @mytharcher
