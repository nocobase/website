---
title: "NocoBase v1.9.0-beta.1: Menambahkan antrian acara untuk memproses pesan dalam antrian"
description: "Catatan Rilis v1.9.0-beta.1"
---

### 🎉 Fitur Baru

- **[server]** Menambahkan antrean event untuk memproses pesan dalam antrean ([#6819](https://github.com/nocobase/nocobase/pull/6819)) oleh @mytharcher

### 🚀 Peningkatan

- **[Workflow]** Memindahkan komponen umum ke plugin dasar ([#7140](https://github.com/nocobase/nocobase/pull/7140)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Setelah perubahan field, lingkup data yang bergantung pada field ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe

  - Memperbaiki masalah pengaturan lebar kolom tabel yang tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe

  - Memperbaiki masalah error pada form filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe

  - Memperbaiki error yang terjadi saat menyimpan relasi satu-ke-satu di field konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie

- **[undefined]** Memperbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher

- **[Kalender]** Mengatur hari awal minggu default menjadi 'senin' di blok kalender ([#7171](https://github.com/nocobase/nocobase/pull/7171)) oleh @katherinehhh

- **[Workflow]** Memperbaiki masalah yang memerlukan beberapa kali geser ke kiri untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe

- **[Manajer file]**
  - Memperbaiki error build akibat paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher

  - Memperbaiki deteksi mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher

- **[Workflow: Node manual]** Memperbaiki impor variabel yang salah ([#7156](https://github.com/nocobase/nocobase/pull/7156)) oleh @mytharcher

- **[Formulir publik]** Memperbaiki masalah di mana field Hanya Tanggal gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh

- **[Workflow: Persetujuan]**
  - Menghapus transaksi patching skema karena timeout oleh @mytharcher

  - Memperbaiki asosiasi yang tidak dimuat setelah ditarik kembali oleh @mytharcher

  - Memperbaiki error yang muncul saat persetujuan dihapus oleh @mytharcher

  - Memperbaiki pembaruan asosiasi saat mengirim oleh @mytharcher
