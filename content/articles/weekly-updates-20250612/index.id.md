---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk memfilter alur kerja berdasarkan lebih banyak bidang, penambahan variabel lingkungan untuk mengontrol metode output log audit, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Tanggal rilis: 2025-06-11*

#### 🐛 Perbaikan Bug

* **[klien]** Perbaiki masalah kesalahan blok ([#7048](https://github.com/nocobase/nocobase/pull/7048)) oleh @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Tanggal rilis: 2025-06-10*

#### 🎉 Fitur Baru

- **[Log Audit]** Tambahkan variabel lingkungan `AUDIT_LOGGER_TRANSPORT` untuk mengontrol metode output log audit oleh @2013xile

#### 🚀 Peningkatan

- **[Kalender]** dukungan untuk mengatur hari awal minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh
- **[Bidang koleksi: Banyak ke banyak (array)]** Kesalahan terkait izin saat menampilkan bidang banyak-ke-banyak(banyak) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie

#### 🐛 Perbaikan Bug

- **[klien]**

  - masalah penutupan otomatis saat mengonfigurasi bidang di form popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh
  - opsi bidang pilih tidak berfungsi di aturan tautan form filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh
  - Aturan validasi form filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe
  - Perbaiki bidang tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe
- **[Aksi: Impor rekaman]** Perbaiki kegagalan impor tabel anak saat bidang relasional terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie
- **[Visualisasi data]** Bidang grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile
- **[Alur Kerja]** Perbaiki kesalahan yang muncul di aksi eksekusi manual saat pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Untuk menghindari kesalahan bidang yang tidak terdefinisi oleh @mytharcher
  - Perbaiki kesalahan API saat menyegarkan halaman detail oleh @mytharcher
- **[WeCom]** Tambahkan pemeriksaan untuk jalur callback di middleware gateway oleh @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Tanggal rilis: 2025-06-09*

#### 🚀 Peningkatan

- **[klien]** Larang memindahkan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[klien]**

  - Menyelesaikan masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie
  - Perbaiki masalah kesalahan parameter blok filter ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe
  - Variabel objek saat ini tidak valid di aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe
  - Tidak dapat menghapus indikator bidang wajib dari sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe
- **[tidak terdefinisi]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API oleh @aaaaaajie
- **[Seluler]** Optimalkan masalah lag popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe
- **[Manajer sumber data]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie
- **[Aksi: Impor rekaman]** Perbaiki kesalahan yang terjadi selama pengeditan batch saat mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie
- **[Alur Kerja]** Perbaiki kesalahan UI saat alur kerja tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher
- **[Alur Kerja: JavaScript]** Perbaiki require untuk jalur relatif oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan yang muncul saat alur kerja dihapus oleh @mytharcher
  - Muat ulang asosiasi file dari snapshot untuk menghindari URL kedaluwarsa oleh @mytharcher
  - Perbaiki variabel pemicu oleh @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Tanggal rilis: 2025-06-07*

#### 🐛 Perbaikan Bug

- **[klien]** Gunakan lingkup variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
- **[database]** perbaikan: tambahkan bidang pembuat dan pengubah yang hilang di impor xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) oleh @aaaaaajie
- **[Alur Kerja]** Perbaiki acara koleksi pada mode buat atau perbarui tidak terpicu saat membuat tanpa bidang yang diubah ([#7015](https://github.com/nocobase/nocobase/pull/7015)) oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Perbaiki kesalahan yang terjadi saat mengekspor lampiran dengan kondisi. oleh @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Tanggal rilis: 2025-06-07*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Bidang asosiasi menampilkan sub-tabel dan sub-form saat dihover dalam mode read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) oleh @zhangzhonghe
  - aturan tautan blok markdown tidak berfungsi saat dipicu oleh aksi popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) oleh @katherinehhh
- **[Lokalisasi]** Selesaikan kesalahan yang disebabkan oleh teks kosong ([#7010](https://github.com/nocobase/nocobase/pull/7010)) oleh @2013xile
- **[Manajer tugas asinkron]** Perbaiki masalah eksekusi ganda selama impor asinkron ([#7006](https://github.com/nocobase/nocobase/pull/7006)) oleh @aaaaaajie
- **[Aksi: Ekspor rekaman Pro]** Perbaiki masalah eksekusi ganda selama impor asinkron oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Perbaiki persetujuan yang didelegasikan tidak dapat dilanjutkan ketika disetujui oleh orang lain oleh @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Tanggal rilis: 2025-06-06*

#### 🚀 Peningkatan

- **[Alur Kerja]** Dukungan untuk memfilter lebih banyak bidang alur kerja ([#6995](https://github.com/nocobase/nocobase/pull/6995)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**
  - mengganti halaman di sub-tabel blok detail dalam modal memicu peringatan perubahan yang belum disimpan ([#7004](https://github.com/nocobase/nocobase/pull/7004)) oleh @katherinehhh
  - judul bidang hilang saat mengatur variabel di komponen penugasan ([#7001](https://github.com/nocobase/nocobase/pull/7001)) oleh @katherinehhh
  - aturan tautan gaya bidang tidak berfungsi ([#7003](https://github.com/nocobase/nocobase/pull/7003)) oleh @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Tanggal rilis: 2025-06-05*

#### 🚀 Peningkatan

- **[Aksi: Edit batch]** Gunakan `filterByTk` alih-alih `filter` di bawah mode yang dipilih ([#6994](https://github.com/nocobase/nocobase/pull/6994)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Optimalkan masalah kinerja saat memproses file XLSX besar (kumpulan data baris/kolom tinggi), mencegah crash atau freeze sistem. oleh @aaaaaajie

#### 🐛 Perbaikan Bug

- **[klien]**

  - judul bidang hilang di komponen assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) oleh @katherinehhh
  - Item menu terakhir tidak dapat dipilih di daftar menu pindah ([#6997](https://github.com/nocobase/nocobase/pull/6997)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Perbaiki filter tidak diperbarui saat mengganti tab kategori ([#6989](https://github.com/nocobase/nocobase/pull/6989)) oleh @mytharcher
  - Perbaiki statistik alur kerja tidak dibuat secara otomatis ([#6993](https://github.com/nocobase/nocobase/pull/6993)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Tanggal rilis: 2025-06-07*

#### 🚀 Peningkatan

- **[Alur Kerja]** Dukungan untuk memfilter lebih banyak bidang alur kerja ([#6995](https://github.com/nocobase/nocobase/pull/6995)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - aturan tautan blok markdown tidak berfungsi saat dipicu oleh aksi popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) oleh @katherinehhh
  - Bidang asosiasi menampilkan sub-tabel dan sub-form saat dihover dalam mode read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) oleh @zhangzhonghe
  - aturan tautan gaya bidang tidak berfungsi ([#7003](https://github.com/nocobase/nocobase/pull/7003)) oleh @katherinehhh
  - judul bidang hilang saat mengatur variabel di komponen penugasan ([#7001](https://github.com/nocobase/nocobase/pull/7001)) oleh @katherinehhh
  - mengganti halaman di sub-tabel blok detail dalam modal memicu peringatan perubahan yang belum disimpan ([#7004](https://github.com/nocobase/nocobase/pull/7004)) oleh @katherinehhh
- **[Manajer tugas asinkron]** Perbaiki masalah eksekusi ganda selama impor asinkron ([#7006](https://github.com/nocobase/nocobase/pull/7006)) oleh @aaaaaajie
- **[Lokalisasi]** Selesaikan kesalahan yang disebabkan oleh teks kosong ([#7010](https://github.com/nocobase/nocobase/pull/7010)) oleh @2013xile
- **[Aksi: Ekspor rekaman Pro]** Perbaiki masalah eksekusi ganda selama impor asinkron oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Perbaiki persetujuan yang didelegasikan tidak dapat dilanjutkan ketika disetujui oleh orang lain oleh @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Tanggal rilis: 2025-06-05*

#### 🚀 Peningkatan

- **[Aksi: Edit batch]** Gunakan `filterByTk` alih-alih `filter` di bawah mode yang dipilih ([#6994](https://github.com/nocobase/nocobase/pull/6994)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Optimalkan masalah kinerja saat memproses file XLSX besar (kumpulan data baris/kolom tinggi), mencegah crash atau freeze sistem. oleh @aaaaaajie

#### 🐛 Perbaikan Bug

- **[klien]**

  - judul bidang hilang di komponen assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) oleh @katherinehhh
  - Item menu terakhir tidak dapat dipilih di daftar menu pindah ([#6997](https://github.com/nocobase/nocobase/pull/6997)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Perbaiki filter tidak diperbarui saat mengganti tab kategori ([#6989](https://github.com/nocobase/nocobase/pull/6989)) oleh @mytharcher
  - Perbaiki statistik alur kerja tidak dibuat secara otomatis ([#6993](https://github.com/nocobase/nocobase/pull/6993)) oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Tanggal rilis: 2025-06-07*

#### 🚀 Peningkatan

- **[Alur Kerja]** Dukungan untuk memfilter lebih banyak bidang alur kerja ([#6995](https://github.com/nocobase/nocobase/pull/6995)) oleh @mytharcher
- **[Manajer email]** mendukung nilai pengiriman default di pop-up, mendukung pencarian fuzzy untuk penerima, dan memperbaiki masalah oleh @jiannx

#### 🐛 Perbaikan Bug

- **[database]** perbaikan: tambahkan bidang pembuat dan pengubah yang hilang di impor xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) oleh @aaaaaajie
- **[klien]**

  - judul bidang hilang saat mengatur variabel di komponen penugasan ([#7001](https://github.com/nocobase/nocobase/pull/7001)) oleh @katherinehhh
  - Bidang asosiasi menampilkan sub-tabel dan sub-form saat dihover dalam mode read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) oleh @zhangzhonghe
  - aturan tautan blok markdown tidak berfungsi saat dipicu oleh aksi popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) oleh @katherinehhh
  - mengganti halaman di sub-tabel blok detail dalam modal memicu peringatan perubahan yang belum disimpan ([#7004](https://github.com/nocobase/nocobase/pull/7004)) oleh @katherinehhh
  - aturan tautan gaya bidang tidak berfungsi ([#7003](https://github.com/nocobase/nocobase/pull/7003)) oleh @katherinehhh
- **[Manajer tugas asinkron]** Perbaiki masalah eksekusi ganda selama impor asinkron ([#7006](https://github.com/nocobase/nocobase/pull/7006)) oleh @aaaaaajie
- **[Lokalisasi]** Selesaikan kesalahan yang disebabkan oleh teks kosong ([#7010](https://github.com/nocobase/nocobase/pull/7010)) oleh @2013xile
- **[Aksi: Ekspor rekaman Pro]** Perbaiki masalah eksekusi ganda selama impor asinkron oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Perbaiki persetujuan yang didelegasikan tidak dapat dilanjutkan ketika disetujui oleh orang lain oleh @mytharcher
- **[Manajer email]**

  - beberapa kunci utama untuk tabel "mailmessagelabels_mailmessages" oleh @jiannx
  - pengaturan pop-up tidak ditampilkan oleh @jiannx
  - pencarian fuzzy email untuk membuat filter unik oleh @jiannx
  - pencarian fuzzy penerima mendukung bidang terkait oleh @jiannx
  - tambahkan bidang "id" ke mailmessagelabelsMailmessages oleh @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Tanggal rilis: 2025-06-06*

#### 🚀 Peningkatan

- **[Aksi: Edit batch]** Gunakan `filterByTk` alih-alih `filter` di bawah mode yang dipilih ([#6994](https://github.com/nocobase/nocobase/pull/6994)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Optimalkan masalah kinerja saat memproses file XLSX besar (kumpulan data baris/kolom tinggi), mencegah crash atau freeze sistem. oleh @aaaaaajie

#### 🐛 Perbaikan Bug

- **[klien]**

  - judul bidang hilang di komponen assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) oleh @katherinehhh
  - Item menu terakhir tidak dapat dipilih di daftar menu pindah ([#6997](https://github.com/nocobase/nocobase/pull/6997)) oleh @zhangzhonghe
  - Konten ditampilkan salah di halaman yang dibuka melalui tautan popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Perbaiki filter tidak diperbarui saat mengganti tab kategori ([#6989](https://github.com/nocobase/nocobase/pull/6989)) oleh @mytharcher
  - Perbaiki statistik alur kerja tidak dibuat secara otomatis ([#6993](https://github.com/nocobase/nocobase/pull/6993)) oleh @mytharcher
