---
title: "NocoBase v1.7.0-beta.31: Menambahkan log plugin impor"
description: "Catatan Rilis v1.7.0-beta.31"
---

### 🎉 Fitur Baru

- **[client]** aturan tautan aksi mendukung variabel 'formulir saat ini' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) oleh @katherinehhh

- **[undefined]** Menambahkan log plugin impor oleh @aaaaaajie

- **[Aksi: Impor rekaman]** Menambahkan log plugin impor ([#6841](https://github.com/nocobase/nocobase/pull/6841)) oleh @aaaaaajie

### 🚀 Peningkatan

- **[client]** menambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca ([#6868](https://github.com/nocobase/nocobase/pull/6868)) oleh @katherinehhh

- **[Bidang koleksi: Lampiran(URL)]** menambahkan lebih banyak ukuran bawaan ke bidang URL lampiran untuk status baca ([#6871](https://github.com/nocobase/nocobase/pull/6871)) oleh @katherinehhh

- **[Workflow]** Mengizinkan revisi lebih dari satu draf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - masalah tautan tombol di blok detail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) oleh @katherinehhh

  - menghapus nilai sisi kanan saat operator berubah dalam aturan tautan ([#6862](https://github.com/nocobase/nocobase/pull/6862)) oleh @katherinehhh

  - evaluasi operator yang salah untuk variabel tanggal dalam kondisi tautan ([#6825](https://github.com/nocobase/nocobase/pull/6825)) oleh @katherinehhh

  - operator hilang saat beralih dalam aturan tautan ([#6857](https://github.com/nocobase/nocobase/pull/6857)) oleh @katherinehhh

  - ketidakcocokan penguraian variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh

  - peningkatan gaya komponen nilai aturan tautan ([#6836](https://github.com/nocobase/nocobase/pull/6836)) oleh @katherinehhh

  - ketidakcocokan penguraian variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh

  - Bidang yang disembunyikan masih ditampilkan ([#6844](https://github.com/nocobase/nocobase/pull/6844)) oleh @zhangzhonghe

- **[database]** Impor gagal karena nilai bidang teks. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) oleh @aaaaaajie

- **[Visualisasi data]**
  - Blok bagan tidak ditampilkan saat ditambahkan ke popup yang dipicu dari aksi tingkat blok ([#6864](https://github.com/nocobase/nocobase/pull/6864)) oleh @2013xile

  - Memperbaiki kesalahan saat memfilter bidang m2m bersarang ([#6855](https://github.com/nocobase/nocobase/pull/6855)) oleh @2013xile

- **[Aksi: Ekspor rekaman]**
  - meningkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor ([#6861](https://github.com/nocobase/nocobase/pull/6861)) oleh @katherinehhh

  - Memperbaiki ekspor nilai kosong dalam asosiasi bersarang dan url lampiran ([#6845](https://github.com/nocobase/nocobase/pull/6845)) oleh @aaaaaajie

  - Memperbaiki kesalahan ekspor teks panjang. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) oleh @aaaaaajie

- **[Manajer file]** Memperbaiki pembuatan rekaman file tanpa izin kunci asing ([#6863](https://github.com/nocobase/nocobase/pull/6863)) oleh @mytharcher

- **[Workflow]** Memperbaiki navigasi kembali tidak berfungsi saat membuka tautan popup langsung di pusat tugas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) oleh @mytharcher

- **[Aksi: Duplikat rekaman]** modal menutup saat klik input pertama saat mengedit data duplikat ([#6848](https://github.com/nocobase/nocobase/pull/6848)) oleh @katherinehhh

- **[Blok: template]** Setelah menyimpan sebagai template warisan, terjadi kesalahan saat membuka popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) oleh @gchust

- **[Workflow: test kit]** Memperbaiki kasus uji yang gagal karena plugin prasetel yang diperlukan ([#6839](https://github.com/nocobase/nocobase/pull/6839)) oleh @mytharcher

- **[Workflow: Peristiwa pasca-aksi]** Memperbaiki variabel pengguna yang diaktifkan tidak dapat diakses di template Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) oleh @mytharcher

- **[Workflow: Node manual]** Memperbaiki jumlah statistik yang salah pada tugas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) oleh @mytharcher

- **[Blok: Panel aksi]** Warna panel aksi salah dalam mode gelap ([#6842](https://github.com/nocobase/nocobase/pull/6842)) oleh @zhangzhonghe

- **[Aksi: Ekspor rekaman Pro]**
  - meningkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor pro oleh @katherinehhh

  - Memperbaiki kesalahan ekspor teks panjang. oleh @aaaaaajie

- **[Workflow: Subflow]** Memperbaiki pemicu tidak terdefinisi yang menyebabkan halaman crash oleh @mytharcher

- **[Cetak template]**
  - Memperbaiki masalah pemformat tidak ditemukan. oleh @sheldon66

  - Memperbaiki pemformat tidak ditemukan oleh @sheldon66

- **[Penyimpanan file: S3(Pro)]**
  - Mengubah untuk menggunakan bidang koleksi untuk menemukan penyimpanan oleh @mytharcher

  - url akses kedaluwarsa tidak valid oleh @jiannx

- **[Workflow: Persetujuan]** Memperbaiki jumlah statistik yang salah pada tugas oleh @mytharcher
