---
title: "NocoBase v2.1.0-alpha.47: Menambahkan opsi untuk blok Gantt agar fokus pada hari ini secara default."
description: "Catatan Rilis v2.1.0-alpha.47"
---

### 🎉 Fitur Baru

- **[undefined]** Peningkatan manajemen aplikasi terkelola dan plugin di CLI, termasuk penanganan lingkungan yang sadar appPath, impor plugin, sinkronisasi plugin berlisensi, dan pembaruan dokumentasi terkait. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) oleh @chenos
  Referensi: [Dokumentasi CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Panduan Mulai Cepat](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Blok: Gantt]** Menambahkan opsi untuk blok Gantt agar fokus pada hari ini secara default. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) oleh @jiannx
- **[Multi-ruang]** Menambahkan dukungan klien v2 untuk plugin multi-ruang, termasuk perpindahan ruang dan manajemen ruang. oleh @jiannx

### 🚀 Peningkatan

- **[Alur Kerja]** Menghapus penggandaan transaksi riwayat alur kerja dari eksekusi alur kerja. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) oleh @mytharcher
- **[Template UI]** Memigrasikan template UI ke klien v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) oleh @gchust
- **[Filter multi-kata kunci]** Memigrasikan filter multi-kata kunci ke klien v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) oleh @gchust
- **[Alur Kerja: Subalur]** Menghapus penggandaan transaksi riwayat alur kerja dari instruksi subalur alur kerja. oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menghapus penggandaan transaksi riwayat alur kerja dari instruksi persetujuan alur kerja. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Klien]** Memperbaiki masalah di mana bidang tertaut yang disembunyikan masih menyimpan nilai lama. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) oleh @zhangzhonghe
- **[Aksi: Impor rekaman]** Memperbaiki rekaman yang diimpor menerima nilai urutan duplikat. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) oleh @2013xile
- **[Mesin alur]** Memperbaiki masalah di mana mengonversi blok template referensi menjadi salinan akan menghasilkan kesalahan. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) oleh @gchust
- **[Blok: Peta]** Memperbaiki masalah di mana nilai bidang peta salah dikonversi saat beralih antara mode tampilan teks dan peta di halaman detail. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) oleh @hongboji
- **[Alur Kerja]** Memperbaiki pengiriman eksekusi alur kerja duplikat di bawah pekerja bersamaan. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana judul bidang kustom tidak ditampilkan di detail formulir persetujuan. oleh @zhangzhonghe
