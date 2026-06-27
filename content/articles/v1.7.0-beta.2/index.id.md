---
title: "NocoBase v1.7.0-beta.2: mendukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan"
description: "Catatan Rilis v1.7.0-beta.2"
---

### 🎉 Fitur Baru

- **[klien]**
  - blok tabel mendukung penyembunyian kolom indeks (default terlihat) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) oleh @katherinehhh

  - mendukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan ([#6338](https://github.com/nocobase/nocobase/pull/6338)) oleh @katherinehhh

  - mendukung konfigurasi rentang tanggal (min/maks) untuk bidang waktu dalam aturan tautan ([#6356](https://github.com/nocobase/nocobase/pull/6356)) oleh @katherinehhh

- **[Blok: Panel aksi]** mendukung pemisah baris untuk judul aksi di panel aksi ([#6433](https://github.com/nocobase/nocobase/pull/6433)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]**
  - nomor halaman tidak tepat saat menambahkan data setelah perubahan ukuran halaman sub-tabel ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh

  - Gaya logo tidak konsisten dengan sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe

  - perubahan nilai bidang multi-pilih dan kehilangan opsi saat menghapus catatan sub-tabel ([#6405](https://github.com/nocobase/nocobase/pull/6405)) oleh @katherinehhh

  - pemilihan rentang bidang tanggal tidak menyertakan tanggal maksimum ([#6418](https://github.com/nocobase/nocobase/pull/6418)) oleh @katherinehhh

  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) oleh @zhangzhonghe

  - Data tidak diperbarui di jendela popup yang dibuka melalui tombol Tautan ([#6411](https://github.com/nocobase/nocobase/pull/6411)) oleh @zhangzhonghe

- **[Aksi: Edit batch]** Memperbaiki alur kerja tidak dapat dipicu dalam pengiriman edit batch ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher

- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile

- **[Manajer sumber data]** mengganti sumber data di manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh

- **[Aksi: Permintaan kustom]** kesalahan validasi izin sisi server permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh

- **[Manajer file]** Memperbaiki beberapa masalah pada manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]**
  - Hindari konfigurasi penerima yang salah yang menanyakan semua pengguna ([#6424](https://github.com/nocobase/nocobase/pull/6424)) oleh @sheldon66

  - Bedakan warna latar belakang daftar pesan dalam aplikasi dari kartu pesan untuk meningkatkan hierarki visual dan keterbacaan. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) oleh @sheldon66

- **[Alur kerja: Node manual]**
  - Ubah batas versi migrasi menjadi `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) oleh @mytharcher

  - Perbaiki migrasi yang melewatkan logika awalan tabel dan skema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) oleh @mytharcher
