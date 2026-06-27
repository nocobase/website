---
title: "NocoBase v1.9.0-alpha.1: Menambahkan antrian acara untuk memproses pesan dalam antrian"
description: "Catatan Rilis v1.9.0-alpha.1"
---

### 🎉 Fitur Baru

- **[server]** Menambahkan antrean acara untuk memproses pesan dalam antrean ([#6819](https://github.com/nocobase/nocobase/pull/6819)) oleh @mytharcher

### 🚀 Peningkatan

- **[Workflow]** Memindahkan komponen umum ke plugin dasar ([#7140](https://github.com/nocobase/nocobase/pull/7140)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Setelah perubahan bidang, lingkup data yang bergantung pada bidang ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe

  - Memperbaiki masalah pengaturan lebar kolom tabel yang tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe

  - Memperbaiki kesalahan yang terjadi saat menyimpan relasi satu-ke-satu di bidang konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie

  - Memperbaiki masalah kesalahan pada formulir filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe

- **[undefined]** Memperbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher

- **[Manajer Berkas]**
  - Memperbaiki kesalahan build karena paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher

  - Memperbaiki deteksi tipe MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher

- **[Formulir publik]** memperbaiki masalah di mana bidang Tanggal Saja gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh

- **[Kalender]** mengatur hari awal minggu default menjadi 'senin' di blok kalender ([#7171](https://github.com/nocobase/nocobase/pull/7171)) oleh @katherinehhh

- **[Workflow: Node manual]** Memperbaiki impor variabel yang salah ([#7156](https://github.com/nocobase/nocobase/pull/7156)) oleh @mytharcher

- **[Workflow]** Memperbaiki masalah di mana diperlukan beberapa kali geser ke kiri untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe

- **[Workflow: Persetujuan]**
  - Memperbaiki pembaruan asosiasi saat mengirim oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat persetujuan dihapus oleh @mytharcher

  - Memperbaiki asosiasi yang tidak dimuat setelah ditarik kembali oleh @mytharcher

- **[Manajer Email]**
  - setelah memilih baris, mengatur "Baca" dan "Belum dibaca" oleh @jiannx

  - konten submail tidak dapat difilter oleh @jiannx
