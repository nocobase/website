---
title: "Pembaruan Mingguan｜Karyawan AI Sekarang Mendukung Pencarian Dokumen Bawaan dengan Banyak Kata Kunci"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 27 Februari hingga 5 Maret 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Tanggal rilis: 04-03-2026*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki kesalahan chat karyawan AI saat basis pengetahuan diaktifkan ([#8746](https://github.com/nocobase/nocobase/pull/8746)) oleh @cgyrock
- **[Mesin alur]** memperbaiki kesalahan sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) oleh @chenos
- **[Kontrol akses]** Instance database yang digunakan saat mengatur metadata ACL tidak benar ([#8747](https://github.com/nocobase/nocobase/pull/8747)) oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah hasil kueri tidak muncul yang disebabkan oleh node yang difilter berdasarkan tipe oleh @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Tanggal rilis: 03-03-2026*

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah komponen CollectionField tidak dirender di komponen DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) oleh @mytharcher
  - Memperbaiki masalah di mana blok data tidak disegarkan saat mengganti menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) oleh @gchust
- **[database]** Memperbaiki kegagalan pemeriksaan reguler kustom bidang di v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) oleh @jiannx
- **[mesin-alur]** Memperbaiki masalah di mana ctx.exit tidak dapat menghentikan eksekusi alur peristiwa yang ditentukan pengguna. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) oleh @gchust
- **[Alur Kerja: Persetujuan]** Menambahkan parameter yang terlewat untuk menghindari asosiasi tidak diperbarui saat mengirimkan persetujuan baru oleh @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Tanggal rilis: 01-03-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[server]** Mengatasi masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos
- **[Karyawan AI]** Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock
- **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki masalah di mana alur kerja aksi kustom menggantung saat dijalankan sebagai sub-alur ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Membersihkan nilai asosiasi dalam aksi persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul saat menjalankan alur kerja persetujuan secara manual oleh @mytharcher
  - Memperbaiki kesalahan yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher
  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher
  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui ketika pengguna tidak memiliki izin oleh @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Tanggal rilis: 27-02-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung pencarian dokumen bawaan dengan beberapa kata kunci dan membaca beberapa dokumen dalam satu panggilan alat ([#8718](https://github.com/nocobase/nocobase/pull/8718)) oleh @2013xile

### 🚀 Peningkatan

- **[klien]** mendukung konfigurasi ringkasan untuk tabel ([#8721](https://github.com/nocobase/nocobase/pull/8721)) oleh @chenos
- **[Sematkan NocoBase]** Menyediakan API sanitize untuk memfilter nilai asosiasi dalam aksi ([#8688](https://github.com/nocobase/nocobase/pull/8688)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Visualisasi data]** memperbaiki i18n untuk teks entri bagan plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) oleh @heziqiang
- **[Alur Kerja: JavaScript]** Memperbaiki kasus uji tidak dapat lulus di windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) oleh @mytharcher
- **[Karyawan AI]** Mengatasi masalah di mana pesan AI dirender dengan panjang 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) oleh @heziqiang
- **[Cetak template]** Memperbaiki masalah di mana API ACL berubah tetapi tidak diadaptasi ke plugin oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Membersihkan nilai asosiasi dalam aksi persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
- **[Manajer email]** Memperbaiki penguraian format ID konten gambar oleh @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Tanggal rilis: 26-02-2026*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki kesalahan percakapan AI saat menggunakan database MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) oleh @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Tanggal rilis: 04-03-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah komponen CollectionField tidak dirender di komponen DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) oleh @mytharcher
  - Memperbaiki masalah di mana blok data tidak disegarkan saat mengganti menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) oleh @gchust
- **[mesin-alur]** Memperbaiki masalah di mana ctx.exit tidak dapat menghentikan eksekusi alur peristiwa yang ditentukan pengguna. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) oleh @gchust
- **[database]** Memperbaiki kegagalan pemeriksaan reguler kustom bidang di v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) oleh @jiannx
- **[server]** Mengatasi masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos
- **[Kontrol akses]** Instance database yang digunakan saat mengatur metadata ACL tidak benar ([#8747](https://github.com/nocobase/nocobase/pull/8747)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki kesalahan chat karyawan AI saat basis pengetahuan diaktifkan ([#8746](https://github.com/nocobase/nocobase/pull/8746)) oleh @cgyrock
  - Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock
- **[Mesin alur]** memperbaiki kesalahan sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) oleh @chenos
- **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki masalah di mana alur kerja aksi kustom menggantung saat dijalankan sebagai sub-alur ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah hasil kueri tidak muncul yang disebabkan oleh node yang difilter berdasarkan tipe oleh @mytharcher
  - Menambahkan parameter yang terlewat untuk menghindari asosiasi tidak diperbarui saat mengirimkan persetujuan baru oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul saat menjalankan alur kerja persetujuan secara manual oleh @mytharcher
  - Memperbaiki kesalahan yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher
  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui ketika pengguna tidak memiliki izin oleh @mytharcher
  - Membersihkan nilai asosiasi dalam aksi persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Tanggal rilis: 27-02-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung pencarian dokumen bawaan dengan beberapa kata kunci dan membaca beberapa dokumen dalam satu panggilan alat ([#8718](https://github.com/nocobase/nocobase/pull/8718)) oleh @2013xile

### 🚀 Peningkatan

- **[klien]** mendukung konfigurasi ringkasan untuk tabel ([#8721](https://github.com/nocobase/nocobase/pull/8721)) oleh @chenos
- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang
- **[Sematkan NocoBase]** Menyediakan API sanitize untuk memfilter nilai asosiasi dalam aksi ([#8688](https://github.com/nocobase/nocobase/pull/8688)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Mengatasi masalah di mana pesan AI dirender dengan panjang 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) oleh @heziqiang
- **[Visualisasi data]** memperbaiki i18n untuk teks entri bagan plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) oleh @heziqiang
- **[Alur Kerja: JavaScript]** Memperbaiki kasus uji tidak dapat lulus di windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) oleh @mytharcher
- **[Cetak template]** Memperbaiki masalah di mana API ACL berubah tetapi tidak diadaptasi ke plugin oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Membersihkan nilai asosiasi dalam aksi persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
- **[Manajer email]** Memperbaiki penguraian format ID konten gambar oleh @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Tanggal rilis: 26-02-2026*

### 🚀 Peningkatan

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki kesalahan percakapan AI saat menggunakan database MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) oleh @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Tanggal rilis: 26-02-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung pencarian dokumen bawaan dengan beberapa kata kunci dan membaca beberapa dokumen dalam satu panggilan alat ([#8718](https://github.com/nocobase/nocobase/pull/8718)) oleh @2013xile

### 🚀 Peningkatan

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[klien]** Di perangkat seluler, tutup menu terlebih dahulu lalu lakukan lompatan halaman ([#8699](https://github.com/nocobase/nocobase/pull/8699)) oleh @zhangzhonghe
- **[AI LLM: GigaChat]** Memperbaiki plugin GigaChat tidak berfungsi di versi 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) oleh @cgyrock
- **[Karyawan AI]**

  - Memperbaiki kesalahan percakapan AI saat menggunakan database MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) oleh @cgyrock
  - Menyeragamkan input file untuk API chatGPT menggunakan ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) oleh @cgyrock
  - Memperbaiki kesalahan agen AI saat pengguna mengirim pesan baru tanpa mengonfirmasi eksekusi alat ([#8697](https://github.com/nocobase/nocobase/pull/8697)) oleh @cgyrock
- **[AI: Basis pengetahuan]** Memperbaiki kesalahan startup plugin basis pengetahuan AI. oleh @cgyrock
- **[Manajer email]** Kesalahan rendering gambar oleh @jiannx
