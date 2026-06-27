---
title: "NocoBase v1.9.0-beta.8: Menambahkan dukungan untuk kustomisasi warna menu samping"
description: "Catatan Rilis v1.9.0-beta.8"
---

### 🚀 Peningkatan

- **[auth]** Mendukung penggunaan `.` pada nama pengguna ([#7504](https://github.com/nocobase/nocobase/pull/7504)) oleh @2013xile

- **[client]** Menambahkan dukungan lokalisasi untuk tooltip & judul item grup ([#7485](https://github.com/nocobase/nocobase/pull/7485)) oleh @katherinehhh

- **[Workflow: Node manual]** Mendukung untuk melihat dan melanjutkan tugas manual yang tertunda dalam alur kerja yang dinonaktifkan ([#7493](https://github.com/nocobase/nocobase/pull/7493)) oleh @mytharcher

- **[Kalender]** Mendukung pemetaan lokal untuk header kalender ([#7508](https://github.com/nocobase/nocobase/pull/7508)) oleh @katherinehhh

- **[Editor tema]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu

- **[Adaptor antrean Redis]** Menggunakan logger sistem standar untuk adaptor antrean pesan Redis oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana popup konfigurasi ikon tombol tertutup/tertumpuk ([#7506](https://github.com/nocobase/nocobase/pull/7506)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana popover konfigurasi ikon menu terhalang ([#7515](https://github.com/nocobase/nocobase/pull/7515)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana komponen Popover tertumpuk/tertutup ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe

- **[Notifikasi: Pesan dalam aplikasi]**
  - Memperbaiki masalah penguraian tautan notifikasi yang salah ([#7509](https://github.com/nocobase/nocobase/pull/7509)) oleh @mytharcher

  - Memperbaiki masalah di mana pesan terbaru tidak ditampilkan saat membuka popup notifikasi ([#7514](https://github.com/nocobase/nocobase/pull/7514)) oleh @mytharcher

- **[Alur Kerja]**
  - Memperbaiki potensi kesalahan terkait caching log alur kerja ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher

  - Memperbaiki masalah di mana logika langganan yang salah pada antrean tugas latar belakang dalam alur kerja menyebabkan pesan eksekusi ditangani secara tidak benar ([#7507](https://github.com/nocobase/nocobase/pull/7507)) oleh @mytharcher

- **[Sumber data: REST API]** Memperbaiki aturan validasi URL REST API oleh @katherinehhh

- **[Enkripsi permintaan HTTP]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher

- **[Cetak template]** Mendukung bidang chinaRegions oleh @jiannx

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah di mana bidang formula dalam formulir persetujuan tidak diperbarui secara otomatis oleh @mytharcher

  - Memperbaiki masalah di mana terjadi kesalahan saat menghapus data dari sumber data eksternal oleh @mytharcher
