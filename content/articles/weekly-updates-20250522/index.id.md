---
title: "Pembaruan Mingguan NocoBase: Menambahkan Dukungan Pencetakan Massal di Pencetakan Templat"
description: "Pembaruan minggu ini meliputi: bidang teks satu baris mendukung pemfilteran multi-kata kunci, menambahkan dukungan pencetakan massal di pencetakan templat, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Tanggal rilis: 18-05-2025*

#### 🚀 Peningkatan

- **[Workflow]** Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]** menangani sel string kosong selama impor bidang untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie
- **[client]**

  - tabel catatan pilih asosiasi tidak memfilter catatan yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh
  - data asosiasi tidak dikirimkan saat mengekspos bidang asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh
  - bidang urutkan yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh
- **[Workflow]** Memperbaiki batas tumpukan yang bekerja tidak benar untuk event koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher
- **[Blok: Panel aksi]** Membaca basename rute dari pemindai untuk beradaptasi dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66
- **[Workflow: Node manual]** Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki cakupan penerima tugas delegasi dan menambahkan ke penerima tugas lainnya oleh @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Tanggal rilis: 20-05-2025*

#### 🐛 Perbaikan Bug

- **[client]**
  - halaman tidak dialihkan dengan benar setelah menghapus item terakhir ([#6892](https://github.com/nocobase/nocobase/pull/6892)) oleh @katherinehhh
  - komponen kaskade di modal tidak memuat data asosiasi pada awalnya ([#6886](https://github.com/nocobase/nocobase/pull/6886)) oleh @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Tanggal rilis: 19-05-2025*

#### 🎉 Fitur Baru

- **[client]** Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran ([#6685](https://github.com/nocobase/nocobase/pull/6685)) oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filter multi-kata kunci]** Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Cetak template]** Menambahkan dukungan untuk pencetakan massal dalam pencetakan template. oleh @sheldon66

#### 🚀 Peningkatan

- **[Workflow]** Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - komponen kaskade di modal tidak memuat data asosiasi pada awalnya ([#6886](https://github.com/nocobase/nocobase/pull/6886)) oleh @katherinehhh
  - data asosiasi tidak dikirimkan saat mengekspos bidang asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh
  - bidang urutkan yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh
  - variabel formulir saat ini hilang dalam lingkup data tabel pemilih data ([#6882](https://github.com/nocobase/nocobase/pull/6882)) oleh @katherinehhh
  - tabel catatan pilih asosiasi tidak memfilter catatan yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh
- **[database]** menangani sel string kosong selama impor bidang untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie
- **[Workflow: Node manual]** Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher
- **[Manajer file]** Memperbaiki tipe ([#6873](https://github.com/nocobase/nocobase/pull/6873)) oleh @mytharcher
- **[Blok: Panel aksi]** Membaca basename rute dari pemindai untuk beradaptasi dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66
- **[Integrasi AI]** Konten tidak ditampilkan saat beralih antara halaman konfigurasi layanan LLM dan konfigurasi validasi ([#6887](https://github.com/nocobase/nocobase/pull/6887)) oleh @2013xile
- **[Workflow]** Memperbaiki batas tumpukan yang bekerja tidak benar untuk event koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki cakupan penerima tugas delegasi dan menambahkan ke penerima tugas lainnya oleh @mytharcher
- **[Manajer cadangan]** Memperbaiki kesalahan tipe dalam build oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Tanggal rilis: 21-05-2025*

#### 🎉 Fitur Baru

- **[client]**

  - Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran ([#6685](https://github.com/nocobase/nocobase/pull/6685)) oleh @zhangzhonghe
    Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - aturan tautan aksi mendukung variabel 'formulir saat ini' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) oleh @katherinehhh
- **[build]** mendukung otorisasi komersial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) oleh @jiannx
- **[undefined]** Menambahkan log plugin impor oleh @aaaaaajie
- **[Aksi: Impor catatan]** Menambahkan log plugin impor ([#6841](https://github.com/nocobase/nocobase/pull/6841)) oleh @aaaaaajie
- **[plugin-commercial]** mendukung komersial oleh @jiannx
- **[Filter multi-kata kunci]** Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Cetak template]**

  - Menambahkan dukungan untuk pencetakan massal dalam pencetakan template. oleh @sheldon66
  - Menambahkan dukungan untuk pencetakan massal dalam pencetakan template. oleh @sheldon66

#### 🚀 Peningkatan

- **[undefined]** Membangun image docker lengkap ([#6898](https://github.com/nocobase/nocobase/pull/6898)) oleh @chenos
- **[client]**

  - Mengoptimalkan masalah halaman yang menjadi semakin lambat seiring penggunaan ([#6888](https://github.com/nocobase/nocobase/pull/6888)) oleh @zhangzhonghe
  - menambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca ([#6868](https://github.com/nocobase/nocobase/pull/6868)) oleh @katherinehhh
- **[Workflow]**

  - Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher
  - Mengizinkan revisi lebih dari satu draf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) oleh @mytharcher
- **[Bidang koleksi: Lampiran(URL)]** menambahkan lebih banyak ukuran bawaan ke bidang URL lampiran untuk status baca ([#6871](https://github.com/nocobase/nocobase/pull/6871)) oleh @katherinehhh
- **[Manajer email]**

  - memperbaiki kesalahan sinkronisasi dan masalah penggunaan tidak mudah lainnya oleh @jiannx
  - menambahkan manajemen draf, mendukung tampilan email bawahan oleh @jiannx

#### 🐛 Perbaikan Bug

- **[client]**

  - aturan tautan nonaktifkan tidak berfungsi untuk tombol aksi ([#6896](https://github.com/nocobase/nocobase/pull/6896)) oleh @katherinehhh
  - halaman tidak dialihkan dengan benar setelah menghapus item terakhir ([#6892](https://github.com/nocobase/nocobase/pull/6892)) oleh @katherinehhh
  - komponen kaskade di modal tidak memuat data asosiasi pada awalnya ([#6886](https://github.com/nocobase/nocobase/pull/6886)) oleh @katherinehhh
  - tabel catatan pilih asosiasi tidak memfilter catatan yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh
  - data asosiasi tidak dikirimkan saat mengekspos bidang asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh
  - variabel formulir saat ini hilang dalam lingkup data tabel pemilih data ([#6882](https://github.com/nocobase/nocobase/pull/6882)) oleh @katherinehhh
  - bidang urutkan yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh
  - menghapus nilai sisi kanan saat operator berubah dalam aturan tautan ([#6862](https://github.com/nocobase/nocobase/pull/6862)) oleh @katherinehhh
  - operator hilang saat beralih dalam aturan tautan ([#6857](https://github.com/nocobase/nocobase/pull/6857)) oleh @katherinehhh
  - masalah tautan tombol di blok detail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) oleh @katherinehhh
  - evaluasi operator yang salah untuk variabel tanggal dalam kondisi tautan ([#6825](https://github.com/nocobase/nocobase/pull/6825)) oleh @katherinehhh
  - Bidang tersembunyi masih ditampilkan ([#6844](https://github.com/nocobase/nocobase/pull/6844)) oleh @zhangzhonghe
  - ketidakcocokan parsing variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - ketidakcocokan parsing variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - peningkatan gaya komponen nilai aturan tautan ([#6836](https://github.com/nocobase/nocobase/pull/6836)) oleh @katherinehhh
- **[database]** menangani sel string kosong selama impor bidang untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie
- **[build]** memperbaiki kesalahan runtime klien di plugin-workflow-javascript, kesalahan proses tidak terdefinisi ([#6859](https://github.com/nocobase/nocobase/pull/6859)) oleh @jiannx
- **[Manajer file]**

  - Memperbaiki URL pratinjau pada file non-gambar ([#6889](https://github.com/nocobase/nocobase/pull/6889)) oleh @mytharcher
  - Memperbaiki tipe ([#6873](https://github.com/nocobase/nocobase/pull/6873)) oleh @mytharcher
  - Memperbaiki pembuatan catatan file tanpa izin kunci asing ([#6863](https://github.com/nocobase/nocobase/pull/6863)) oleh @mytharcher
- **[Blok: Panel aksi]**

  - Membaca basename rute dari pemindai untuk beradaptasi dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66
  - Warna Panel aksi salah dalam mode gelap ([#6842](https://github.com/nocobase/nocobase/pull/6842)) oleh @zhangzhonghe
- **[Integrasi AI]** Konten tidak ditampilkan saat beralih antara halaman konfigurasi layanan LLM dan konfigurasi validasi ([#6887](https://github.com/nocobase/nocobase/pull/6887)) oleh @2013xile
- **[Workflow: Node manual]**

  - Memperbaiki kasus uji karena plugin dihapus dari daftar bawaan ([#6895](https://github.com/nocobase/nocobase/pull/6895)) oleh @mytharcher
  - Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher
  - Memperbaiki jumlah hitungan statistik yang salah pada tugas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) oleh @mytharcher
- **[Workflow]**

  - Memperbaiki batas tumpukan yang bekerja tidak benar untuk event koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher
  - Memperbaiki navigasi kembali tidak berfungsi saat langsung membuka tautan popup di pusat tugas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) oleh @mytharcher
- **[Visualisasi data]**

  - Blok grafik tidak ditampilkan saat ditambahkan ke popup yang dipicu dari aksi tingkat blok ([#6864](https://github.com/nocobase/nocobase/pull/6864)) oleh @2013xile
  - Memperbaiki kesalahan saat memfilter bidang m2m bersarang ([#6855](https://github.com/nocobase/nocobase/pull/6855)) oleh @2013xile
- **[Aksi: Ekspor catatan]**

  - meningkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor ([#6861](https://github.com/nocobase/nocobase/pull/6861)) oleh @katherinehhh
  - Memperbaiki ekspor nilai kosong dalam asosiasi bersarang dan url lampiran ([#6845](https://github.com/nocobase/nocobase/pull/6845)) oleh @aaaaaajie
- **[Blok: template]** Setelah menyimpan sebagai template warisan, kesalahan saat membuka popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) oleh @gchust
- **[Aksi: Duplikat catatan]** modal menutup pada klik input pertama saat mengedit data duplikat ([#6848](https://github.com/nocobase/nocobase/pull/6848)) oleh @katherinehhh
- **[Workflow: test kit]** Memperbaiki kasus uji yang gagal karena plugin preset yang diperlukan ([#6839](https://github.com/nocobase/nocobase/pull/6839)) oleh @mytharcher
- **[Workflow: Event pasca-aksi]** Memperbaiki variabel pengguna yang bertindak tidak dapat diakses di template Hanldebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) oleh @mytharcher
- **[plugin-commercial]**

  - memperbaiki log komersial yang dikirim ke crm dan terjemahan teks oleh @jiannx
  - menggunakan rantai prototipe untuk mengimplementasikan fungsi withCommercial oleh @jiannx
- **[Aksi: Ekspor catatan Pro]**

  - meningkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor pro oleh @katherinehhh
  - Memperbaiki kesalahan ekspor teks panjang. oleh @aaaaaajie
- **[Workflow: Subflow]** Memperbaiki pemicu tidak terdefinisi yang menyebabkan crash halaman oleh @mytharcher
- **[Cetak template]**

  - Memperbaiki masalah pemformat tidak ditemukan. oleh @sheldon66
  - Memperbaiki pemformat tidak ditemukan oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]**

  - kedaluwarsa url akses tidak valid oleh @jiannx
  - Mengubah untuk menggunakan bidang koleksi untuk menemukan penyimpanan oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki jumlah hitungan statistik yang salah pada tugas oleh @mytharcher
  - Memperbaiki cakupan penerima tugas delegasi dan menambahkan ke penerima tugas lainnya oleh @mytharcher
- **[Manajer email]**

  - memperbaiki kesalahan ts oleh @jiannx
  - api daftar mendukung penggabungan subjek oleh @jiannx
- **[Manajer cadangan]** Memperbaiki kesalahan tipe dalam build oleh @mytharcher
