---
title: "NocoBase v2.0.0-beta.19: DingTalk Memungkinkan untuk mengikat pengguna dengan `unionId`"
description: "Catatan Rilis v2.0.0-beta.19"
---

### 🎉 Fitur Baru

- **[Auth: DingTalk]** Memungkinkan pengikatan pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[client]** Menyesuaikan pengaturan lebar kolom menjadi pilihan dropdown di sub-tabel yang dapat diedit inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) oleh @katherinehhh

- **[Bidang Koleksi: Markdown(Vditor)]** Menambahkan opsi konfigurasi untuk mengatur mode edit default di pengaturan komponen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) oleh @Cyx649312038

- **[Multi-ruang]** Kontrol izin multi-ruang mengakses acl oleh @jiannx

- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana penggunaan "Buat Cepat" pemilih catatan asosiasi di formulir edit menimpa data formulir yang sudah ada. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) oleh @gchust

  - Memperbaiki masalah ruang kosong di tata letak Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) oleh @zhangzhonghe

  - Memperbaiki perlunya refresh halaman untuk menambahkan catatan anak setelah mengaktifkan tabel pohon ([#8574](https://github.com/nocobase/nocobase/pull/8574)) oleh @katherinehhh

  - Memperbaiki lebar kolom yang tidak diperbarui di sub-tabel (edit inline); input teks multi-baris tidak menyesuaikan ukuran dengan lebar kolom ([#8573](https://github.com/nocobase/nocobase/pull/8573)) oleh @katherinehhh

  - Memperbaiki masalah di mana menu "Formulir (Tambah baru)" salah ditampilkan di popup aksi "Buat baru". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) oleh @gchust

- **[mesin-alur]**
  - Memperbaiki masalah di mana beberapa pustaka pihak ketiga tidak dapat diimpor dengan benar di blok JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) oleh @gchust

  - Memperbaiki masalah di mana mengirimkan formulir setelah berpindah halaman tidak menyegarkan halaman. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) oleh @gchust

- **[Template UI]** Memperbaiki kesalahan saat membuka kembali dan mengirimkan template popup yang disimpan untuk formulir "Tambah baru" bidang asosiasi. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) oleh @gchust

- **[Bidang Koleksi: Lampiran(URL)]** Memperbaiki konfigurasi tampilan nama file bidang lampiran URL yang tidak berfungsi di formulir edit ([#8571](https://github.com/nocobase/nocobase/pull/8571)) oleh @katherinehhh

- **[Karyawan AI]** Memperbaiki masalah di mana node LLM gagal mengirim pesan ([#8569](https://github.com/nocobase/nocobase/pull/8569)) oleh @2013xile

- **[Aksi: Impor catatan]** Memperbaiki kerentanan aksi impor ([#8544](https://github.com/nocobase/nocobase/pull/8544)) oleh @mytharcher

- **[Alur kerja: Aksi kustom acara]** Memperbaiki masalah di mana parameter dan payload tidak tepat saat memicu alur kerja kustom oleh @mytharcher

- **[Multi-ruang]**
  - menambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx

  - menghapus atribut read-pretty untuk bidang ruang oleh @jiannx

- **[Alur kerja: Persetujuan]** Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher
