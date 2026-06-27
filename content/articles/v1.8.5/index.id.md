---
title: "NocoBase v1.8.5: Menambahkan lebih banyak antarmuka yang dapat dihitung"
description: "Catatan Rilis v1.8.5"
---

### 🚀 Peningkatan

- **[Field Koleksi: Formula]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher

- **[Alur Kerja]** Menggunakan pencatatan log alih-alih melempar error ketika eksekusi seharusnya tidak berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Mendukung penghapusan persetujuan ketika data terkait dihapus oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - masalah di mana bidang lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana komponen pilih dropdown terhalang oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe

  - penugasan nilai gagal dalam formulir edit ketika nilai dan opsi diatur untuk bidang pilih ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh

  - Filter runtuh: Filter tidak dipicu selama inisialisasi halaman setelah mengatur nilai default untuk bidang ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe

  - error ketika menetapkan nilai di blok daftar menggunakan bidang urutan kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh

  - Judul tab browser tidak disinkronkan saat beralih antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe

  - Aksi popup: Tampilan halaman tidak sesuai harapan setelah beralih tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe

- **[acl]** Memperbaiki error ketika menghapus peran dalam mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie

- **[Manajer multi-aplikasi]** Memperbaiki opsi auth di posisi yang tidak diharapkan ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher

- **[Autentikasi]** Memperbaiki masalah di mana halaman login tidak dapat digulir ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe

- **[Alur Kerja: Persetujuan]** Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher
