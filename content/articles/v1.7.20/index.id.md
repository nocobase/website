---
title: "NocoBase v1.7.20: Perbaikan Bug"
description: "Catatan Rilis v1.7.20"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Setelah perubahan bidang, lingkup data yang bergantung pada bidang ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe

  - Memperbaiki masalah pengaturan lebar kolom tabel yang tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe

  - Memperbaiki masalah kesalahan pada formulir filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe

  - Memperbaiki kesalahan yang terjadi saat menyimpan relasi satu-ke-satu di bidang konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie

- **[tidak terdefinisi]** Memperbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher

- **[Manajer Berkas]**
  - Memperbaiki deteksi tipe MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher

  - Memperbaiki kesalahan build akibat paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher

- **[Formulir publik]** Memperbaiki masalah di mana bidang Tanggal Saja gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh

- **[Alur Kerja]** Memperbaiki masalah di mana diperlukan beberapa kali geser ke kiri untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe

- **[Visualisasi Data]** Masalah paginasi tabel ([#7151](https://github.com/nocobase/nocobase/pull/7151)) oleh @2013xile

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki asosiasi yang tidak dimuat setelah ditarik kembali oleh @mytharcher

  - Menghapus transaksi penambalan skema karena waktu habis oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat persetujuan dihapus oleh @mytharcher

  - Memperbaiki pembaruan asosiasi saat mengirimkan oleh @mytharcher
