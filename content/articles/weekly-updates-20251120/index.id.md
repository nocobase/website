---
title: "Pembaruan Mingguan NocoBase: Tambahkan Karyawan AI untuk Mengonfigurasi Grafik"
description: "Pembaruan minggu ini meliputi: menambahkan karyawan AI untuk mengonfigurasi grafik, mengoptimalkan gaya bilah alat untuk mencegah ikon terhalang, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Tanggal rilis: 2025-11-19*

### 🐛 Perbaikan Bug

- **[Alur Kerja: Acara tindakan kustom]** Perbaiki kesalahan yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada oleh @mytharcher
- **[Cetak templat]** parsing variabel dalam filter oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki masalah di mana kondisi balapan yang terjadi selama pemrosesan persetujuan bersamaan oleh beberapa penyetuju dapat menyebabkan node alur kerja dieksekusi lebih dari satu kali oleh @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Tanggal rilis: 2025-11-18*

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe
- **[server]** Perbaiki masalah dalam mode pemisahan layanan di mana pesan antrian yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher
- **[Alur Kerja]**

  - Perbaiki kesalahan yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher
  - Gunakan eventQueue alih-alih backgroundJob bersama untuk mencegah antrian bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Perbaiki namespace bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher
- **[Kontrol akses]** Masalah cuplikan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Perbaiki masalah di mana ukuran halaman saluran notifikasi pemuatan tidak cukup besar, dan menyebabkan daftar tidak dimuat sepenuhnya oleh @mytharcher
  - Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi oleh @zhangzhonghe
  - Perbaiki format tanggal pada kartu daftar persetujuan di pusat tugas untuk menampilkan tanggal dan waktu yang lengkap oleh @mytharcher
  - Perbaiki masalah kinerja yang terjadi saat menanyakan daftar catatan persetujuan selama pengajuan persetujuan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Tanggal rilis: 2025-11-19*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana judul dan deskripsi tidak ditampilkan di blok JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) oleh @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Tanggal rilis: 2025-11-19*

### 🎉 Fitur Baru

- **[Visualisasi data]** tambahkan karyawan AI untuk mengonfigurasi bagan ([#7815](https://github.com/nocobase/nocobase/pull/7815)) oleh @heziqiang

### 🚀 Peningkatan

- **[flow-engine]**

  - Mendukung mendengarkan acara perubahan pohon model aliran di flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) oleh @gchust
  - meningkatkan resolusi variabel catatan saat ini, membuat pembukaan dialog lebih cepat ([#7895](https://github.com/nocobase/nocobase/pull/7895)) oleh @gchust
  - Mengoptimalkan struktur API perpustakaan pihak ketiga dalam konteks runjs dan menambahkan dukungan untuk perpustakaan ikon Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) oleh @gchust
- **[database]** Merefaktor plugin enkripsi bidang untuk meningkatkan keamanan, mendukung pembuatan dan rotasi kunci aplikasi, dan kunci enkripsi per bidang. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) oleh @cgyrock
- **[Bidang koleksi: Enkripsi]** Plugin enkripsi bidang yang dioptimalkan untuk mendukung pengambilan data dengan IV independen oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana blok tersembunyi masih menempati ruang di halaman. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) oleh @gchust
  - Perbaiki masalah di mana tombol reset di tombol filter menghapus kondisi default ([#7903](https://github.com/nocobase/nocobase/pull/7903)) oleh @zhangzhonghe
  - perbaiki pemeriksaan izin yang salah untuk bidang subformulir di formulir baru ([#7902](https://github.com/nocobase/nocobase/pull/7902)) oleh @katherinehhh
- **[server]** Perbaiki masalah dalam mode pemisahan layanan di mana pesan antrian yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher
- **[Alur Kerja]**

  - Perbaiki kesalahan yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher
  - Gunakan eventQueue alih-alih backgroundJob bersama untuk mencegah antrian bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Perbaiki namespace bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher
- **[Kontrol akses]** Masalah cuplikan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile
- **[Alur Kerja: Acara tindakan kustom]** Perbaiki kesalahan yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada oleh @mytharcher
- **[Komentar]** perbaiki masalah ketika komentar yang dikutip di blok komentar gagal ditampilkan oleh @katherinehhh
- **[Cetak templat]** parsing variabel dalam filter oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki masalah di mana kondisi balapan yang terjadi selama pemrosesan persetujuan bersamaan oleh beberapa penyetuju dapat menyebabkan node alur kerja dieksekusi lebih dari satu kali oleh @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Tanggal rilis: 2025-11-18*

### 🚀 Peningkatan

- **[flow-engine]** Optimalkan gaya bilah alat untuk mencegah ikon terhalang ([#7883](https://github.com/nocobase/nocobase/pull/7883)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana data izin ACL tidak dimuat ulang setelah logout dan login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) oleh @gchust
- **[klien]** perbaiki masalah dalam pengaturan item formulir ([#7867](https://github.com/nocobase/nocobase/pull/7867)) oleh @katherinehhh
- **[Visualisasi data]** Gunakan mode debug sumber daya sql hanya selama pratinjau bagan ([#7893](https://github.com/nocobase/nocobase/pull/7893)) oleh @heziqiang
- **[Multi-ruang]** pengguna terkait multi-ruang oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Perbaiki masalah di mana ukuran halaman saluran notifikasi pemuatan tidak cukup besar, dan menyebabkan daftar tidak dimuat sepenuhnya oleh @mytharcher
  - Perbaiki masalah kinerja yang terjadi saat menanyakan daftar catatan persetujuan selama pengajuan persetujuan oleh @mytharcher
  - Perbaiki format tanggal pada kartu daftar persetujuan di pusat tugas untuk menampilkan tanggal dan waktu yang lengkap oleh @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Tanggal rilis: 2025-11-17*

### 🚀 Peningkatan

- **[klien]** Adaptasi Komponen untuk Perangkat Seluler ([#7870](https://github.com/nocobase/nocobase/pull/7870)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah konfigurasi bidang JS default tidak menggunakan pengaturan mode tampilan. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) oleh @gchust
  - Perbaiki masalah di mana templat duplikat tidak muncul, yang disebabkan oleh menyeret lalu menghapus templat yang direferensikan ([#7847](https://github.com/nocobase/nocobase/pull/7847)) oleh @zhangzhonghe
  - Memperbaiki masalah tentang tidak dapat mengatur nilai default bidang tanggal di model blok formulir filter. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) oleh @gchust
  - Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe
  - Memperbaiki masalah operasi edit cepat di blok tabel tidak memperbarui data dengan benar. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) oleh @gchust
  - Perbaiki masalah di mana bidang teks kaya tidak dapat memasukkan nilai default dan bidang pilihan ganda tidak dapat memilih beberapa opsi. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) oleh @gchust
- **[Manajer multi-aplikasi (usang)]** Setelah sub-aplikasi berhenti, publikasikan pesan sinkronisasi untuk memberi tahu node lain untuk menghentikan sub-aplikasi yang sesuai ([#7849](https://github.com/nocobase/nocobase/pull/7849)) oleh @2013xile
- **[Alur Kerja: Persetujuan]** Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi oleh @zhangzhonghe
- **[Manajer email]** Kesalahan refresh ShadowHtml oleh @jiannx
