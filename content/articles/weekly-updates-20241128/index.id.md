---
title: "Pembaruan Mingguan NocoBase: Optimalkan Plugin REST API"
description: "Pembaruan minggu ini meliputi: optimalkan plugin REST API, dukung pengaktifan massal plugin di antarmuka, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Tanggal rilis: 21-11-2024*

### 🚀 Peningkatan

- **[Alur Kerja]**

  - hapus batas halaman di node kueri ([#5694](https://github.com/nocobase/nocobase/pull/5694)) oleh @mytharcher
  - ubah eksekusi agar tidak dihapus saat alur kerja dihapus ([#5666](https://github.com/nocobase/nocobase/pull/5666)) oleh @mytharcher
- **[Sumber data: REST API]** Optimalkan deskripsi teks plugin REST API oleh @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Tanggal rilis: 21-11-2024*

### 🐛 Perbaikan Bug

- **[build]** Kembalikan alat build klien dari `rspack` ke `vite` untuk memperbaiki masalah di mana perintah `yarn dev` melaporkan kesalahan setelah menjalankan perintah create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) oleh @gchust
- **[klien]** Perbaiki masalah di mana kolom tetap kanan tidak sejajar ke kanan ketika ada lebih sedikit kolom ([#5690](https://github.com/nocobase/nocobase/pull/5690)) oleh @katherinehhh
- **[Seluler]** Perbaiki masalah di mana modal 'Tetapkan nilai bidang' terhalang di halaman konfigurasi seluler ([#5701](https://github.com/nocobase/nocobase/pull/5701)) oleh @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Tanggal rilis: 21-11-2024*

### 🐛 Perbaikan Bug

- **[klien]**

  - hapus tombol "Sinkronkan dari Database" di koleksi tampilan sumber data eksternal ([#5696](https://github.com/nocobase/nocobase/pull/5696)) oleh @katherinehhh
  - tambahkan fallback untuk nilai non-string yang digunakan di `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) oleh @mytharcher
- **[Kalender]** Perbaiki acara tidak ditampilkan di blok kalender ketika tanggal mulai dan berakhir membentang antar bulan ([#5699](https://github.com/nocobase/nocobase/pull/5699)) oleh @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Tanggal rilis: 24-11-2024*

### 🐛 Perbaikan Bug

- **[klien]**
  - Perbaiki masalah lebar label untuk bidang asosiasi di tata letak horizontal ([#5709](https://github.com/nocobase/nocobase/pull/5709)) oleh @katherinehhh
  - Perbaiki tautan data asosiasi di sub-tabel bersarang dalam sub-form multi-lapisan ([#5710](https://github.com/nocobase/nocobase/pull/5710)) oleh @katherinehhh
  - Perbaiki masalah lebar label untuk bidang asosiasi di tata letak horizontal ([#5709](https://github.com/nocobase/nocobase/pull/5709)) oleh @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Tanggal rilis: 26-11-2024*

### 🚀 Peningkatan

- **[klien]** dukung pengaktifan massal plugin di antarmuka ([#5730](https://github.com/nocobase/nocobase/pull/5730)) oleh @chenos

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah lebar minimum label sub-tabel dalam mode horizontal ([#5719](https://github.com/nocobase/nocobase/pull/5719)) oleh @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Tanggal rilis: 27-11-2024*

### 🎉 Fitur Baru

- **[Otentikasi]** Memungkinkan untuk menambahkan lebih banyak bidang koleksi pengguna di formulir pendaftaran ([#5741](https://github.com/nocobase/nocobase/pull/5741)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki label opsi yang dipilih tidak dimuat pada render pertama. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) oleh @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Tanggal rilis: 27-11-2024*

### 🐛 Perbaikan Bug

- **[Notifikasi: Pesan dalam aplikasi]** Hapus logika pemotongan string judul pesan dalam aplikasi. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) oleh @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Tanggal rilis: 23-11-2024*

### 🐛 Perbaikan Bug

- **[build]** Perbaiki masalah menjalankan `yarn dev` setelah create-nocobase-app menghasilkan kesalahan ([#5708](https://github.com/nocobase/nocobase/pull/5708)) oleh @gchust

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
