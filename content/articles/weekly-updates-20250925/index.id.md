---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk memutar gambar saat pratinjau, penambahan dukungan lokalisasi untuk tooltip dan judul item grup, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Tanggal rilis: 2025-09-20*

#### 🚀 Peningkatan

- **[klien]** menambahkan dukungan lokalisasi untuk tooltip & judul item grup ([#7485](https://github.com/nocobase/nocobase/pull/7485)) oleh @katherinehhh
- **[Kalender]** mendukung tampilan pemetaan lokal untuk header kalender ([#7508](https://github.com/nocobase/nocobase/pull/7508)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana popover konfigurasi ikon menu terhalang ([#7515](https://github.com/nocobase/nocobase/pull/7515)) oleh @zhangzhonghe
- **[Notifikasi: Pesan dalam aplikasi]**

  - Memperbaiki masalah penguraian tautan notifikasi yang salah ([#7509](https://github.com/nocobase/nocobase/pull/7509)) oleh @mytharcher
  - Memperbaiki masalah di mana pesan terbaru tidak ditampilkan saat membuka popup notifikasi ([#7514](https://github.com/nocobase/nocobase/pull/7514)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki masalah di mana logika langganan yang salah pada antrian tugas latar belakang dalam alur kerja menyebabkan pesan eksekusi ditangani secara tidak benar ([#7507](https://github.com/nocobase/nocobase/pull/7507)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana terjadi kesalahan saat menghapus data dari sumber data eksternal oleh @mytharcher
  - Memperbaiki masalah di mana bidang rumus dalam formulir persetujuan tidak diperbarui secara otomatis oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Tanggal rilis: 2025-09-20*

#### 🚀 Peningkatan

- **[auth]** Mendukung penggunaan `.` dalam nama pengguna ([#7504](https://github.com/nocobase/nocobase/pull/7504)) oleh @2013xile
- **[klien]** menambahkan dukungan lokalisasi untuk tooltip & judul item grup ([#7485](https://github.com/nocobase/nocobase/pull/7485)) oleh @katherinehhh
- **[Alur Kerja: Node manual]** Mendukung untuk melihat dan melanjutkan tugas manual yang tertunda dalam alur kerja yang dinonaktifkan ([#7493](https://github.com/nocobase/nocobase/pull/7493)) oleh @mytharcher
- **[Kalender]** mendukung tampilan pemetaan lokal untuk header kalender ([#7508](https://github.com/nocobase/nocobase/pull/7508)) oleh @katherinehhh
- **[Editor tema]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu
- **[Adaptor antrian Redis]** Menggunakan logger sistem standar untuk adaptor antrian pesan Redis oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana popup konfigurasi ikon tombol tertutup/tertumpuk ([#7506](https://github.com/nocobase/nocobase/pull/7506)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana popover konfigurasi ikon menu terhalang ([#7515](https://github.com/nocobase/nocobase/pull/7515)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen Popover tertumpuk/tertutup ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe
- **[Notifikasi: Pesan dalam aplikasi]**

  - Memperbaiki masalah penguraian tautan notifikasi yang salah ([#7509](https://github.com/nocobase/nocobase/pull/7509)) oleh @mytharcher
  - Memperbaiki masalah di mana pesan terbaru tidak ditampilkan saat membuka popup notifikasi ([#7514](https://github.com/nocobase/nocobase/pull/7514)) oleh @mytharcher
- **[Alur Kerja]**

  - Memperbaiki potensi kesalahan terkait caching log alur kerja ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher
  - Memperbaiki masalah di mana logika langganan yang salah pada antrian tugas latar belakang dalam alur kerja menyebabkan pesan eksekusi ditangani secara tidak benar ([#7507](https://github.com/nocobase/nocobase/pull/7507)) oleh @mytharcher
- **[Sumber data: REST API]** memperbaiki aturan validasi URL rest api oleh @katherinehhh
- **[Enkripsi permintaan HTTP]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher
- **[Cetak template]** mendukung bidang chinaRegions oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana bidang rumus dalam formulir persetujuan tidak diperbarui secara otomatis oleh @mytharcher
  - Memperbaiki masalah di mana terjadi kesalahan saat menghapus data dari sumber data eksternal oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Tanggal rilis: 2025-09-24*

#### 🚀 Peningkatan

- **[klien]**

  - Mendukung untuk memutar gambar saat melihat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher
  - menambahkan dukungan lokalisasi untuk tooltip & judul item grup ([#7485](https://github.com/nocobase/nocobase/pull/7485)) oleh @katherinehhh
- **[Adaptor antrian RabbitMQ]** meningkatkan penanganan koneksi RabbitMQ dan logika pemrosesan pesan oleh @sdp-ncd

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu
  - Memperbaiki masalah di mana popover konfigurasi ikon menu terhalang ([#7515](https://github.com/nocobase/nocobase/pull/7515)) oleh @zhangzhonghe
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana pesan terbaru tidak ditampilkan saat membuka popup notifikasi ([#7514](https://github.com/nocobase/nocobase/pull/7514)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki masalah di mana kondisi daftar alur kerja salah saat memuat konteks bidang terkait dalam konfigurasi alur kerja terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher
- **[Alur Kerja: Node perulangan]** Memperbaiki masalah di mana proses secara tidak benar melanjutkan ke item berikutnya meskipun kondisi node perulangan tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana terjadi kesalahan saat menghapus data dari sumber data eksternal oleh @mytharcher
  - Memperbaiki masalah di mana bidang rumus dalam formulir persetujuan tidak diperbarui secara otomatis oleh @mytharcher
