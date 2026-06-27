---
title: "NocoBase v2.1.0-beta.45: Peningkatan aplikasi terkelola dan manajemen plugin di CLI"
description: "Catatan Rilis v2.1.0-beta.45"
---

### 🎉 Fitur Baru

- **[undefined]** Peningkatan manajemen aplikasi terkelola dan plugin di CLI, termasuk penanganan lingkungan berbasis appPath, impor plugin, sinkronisasi plugin berlisensi, dan pembaruan dokumentasi terkait. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) oleh @chenos
  Referensi: [Dokumentasi CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Panduan Memulai Cepat](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Blok: Gantt]** Menambahkan opsi pada blok Gantt untuk fokus pada hari ini secara default. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) oleh @jiannx
- **[IdP: OAuth]** Menambahkan dukungan dasar untuk single sign-on aplikasi dalam penerapan multi-aplikasi. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) oleh @2013xile
- **[SSO Aplikasi]** Menambahkan plugin SSO Aplikasi untuk masuk otomatis antar aplikasi. oleh @2013xile
- **[Multi-ruang]** Menambahkan dukungan klien v2 untuk plugin multi-ruang, termasuk perpindahan ruang dan manajemen ruang. oleh @jiannx
- **[Pengawas Aplikasi]** Menambahkan pengaturan SSO Aplikasi untuk sub-aplikasi. oleh @2013xile

### 🚀 Peningkatan

- **[server]** Klien modern kini disajikan di bawah `/v/` alih-alih `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) oleh @Molunerfinn
- **[ai]** Memutakhirkan versi `xlsx` untuk menghindari masalah keamanan. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) oleh @mytharcher
- **[Filter multi-kata kunci]** Memigrasikan filter multi-kata kunci ke klien v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) oleh @gchust
- **[Workflow]** Menghapus penggandengan transaksi riwayat workflow dari eksekusi workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) oleh @mytharcher
- **[Template UI]** Memigrasikan template UI ke klien v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) oleh @gchust
- **[Departemen]** Menambahkan halaman pengaturan v2 untuk mengelola departemen, anggota departemen, dan penugasan departemen pengguna. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) oleh @jiannx
- **[Auth: SAML 2.0]** Pengalihan masuk SAML/CAS kini mengikuti prefiks klien modern. oleh @Molunerfinn
- **[Aksi: Impor catatan Pro]** Memutakhirkan versi `xlsx` untuk menghindari masalah keamanan. oleh @mytharcher
- **[Workflow: Subflow]** Menghapus penggandengan transaksi riwayat workflow dari instruksi subflow workflow. oleh @mytharcher
- **[Auth: OIDC]** Pengalihan masuk OIDC kini mengikuti prefiks klien modern. oleh @Molunerfinn
- **[Workflow: Persetujuan]** Menghapus penggandengan transaksi riwayat workflow dari instruksi workflow persetujuan. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana bidang tertaut yang tersembunyi masih menyimpan nilai lama. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) oleh @zhangzhonghe
  - Memperbaiki kesalahan saat menyimpan bidang relasi pohon dalam template formulir referensi. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) oleh @zhangzhonghe
- **[klien-v2]**
  - Memperbaiki kolom tabel v2 menjadi tidak terlihat ketika lebar kolom kustom diatur ke 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) oleh @katherinehhh
  - Menyesuaikan semua pemilih bidang relasi untuk membatasi bidang asosiasi maksimal dua tingkat. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) oleh @jiannx
- **[Aksi: Impor catatan]** Memperbaiki catatan yang diimpor menerima nilai urutan duplikat. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) oleh @2013xile
- **[Mesin alur]** Memperbaiki masalah di mana mengonversi blok template referensi menjadi salinan akan mengakibatkan kesalahan. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) oleh @gchust
- **[Koleksi: SQL]** Memblokir akses koleksi SQL ke metadata PostgreSQL yang sensitif. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) oleh @2013xile
- **[Workflow]** Memperbaiki pengiriman eksekusi workflow duplikat di bawah pekerja bersamaan. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) oleh @mytharcher
- **[Blok: Peta]** Memperbaiki masalah di mana nilai bidang peta salah dikonversi saat beralih antara mode tampilan teks dan peta di halaman detail. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) oleh @hongboji
- **[Workflow: Acara aksi kustom]** Memperbaiki aksi pemicu workflow yang hilang dari daftar tombol panel aksi workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) oleh @katherinehhh
- **[Karyawan AI]**
  - Node karyawan AI workflow kini dapat menggunakan model default. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) oleh @cgyrock
  - Menyembunyikan kesalahan mentah penyedia LLM dari pesan frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) oleh @cgyrock
- **[Manajer sumber data]** Memperbaiki lokalisasi bidang multi-ruang di manajer sumber data v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) oleh @jiannx
- **[Sumber data: REST API]** Memperbaiki kegagalan build deklarasi plugin sumber data REST API yang disebabkan oleh ketidakcocokan deklarasi tipe klien-v2 manajer sumber data. oleh @katherinehhh
- **[Kebijakan kata sandi]** Memperbaiki kegagalan masuk yang menutupi kesalahan sebenarnya dengan "argumen #1 tipe tidak didukung undefined" ketika kesalahan yang mendasarinya tidak memiliki kode status. oleh @Molunerfinn
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana judul bidang kustom tidak ditampilkan di detail formulir persetujuan. oleh @zhangzhonghe
