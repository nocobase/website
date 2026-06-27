---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk tampilan pemetaan lokal untuk header kalender, perbaikan bug, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Tanggal rilis: 2025-09-17*

#### 🚀 Peningkatan

- **[auth]** Mendukung penggunaan `.` dalam nama pengguna ([#7504](https://github.com/nocobase/nocobase/pull/7504)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana popup konfigurasi ikon tombol tertutup/bertumpuk ([#7506](https://github.com/nocobase/nocobase/pull/7506)) oleh @zhangzhonghe
- **[Template print]** mendukung bidang chinaRegions oleh @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Tanggal rilis: 2025-09-13*

#### 🎉 Fitur Baru

- **[Workflow: Approval]** Mendukung untuk kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

#### 🚀 Peningkatan

- **[server]** Menggunakan logger sistem standar untuk antrian pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher
- **[client]** Menghapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher
- **[Workflow]** Mengoptimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher
- **[Theme editor]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu
- **[Redis queue adapter]** Menggunakan logger sistem standar untuk adaptor antrian pesan Redis oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana komponen Popover tertutup/tertumpuk ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe
  - Pemeriksaan 'tidak kosong' yang salah untuk bidang numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh
  - select/multiselect/date/richtext readonly masih dapat diedit pada formulir publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh
- **[Workflow]** Memperbaiki potensi kesalahan terkait caching log workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher
- **[HTTP request encryption]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher
- **[Data source: REST API]** memperbaiki aturan validasi URL REST API oleh @katherinehhh
- **[Workflow: Approval]** Memperbaiki masalah di mana teks status dalam notifikasi penyelesaian persetujuan tidak diterjemahkan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Tanggal rilis: 2025-09-17*

#### 🚀 Peningkatan

- **[auth]** Mendukung penggunaan `.` dalam nama pengguna ([#7504](https://github.com/nocobase/nocobase/pull/7504)) oleh @2013xile
- **[server]** Menggunakan logger sistem standar untuk antrian pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher
- **[snowflake-id]** Mengubah ID tabel sistem dengan primary key auto-increment tetapi tanpa pengidentifikasi unik menjadi ID mirip Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) oleh @2013xile
- **[Calendar]** mendukung pemetaan lokal untuk tampilan header kalender ([#7508](https://github.com/nocobase/nocobase/pull/7508)) oleh @katherinehhh
- **[Workflow: Manual node]** Mendukung untuk melihat dan melanjutkan tugas manual yang tertunda dalam workflow yang dinonaktifkan ([#7493](https://github.com/nocobase/nocobase/pull/7493)) oleh @mytharcher
- **[Theme editor]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu
- **[Redis queue adapter]** Menggunakan logger sistem standar untuk adaptor antrian pesan Redis oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana popup konfigurasi ikon tombol tertutup/bertumpuk ([#7506](https://github.com/nocobase/nocobase/pull/7506)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen Popover tertutup/tertumpuk ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe
  - select/multiselect/date/richtext readonly masih dapat diedit pada formulir publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh
- **[Workflow]**

  - Memperbaiki masalah di mana logika langganan yang salah pada antrian tugas latar belakang dalam workflow menyebabkan pesan eksekusi ditangani secara tidak benar ([#7507](https://github.com/nocobase/nocobase/pull/7507)) oleh @mytharcher
  - Memperbaiki potensi kesalahan terkait caching log workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher
- **[Notification: In-app message]** Memperbaiki masalah penguraian tautan notifikasi yang salah ([#7509](https://github.com/nocobase/nocobase/pull/7509)) oleh @mytharcher
- **[Data source: REST API]** memperbaiki aturan validasi URL REST API oleh @katherinehhh
- **[HTTP request encryption]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher
- **[Template print]** mendukung bidang chinaRegions oleh @jiannx
- **[Email manager]** Memperbaiki masalah subjek sampah oleh @jiannx
