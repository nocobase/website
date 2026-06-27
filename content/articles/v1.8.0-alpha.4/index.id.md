---
title: "NocoBase v1.8.0-alpha.4: Dukungan untuk memfilter lebih banyak bidang alur kerja"
description: "Catatan Rilis v1.8.0-alpha.4"
---

### 🚀 Peningkatan

- **[Workflow]** Mendukung pemfilteran lebih banyak bidang workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) oleh @mytharcher

- **[Manajer email]** mendukung nilai pengiriman default di pop-up, mendukung pencarian samar untuk penerima, dan memperbaiki masalah oleh @jiannx

### 🐛 Perbaikan Bug

- **[database]** perbaikan: menambahkan bidang pembuat dan pengubah yang hilang saat mengimpor xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) oleh @aaaaaajie

- **[client]**
  - judul bidang hilang saat mengatur variabel di komponen penugasan ([#7001](https://github.com/nocobase/nocobase/pull/7001)) oleh @katherinehhh

  - Bidang asosiasi menampilkan sub-tabel dan sub-form saat diarahkan dalam mode read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) oleh @zhangzhonghe

  - aturan tautan blok markdown tidak berfungsi saat dipicu oleh aksi popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) oleh @katherinehhh

  - berpindah halaman di sub-tabel blok detail dalam modal memicu peringatan perubahan yang belum disimpan ([#7004](https://github.com/nocobase/nocobase/pull/7004)) oleh @katherinehhh

  - aturan tautan gaya bidang tidak berfungsi ([#7003](https://github.com/nocobase/nocobase/pull/7003)) oleh @katherinehhh

- **[Manajer tugas async]** Memperbaiki masalah eksekusi ganda selama impor async ([#7006](https://github.com/nocobase/nocobase/pull/7006)) oleh @aaaaaajie

- **[Lokalisasi]** Mengatasi kesalahan yang disebabkan oleh teks kosong ([#7010](https://github.com/nocobase/nocobase/pull/7010)) oleh @2013xile

- **[Aksi: Ekspor Rekaman Pro]** Memperbaiki masalah eksekusi ganda selama impor async oleh @aaaaaajie

- **[Workflow: Persetujuan]** Memperbaiki delegasi persetujuan yang tidak dapat dilanjutkan ketika disetujui oleh orang lain oleh @mytharcher

- **[Manajer email]**
  - beberapa kunci utama untuk tabel "mailmessagelabels_mailmessages" oleh @jiannx

  - pengaturan pop-up tidak ditampilkan oleh @jiannx

  - pencarian samar email untuk membuat filter unik oleh @jiannx

  - pencarian samar penerima mendukung bidang terkait oleh @jiannx

  - menambahkan bidang "id" ke mailmessagelabelsMailmessages oleh @jiannx
