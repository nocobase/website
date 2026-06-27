---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: menambahkan dukungan filter ke manajemen multi-aplikasi, mengoptimalkan gaya seluler, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Tanggal rilis: 26-06-2025*

#### 🚀 Peningkatan

- **[Alur Kerja]** Optimalkan gaya seluler ([#7040](https://github.com/nocobase/nocobase/pull/7040)) oleh @mytharcher
- **[Formulir publik]** Optimalkan kinerja komponen tanggal di formulir publik ([#7117](https://github.com/nocobase/nocobase/pull/7117)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[Alur Kerja]** Perbaiki params pemuatan rekaman dalam tugas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) oleh @mytharcher
- **[Klien WEB]** Perbaiki masalah di mana blok di bawah halaman tidak ditampilkan setelah mengatur izin menu peran ([#7112](https://github.com/nocobase/nocobase/pull/7112)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]**

  - Perbaiki nama variabel pemohon di pemicu oleh @mytharcher
  - Perbaiki gaya seluler oleh @mytharcher
  - Perbaiki kesalahan yang muncul ketika koleksi terkait persetujuan dihapus oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Tanggal rilis: 27-06-2025*

#### 🎉 Fitur Baru

- **[Alur Kerja: Node permintaan HTTP]** Dukung permintaan `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) oleh @shushu992

#### 🚀 Peningkatan

- **[Alur Kerja]**

  - Optimalkan gaya seluler ([#7040](https://github.com/nocobase/nocobase/pull/7040)) oleh @mytharcher
  - Sesuaikan API `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) oleh @mytharcher
- **[Formulir publik]** Optimalkan kinerja komponen tanggal di formulir publik ([#7117](https://github.com/nocobase/nocobase/pull/7117)) oleh @zhangzhonghe
- **[Alur Kerja: Acara pra-tindakan]** Sesuaikan api variabel oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Sesuaikan API variabel oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - batasan rentang yang salah pada bidang tanggal dengan waktu ([#7107](https://github.com/nocobase/nocobase/pull/7107)) oleh @katherinehhh
  - Ketika variabel parameter kueri URL kosong, kondisi lingkup data tidak dihapus ([#7104](https://github.com/nocobase/nocobase/pull/7104)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Perbaiki params pemuatan rekaman dalam tugas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) oleh @mytharcher
  - Perbaiki pemeriksaan yang salah dijalankan pada bilangan bulat besar ([#7099](https://github.com/nocobase/nocobase/pull/7099)) oleh @mytharcher
  - Perbaiki stats yang terhapus secara berantai oleh versi alur kerja non-saat ini ([#7103](https://github.com/nocobase/nocobase/pull/7103)) oleh @mytharcher
- **[Seluler]** Perbaiki masalah z-index popup seluler ([#7110](https://github.com/nocobase/nocobase/pull/7110)) oleh @zhangzhonghe
- **[Klien WEB]** Perbaiki masalah di mana blok di bawah halaman tidak ditampilkan setelah mengatur izin menu peran ([#7112](https://github.com/nocobase/nocobase/pull/7112)) oleh @aaaaaajie
- **[Kalender]** masalah bidang tanggal di formulir buat cepat blok kalender ([#7106](https://github.com/nocobase/nocobase/pull/7106)) oleh @katherinehhh
- **[Aksi: Impor rekaman]** Selesaikan masalah kegagalan login setelah impor massal nama pengguna dan kata sandi ([#7076](https://github.com/nocobase/nocobase/pull/7076)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan yang muncul ketika koleksi terkait persetujuan dihapus oleh @mytharcher
  - Perbaiki gaya seluler oleh @mytharcher
  - Perbaiki nama variabel pemohon di pemicu oleh @mytharcher
  - Hanya peserta yang dapat melihat (mendapatkan) detail persetujuan oleh @mytharcher
  - Perbaiki API variabel lama yang memunculkan kesalahan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Tanggal rilis: 02-07-2025*

#### 🚀 Peningkatan

- **[basis data]** Dukung untuk menambahkan opsi pool dari env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) oleh @mytharcher
- **[Alur Kerja]**

  - Tingkatkan kinerja muat daftar eksekusi dengan mengecualikan bidang JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) oleh @mytharcher
  - Tambahkan API log untuk pengujian node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Ubah waktu menjadi absolut di linimasa oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[utils]** masalah pemfilteran pada DateOnly atau Datetime (tanpa zona waktu) menggunakan variabel Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) oleh @katherinehhh
- **[cli]**

  - kesalahan tidak terdefinisi dalam mengunduh plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) oleh @jiannx
  - Sesuaikan salinan lisensi saat menginstal plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) oleh @jiannx
- **[klien]**

  - Toleransi kesalahan untuk pengaturan berdasarkan 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) oleh @mytharcher
  - Pengaturan field displayName di tampilan terhubung tidak berpengaruh ([#7130](https://github.com/nocobase/nocobase/pull/7130)) oleh @aaaaaajie
  - Konfigurasi UI node manual Alur Kerja: aturan tautan tidak dapat memilih variabel Formulir saat ini ([#7125](https://github.com/nocobase/nocobase/pull/7125)) oleh @zhangzhonghe
- **[Alur Kerja]** Perbaiki kesalahan yang muncul oleh impor siklik ([#7134](https://github.com/nocobase/nocobase/pull/7134)) oleh @mytharcher
- **[plugin-komersial]**

  - mode develop tidak menampilkan popup lisensi oleh @jiannx
  - tutup sementara pop-up verifikasi lisensi oleh @jiannx
  - sesuaikan logika verifikasi lisensi dan dukung pencocokan nama domain pan oleh @jiannx
- **[Kebijakan kata sandi]** Dukung penguncian akun pengguna secara permanen oleh @2013xile
- **[Alur Kerja: Subalur]** Perbaiki masalah dalam mode kluster oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Tambahkan pengaturan tata letak formulir oleh @mytharcher
  - Hapus bidang yang tidak dapat difilter dari filter oleh @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Tanggal rilis: 27-06-2025*

#### 🎉 Fitur Baru

- **[Pengaturan Lisensi]** tambahkan pengaturan lisensi dan validasi lisensi sebelum mengunduh plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) oleh @jiannx

#### 🚀 Peningkatan

- **[Manajer multi-aplikasi]** tambahkan dukungan filter ke manajemen multi-aplikasi ([#7124](https://github.com/nocobase/nocobase/pull/7124)) oleh @katherinehhh
- **[Alur Kerja]** Optimalkan gaya seluler ([#7040](https://github.com/nocobase/nocobase/pull/7040)) oleh @mytharcher
- **[Formulir publik]** Optimalkan kinerja komponen tanggal di formulir publik ([#7117](https://github.com/nocobase/nocobase/pull/7117)) oleh @zhangzhonghe
- **[plugin-komersial]** enkripsi pengiriman log dan meningkatkan tampilan Informasi lisensi oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]** nilai default bidang asosiasi menimpa data yang ada di sub-tabel ([#7120](https://github.com/nocobase/nocobase/pull/7120)) oleh @katherinehhh
- **[Alur Kerja]** Perbaiki params pemuatan rekaman dalam tugas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) oleh @mytharcher
- **[Klien WEB]** Perbaiki masalah di mana blok di bawah halaman tidak ditampilkan setelah mengatur izin menu peran ([#7112](https://github.com/nocobase/nocobase/pull/7112)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Perbaiki nama variabel pemohon di pemicu oleh @mytharcher
