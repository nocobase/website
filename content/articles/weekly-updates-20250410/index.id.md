---
title: "Pembaruan Mingguan NocoBase: Optimalkan Logika Simpan Pekerjaan"
description: "Pembaruan minggu ini meliputi: dukungan untuk mencari bidang di komponen Filter, dukungan untuk variabel global dalam konfigurasi penyimpanan, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Tanggal rilis: 2025-04-03*

#### 🐛 Perbaikan Bug

- **[client]**

  - Properti x-disabled tidak berpengaruh pada bidang formulir ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh
  - Masalah tampilan label bidang untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh
- **[database]** Saat menghapus catatan satu-ke-banyak, `filter` dan `filterByTk` keduanya diteruskan dan `filter` menyertakan bidang asosiasi, `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Tanggal rilis: 2025-04-09*

#### 🚀 Peningkatan

- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher
- **[client]**

  - Dukungan untuk mencari bidang di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher
  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher
- **[Penanganan kesalahan]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66
- **[Pembatasan IP]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Aturan dengan kondisi 'any' tidak berpengaruh ketika daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh
  - Masalah data dengan blok Gantt di koleksi pohon ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh
  - Bidang relasi di formulir filter melaporkan kesalahan setelah halaman disegarkan karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe
  - Kegagalan penguraian variabel ketika parameter URL mengandung karakter Mandarin ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh
- **[Pengguna]** Masalah dengan penguraian skema formulir profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile
- **[Seluler]** Bidang pilih tunggal dengan filter 'contains' di seluler tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh
- **[Aksi: Ekspor catatan]** Parameter filter hilang saat mengekspor data setelah mengubah penomoran halaman ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh
- **[Manajer email]** Memperbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx
- **[Penyimpanan file: S3(Pro)]** Melempar kesalahan ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (disetel ke default) oleh @mytharcher
- **[Alur kerja: Persetujuan]** Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher
- **[Manajer migrasi]** Waktu pembuatan log migrasi ditampilkan secara tidak benar di beberapa lingkungan oleh @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Tanggal rilis: 2025-04-09*

#### 🎉 Fitur Baru

- **[Penyimpanan skema UI]** Menambahkan modul lokalisasi untuk UISchema, memungkinkan terjemahan kustom untuk judul dan deskripsi skema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) oleh @chenos

#### 🚀 Peningkatan

- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher
- **[client]**

  - Dukungan untuk mencari bidang di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher
  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher
- **[Alur kerja]** Mengoptimalkan logika penyimpanan pekerjaan ([#6613](https://github.com/nocobase/nocobase/pull/6613)) oleh @mytharcher
- **[Penanganan kesalahan]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66
- **[Pembatasan IP]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Bidang relasi di formulir filter melaporkan kesalahan setelah halaman disegarkan karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe
  - Masalah data dengan blok Gantt di koleksi pohon ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh
  - Area kosong antara judul halaman konfigurasi templat blok dan menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) oleh @gchust
  - Aturan dengan kondisi 'any' tidak berpengaruh ketika daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh
  - Properti x-disabled tidak berpengaruh pada bidang formulir ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh
  - Kegagalan penguraian variabel ketika parameter URL mengandung karakter Mandarin ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh
  - Masalah tampilan label bidang untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh
- **[Aksi: Ekspor catatan]** Parameter filter hilang saat mengekspor data setelah mengubah penomoran halaman ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh
- **[Pengguna]** Masalah dengan penguraian skema formulir profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile
- **[Seluler]** Bidang pilih tunggal dengan filter 'contains' di seluler tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh
- **[Kontrol akses]** Memperbaiki logika kalkulasi gabungan peran ([#6605](https://github.com/nocobase/nocobase/pull/6605)) oleh @aaaaaajie
- **[Blok: templat]** Memodifikasi dan menghapus bidang yang sama dari templat dan blok, setelah membuat blok dari templat, dapat menyebabkan kesalahan rendering ([#6626](https://github.com/nocobase/nocobase/pull/6626)) oleh @gchust
- **[Manajer email]**

  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx
  - Memperbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx
  - Melempar kesalahan ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (disetel ke default) oleh @mytharcher
- **[Alur kerja: Persetujuan]** Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher
- **[Manajer migrasi]** Waktu pembuatan log migrasi ditampilkan secara tidak benar di beberapa lingkungan oleh @gchust
