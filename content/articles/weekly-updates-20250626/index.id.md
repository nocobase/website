---
title: "Pembaruan Mingguan NocoBase: Dukungan Sumber Data Eksternal untuk Memuat Koleksi Sesuai Permintaan"
description: "Pembaruan minggu ini meliputi: menambahkan variabel catatan persetujuan ke hasil node, mendukung bidang BIT di SQL Server untuk sumber data eksternal, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Tanggal rilis: 24-06-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - batasan rentang yang salah pada bidang tanggal dengan waktu ([#7107](https://github.com/nocobase/nocobase/pull/7107)) oleh @katherinehhh
  - Ketika variabel parameter kueri URL kosong, kondisi lingkup data tidak dihapus ([#7104](https://github.com/nocobase/nocobase/pull/7104)) oleh @zhangzhonghe
- **[Seluler]** Perbaiki masalah z-index popup seluler ([#7110](https://github.com/nocobase/nocobase/pull/7110)) oleh @zhangzhonghe
- **[Kalender]** masalah bidang tanggal di formulir buat cepat blok kalender ([#7106](https://github.com/nocobase/nocobase/pull/7106)) oleh @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Tanggal rilis: 20-06-2025*

#### 🐛 Perbaikan Bug

- **[Alur Kerja]**

  - Perbaiki pemeriksaan yang salah dijalankan pada angka integer besar ([#7099](https://github.com/nocobase/nocobase/pull/7099)) oleh @mytharcher
  - Perbaiki statistik yang terhapus berantai oleh versi alur kerja non-saat ini ([#7103](https://github.com/nocobase/nocobase/pull/7103)) oleh @mytharcher
- **[Aksi: Impor catatan]** Selesaikan masalah kegagalan login setelah impor massal nama pengguna dan kata sandi ([#7076](https://github.com/nocobase/nocobase/pull/7076)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Hanya peserta yang dapat melihat (mendapatkan) detail persetujuan oleh @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Tanggal rilis: 18-06-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Gunakan lingkup variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
  - Tetapkan nilai bidang: Tidak dapat menghapus data untuk bidang relasi ([#7086](https://github.com/nocobase/nocobase/pull/7086)) oleh @zhangzhonghe
  - Fungsi perataan teks kolom tabel tidak berfungsi ([#7094](https://github.com/nocobase/nocobase/pull/7094)) oleh @zhangzhonghe
- **[Alur Kerja]** Perbaiki pemeriksaan yang salah dijalankan pada angka integer besar ([#7091](https://github.com/nocobase/nocobase/pull/7091)) oleh @mytharcher
- **[Manajer file]** Perbaiki bidang lampiran tidak dapat diperbarui dalam proses persetujuan ([#7093](https://github.com/nocobase/nocobase/pull/7093)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Gunakan perbandingan alih-alih logika implisit untuk menghindari masalah tipe oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Tanggal rilis: 19-06-2025*

#### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Tambahkan variabel catatan persetujuan ke hasil node oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Fungsi perataan teks kolom tabel tidak berfungsi ([#7094](https://github.com/nocobase/nocobase/pull/7094)) oleh @zhangzhonghe
  - Tetapkan nilai bidang: Tidak dapat menghapus data untuk bidang relasi ([#7086](https://github.com/nocobase/nocobase/pull/7086)) oleh @zhangzhonghe
  - Gunakan lingkup variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
- **[Manajer file]** Perbaiki bidang lampiran tidak dapat diperbarui dalam proses persetujuan ([#7093](https://github.com/nocobase/nocobase/pull/7093)) oleh @mytharcher
- **[Alur Kerja]** Perbaiki pemeriksaan yang salah dijalankan pada angka integer besar ([#7091](https://github.com/nocobase/nocobase/pull/7091)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Gunakan perbandingan alih-alih logika implisit untuk menghindari masalah tipe oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Tanggal rilis: 25-06-2025*

#### 🎉 Fitur Baru

- **[Manajer sumber data]** ✨ Dukung pemuatan sesuai permintaan koleksi dari sumber data eksternal ([#6979](https://github.com/nocobase/nocobase/pull/6979)) oleh @aaaaaajie
- **[Alur Kerja: Node permintaan HTTP]** Dukung permintaan `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) oleh @shushu992
- **[Sumber data: SQL Server Eksternal]** Dukung pemuatan sesuai permintaan koleksi dari sumber data eksternal oleh @aaaaaajie

#### 🐛 Perbaikan Bug

- **[klien]**

  - Ketika variabel parameter kueri URL kosong, kondisi lingkup data tidak dihapus ([#7104](https://github.com/nocobase/nocobase/pull/7104)) oleh @zhangzhonghe
  - batasan rentang yang salah pada bidang tanggal dengan waktu ([#7107](https://github.com/nocobase/nocobase/pull/7107)) oleh @katherinehhh
- **[Seluler]** Perbaiki masalah z-index popup seluler ([#7110](https://github.com/nocobase/nocobase/pull/7110)) oleh @zhangzhonghe
- **[Kalender]** masalah bidang tanggal di formulir buat cepat blok kalender ([#7106](https://github.com/nocobase/nocobase/pull/7106)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Perbaiki API variabel lama yang memunculkan kesalahan oleh @mytharcher
  - Perbaiki gaya seluler oleh @mytharcher
  - Perbaiki kesalahan yang muncul ketika koleksi terkait persetujuan dihapus oleh @mytharcher
- **[Manajer email]** lampiran tidak ditampilkan oleh @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Tanggal rilis: 20-06-2025*

#### 🎉 Fitur Baru

- **[klien]** Dukung bidang BIT di SQL Server untuk sumber data eksternal. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Tambahkan variabel catatan persetujuan ke hasil node oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** Sembunyikan otomatis bilah aksi blok kartu grid saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe
- **[Verifikasi]** Hapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile
- **[Alur Kerja]** Sesuaikan API `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) oleh @mytharcher
- **[Alur Kerja: Acara pra-aksi]** Sesuaikan API variabel oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Sesuaikan API variabel oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Fungsi perataan teks kolom tabel tidak berfungsi ([#7094](https://github.com/nocobase/nocobase/pull/7094)) oleh @zhangzhonghe
  - Tetapkan nilai bidang: Tidak dapat menghapus data untuk bidang relasi ([#7086](https://github.com/nocobase/nocobase/pull/7086)) oleh @zhangzhonghe
  - Gunakan lingkup variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
  - kondisi gaya pada bidang kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh
  - Pemfilteran melalui bidang koleksi relasi di formulir filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe
  - Variabel parameter kueri URL tidak berfungsi di nilai default bidang formulir publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh
  - pesan validasi wajib di sub-tabel tetap ada saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh
  - Kesalahan saat mengklik tombol filter ([#7100](https://github.com/nocobase/nocobase/pull/7100)) oleh @zhangzhonghe
- **[basis data]** dukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos
- **[Alur Kerja]**

  - Perbaiki statistik yang terhapus berantai oleh versi alur kerja non-saat ini ([#7103](https://github.com/nocobase/nocobase/pull/7103)) oleh @mytharcher
  - Perbaiki pemeriksaan yang salah dijalankan pada angka integer besar ([#7099](https://github.com/nocobase/nocobase/pull/7099)) oleh @mytharcher
  - Perbaiki pemeriksaan yang salah dijalankan pada angka integer besar ([#7091](https://github.com/nocobase/nocobase/pull/7091)) oleh @mytharcher
- **[Aksi: Impor catatan]** Selesaikan masalah kegagalan login setelah impor massal nama pengguna dan kata sandi ([#7076](https://github.com/nocobase/nocobase/pull/7076)) oleh @aaaaaajie
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbarui bidang banyak ke banyak (array) memunculkan kesalahan ketika bidang `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile
- **[Manajer file]** Perbaiki bidang lampiran tidak dapat diperbarui dalam proses persetujuan ([#7093](https://github.com/nocobase/nocobase/pull/7093)) oleh @mytharcher
- **[Formulir publik]** Formulir publik: Perbaiki masalah akses tidak sah pada pengiriman formulir ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe
- **[Bidang koleksi: Urutan]** Perbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Gunakan perbandingan alih-alih logika implisit untuk menghindari masalah tipe oleh @mytharcher
  - Hanya peserta yang dapat melihat (mendapatkan) detail persetujuan oleh @mytharcher
- **[Manajer email]** kesalahan penghapusan email oleh @jiannx
