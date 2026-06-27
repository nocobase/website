---
title: "Pembaruan Mingguan NocoBase: Dukungan Model Gemini-3"
description: "Pembaruan minggu ini meliputi: Dukungan model Gemini-3 dengan tanda tangan pemikiran pemanggilan fungsi, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Tanggal rilis: 2026-01-10*

### 🚀 Peningkatan

- **[klien]** Meningkatkan performa render daftar manajer plugin dengan mengubah ke css webkit asli untuk elipsis teks ([#8391](https://github.com/nocobase/nocobase/pull/8391)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Manajer file]** Memperbaiki masalah di mana URL file yang dihasilkan salah untuk file yang diunggah ke penyimpanan S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Memperbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher
- **[Alur kerja: Persetujuan]** Memperbaiki blok nilai tidak ditampilkan yang disebabkan oleh komponen `ValueBlock.Result` yang hilang oleh @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Tanggal rilis: 2026-01-09*

### 🚀 Peningkatan

- **[Alur kerja: Persetujuan]** Menyederhanakan parameter dalam kueri, dan meningkatkan performa oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Alur kerja: Webhook]** Memperbaiki masalah di mana kesalahan 404 muncul saat memposting ke URL webhook di sub-aplikasi oleh @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Tanggal rilis: 2026-01-08*

### 🚀 Peningkatan

- **[Kontrol akses]** Meningkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang ([#7856](https://github.com/nocobase/nocobase/pull/7856)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki bidang asosiasi dari sumber data eksternal tidak memuat data asosiasi di blok formulir ([#8356](https://github.com/nocobase/nocobase/pull/8356)) oleh @katherinehhh
  - Memperbaiki masalah di mana bidang asosiasi tidak benar di komponen `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) oleh @mytharcher
- **[logger]** Memperbaiki informasi kesalahan tambahan yang dibuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock
- **[Alur kerja: Node perulangan]** Memperbaiki masalah di mana node yang gagal di cabang kondisi tidak dapat meneruskan status ke node cabang atas ([#8360](https://github.com/nocobase/nocobase/pull/8360)) oleh @mytharcher
- **[Sumber data: Utama]** Metadata koleksi tampilan harus menyertakan opsi bidang sumber ([#8337](https://github.com/nocobase/nocobase/pull/8337)) oleh @2013xile
- **[Alur kerja]**

  - Memperbaiki masalah aturan tautan di blok detail node CC alur kerja ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe
  - Menambahkan ID instance ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID di bawah mode kluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher
  - Memperbaiki masalah di mana halaman eksekusi crash ketika alur kerja dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher
- **[Aksi: Impor catatan]** Memperbaiki pesan kesalahan yang salah ketika kesalahan batasan unik dipicu selama impor XLSX asinkron ([#8342](https://github.com/nocobase/nocobase/pull/8342)) oleh @cgyrock
- **[Kontrol akses]**

  - Mengizinkan bidang asosiasi untuk menghubungkan menggunakan kunci target ([#8352](https://github.com/nocobase/nocobase/pull/8352)) oleh @2013xile
  - Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile
- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** Memperbaiki kesalahan ketika sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Tanggal rilis: 2026-01-14*

### 🚀 Peningkatan

- **[klien]** Mendukung penentuan kapan menjalankan alur peristiwa. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) oleh @gchust
- **[Karyawan AI]**

  - Mengoptimalkan tombol entri AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) oleh @heziqiang
  - Menyembunyikan builder ai di daftar entri.<br/> Mengoptimalkan alur integrasi LLM.<br/> Memperbarui dokumen tentang model ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) oleh @heziqiang
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah performa saat mengirim pesan dalam aplikasi ke sejumlah besar pengguna ([#8402](https://github.com/nocobase/nocobase/pull/8402)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - komponen input angka tidak menampilkan nilai ([#8410](https://github.com/nocobase/nocobase/pull/8410)) oleh @chenos
  - memperbaiki data pilih bertingkat tidak dibersihkan setelah pengiriman berhasil di formulir buat ([#8403](https://github.com/nocobase/nocobase/pull/8403)) oleh @katherinehhh
  - memperbaiki masalah dengan tombol kirim di mana validasi wajib dilewati tidak berfungsi ketika konfirmasi diaktifkan ([#8400](https://github.com/nocobase/nocobase/pull/8400)) oleh @katherinehhh
  - menyelesaikan masalah dengan tombol kirim yang muncul di popup pemilihan file dari bidang asosiasi satu-ke-satu ([#8398](https://github.com/nocobase/nocobase/pull/8398)) oleh @katherinehhh
  - memperbaiki masalah penyelesaian di mana pengaturan tata letak di blok kartu grid tidak berlaku ([#8399](https://github.com/nocobase/nocobase/pull/8399)) oleh @katherinehhh
  - memperbaiki mencegah penugasan ketika karakter Cina dimasukkan di bidang angka ([#8397](https://github.com/nocobase/nocobase/pull/8397)) oleh @katherinehhh
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki kesalahan saat menambahkan relasi banyak-ke-banyak(array) tingkat kedua dalam kueri asosiasi ([#8406](https://github.com/nocobase/nocobase/pull/8406)) oleh @cgyrock
- **[Multi-ruang]**

  - Ruang terkait saat menambahkan data terkait oleh @jiannx
  - Warna pemilih ruang mengikuti tema oleh @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Tanggal rilis: 2026-01-12*

### 🚀 Peningkatan

- **[klien]** Meningkatkan performa render daftar manajer plugin dengan mengubah ke css webkit asli untuk elipsis teks ([#8391](https://github.com/nocobase/nocobase/pull/8391)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Manajer file]** Memperbaiki masalah di mana URL file yang dihasilkan salah untuk file yang diunggah ke penyimpanan S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) oleh @mytharcher
- **[Alur kerja]** Memperbaiki masalah di mana ID skema tidak diperbarui di node duplikat ([#8396](https://github.com/nocobase/nocobase/pull/8396)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Memperbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher
- **[Cetak template]** Memperbaiki masalah pop-up konfigurasi template yang terhalang oleh @zhangzhonghe
- **[Alur kerja: Persetujuan]** Memperbaiki blok nilai tidak ditampilkan yang disebabkan oleh komponen `ValueBlock.Result` yang hilang oleh @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Tanggal rilis: 2026-01-09*

### 🚀 Peningkatan

- **[cli]** mendukung konfigurasi URL dasar CDN melalui env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) oleh @chenos
- **[Karyawan AI]** Mendukung Anthropic dan Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[klien]** memperbaiki logika penyempurnaan untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana catatan yang salah dimuat karena parameter yang salah oleh @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Tanggal rilis: 2026-01-09*

### 🎉 Fitur Baru

- **[uji]** menambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar ([#8343](https://github.com/nocobase/nocobase/pull/8343)) oleh @cgyrock
- **[Karyawan AI]** Mendukung model Gemini-3 dengan tanda tangan pemikiran function-calling ([#8377](https://github.com/nocobase/nocobase/pull/8377)) oleh @heziqiang

### 🚀 Peningkatan

- **[mesin-alur]** Menambahkan `rowOrder` ke GridModel untuk memastikan pengurutan baris yang konsisten ([#8371](https://github.com/nocobase/nocobase/pull/8371)) oleh @zhangzhonghe
- **[Karyawan AI]**

  - Mendukung pengeditan kustom dan pembaruan otomatis dari prompt sistem ([#8378](https://github.com/nocobase/nocobase/pull/8378)) oleh @heziqiang
  - Meningkatkan penanganan kesalahan AI untuk layanan dan model LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) oleh @heziqiang
- **[Manajer file]** Menambahkan opsi permintaan untuk mengambil file OSS di sisi server jika parameter atau header tambahan diperlukan ([#8372](https://github.com/nocobase/nocobase/pull/8372)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana bidang asosiasi masih dapat membuka popup setelah beralih dari komponen pemilih rekaman ke komponen pilih. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan belum dijalankan ulang setelah mengubah paginasi untuk blok detail, blok formulir edit, dan blok daftar. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) oleh @gchust
  - Memperbaiki masalah di mana bidang sub-tabel/sub-formulir yang dikonfigurasi tidak akan ditampilkan selama peralihan bolak-balik komponen bidang. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) oleh @gchust
- **[logger]** Memperbaiki informasi kesalahan tambahan yang dibuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock
- **[Blok: template (usang)]** Memperbaiki masalah di mana halaman edit untuk template warisan (v1) tidak dapat diakses. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) oleh @gchust
- **[Alur kerja]**

  - Menambahkan ID instance ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID di bawah mode kluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher
  - Memperbaiki masalah aturan tautan di blok detail node CC alur kerja ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman eksekusi crash ketika alur kerja dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher
- **[Kontrol akses]** Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile
- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Tanggal rilis: 2026-01-08*

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung model Gemini-3 dengan tanda tangan pemikiran function-calling ([#8377](https://github.com/nocobase/nocobase/pull/8377)) oleh @heziqiang

### 🚀 Peningkatan

- **[Karyawan AI]**

  - Meningkatkan penanganan kesalahan AI untuk layanan dan model LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) oleh @heziqiang
  - Mendukung pengeditan kustom dan pembaruan otomatis dari prompt sistem ([#8378](https://github.com/nocobase/nocobase/pull/8378)) oleh @heziqiang
- **[Manajer file]** Menambahkan opsi permintaan untuk mengambil file OSS di sisi server jika parameter atau header tambahan diperlukan ([#8372](https://github.com/nocobase/nocobase/pull/8372)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[logger]** Memperbaiki informasi kesalahan tambahan yang dibuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock
- **[klien]**

  - Memperbaiki masalah di mana bidang asosiasi masih dapat membuka popup setelah beralih dari komponen pemilih rekaman ke komponen pilih. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan belum dijalankan ulang setelah mengubah paginasi untuk blok detail, blok formulir edit, dan blok daftar. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) oleh @gchust
  - Memperbaiki masalah di mana bidang sub-tabel/sub-formulir yang dikonfigurasi tidak akan ditampilkan selama peralihan bolak-balik komponen bidang. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) oleh @gchust
- **[Alur kerja]**

  - Memperbaiki masalah aturan tautan di blok detail node CC alur kerja ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman eksekusi crash ketika alur kerja dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher
- **[Kontrol akses]** Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile
