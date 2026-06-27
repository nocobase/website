---
title: "Pembaruan Mingguan｜Optimasi dan Perbaikan Bug"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 29 Januari hingga 5 Februari 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Tanggal rilis: 02-02-2026*

### 🚀 Peningkatan

- **[Auth: DingTalk]** Gunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]** Perbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher
- **[WeCom]** Perbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis ketika ponsel tidak ada oleh @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Tanggal rilis: 02-02-2026*

### 🚀 Peningkatan

- **[klien]** Dukung penonaktifan parameter appends default yang berlebihan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Workflow]** Tambahkan toleransi kesalahan untuk komponen pilih catatan koleksi, untuk menghindari kesalahan yang muncul ketika koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher
- **[Manajer file]** Amankan jalur file untuk penyimpanan lokal, untuk menghindari jalur akses di luar root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher
- **[Workflow: Subflow]** Perbaiki jalur rute tautan alur kerja oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Tanggal rilis: 05-02-2026*

### 🎉 Fitur Baru

- **[Auth: DingTalk]** Memungkinkan untuk mengikat pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[klien]** sesuaikan pengaturan lebar kolom ke pemilihan dropdown di sub-tabel yang dapat diedit sebaris ([#8561](https://github.com/nocobase/nocobase/pull/8561)) oleh @katherinehhh
- **[Bidang Koleksi: Markdown(Vditor)]** Menambahkan opsi konfigurasi untuk mengatur mode edit default di pengaturan komponen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) oleh @Cyx649312038
- **[Multi-ruang]** kontrol izin multi-ruang mengakses acl oleh @jiannx
- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki masalah di mana menggunakan "Buat Cepat" pemilih catatan asosiasi di formulir edit menimpa data formulir yang ada. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) oleh @gchust
  - Perbaiki masalah ruang kosong di tata letak Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) oleh @zhangzhonghe
  - Perbaiki penyegaran halaman yang diperlukan untuk menambahkan catatan anak setelah mengaktifkan tabel pohon ([#8574](https://github.com/nocobase/nocobase/pull/8574)) oleh @katherinehhh
  - Perbaiki lebar kolom tidak diperbarui di subtable (edit sebaris); input teks multi-baris tidak mengubah ukuran dengan lebar kolom ([#8573](https://github.com/nocobase/nocobase/pull/8573)) oleh @katherinehhh
  - Perbaiki masalah di mana menu "Form (Tambah baru)" salah ditampilkan di popup aksi "Buat baru". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) oleh @gchust
- **[flow-engine]**

  - Perbaiki masalah di mana beberapa pustaka pihak ketiga tidak dapat diimpor dengan benar di blok JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) oleh @gchust
  - Perbaiki masalah di mana mengirimkan formulir setelah mengganti halaman tidak menyegarkan halaman. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) oleh @gchust
- **[Template UI]** Perbaiki kesalahan saat membuka kembali dan mengirimkan template popup yang disimpan untuk formulir "Tambah baru" bidang asosiasi. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) oleh @gchust
- **[Bidang Koleksi: Lampiran(URL)]** Perbaiki konfigurasi tampilan nama file bidang URL lampiran tidak berfungsi di formulir edit ([#8571](https://github.com/nocobase/nocobase/pull/8571)) oleh @katherinehhh
- **[Karyawan AI]** Perbaiki masalah di mana node LLM gagal mengirim pesan ([#8569](https://github.com/nocobase/nocobase/pull/8569)) oleh @2013xile
- **[Aksi: Impor catatan]** Perbaiki kerentanan aksi impor ([#8544](https://github.com/nocobase/nocobase/pull/8544)) oleh @mytharcher
- **[Workflow: Acara aksi kustom]** Perbaiki masalah di mana parameter dan payload salah ketika memicu alur kerja kustom oleh @mytharcher
- **[Multi-ruang]**

  - tambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx
  - hapus atribut read-pretty untuk bidang ruang oleh @jiannx
- **[Workflow: Persetujuan]** Perbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Tanggal rilis: 02-02-2026*

### 🎉 Fitur Baru

- **[flow-engine]** dukung env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) oleh @chenos

### 🚀 Peningkatan

- **[acl]** acl menambahkan metode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) oleh @jiannx
- **[klien]** Dukung penonaktifan parameter appends default yang berlebihan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile
- **[Auth: DingTalk]** Gunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana alur peristiwa gagal diterapkan saat menyegarkan blok target di seluruh popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) oleh @gchust
  - Perbaiki masalah di mana data halaman disegarkan secara tidak benar setelah membuka dan menutup popup untuk pertama kalinya. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) oleh @gchust
  - Memperbaiki masalah yang menyebabkan blok data disegarkan berulang kali setelah mengirimkan formulir. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) oleh @gchust
  - perbaiki bidang nanoid tidak menghasilkan ulang nilai default setelah pengiriman buat ([#8538](https://github.com/nocobase/nocobase/pull/8538)) oleh @katherinehhh
  - perbaiki tampilan yang salah saat mengatur nilai default untuk model bidang cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) oleh @katherinehhh
- **[flow-engine]** Memperbaiki pemuatan yang salah dari beberapa pustaka ESM di runjs karena salah klasifikasi sebagai modul AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) oleh @gchust
- **[Manajer file]** Amankan jalur file untuk penyimpanan lokal, untuk menghindari jalur akses di luar root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher
- **[Workflow]** Tambahkan toleransi kesalahan untuk komponen pilih catatan koleksi, untuk menghindari kesalahan yang muncul ketika koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher
- **[Karyawan AI]** Perbaiki pengecualian yang terjadi ketika alat dipanggil secara otomatis selama pemodelan data ai ([#8532](https://github.com/nocobase/nocobase/pull/8532)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Perbaiki jumlah angka dalam hasil impor dan terjemahan pesan oleh @mytharcher
- **[Workflow: Subflow]** Perbaiki jalur rute tautan alur kerja oleh @mytharcher
- **[Cetak template]** perbaiki masalah tampilan daftar bidang di konfigurasi aksi cetak template oleh @katherinehhh
- **[Workflow: Persetujuan]**

  - Perbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika alur kerja audiens dinonaktifkan oleh @mytharcher
  - Tambahkan toleransi kesalahan pada alur kerja yang dihapus, untuk menghindari kesalahan pemuatan di daftar tugas oleh @mytharcher
- **[WeCom]** Perbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis ketika ponsel tidak ada oleh @2013xile
