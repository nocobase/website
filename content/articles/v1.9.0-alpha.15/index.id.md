---
title: "NocoBase v1.9.0-alpha.15: Gunakan logger sistem standar untuk antrean pesan"
description: "Catatan Rilis v1.9.0-alpha.15"
---

### 🚀 Peningkatan

- **[auth]** Mendukung penggunaan `.` pada nama pengguna ([#7504](https://github.com/nocobase/nocobase/pull/7504)) oleh @2013xile
- **[server]** Menggunakan logger sistem standar untuk antrean pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher
- **[snowflake-id]** Mengubah ID tabel sistem dengan primary key auto-increment tetapi tanpa pengidentifikasi unik menjadi ID mirip Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) oleh @2013xile
- **[Kalender]** Mendukung tampilan pemetaan lokal untuk header kalender ([#7508](https://github.com/nocobase/nocobase/pull/7508)) oleh @katherinehhh
- **[Workflow: Node manual]** Mendukung untuk melihat dan melanjutkan tugas manual yang tertunda dalam workflow yang dinonaktifkan ([#7493](https://github.com/nocobase/nocobase/pull/7493)) oleh @mytharcher
- **[Editor tema]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu
- **[Adaptor antrean Redis]** Menggunakan logger sistem standar untuk adaptor antrean pesan Redis oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana popup konfigurasi ikon tombol tertutup/tertumpuk ([#7506](https://github.com/nocobase/nocobase/pull/7506)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen Popover tertumpuk/tertutup ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe
  - select/multiselect/date/richtext readonly masih dapat diedit pada formulir publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh
- **[Workflow]**

  - Memperbaiki masalah di mana logika langganan yang salah pada antrean tugas latar belakang dalam workflow menyebabkan pesan eksekusi ditangani secara tidak benar ([#7507](https://github.com/nocobase/nocobase/pull/7507)) oleh @mytharcher
  - Memperbaiki potensi kesalahan terkait caching log workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah penguraian tautan notifikasi yang salah ([#7509](https://github.com/nocobase/nocobase/pull/7509)) oleh @mytharcher
- **[Sumber data: REST API]** Memperbaiki aturan validasi URL REST API oleh @katherinehhh
- **[Enkripsi permintaan HTTP]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher
- **[Cetak template]** Mendukung bidang chinaRegions oleh @jiannx
- **[Manajer email]** Memperbaiki masalah subjek sampah oleh @jiannx
