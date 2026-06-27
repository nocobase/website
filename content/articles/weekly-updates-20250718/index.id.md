---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk mengonfigurasi rahasia otentikasi independen untuk sub-aplikasi dan penambahan node CC ke alur kerja."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Tanggal rilis: 2025-07-16*

#### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki error: Can't resolve 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) oleh @zhangzhonghe
  - masalah tampilan untuk bidang asosiasi dalam aturan tautan ([#7220](https://github.com/nocobase/nocobase/pull/7220)) oleh @katherinehhh
- **[database]** Memperbaiki error saat mengaktifkan paginasi sederhana untuk tabel sumber data eksternal ([#7222](https://github.com/nocobase/nocobase/pull/7222)) oleh @aaaaaajie
- **[Bidang Koleksi: Urutkan]** kehilangan pemilihan bidang urut saat menduplikasi catatan ([#7116](https://github.com/nocobase/nocobase/pull/7116)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Menambahkan toleransi kesalahan untuk persetujuan yang dihapus dalam daftar catatan oleh @mytharcher
  - Memperbaiki beberapa tingkat asosiasi saat mengirimkan persetujuan oleh @mytharcher
  - Memperbaiki pengecualian saat menghapus catatan oleh @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Tanggal rilis: 2025-07-14*

#### 🚀 Peningkatan

- **[Bidang Koleksi: Rumus]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher
- **[Alur Kerja]** Menggunakan pencatatan alih-alih melempar error ketika eksekusi tidak boleh berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Mendukung penghapusan persetujuan ketika data terkait dihapus oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah di mana bidang lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen pilih dropdown diblokir oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe
  - penugasan nilai gagal dalam formulir edit ketika nilai dan opsi diatur untuk bidang pilih ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh
  - Filter runtuh: Filter tidak dipicu selama inisialisasi halaman setelah mengatur nilai default untuk bidang ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe
  - error saat menetapkan nilai di blok daftar menggunakan bidang urut kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh
  - Judul tab browser tidak disinkronkan saat beralih antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe
  - Tindakan popup: Tampilan halaman tidak sesuai harapan setelah beralih tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe
- **[acl]** Memperbaiki error saat menghapus peran di bawah mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie
- **[Manajer multi-aplikasi]** Memperbaiki opsi auth di posisi yang tidak terduga ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher
- **[Otentikasi]** Memperbaiki masalah di mana halaman login tidak dapat digulir ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]** Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Tanggal rilis: 2025-07-13*

#### 🎉 Fitur Baru

- **[Manajer multi-aplikasi]** Mendukung konfigurasi rahasia auth independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher
- **[Alur Kerja: CC]** Menambahkan node CC ke alur kerja ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Mengoptimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe
- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

#### 🐛 Perbaikan Bug

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki stempel waktu BigInt dalam format string menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Untuk menghindari error ketika pengguna tidak ada oleh @mytharcher
  - Memuat ulang asosiasi pada catatan oleh @mytharcher
  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Tanggal rilis: 2025-07-11*

#### 🚀 Peningkatan

- **[Manajer multi-aplikasi]** Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Tindakan: Permintaan Kustom]** masalah penguraian variabel di URL selama navigasi rute setelah permintaan kustom berhasil ([#7186](https://github.com/nocobase/nocobase/pull/7186)) oleh @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Tanggal rilis: 2025-07-10*

#### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Menambahkan penginisialisasi untuk pemicu oleh @mytharcher

#### 🚀 Peningkatan

- **[Manajer multi-aplikasi]** Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher
- **[Alur Kerja]** Mengonversi operan menjadi string sebelum perbandingan string dalam perhitungan logika ([#7190](https://github.com/nocobase/nocobase/pull/7190)) oleh @mytharcher
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan indentasi oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana bidang tampilan tidak ditampilkan di blok. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) oleh @aaaaaajie
- **[Blok: Kanban]** memperbaiki masalah UI sub-tabel di Kanban dan menambahkan dukungan untuk pengaturan lebar kolom Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Memperbaiki bug blok dan asosiasi oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Tanggal rilis: 2025-07-14*

#### 🎉 Fitur Baru

- **[Manajer multi-aplikasi]** Mendukung konfigurasi rahasia auth independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher
- **[Alur Kerja: CC]** Menambahkan node CC ke alur kerja ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menambahkan penginisialisasi untuk pemicu oleh @mytharcher

#### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Mengoptimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe
- **[Alur Kerja]** Mengonversi operan menjadi string sebelum perbandingan string dalam perhitungan logika ([#7190](https://github.com/nocobase/nocobase/pull/7190)) oleh @mytharcher
- **[Manajer multi-aplikasi]**

  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher
  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan indentasi oleh @mytharcher
- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah di mana bidang lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe
  - error saat menetapkan nilai di blok daftar menggunakan bidang urut kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh
  - Filter runtuh: Filter tidak dipicu selama inisialisasi halaman setelah mengatur nilai default untuk bidang ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe
  - penugasan nilai gagal dalam formulir edit ketika nilai dan opsi diatur untuk bidang pilih ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh
  - Tindakan popup: Tampilan halaman tidak sesuai harapan setelah beralih tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe
  - Judul tab browser tidak disinkronkan saat beralih antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen pilih dropdown diblokir oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe
- **[acl]** Memperbaiki error saat menghapus peran di bawah mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie
- **[Otentikasi]** Memperbaiki masalah di mana halaman login tidak dapat digulir ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe
- **[Manajer multi-aplikasi]** Memperbaiki opsi auth di posisi yang tidak terduga ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki stempel waktu BigInt dalam format string menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher
- **[Tindakan: Permintaan Kustom]** masalah penguraian variabel di URL selama navigasi rute setelah permintaan kustom berhasil ([#7186](https://github.com/nocobase/nocobase/pull/7186)) oleh @katherinehhh
- **[Blok: Kanban]** memperbaiki masalah UI sub-tabel di Kanban dan menambahkan dukungan untuk pengaturan lebar kolom Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher
  - Memperbaiki bug blok dan asosiasi oleh @mytharcher
  - Memuat ulang asosiasi pada catatan oleh @mytharcher
  - Untuk menghindari error ketika pengguna tidak ada oleh @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Tanggal rilis: 2025-07-10*

#### 🐛 Perbaikan Bug

- **[client]**

  - Tampilan bidang kotak centang salah di koleksi bidang asosiasi dalam formulir ([#7176](https://github.com/nocobase/nocobase/pull/7176)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengklik tombol tidak dapat membuka popup ([#7180](https://github.com/nocobase/nocobase/pull/7180)) oleh @zhangzhonghe
- **[database]** Memperbaiki masalah di mana bidang tampilan tidak ditampilkan di blok. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) oleh @aaaaaajie
- **[Alur Kerja: Node manual]** Memperbaiki error yang dilemparkan saat menggunakan variabel ([#7177](https://github.com/nocobase/nocobase/pull/7177)) oleh @mytharcher
- **[Cetak template]** menambahkan skrip migrasi ke bidang rootDataType oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki cabang yang disetujui tidak berjalan ketika tidak ada penerima oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Tanggal rilis: 2025-07-15*

#### 🎉 Fitur Baru

- **[Manajer multi-aplikasi]** Mendukung konfigurasi rahasia auth independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher
- **[Alur Kerja: CC]** Menambahkan node CC ke alur kerja ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menambahkan penginisialisasi untuk pemicu oleh @mytharcher

#### 🚀 Peningkatan

- **[Bidang Koleksi: Rumus]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher
- **[Alur Kerja]**

  - Menggunakan pencatatan alih-alih melempar error ketika eksekusi tidak boleh berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher
  - Mengonversi operan menjadi string sebelum perbandingan string dalam perhitungan logika ([#7190](https://github.com/nocobase/nocobase/pull/7190)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Mengoptimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe
- **[Manajer multi-aplikasi]**

  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher
  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan indentasi oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Mendukung penghapusan persetujuan ketika data terkait dihapus oleh @mytharcher
- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah di mana bidang lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe
  - Filter runtuh: Filter tidak dipicu selama inisialisasi halaman setelah mengatur nilai default untuk bidang ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe
  - masalah tampilan untuk bidang asosiasi dalam aturan tautan ([#7220](https://github.com/nocobase/nocobase/pull/7220)) oleh @katherinehhh
  - penugasan nilai gagal dalam formulir edit ketika nilai dan opsi diatur untuk bidang pilih ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh
  - error saat menetapkan nilai di blok daftar menggunakan bidang urut kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh
  - Tindakan popup: Tampilan halaman tidak sesuai harapan setelah beralih tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe
  - Judul tab browser tidak disinkronkan saat beralih antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen pilih dropdown diblokir oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe
  - Tampilan bidang kotak centang salah di koleksi bidang asosiasi dalam formulir ([#7176](https://github.com/nocobase/nocobase/pull/7176)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengklik tombol tidak dapat membuka popup ([#7180](https://github.com/nocobase/nocobase/pull/7180)) oleh @zhangzhonghe
- **[acl]** Memperbaiki error saat menghapus peran di bawah mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie
- **[database]** Memperbaiki masalah di mana bidang tampilan tidak ditampilkan di blok. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) oleh @aaaaaajie
- **[Manajer multi-aplikasi]** Memperbaiki opsi auth di posisi yang tidak terduga ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki stempel waktu BigInt dalam format string menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher
- **[Otentikasi]** Memperbaiki masalah di mana halaman login tidak dapat digulir ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe
- **[Tindakan: Permintaan Kustom]** masalah penguraian variabel di URL selama navigasi rute setelah permintaan kustom berhasil ([#7186](https://github.com/nocobase/nocobase/pull/7186)) oleh @katherinehhh
- **[Blok: Kanban]** memperbaiki masalah UI sub-tabel di Kanban dan menambahkan dukungan untuk pengaturan lebar kolom Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) oleh @katherinehhh
- **[Alur Kerja: Node manual]** Memperbaiki error yang dilemparkan saat menggunakan variabel ([#7177](https://github.com/nocobase/nocobase/pull/7177)) oleh @mytharcher
- **[Cetak template]** menambahkan skrip migrasi ke bidang rootDataType oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher
  - Memperbaiki pengecualian saat menghapus catatan oleh @mytharcher
  - Memperbaiki cabang yang disetujui tidak berjalan ketika tidak ada penerima oleh @mytharcher
  - Untuk menghindari error ketika pengguna tidak ada oleh @mytharcher
  - Memperbaiki bug blok dan asosiasi oleh @mytharcher
  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher
  - Memuat ulang asosiasi pada catatan oleh @mytharcher
