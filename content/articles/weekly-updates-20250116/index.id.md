---
title: "Pembaruan Mingguan NocoBase: Dukungan Aturan Tautan di Blok Detail"
description: "Pembaruan minggu ini meliputi: dukungan aturan tautan di blok detail untuk menyembunyikan (nilai yang dipertahankan), dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Tanggal rilis: 2025-01-10*

#### 🚀 Peningkatan

- **[client]** Mendukung aturan tautan di blok detail untuk menyembunyikan (nilai yang disimpan) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki path publik yang hilang di jalur file ikon ([#6034](https://github.com/nocobase/nocobase/pull/6034)) oleh @chenos
  - Memperbaiki masalah di mana aturan tautan formulir gagal ketika bergantung pada nilai bidang dari sub-tabel ([#5876](https://github.com/nocobase/nocobase/pull/5876)) oleh @zhangzhonghe
  - Memperbaiki bidang yang salah dari variabel 'Rekaman saat ini' di sub-detail ([#6030](https://github.com/nocobase/nocobase/pull/6030)) oleh @zhangzhonghe
- **[Manajer cadangan]** Memperbaiki kegagalan unduhan cadangan ketika env API_BASE_PATH bukan /api oleh @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Tanggal rilis: 2025-01-11*

#### 🚀 Peningkatan

- **[evaluators]** Memutakhirkan versi perpustakaan formula.js ke 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) oleh @mytharcher
- **[Workflow]** Memperbaiki API logger dari plugin workflow ([#6036](https://github.com/nocobase/nocobase/pull/6036)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Workflow]** Menambahkan logika defensif untuk menghindari pemicuan duplikat ([#6022](https://github.com/nocobase/nocobase/pull/6022)) oleh @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Tanggal rilis: 2025-01-13*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana kolom tindakan tetap tidak berfungsi dengan benar di tabel ([#6048](https://github.com/nocobase/nocobase/pull/6048)) oleh @zhangzhonghe
- **[Users]** Menonaktifkan isi otomatis browser saat mengatur kata sandi untuk pengguna di manajemen pengguna ([#6041](https://github.com/nocobase/nocobase/pull/6041)) oleh @2013xile
- **[Workflow]** Memperbaiki event jadwal berbasis bidang tanggal yang tidak terpicu setelah aplikasi dimulai ([#6042](https://github.com/nocobase/nocobase/pull/6042)) oleh @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Tanggal rilis: 2025-01-14*

#### 🚀 Peningkatan

- **[client]** Input komponen datePicker hanya baca ([#6061](https://github.com/nocobase/nocobase/pull/6061)) oleh @Cyx649312038

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki pemuatan bidang asosiasi modal yang salah di blok tabel ([#6060](https://github.com/nocobase/nocobase/pull/6060)) oleh @katherinehhh
  - Memperbaiki masalah gaya di sub-tabel dalam blok detail ([#6049](https://github.com/nocobase/nocobase/pull/6049)) oleh @katherinehhh
  - Memperbaiki format bidang angka dalam mode readPretty yang mempengaruhi mode edit ([#6050](https://github.com/nocobase/nocobase/pull/6050)) oleh @katherinehhh
  - Memperbaiki masalah gaya sel header tabel di ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) oleh @katherinehhh
- **[database]** Memperbaiki masalah saat menginisialisasi bidang sortir dengan kunci utama ([#6059](https://github.com/nocobase/nocobase/pull/6059)) oleh @chareice
- **[Visualisasi data]** Menghapus klausa `LIMIT` saat menggunakan fungsi agregat tanpa mengatur dimensi dalam kueri bagan ([#6062](https://github.com/nocobase/nocobase/pull/6062)) oleh @2013xile
- **[Manajer cadangan]** Memperbaiki kesalahan unduhan cadangan untuk pengguna yang hanya masuk ke sub-aplikasi oleh @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Tanggal rilis: 2025-01-10*

#### 🚀 Peningkatan

- **[client]** Menghapus aturan tautan dari tombol Asosiasi ([#6016](https://github.com/nocobase/nocobase/pull/6016)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana aturan tautan formulir gagal ketika bergantung pada nilai bidang dari sub-tabel ([#5876](https://github.com/nocobase/nocobase/pull/5876)) oleh @zhangzhonghe
  - Melanjutkan rendering halaman setelah permintaan pemeriksaan autentikasi selesai ([#6020](https://github.com/nocobase/nocobase/pull/6020)) oleh @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Tanggal rilis: 2025-01-14*

#### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana penugasan bidang untuk tombol formulir di node manual workflow tidak valid ([#6054](https://github.com/nocobase/nocobase/pull/6054)) oleh @zhangzhonghe
  - Memperbaiki variabel popup saat ini yang hilang di modal tautan bidang yang diaktifkan ([#6045](https://github.com/nocobase/nocobase/pull/6045)) oleh @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Tanggal rilis: 2025-01-09*

#### 🎉 Fitur Baru

- **[client]** Menambahkan schemaSetting untuk menampilkan nama file untuk lampiran ([#5995](https://github.com/nocobase/nocobase/pull/5995)) oleh @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Tanggal rilis: 2025-01-14*

#### 🚀 Peningkatan

- **[Workflow: Perhitungan JSON]** Mengubah nama node kueri JSON menjadi Perhitungan JSON oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki tipe nilai untuk komponen DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
