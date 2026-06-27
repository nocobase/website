---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: penambahan opsi konfigurasi terkait tanda tangan, dukungan manajer email untuk sinkronisasi ulang, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Tanggal rilis: 2025-08-05*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana string mentah variabel dikirimkan dengan formulir ([#7337](https://github.com/nocobase/nocobase/pull/7337)) oleh @zhangzhonghe
- **[Workflow: Persetujuan]** Menambahkan judul tugas untuk item yang ditambahkan dan didelegasikan oleh @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Tanggal rilis: 2025-08-04*

#### 🎉 Fitur Baru

- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile

#### 🚀 Peningkatan

- **[Workflow: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki tooltip yang menampilkan [object Object] saat dihover di panel aksi ([#7322](https://github.com/nocobase/nocobase/pull/7322)) oleh @katherinehhh
  - Saat menggunakan variabel untuk menetapkan nilai default bidang di formulir filter, jika nilai variabel kosong, kotak input akan menampilkan string variabel asli ([#7335](https://github.com/nocobase/nocobase/pull/7335)) oleh @zhangzhonghe
- **[Collection: Pohon]** Memperbaiki logika sinkronisasi jalur dari koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Tanggal rilis: 2025-08-01*

#### 🎉 Fitur Baru

- **[client]** Menambahkan opsi "Fokus otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input selama rendering halaman awal saat diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki item pratinjau file pada url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) oleh @mytharcher
  - Menambahkan URL lengkap ke file lokal saat mempratinjau ([#7314](https://github.com/nocobase/nocobase/pull/7314)) oleh @mytharcher
- **[utils]** Penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh
- **[undefined]** Menambahkan plugin baru ke preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher
- **[Manajer file]** Memperbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher
- **[Workflow]** Memperbaiki hasil `undefined` saat prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher
- **[Workflow: Node perhitungan dinamis]** Memperbaiki kesalahan yang disebabkan oleh API lama ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher
- **[Workflow: Subflow]** Memperbaiki aliran yang ditangguhkan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Tanggal rilis: 2025-08-06*

#### 🐛 Perbaikan Bug

- **[Manajer email]** mendukung sinkronisasi ulang oleh @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Tanggal rilis: 2025-08-06*

#### 🚀 Peningkatan

- **[Workflow]** Judul alur kerja di kartu tugas tidak akan lagi ditampilkan dengan garis coret, meskipun versi yang sesuai dinonaktifkan ([#7339](https://github.com/nocobase/nocobase/pull/7339)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Visualisasi data]** masalah variabel tanggal di nilai default bidang tanggal di blok filter bagan ([#7291](https://github.com/nocobase/nocobase/pull/7291)) oleh @katherinehhh
- **[Workflow: CC]** Memperbaiki blok yang tidak dapat dihapus ([#7338](https://github.com/nocobase/nocobase/pull/7338)) oleh @mytharcher
- **[Manajer email]** Membedakan secara manual antara meneruskan dan membalas oleh @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Tanggal rilis: 2025-08-05*

#### 🎉 Fitur Baru

- **[client]** Menambahkan opsi "Fokus otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input selama rendering halaman awal saat diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe
- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile

#### 🚀 Peningkatan

- **[Workflow: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana string mentah variabel dikirimkan dengan formulir ([#7337](https://github.com/nocobase/nocobase/pull/7337)) oleh @zhangzhonghe
  - Memperbaiki tooltip yang menampilkan [object Object] saat dihover di panel aksi ([#7322](https://github.com/nocobase/nocobase/pull/7322)) oleh @katherinehhh
  - Saat menggunakan variabel untuk menetapkan nilai default bidang di formulir filter, jika nilai variabel kosong, kotak input akan menampilkan string variabel asli ([#7335](https://github.com/nocobase/nocobase/pull/7335)) oleh @zhangzhonghe
- **[undefined]** Menambahkan plugin baru ke preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher
- **[Collection: Pohon]** Memperbaiki logika sinkronisasi jalur dari koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu
- **[Pratinjau File Office]** Mendukung file `.docx`, `.xlsx`, dan `.pptx` dengan hanya URL untuk dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher
- **[Workflow: Node perhitungan dinamis]** Memperbaiki kesalahan yang disebabkan oleh API lama ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher
- **[Workflow: Persetujuan]** Menambahkan judul tugas untuk item yang ditambahkan dan didelegasikan oleh @mytharcher
- **[Manajer email]** Mendukung email yang sama untuk banyak orang oleh @jiannx
