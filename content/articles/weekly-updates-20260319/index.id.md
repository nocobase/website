---
title: "Pembaruan Mingguan｜Memungkinkan menambahkan karyawan AI di popup tabel sub"
description: "Ini adalah ringkasan pembaruan dan peningkatan fitur NocoBase dari 13 Maret hingga 19 Maret 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Tanggal rilis: 2026-03-18*

### 🚀 Peningkatan

- **[Workflow]** Memperbaiki masalah di mana graceful shutdown tidak menguras semua event ([#8894](https://github.com/nocobase/nocobase/pull/8894)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki masalah dengan URL yang ditentukan untuk layanan LLM tidak berpengaruh pada panggilan model embedding teks. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki event `beforeStop` pada sub aplikasi tidak terpicu oleh @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Tanggal rilis: 2026-03-17*

### 🎉 Fitur Baru

- **[Karyawan AI]**

  - Pembersihan terjadwal data checkpoint percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock
  - Memungkinkan untuk menambahkan karyawan AI di popup sub tabel ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile
- **[Supervisor aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos
- **[client]** Mendukung menampilkan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust
- **[Manajer tugas asinkron]** tugas asinkron ditambahkan untuk mendukung pekerja dalam mengirim pesan kesalahan ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana popup "Pilih rekaman" di sub tabel gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust
- **[Karyawan AI]** Memperbaiki potensi kesalahan variabel tidak terdefinisi dalam skrip migrasi upgrade plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana tugas asinkron tidak berakhir setelah terjadi kesalahan dalam impor asinkron oleh @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Tanggal rilis: 2026-03-14*

### 🚀 Peningkatan

- **[tidak terdefinisi]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) oleh @gaston98765

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana nilai default beberapa bidang tidak berpengaruh setelah menyegarkan halaman. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) oleh @gchust
- **[database]** Memperbaiki masalah validasi sisi server untuk bidang tanggal ([#8867](https://github.com/nocobase/nocobase/pull/8867)) oleh @2013xile
- **[Lokalisasi]** localizationTexts: pengecualian izin antarmuka yang hilang ([#8861](https://github.com/nocobase/nocobase/pull/8861)) oleh @jiannx
- **[AI: Basis pengetahuan]** Mencegah database vektor dan penyimpanan vektor yang sedang digunakan agar tidak dihapus. oleh @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Tanggal rilis: 2026-03-12*

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki bidang yang dapat dihubungkan tidak ditampilkan saat menautkan blok data di bawah sumber data eksternal ([#8848](https://github.com/nocobase/nocobase/pull/8848)) oleh @zhangzhonghe
  - memperbaiki tinggi blok tabel menjadi tidak valid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) oleh @jiannx
  - Memperbaiki masalah di mana menambahkan blok data atau menyegarkan halaman akan memicu penyegaran ganda. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) oleh @gchust
- **[Template UI]** Memperbaiki kesalahan yang terjadi saat menggunakan template blok formulir edit dan blok detail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) oleh @gchust
- **[Draf formulir]** Memperbaiki masalah di mana data draf formulir hilang saat popup dibuka beberapa kali. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) oleh @gchust
- **[Lokalisasi]** entri yang tidak ditemukan tidak akan dikirimkan dalam status non-pengeditan halaman. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) oleh @jiannx
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana beberapa pilihan tidak dapat dibuat untuk bidang duplikat dalam konfigurasi yang diimpor. oleh @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Tanggal rilis: 2026-03-12*

### 🐛 Perbaikan Bug

- **[client]**

  - memperbaiki tinggi blok tabel menjadi tidak valid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) oleh @jiannx
  - Memperbaiki masalah di mana menambahkan blok data atau menyegarkan halaman akan memicu penyegaran ganda. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) oleh @gchust
  - Memperbaiki bidang yang dapat dihubungkan tidak ditampilkan saat menautkan blok data di bawah sumber data eksternal ([#8848](https://github.com/nocobase/nocobase/pull/8848)) oleh @zhangzhonghe
- **[Template UI]** Memperbaiki kesalahan yang terjadi saat menggunakan template blok formulir edit dan blok detail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) oleh @gchust
- **[Draf formulir]** Memperbaiki masalah di mana data draf formulir hilang saat popup dibuka beberapa kali. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) oleh @gchust
- **[Lokalisasi]** entri yang tidak ditemukan tidak akan dikirimkan dalam status non-pengeditan halaman. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) oleh @jiannx
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana beberapa pilihan tidak dapat dibuat untuk bidang duplikat dalam konfigurasi yang diimpor. oleh @jiannx
- **[Manajer email]** penyesuaian penerima balas dan balas ke semua, memperbaiki kegagalan penambahan bidang tabel dan masalah lainnya oleh @jiannx
- **[Manajer migrasi]** Memperbaiki masalah di mana tabel sistem tidak dapat dipilih dalam aturan kustom oleh @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Tanggal rilis: 2026-03-14*

### 🎉 Fitur Baru

- **[Karyawan AI]** Memungkinkan untuk menambahkan karyawan AI di popup sub tabel ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile
- **[AI: Server MCP]** Menambahkan plugin server MCP baru untuk memungkinkan pembangunan sistem NocoBase dan mendukung alur kerja bisnis. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) oleh @2013xile

### 🚀 Peningkatan

- **[tidak terdefinisi]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) oleh @gaston98765

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah validasi sisi server untuk bidang tanggal ([#8867](https://github.com/nocobase/nocobase/pull/8867)) oleh @2013xile
- **[client]**

  - Memperbaiki bidang yang dapat dihubungkan tidak ditampilkan saat menautkan blok data di bawah sumber data eksternal ([#8848](https://github.com/nocobase/nocobase/pull/8848)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana menambahkan blok data atau menyegarkan halaman akan memicu penyegaran ganda. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) oleh @gchust
  - Memperbaiki masalah di mana nilai default beberapa bidang tidak berpengaruh setelah menyegarkan halaman. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) oleh @gchust
  - memperbaiki tinggi blok tabel menjadi tidak valid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) oleh @jiannx
- **[Lokalisasi]**

  - localizationTexts: pengecualian izin antarmuka yang hilang ([#8861](https://github.com/nocobase/nocobase/pull/8861)) oleh @jiannx
  - entri yang tidak ditemukan tidak akan dikirimkan dalam status non-pengeditan halaman. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) oleh @jiannx
- **[Draf formulir]** Memperbaiki masalah di mana data draf formulir hilang saat popup dibuka beberapa kali. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) oleh @gchust
- **[Template UI]** Memperbaiki kesalahan yang terjadi saat menggunakan template blok formulir edit dan blok detail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) oleh @gchust
- **[AI: Basis pengetahuan]** Mencegah database vektor dan penyimpanan vektor yang sedang digunakan agar tidak dihapus. oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana beberapa pilihan tidak dapat dibuat untuk bidang duplikat dalam konfigurasi yang diimpor. oleh @jiannx
- **[Manajer email]** penyesuaian penerima balas dan balas ke semua, memperbaiki kegagalan penambahan bidang tabel dan masalah lainnya oleh @jiannx
- **[Manajer migrasi]** Memperbaiki masalah di mana tabel sistem tidak dapat dipilih dalam aturan kustom oleh @cgyrock
