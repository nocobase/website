---
title: "NocoBase v1.8.0-beta.1: Tambahkan manajemen kategori alur kerja"
description: "Catatan Rilis v1.8.0-beta.1"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan plugin "Tombol Salin Input" baru untuk bidang teks satu baris ([#6894](https://github.com/nocobase/nocobase/pull/6894)) oleh @kerwin612

- **[Workflow]** Menambahkan manajemen kategori alur kerja ([#6965](https://github.com/nocobase/nocobase/pull/6965)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]** mendukung konfigurasi apakah tautan menu dibuka di jendela baru ([#6918](https://github.com/nocobase/nocobase/pull/6918)) oleh @katherinehhh

- **[Action: Import records Pro]** Mengoptimalkan kinerja impor xlsx oleh @aaaaaajie

- **[Auth: OIDC]** Mengabaikan huruf besar/kecil saat mencocokkan pengguna berdasarkan email oleh @2013xile

- **[Workflow: Approval]** Mengimpor koleksi alur kerja dari plugin alur kerja untuk menghindari duplikasi oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Bidang dan tindakan hanya berlaku setelah menyegarkan halaman ([#6977](https://github.com/nocobase/nocobase/pull/6977)) oleh @zhangzhonghe

  - Memperbaiki bidang yang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6957](https://github.com/nocobase/nocobase/pull/6957)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana blok yang dibuat di popup memiliki koleksi yang salah ([#6961](https://github.com/nocobase/nocobase/pull/6961)) oleh @zhangzhonghe

  - Tidak dapat memilih variabel saat mengatur nilai default untuk bidang asosiasi ([#6974](https://github.com/nocobase/nocobase/pull/6974)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai bidang teks satu baris ditampilkan sebagai array dalam mode baca-mudah ([#6968](https://github.com/nocobase/nocobase/pull/6968)) oleh @zhangzhonghe

  - tidak dapat memperluas bidang koleksi asosiasi dari sumber data eksternal dalam lingkup tabel data peran ([#6958](https://github.com/nocobase/nocobase/pull/6958)) oleh @katherinehhh

  - Memperbaiki masalah di mana opsi 'Konten overflow elipsis' tidak efektif untuk bidang relasi ([#6967](https://github.com/nocobase/nocobase/pull/6967)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai default formulir filter tidak valid di sub-halaman ([#6960](https://github.com/nocobase/nocobase/pull/6960)) oleh @zhangzhonghe

  - masalah di mana popup bidang asosiasi pilihan menutup pada input pertama saat menambahkan data baru ([#6971](https://github.com/nocobase/nocobase/pull/6971)) oleh @katherinehhh

  - bidang asosiasi di sub-tabel memicu permintaan ketika variabel iterasi memiliki nilai kosong ([#6969](https://github.com/nocobase/nocobase/pull/6969)) oleh @katherinehhh

  - Memperbaiki urutan bidang dalam daftar dropdown tombol filter ([#6962](https://github.com/nocobase/nocobase/pull/6962)) oleh @zhangzhonghe

  - data aturan validasi formulir hilang saat menciutkan panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) oleh @katherinehhh

  - nilai yang dipilih diatur ulang saat memperbarui opsi dropdown multi-pilih melalui aturan tautan ([#6953](https://github.com/nocobase/nocobase/pull/6953)) oleh @katherinehhh

  - variabel tautan sub-tabel mengambil data asosiasi saat dibersihkan alih-alih menggunakan nilai formulir ([#6963](https://github.com/nocobase/nocobase/pull/6963)) oleh @katherinehhh

  - data dropdown bidang asosiasi dengan halaman sebesar 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) oleh @katherinehhh

  - pemilih tanggal tidak disegarkan setelah beralih dari "di antara" kembali ke "adalah" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) oleh @katherinehhh

  - Posisi sorotan yang salah saat menyeret baris tabel ([#6952](https://github.com/nocobase/nocobase/pull/6952)) oleh @chenos

- **[Authentication]** Masalah kinerja yang disebabkan oleh pembersihan token kedaluwarsa ([#6981](https://github.com/nocobase/nocobase/pull/6981)) oleh @2013xile

- **[Workflow]** Memperbaiki kesalahan yang muncul saat memfilter alur kerja ([#6978](https://github.com/nocobase/nocobase/pull/6978)) oleh @mytharcher

- **[File manager]** Memperbaiki konfigurasi batas waktu Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) oleh @mytharcher

- **[Theme editor]** Menyembunyikan opsi peralihan tema dan memperbaiki gaya popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) oleh @zhangzhonghe

- **[Workflow: Custom action event]** Memperbaiki penginisialisasi untuk workbench yang terlewat oleh @mytharcher

- **[Auth: OIDC]** Teks tombol masuk tidak dilokalkan oleh @2013xile

- **[Workflow: Approval]** Memperbaiki kesalahan saat lingkup penerima tugas melakukan kueri dengan kondisi asosiasi oleh @mytharcher
