---
title: "NocoBase v2.1.0-beta.47: Diadaptasi untuk plugin kontrol versi baru"
description: "Catatan Rilis v2.1.0-beta.47"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan perintah proxy tingkat atas untuk nginx dan caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) oleh @chenos
- **[Manajer cadangan]** Diadaptasi ke plugin kontrol versi baru. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) oleh @cgyrock
- **[Kontrol versi]** Menambahkan plugin kontrol versi. oleh @cgyrock

### 🚀 Peningkatan

- **[Manajer sumber data]** Menambahkan manajemen izin sumber data client-v2 dan menyelaraskan laci pemilih izin terkait. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) oleh @jiannx
- **[Koleksi: Hubungkan ke data asing (FDW)]** Meningkatkan paritas template koleksi V2 untuk koleksi SQL dan koleksi data asing, termasuk konfirmasi SQL, manajemen server database asing, dan pengurutan template. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) oleh @katherinehhh
- **[Cetak template]** Memperbarui metadata koleksi template cetak untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Riwayat rekaman]** Memperbarui metadata koleksi riwayat rekaman untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Alur kerja: Persetujuan]** Memperbarui metadata koleksi persetujuan alur kerja untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Log audit]** Memperbarui metadata koleksi logger audit untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Manajer email]** Memperbarui metadata koleksi manajer email untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Pengawas aplikasi]** Memperbarui metadata koleksi pengawas aplikasi untuk klasifikasi cadangan kontrol versi. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki bidang JSON yang menampilkan sel kosong untuk nilai objek di tampilan detail client-v2. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) oleh @katherinehhh
  - Memperbaiki bidang opsi yang salah menerjemahkan label opsi biasa di lingkungan yang dilokalkan. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) oleh @katherinehhh
- **[Penangan kesalahan]** Mengurangi log kesalahan yang berisik untuk permintaan tidak terautentikasi rutin tanpa token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) oleh @2013xile
- **[Blok: Daftar]** Memperbaiki status tautan aksi baris yang basi di blok daftar ketika aksi bergantung pada rekaman saat ini. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) oleh @katherinehhh
- **[Manajer sumber data]** Meningkatkan pesan kesalahan di manajer sumber data V2 ketika operasi koleksi, bidang, sinkronisasi, dan pemuatan tabel gagal. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) oleh @katherinehhh
- **[Karyawan AI]** Memperbaiki tombol asisten Dara yang hilang di pengaturan bagan client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) oleh @cgyrock
- **[AI: Basis pengetahuan]** Memperbaiki jalur yang hilang di URL file basis pengetahuan S3. oleh @cgyrock
- **[Aksi: Impor rekaman Pro]** Memperbaiki teks yang kacau saat mengimpor file XLSX dengan string bersama UTF-8 yang terpecah di seluruh potongan streaming. oleh @mytharcher
- **[Riwayat rekaman]** Memperbaiki riwayat rekaman yang hilang untuk perubahan sumber data eksternal. oleh @2013xile
