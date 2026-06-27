---
title: "NocoBase v1.8.19: Menambahkan tipe template inline untuk konfigurasi notifikasi"
description: "Catatan Rilis v1.8.19"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Menambahkan tipe template inline untuk konfigurasi notifikasi oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Mendukung penampilan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher
- **[database]** Mengoptimalkan kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie
- **[Mobile]** Mengoptimalkan komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana tabel eksternal Postgres menyertakan tampilan dari skema lain saat membaca ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie
- **[Blok: template]** Memperbaiki masalah di mana blok email tidak terlihat saat ditempatkan di dalam blok template warisan ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust
- **[Aksi: Impor catatan Pro]** Melarang penetapan bidang relasi selama deteksi duplikat impor. oleh @aaaaaajie
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana daftar pengguna kosong saat penandatanganan bersama oleh @mytharcher
- **[Manajer migrasi]** Melewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile
