---
title: "Pembaruan Mingguan｜Menambahkan blok filter pohon"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 09 April hingga 16 April 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Tanggal rilis: 2026-04-14*

### 🚀 Peningkatan

- **[tidak ditentukan]**

  - Menambahkan Daftar Isi ke README Bahasa Prancis ([#9037](https://github.com/nocobase/nocobase/pull/9037)) oleh @saraTabbane
  - Menambahkan konsistensi TOC di seluruh README yang dilokalkan ([#9038](https://github.com/nocobase/nocobase/pull/9038)) oleh @gaston98765
  - Menambahkan terjemahan Bahasa Arab untuk halaman beranda dokumentasi ([#9043](https://github.com/nocobase/nocobase/pull/9043)) oleh @gaston98765
  - Dokumen: menambahkan terjemahan Bahasa Arab untuk halaman pengantar memulai ([#9044](https://github.com/nocobase/nocobase/pull/9044)) oleh @gaston98765
- **[klien]** menambahkan sakelar verifikasi wajib isi formulir ([#9060](https://github.com/nocobase/nocobase/pull/9060)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[utils]** Menambahkan kontrol keamanan untuk pengiriman permintaan HTTP server, untuk menghindari kemungkinan SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) oleh @mytharcher
  Referensi: [Variabel lingkungan](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Tanggal rilis: 2026-04-10*

### 🐛 Perbaikan Bug

- **[klien]** memperbaiki kesalahan sub-tabel menambahkan bidang banyak-ke-banyak ([#9070](https://github.com/nocobase/nocobase/pull/9070)) oleh @jiannx
- **[mesin-alur]** Memperbaiki masalah bahwa bidang banyak-ke-satu dari sumber data eksternal tidak dapat ditambahkan di blok tabel ([#9068](https://github.com/nocobase/nocobase/pull/9068)) oleh @jiannx
- **[Manajer notifikasi]** Mengoptimalkan kinerja pengiriman notifikasi dalam aplikasi dalam skenario alur kerja ([#9066](https://github.com/nocobase/nocobase/pull/9066)) oleh @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Tanggal rilis: 2026-04-09*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana popup pengambilan rekaman dari tombol pemilihan sub-tabel tidak dapat menyelesaikan nilai variabel item induk dengan benar. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) oleh @gchust
- **[Bidang koleksi: Kode]** Memperbaiki antarmuka UI dari bidang kode ([#9061](https://github.com/nocobase/nocobase/pull/9061)) oleh @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Tanggal rilis: 2026-04-14*

### 🚀 Peningkatan

- **[tidak ditentukan]**

  - Menambahkan konsistensi TOC di seluruh README yang dilokalkan ([#9038](https://github.com/nocobase/nocobase/pull/9038)) oleh @gaston98765
  - Menambahkan Daftar Isi ke README Bahasa Prancis ([#9037](https://github.com/nocobase/nocobase/pull/9037)) oleh @saraTabbane
- **[server]** Meningkatkan dokumentasi API swagger dari manajer plugin ([#9080](https://github.com/nocobase/nocobase/pull/9080)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki masalah di mana pesan kesalahan tidak ditampilkan dalam percakapan karyawan AI ([#9097](https://github.com/nocobase/nocobase/pull/9097)) oleh @cgyrock
- **[Kontrol akses]** memperbarui acl swagger untuk server mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) oleh @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Tanggal rilis: 2026-04-10*

### 🎉 Fitur Baru

- **[Blok: Pohon]** Menambahkan blok filter pohon ([#9016](https://github.com/nocobase/nocobase/pull/9016)) oleh @jiannx
- **[Auth: Kunci API]** menambahkan perintah `pm list` dan `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) oleh @chenos
- **[Karyawan AI]**

  - Menambahkan alat kueri data dan alat laporan analisis bisnis untuk karyawan AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) oleh @2013xile
  - Menambahkan alat pencarian web berbasis LLM untuk karyawan AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) oleh @cgyrock
- **[Manajer migrasi]** mendukung perintah migrasi oleh @chenos
- **[Manajer email]** gmail mendukung pengiriman email dengan alias oleh @jiannx

### 🐛 Perbaikan Bug

- **[mesin-alur]** Memperbaiki masalah bahwa bidang banyak-ke-satu dari sumber data eksternal tidak dapat ditambahkan di blok tabel ([#9068](https://github.com/nocobase/nocobase/pull/9068)) oleh @jiannx
- **[klien]**

  - memperbaiki kesalahan sub-tabel menambahkan bidang banyak-ke-banyak ([#9070](https://github.com/nocobase/nocobase/pull/9070)) oleh @jiannx
  - Memperbaiki masalah di mana popup pengambilan rekaman dari tombol pemilihan sub-tabel tidak dapat menyelesaikan nilai variabel item induk dengan benar. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) oleh @gchust
  - Memperbaiki masalah di mana pesan konfirmasi perubahan belum disimpan yang salah akan muncul untuk tindakan edit massal ([#9054](https://github.com/nocobase/nocobase/pull/9054)) oleh @gchust
  - Memperbaiki masalah di mana popup konfirmasi sekunder yang salah akan muncul saat mengirimkan formulir setelah membuat rekaman melalui sub-tabel popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) oleh @gchust
  - Memperbaiki masalah di mana ctx.request tidak dapat menimpa header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) oleh @gchust
- **[manajer-sumber-data]** Memperbaiki masalah di mana beberapa tipe bidang tidak diperbarui dengan benar setelah menyinkronkan bidang dari basis data ([#9046](https://github.com/nocobase/nocobase/pull/9046)) oleh @2013xile
- **[Manajer notifikasi]** Mengoptimalkan kinerja pengiriman notifikasi dalam aplikasi dalam skenario alur kerja ([#9066](https://github.com/nocobase/nocobase/pull/9066)) oleh @mytharcher
- **[Bidang koleksi: Kode]** Memperbaiki antarmuka UI dari bidang kode ([#9061](https://github.com/nocobase/nocobase/pull/9061)) oleh @2013xile
- **[Node permintaan HTTP alur kerja]** Membersihkan hasil node permintaan alur kerja untuk menghindari mengekspos konfigurasi permintaan, menetapkan default node baru untuk hanya mengembalikan data respons, dan menambahkan pencatatan debug untuk permintaan yang gagal. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki masalah di mana membatalkan penalaran karyawan AI akan menyebabkan layanan mogok ([#9031](https://github.com/nocobase/nocobase/pull/9031)) oleh @cgyrock
  - Memperbaiki kegagalan unggah dokumen karyawan AI di bawah akses subpath dengan APP_PUBLIC_PATH yang dikonfigurasi. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) oleh @cgyrock
  - Memperbaiki masalah saat menggunakan model Deepseek atau MiniMax di dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) oleh @cgyrock
