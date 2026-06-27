---
title: "Pembaruan Mingguan NocoBase: Dukung Konfigurasi Formulir Profil Pengguna"
description: "Pembaruan minggu ini meliputi: dukungan konfigurasi formulir profil pengguna serta formulir buat dan edit dalam manajemen pengguna, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi Alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Tanggal rilis: 2024-12-18*

#### 🚀 Peningkatan

- **[klien]** Membuat lebih banyak komponen mendukung item konfigurasi 'Konten overflow elipsis' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) oleh @zhangzhonghe
- **[database]** menambahkan firstOrCreate & updateOrCreate ke repositori relasi ([#5894](https://github.com/nocobase/nocobase/pull/5894)) oleh @chareice

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki parameter x-data-source yang hilang dalam template permintaan duplikat untuk blok sumber data eksternal ([#5882](https://github.com/nocobase/nocobase/pull/5882)) oleh @katherinehhh
  - Memperbaiki masalah scrollbar horizontal di tabel dalam plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) oleh @katherinehhh
  - Memperbaiki masalah di mana opsi 'N/A' tambahan terkadang muncul di dropdown bidang asosiasi ([#5878](https://github.com/nocobase/nocobase/pull/5878)) oleh @zhangzhonghe
  - Memperbaiki masalah pembuatan tampilan PG, menyelesaikan kesalahan saat memilih tampilan di seluruh skema ([#5881](https://github.com/nocobase/nocobase/pull/5881)) oleh @katherinehhh
  - Memperbaiki masalah dengan gaya grup di blok formulir ketika tata letak diatur ke horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) oleh @katherinehhh
- **[Pengguna]**

  - Memperbaiki masalah di mana formulir tidak direset setelah menambah atau mengedit pengguna di manajemen pengguna. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) oleh @2013xile
  - Memperbaiki masalah di mana pengaturan paginasi direset setelah mengedit dan mengirimkan profil pengguna pada manajemen pengguna setelah perpindahan halaman atau perubahan ukuran halaman. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki masalah pemfilteran dengan Koleksi sumber data eksternal ([#5890](https://github.com/nocobase/nocobase/pull/5890)) oleh @chareice
- **[Formulir publik]** Memperbaiki masalah di mana peralihan tema global mempengaruhi tema halaman pratinjau formulir publik ([#5883](https://github.com/nocobase/nocobase/pull/5883)) oleh @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Tanggal rilis: 2024-12-19*

#### 🚀 Peningkatan

- **[Koleksi: SQL]** Melarang penggunaan kata kunci dan fungsi berbahaya dalam SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) oleh @2013xile
- **[Editor tema]** Mengoptimalkan validasi API untuk pengeditan profil pengguna dan pembaruan kata sandi ([#5912](https://github.com/nocobase/nocobase/pull/5912)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[Sumber data: Utama]** Memperbaiki masalah pemuatan kunci asing ([#5903](https://github.com/nocobase/nocobase/pull/5903)) oleh @chareice
- **[Koleksi: SQL]** Memperbaiki masalah di mana bidang menghilang setelah memperbarui Koleksi SQL. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) oleh @chareice
- **[Manajer cadangan]** Memperbaiki pemulihan cadangan yang tidak berfungsi di Windows oleh @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Tanggal rilis: 2024-12-21*

#### 🐛 Perbaikan Bug

- **[Visualisasi data]** Memperbaiki kesalahan saat memfilter dengan asosiasi many to many bersarang dalam kueri bagan. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) oleh @2013xile
- **[Workflow: Node agregat]** Memperbaiki hasil agregasi yang salah yang disebabkan oleh transaksi ([#5916](https://github.com/nocobase/nocobase/pull/5916)) oleh @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Tanggal rilis: 2024-12-25*

#### 🐛 Perbaikan Bug

- **[server]** Koleksi tidak dibuat secara otomatis saat mengaktifkan plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) oleh @chenos
- **[klien]** Memperbaiki pencarian bidang properti dalam aturan tautan yang tidak cocok dengan data yang benar ([#5925](https://github.com/nocobase/nocobase/pull/5925)) oleh @katherinehhh
- **[Workflow]**

  - Memperbaiki pemicu jadwal pada bidang tanggal tanpa zona waktu ([#5938](https://github.com/nocobase/nocobase/pull/5938)) oleh @mytharcher
  - Memperbaiki terjemahan variabel lingkup tanggal ([#5919](https://github.com/nocobase/nocobase/pull/5919)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Tanggal rilis: 2024-12-21*

#### 🚀 Peningkatan

- **[Visualisasi data]** Menambahkan parameter offset ke charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) oleh @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Tanggal rilis: 2024-12-21*

#### 🐛 Perbaikan Bug

- **[Visualisasi data]** Memperbaiki kesalahan saat memfilter dengan asosiasi many to many bersarang dalam kueri bagan. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) oleh @2013xile
- **[Workflow: Node agregat]** Memperbaiki hasil agregasi yang salah yang disebabkan oleh transaksi ([#5916](https://github.com/nocobase/nocobase/pull/5916)) oleh @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Tanggal rilis: 2024-12-23*

#### 🎉 Fitur Baru

- **[klien]** Menambahkan rentang tanggal terbatas ke komponen bidang tanggal ([#5852](https://github.com/nocobase/nocobase/pull/5852)) oleh @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Tanggal rilis: 2024-12-24*

#### 🐛 Perbaikan Bug

- **[build]** Memperbaiki masalah pemuatan setelah mengatur variabel lingkungan `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) oleh @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Tanggal rilis: 2024-12-19*

#### 🎉 Fitur Baru

- **[klien]** Mendukung pemilihan data yang ada di subform untuk bidang asosiasi to-many ([#5849](https://github.com/nocobase/nocobase/pull/5849)) oleh @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Tanggal rilis: 2024-12-25*

#### 🎉 Fitur Baru

- **[Pengguna]** Mendukung konfigurasi formulir profil pengguna serta formulir buat dan edit di manajemen pengguna. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) oleh @2013xile

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
