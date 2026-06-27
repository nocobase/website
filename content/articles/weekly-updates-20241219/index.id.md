---
title: "Pembaruan Mingguan NocoBase: Optimalkan Pengalaman Seluler"
description: "Pembaruan minggu ini meliputi: optimalisasi interaksi seluler, perbaikan bug, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Tanggal rilis: 2024-12-12*

#### 🐛 Perbaikan Bug

- **[sdk]** Hapus lokal default ([#5867](https://github.com/nocobase/nocobase/pull/5867)) oleh @chenos
- **[klien]**

  - Perbaiki masalah di mana variabel bidang asosiasi bersarang dalam lingkup data memiliki nilai kosong ([#5866](https://github.com/nocobase/nocobase/pull/5866)) oleh @zhangzhonghe
  - Perbaiki bilah gulir yang muncul ketika ada lebih sedikit kolom dengan kolom tetap kanan ([#5864](https://github.com/nocobase/nocobase/pull/5864)) oleh @katherinehhh
  - Perbaiki gaya posisi yang salah dari komponen `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) oleh @mytharcher
- **[Manajer Cadangan]** Memperbaiki kegagalan unduhan cadangan untuk sub-aplikasi dengan domain kustom oleh @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Tanggal rilis: 2024-12-12*

#### 🎉 Fitur Baru

- **[Aksi: Permintaan Kustom]** Mendukung penggunaan variabel 'Formulir Saat Ini' di tombol permintaan kustom ([#5871](https://github.com/nocobase/nocobase/pull/5871)) oleh @zhangzhonghe

#### 🚀 Peningkatan

- **[Visualisasi Data]** Memungkinkan penggunaan kunci asing dalam konfigurasi kueri bagan ([#5869](https://github.com/nocobase/nocobase/pull/5869)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah di mana pemilih tabel file tidak ditampilkan dalam mode non-konfigurasi saat menggunakan pilih file ([#5874](https://github.com/nocobase/nocobase/pull/5874)) oleh @katherinehhh
- **[Kontrol Akses]** Memperbaiki masalah terkait catatan replikasi setelah mengonfigurasi izin ([#5839](https://github.com/nocobase/nocobase/pull/5839)) oleh @chareice
- **[Alur Kerja]** Perbaiki batas waktu transaksi saat menghapus eksekusi secara otomatis ([#5870](https://github.com/nocobase/nocobase/pull/5870)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Tanggal rilis: 2024-12-13*

#### 🚀 Peningkatan

- **[Otentikasi]** Optimalkan logika mendapatkan metadata tindakan audit. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) oleh @chenzhizdt

#### 🐛 Perbaikan Bug

- **[Visualisasi Data]** Perbaiki tinggi awal blok bagan ([#5879](https://github.com/nocobase/nocobase/pull/5879)) oleh @2013xile
- **[Alur Kerja]** Perbaiki kesalahan yang muncul saat melanjutkan node asinkron dalam menjalankan alur kerja secara manual ([#5877](https://github.com/nocobase/nocobase/pull/5877)) oleh @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Tanggal rilis: 2024-12-15*

#### 🎉 Fitur Baru

- **[Seluler]** tambahkan sakelar global untuk mengontrol semua tombol kembali di perangkat seluler (diaktifkan secara default) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[Sinkronisasi data pengguna]** Perbaiki masalah tampilan tombol sinkronisasi dan tugas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) oleh @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Tanggal rilis: 2024-12-18*

#### 🚀 Peningkatan

- **[Seluler]** Adaptasi komponen pemilih rentang waktu & tanggal untuk perangkat seluler ([#5863](https://github.com/nocobase/nocobase/pull/5863)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[Sumber Data: Utama]** Perbaiki masalah di mana bidang sistem dalam blok formulir filter tidak dapat diedit ([#5885](https://github.com/nocobase/nocobase/pull/5885)) oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Tanggal rilis: 2024-12-11*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki masalah di mana judul tab browser tidak diperbarui setelah berpindah halaman ([#5857](https://github.com/nocobase/nocobase/pull/5857)) oleh @zhangzhonghe
  - Perbaiki masalah di mana menyegarkan halaman di halaman manajemen sumber data mengarahkan ke beranda ([#5855](https://github.com/nocobase/nocobase/pull/5855)) oleh @zhangzhonghe
  - Perbaiki masalah data tidak berubah setelah paginasi di sub-tabel ([#5856](https://github.com/nocobase/nocobase/pull/5856)) oleh @zhangzhonghe
  - Perbaiki masalah di mana data peran tidak ditampilkan di tabel manajemen pengguna ([#5846](https://github.com/nocobase/nocobase/pull/5846)) oleh @zhangzhonghe
  - Perbaiki masalah di mana bidang asosiasi dalam templat referensi terkadang tidak menampilkan data ([#5848](https://github.com/nocobase/nocobase/pull/5848)) oleh @zhangzhonghe
  - Perbaiki masalah di mana tombol 'Permintaan Kustom' tidak segera terlihat setelah ditambahkan ([#5845](https://github.com/nocobase/nocobase/pull/5845)) oleh @zhangzhonghe
  - Cegah halaman tersembunyi mempengaruhi interaksi dengan halaman lain ([#5836](https://github.com/nocobase/nocobase/pull/5836)) oleh @zhangzhonghe
  - Perbaiki masalah di mana blok yang ditambahkan di jendela popup tidak ditampilkan saat membuka kembali popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) oleh @zhangzhonghe
- **[server]** Tetapkan tindakan yang tersedia default untuk ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) oleh @chenos

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
