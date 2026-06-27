---
title: "NocoBase v2.0.0-alpha.33: Menambahkan dukungan paginasi ke sub tabel"
description: "Catatan Rilis v2.0.0-alpha.33"
---

### 🎉 Fitur Baru

- **[client]** menambahkan dukungan paginasi pada sub tabel ([#7754](https://github.com/nocobase/nocobase/pull/7754)) oleh @katherinehhh

### 🚀 Peningkatan

- **[undefined]** memperbarui dokumentasi bahasa Inggris dari plugin grafik ([#7748](https://github.com/nocobase/nocobase/pull/7748)) oleh @heziqiang

- **[telemetry]** Menambahkan metrik telemetri untuk jumlah sub-aplikasi online, dll ([#7743](https://github.com/nocobase/nocobase/pull/7743)) oleh @2013xile

- **[Workflow]** Mendukung blok data dalam workflow untuk menggunakan menu pengaturan detail konsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher

- **[Multi-app manager (usang)]]** Mengaktifkan startup asinkron untuk sub-aplikasi menggunakan antrian ([#7749](https://github.com/nocobase/nocobase/pull/7749)) oleh @2013xile

- **[Visualisasi data]** menambahkan opsi format waktu data grafik ([#7763](https://github.com/nocobase/nocobase/pull/7763)) oleh @heziqiang

- **[Workflow: Persetujuan]** Menambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana label tipe enum pada komponen terkait variabel tidak ditampilkan dalam bahasa yang benar. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) oleh @gchust

  - Memperbaiki indikator bidang wajib yang hilang setelah mengatur validasi frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) oleh @katherinehhh

  - memperbaiki masalah saat menghapus tanggal tanpa zona waktu di formulir edit ([#7759](https://github.com/nocobase/nocobase/pull/7759)) oleh @katherinehhh

  - Memperbaiki validasi bidang wajib untuk aturan tautan ([#7756](https://github.com/nocobase/nocobase/pull/7756)) oleh @zhangzhonghe

  - menyelesaikan masalah Tanggal Tidak Valid saat menghapus Tanggal Tertentu di filter… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) oleh @katherinehhh

  - Memperbaiki kegagalan validasi wajib untuk bidang Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) oleh @katherinehhh

  - Menambahkan konfigurasi cakupan data untuk bidang relasi di formulir filter ([#7761](https://github.com/nocobase/nocobase/pull/7761)) oleh @zhangzhonghe

  - memperbaiki masalah format waktu di bidang sub tabel ([#7750](https://github.com/nocobase/nocobase/pull/7750)) oleh @katherinehhh

- **[flow-engine]**
  - ketika nilai filter bidang disetel ke false, permintaan dengan cakupan data tidak benar ([#7766](https://github.com/nocobase/nocobase/pull/7766)) oleh @gchust

  - tidak dapat menyelesaikan nilai bidang asosiasi variabel objek saat ini dari subform ([#7751](https://github.com/nocobase/nocobase/pull/7751)) oleh @gchust

  - perbaikan: menyelesaikan masalah parameter permintaan halaman setelah menghapus data di halaman terakhir ([#7755](https://github.com/nocobase/nocobase/pull/7755)) oleh @katherinehhh

- **[server]** Mengisolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher

- **[Blok: GridCard]** memperbaiki masalah duplikasi data antara blok daftar dan kartu grid ([#7773](https://github.com/nocobase/nocobase/pull/7773)) oleh @katherinehhh

- **[Multi-app manager (usang)]]** Koleksi yang salah untuk metrik status sub-aplikasi ([#7772](https://github.com/nocobase/nocobase/pull/7772)) oleh @2013xile

- **[Workflow]**
  - Menyelesaikan masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi event antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher

  - Memperbaiki masalah di mana, dalam mode pemisahan layanan, mengeksekusi workflow secara manual yang berisi node interupsi akan tetap terjebak dalam status tertunda ([#7767](https://github.com/nocobase/nocobase/pull/7767)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki error yang muncul saat menduplikasi workflow persetujuan oleh @mytharcher

  - Membuat node persetujuan di cabang paralel tidak lagi didukung untuk menghindari masalah yang disebabkan oleh status proses oleh @mytharcher

- **[Manajer Email]**
  - menambahkan log sinkronisasi oleh @jiannx

  - menambahkan migrasi untuk indeks oleh @jiannx
