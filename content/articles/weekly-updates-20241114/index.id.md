---
title: "Pembaruan Mingguan NocoBase: Meningkatkan Kegunaan Alur Kerja"
description: "Pembaruan Mingguan NocoBase 2024-11-14"
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase saat ini diperbarui dengan dua cabang: `main` dan `next`.

* `main`：Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`：Versi alpha, mencakup beberapa fitur baru yang belum dirilis. Versi ini mungkin belum sepenuhnya stabil dan cocok untuk pengembang atau penguji yang ingin mencoba fitur baru lebih awal atau melakukan pengujian kompatibilitas.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Tanggal rilis: 2024-11-06*

### 🐛 Perbaikan Bug

- **[client]** izin untuk field tabel asosiasi di tabel didasarkan pada izin field asosiasi yang sesuai ([#5569](https://github.com/nocobase/nocobase/pull/5569)) oleh @katherinehhh
- **[Aksi: Ekspor catatan]** Perbaiki ekspor dengan i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) oleh @chareice
- **[Aksi: Impor catatan]** perbaiki masalah impor asosiasi belongs to ([#5417](https://github.com/nocobase/nocobase/pull/5417)) oleh @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Tanggal rilis: 2024-11-08*

### 🚀 Peningkatan

- **[Autentikasi]** Optimalkan pesan error untuk masuk dan daftar ([#5612](https://github.com/nocobase/nocobase/pull/5612)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki masalah nilai default di subtable ([#5607](https://github.com/nocobase/nocobase/pull/5607)) oleh @zhangzhonghe
  - Perbaiki masalah dukungan pencarian fuzzy untuk field asosiasi dengan field title bertipe string ([#5611](https://github.com/nocobase/nocobase/pull/5611)) oleh @katherinehhh
- **[Autentikasi]** Perbaiki masalah di mana pengguna tidak dapat mengubah kata sandi saat masuk dengan autentikator non-kata sandi ([#5609](https://github.com/nocobase/nocobase/pull/5609)) oleh @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Tanggal rilis: 2024-11-11*

### 🚀 Peningkatan

- **[client]** dukung menyembunyikan item menu ([#5624](https://github.com/nocobase/nocobase/pull/5624)) oleh @chenos
- **[server]** tambahkan variabel lingkungan DB_SQL_BENCHMARK ([#5615](https://github.com/nocobase/nocobase/pull/5615)) oleh @chareice

### 🐛 Perbaikan Bug

- **[client]** dukung koleksi file sebagai target asosiasi satu-ke-banyak ([#5619](https://github.com/nocobase/nocobase/pull/5619)) oleh @mytharcher
- **[Aksi: Impor catatan]** Perbaiki masalah data relasi banyak-ke-banyak tidak dapat diimpor melalui field id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) oleh @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Tanggal rilis: 2024-11-13*

### 🚀 Peningkatan

- **[client]** dukung field satu-ke-satu dan banyak-ke-banyak (array) untuk menggunakan koleksi file ([#5637](https://github.com/nocobase/nocobase/pull/5637)) oleh @mytharcher
- **[evaluators]** gunakan Formula.js sebagai evaluator default di node kalkulasi ([#5626](https://github.com/nocobase/nocobase/pull/5626)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Perbaiki masalah reset yang mengembalikan judul tombol filter ke default ([#5635](https://github.com/nocobase/nocobase/pull/5635)) oleh @katherinehhh
- **[Aksi: Impor catatan]** Perbaiki masalah data relasi banyak-ke-banyak tidak dapat diimpor melalui field id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) oleh @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Tanggal rilis: 2024-11-07*

### 🎉 Fitur Baru

- **[client]** Dukung opsi konfigurasi untuk menyembunyikan kolom tabel ([#5597](https://github.com/nocobase/nocobase/pull/5597)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[Manajer sumber data]** Sesuaikan kategori tabel untuk dimuat dari sumber data utama dan hapus dari global ([#5602](https://github.com/nocobase/nocobase/pull/5602)) oleh @katherinehhh
- **[Manajer notifikasi]** perbarui struktur pesan untuk menyertakan penerima dalam data log notifikasi ([#5603](https://github.com/nocobase/nocobase/pull/5603)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[client]** Perbaiki masalah scrollbar tabel dalam mode non-konfigurasi ([#5599](https://github.com/nocobase/nocobase/pull/5599)) oleh @katherinehhh
- **[Aksi: Impor catatan]** perbaiki impor dengan field tanggal ([#5606](https://github.com/nocobase/nocobase/pull/5606)) oleh @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Tanggal rilis: 2024-11-11*

### 🎉 Fitur Baru

- **[client]** dukung properti delimiters untuk komponen ekspresi variabel ([#5620](https://github.com/nocobase/nocobase/pull/5620)) oleh @mytharcher
- **[Workflow]** dukung untuk memindahkan node hilir ke cabang baru saat membuat node dengan cabang ([#5570](https://github.com/nocobase/nocobase/pull/5570)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]**

  - optimalkan daftar field: hapus field relasi dan tag Duplicate ([#5616](https://github.com/nocobase/nocobase/pull/5616)) oleh @katherinehhh
  - dukung `getFilterTargetKey()` dari kelas `Collection` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) oleh @mytharcher
- **[Sumber data: Utama]** refaktor api collections:list untuk meningkatkan performa ([#5610](https://github.com/nocobase/nocobase/pull/5610)) oleh @chareice
- **[Manajer notifikasi]** tingkatkan UI manajer saluran notifikasi ([#5621](https://github.com/nocobase/nocobase/pull/5621)) oleh @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Tanggal rilis: 2024-11-11*

### 🎉 Fitur Baru

- **[WeCom]**
  - Dukungan untuk masuk secara otomatis saat mengunjungi halaman aplikasi di browser WeCom oleh @chenzhizdt
  - Dukungan untuk menggunakan Markdown dan kartu template dalam notifikasi oleh @chenzhizdt

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Platform ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
