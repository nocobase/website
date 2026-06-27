---
title: "NocoBase v1.7.0-beta.12: Menambahkan callback onScanSuccess"
description: "Catatan Rilis v1.7.0-beta.12"
---

### 🎉 Fitur Baru

- **[Blok: Panel aksi]** menambahkan callback onScanSuccess untuk menangani pemindaian yang berhasil dan keluar dari UI kamera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) oleh @sheldon66

### 🚀 Peningkatan

- **[Manajer tugas asinkron]** mengoptimalkan tombol impor/ekspor di Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) oleh @chenos

- **[Aksi: Ekspor catatan Pro]** mengoptimalkan tombol impor/ekspor di Pro oleh @katherinehhh

- **[Manajer migrasi]** mengizinkan melewati pencadangan dan pemulihan otomatis untuk migrasi oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]** konflik tautan antara bidang asosiasi dengan nama yang sama di sub-tabel yang berbeda dalam formulir yang sama ([#6577](https://github.com/nocobase/nocobase/pull/6577)) oleh @katherinehhh

- **[Kalender]** data yang hilang pada tanggal batas di tampilan kalender mingguan ([#6587](https://github.com/nocobase/nocobase/pull/6587)) oleh @katherinehhh

- **[Kontrol akses]** Penetapan peran saat ini yang salah selama login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) oleh @aaaaaajie

- **[Aksi: Edit batch]** Klik tombol edit batch, konfigurasikan jendela pop-up, lalu buka lagi, jendela pop-up kosong ([#6578](https://github.com/nocobase/nocobase/pull/6578)) oleh @zhangzhonghe

- **[Blok: Formulir multi-langkah]** memperbaiki bug bahwa reset formulir tidak valid ketika bidang dikaitkan dengan bidang lain oleh @jiannx

- **[Workflow: Persetujuan]** Memperbaiki konfigurasi node persetujuan yang salah setelah skema berubah oleh @mytharcher
