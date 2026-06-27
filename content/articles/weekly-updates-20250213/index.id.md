---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: optimasi untuk perangkat seluler, peningkatan pada alur kerja, dan perbaikan bug."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**Minggu lalu kami merilis [NocoBase 1.5.0](https://www.nocobase.com/en/blog/nocobase-1-5-0), yang menghadirkan optimasi inti, impor/ekspor data skala besar, manajemen email, pencetakan template, dan banyak fitur baru lainnya.**

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Tanggal rilis: 2025-02-06*

#### 🐛 Perbaikan Bug

- **[klien]**
  - Terjemahan yang salah untuk judul `Sub-form(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) oleh @gchust
  - Ketika bidang subform diatur ke 'Hidden (reserved value)', variabel defaultnya gagal berfungsi dengan baik ([#6165](https://github.com/nocobase/nocobase/pull/6165)) oleh @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Tanggal rilis: 2025-02-06*

#### 🚀 Peningkatan

- **[Mobile]** Sembunyikan header halaman konfigurasi seluler saat tidak ada izin konfigurasi ([#6171](https://github.com/nocobase/nocobase/pull/6171)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[Workflow: node notifikasi]** Memastikan notifikasi terkirim dengan benar ketika input pengguna mengandung sintaks mirip Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) oleh @sheldon66
- **[Workflow: Node Manual]** Perbaiki nilai formulir tidak diurai saat pengiriman tombol terminal ([#6160](https://github.com/nocobase/nocobase/pull/6160)) oleh @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Tanggal rilis: 2025-02-07*

#### 🐛 Perbaikan Bug

- **[klien]**
  - Popup yang dibuka dengan mengklik bidang belongsToArray mengambil data yang salah ([#6173](https://github.com/nocobase/nocobase/pull/6173)) oleh @zhangzhonghe
  - Operator bidang waktu diatur ke "between" di formulir filter, tetapi komponen tidak berubah menjadi pemilih rentang waktu ([#6170](https://github.com/nocobase/nocobase/pull/6170)) oleh @katherinehhh
  - Formulir edit popup blok Kanban dan kalender tidak menampilkan "Unsaved changes" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) oleh @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Tanggal rilis: 2025-02-10*

#### 🚀 Peningkatan

- **[Workflow]** Tambahkan loading ke tindakan duplikat ([#6179](https://github.com/nocobase/nocobase/pull/6179)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki kesalahan yang muncul di pengaturan bidang node buat ([#6187](https://github.com/nocobase/nocobase/pull/6187)) oleh @mytharcher
  - Opsi konfigurasi 'Allow Multiple Selection' untuk bidang asosiasi tidak ditampilkan di Filter Forms ([#6174](https://github.com/nocobase/nocobase/pull/6174)) oleh @zhangzhonghe
  - Bidang tetap tersembunyi setelah disembunyikan oleh aturan tautan ([#6182](https://github.com/nocobase/nocobase/pull/6182)) oleh @zhangzhonghe
- **[utils]** optimalkan logika pembacaan storage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) oleh @chenos
- **[Notification: In-app message]** Perbaikan: Tambahkan filter pengguna ke subkueri stempel waktu dan judul pesan di API daftar saluran untuk memastikan isolasi data. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) oleh @deepure
- **[Backup manager]** File tidak disalin dari cadangan ke folder unggahan selama pemulihan mode toleran oleh @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Tanggal rilis: 2025-02-11*

#### 🚀 Peningkatan

- **[Notification: In-app message]** Tambahkan pengujian untuk mengambil judul pesan terbaru dan stempel waktu di saluran dalam aplikasi. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) oleh @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Tanggal rilis: 2025-02-12*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Blok tidak disegarkan setelah navigasi halaman ([#6200](https://github.com/nocobase/nocobase/pull/6200)) oleh @zhangzhonghe
  - Blok formulir tidak ditampilkan saat menambahkan formulir buat melalui tindakan popup di baris tabel ([#6190](https://github.com/nocobase/nocobase/pull/6190)) oleh @katherinehhh
  - Pengaturan tinggi blok tabel tidak diterapkan saat tidak ada data ([#6192](https://github.com/nocobase/nocobase/pull/6192)) oleh @katherinehhh
- **[Action: Custom request]**

  - Nilai variabel 'Current record' yang salah di tombol permintaan kustom ([#6196](https://github.com/nocobase/nocobase/pull/6196)) oleh @zhangzhonghe
  - Kompatibilitas tombol permintaan kustom dengan variabel lama ([#6194](https://github.com/nocobase/nocobase/pull/6194)) oleh @zhangzhonghe
- **[Data visualization]** Blok bagan tidak ditampilkan saat ditambahkan ke popup panel tindakan ([#6198](https://github.com/nocobase/nocobase/pull/6198)) oleh @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Tanggal rilis: 2025-02-11*

#### 🚀 Peningkatan

- **[Backup manager]** Hapus mode toleran dari UI oleh @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Tanggal rilis: 2025-02-07*

#### 🎉 Fitur Baru

- **[IP restriction]** Perbaiki kesalahan aplikasi saat konfigurasi pembatasan IP tidak ada. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[auth]** Perbarui logika middleware auth klien untuk mencegah kegagalan pembaruan token karena konkurensi. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) oleh @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Tanggal rilis: 2025-02-07*

#### 🐛 Perbaikan Bug

- **[klien]** Perbaiki opsi "Select from existing data" masih muncul saat menonaktifkan “Allow multiple ” di subform relasi to-many ([#6167](https://github.com/nocobase/nocobase/pull/6167)) oleh @katherinehhh
- **[Data source manager]** Gunakan loginWithJti untuk memperbarui kasus uji terkait autentikasi dan mencegah kesalahan. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) oleh @sheldon66
- **[WEB client]** Izin perutean tidak normal setelah upgrade ([#6177](https://github.com/nocobase/nocobase/pull/6177)) oleh @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Tanggal rilis: 2025-02-11*

#### 🎉 Fitur Baru

- **[Localization]** Lokalisasi untuk rute desktop dan seluler ([#6180](https://github.com/nocobase/nocobase/pull/6180)) oleh @2013xile

#### 🚀 Peningkatan

- **[klien]** Judul halaman default menggunakan judul rute ([#6188](https://github.com/nocobase/nocobase/pull/6188)) oleh @zhangzhonghe
- **[Data source manager]** Ubah fungsi login pengujian menjadi asinkron dan perbarui kasus uji yang relevan. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) oleh @sheldon66
- **[Workflow: Custom action event]** Perbarui kasus uji yang relevan untuk menggunakan login asinkron. oleh @sheldon66
- **[Workflow: Approval]** Perbarui kasus uji yang relevan untuk menggunakan login asinkron. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[WEB client]** Hapus judul tab halaman default ([#6178](https://github.com/nocobase/nocobase/pull/6178)) oleh @zhangzhonghe

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Platform ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
