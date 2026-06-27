---
title: "Pembaruan Mingguan NocoBase: Blok Mendukung Aturan Tautan"
description: "Pembaruan minggu ini meliputi: blok mendukung aturan tautan untuk tampilan dinamis, dukungan variabel respons dalam pesan sukses dari aksi permintaan kustom, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Tanggal rilis: 2025-04-23*

#### 🚀 Peningkatan

- **[cli]** Optimalkan logika internal perintah `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) oleh @chenos
- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[cli]** Perbarui package.json secara otomatis saat upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos
- **[client]**

  - filter yang hilang untuk data yang sudah diasosiasikan saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh
  - Aturan tautan tombol 'Tambah Anak' pada tabel pohon kehilangan 'rekaman saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh
- **[Aksi: Impor rekaman]** Perbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie
- **[Blok: Gantt]** Blok diagram gantt bulan yang tumpang tindih di header kalender untuk tampilan bulan ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh
- **[Aksi: Ekspor rekaman Pro]**

  - Tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh
  - Perbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie
- **[Penyimpanan file: S3(Pro)]** Perbaiki data respons dari file yang diunggah oleh @mytharcher
- **[Workflow: Persetujuan]** Perbaiki bidang asosiasi pramuat untuk rekaman oleh @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Tanggal rilis: 2025-04-24*

#### 🚀 Peningkatan

- **[client]** Sesuaikan pesan unggah ([#6757](https://github.com/nocobase/nocobase/pull/6757)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**
  - hanya aksi ekspor di koleksi tampilan yang didukung saat writableView bernilai false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) oleh @katherinehhh
  - pembuatan data asosiasi yang tidak terduga saat menampilkan bidang asosiasi di bawah sub-formulir/sub-tabel dalam formulir buat ([#6727](https://github.com/nocobase/nocobase/pull/6727)) oleh @katherinehhh
  - Data yang diambil tidak benar untuk bidang array banyak-ke-banyak dari tabel terkait dalam formulir ([#6744](https://github.com/nocobase/nocobase/pull/6744)) oleh @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Tanggal rilis: 2025-04-29*

#### 🎉 Fitur Baru

- **[undefined]** tambahkan publish ci untuk license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) oleh @jiannx
- **[Visualisasi data: ECharts]** Tambahkan pengaturan "Balik Sumbu Y" untuk diagram batang oleh @2013xile

#### 🚀 Peningkatan

- **[utils]** Tingkatkan tinggi daftar bidang tombol filter dan urutkan/kategorikan bidang ([#6779](https://github.com/nocobase/nocobase/pull/6779)) oleh @zhangzhonghe
- **[client]** optimalkan gaya tombol tambah sub-tabel dan sejajarkan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh
- **[Manajer file]** Tambahkan opsi batas waktu OSS default ke 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher
- **[Kebijakan kata sandi]** Ubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile
- **[WeCom]** Prioritaskan email perusahaan daripada email pribadi saat memperbarui email pengguna oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - Di blok collapse, mengklik tombol hapus di kotak pencarian bidang relasi tidak boleh menghapus rentang data ([#6782](https://github.com/nocobase/nocobase/pull/6782)) oleh @zhangzhonghe
  - bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh
  - Larang memindahkan menu sebelum atau sesudah tab halaman ([#6777](https://github.com/nocobase/nocobase/pull/6777)) oleh @zhangzhonghe
  - Blok tabel menampilkan data duplikat saat memfilter ([#6792](https://github.com/nocobase/nocobase/pull/6792)) oleh @zhangzhonghe
  - Di formulir filter, mengganti operator bidang lalu menyegarkan halaman menyebabkan kesalahan ([#6781](https://github.com/nocobase/nocobase/pull/6781)) oleh @zhangzhonghe
- **[database]**

  - Hindari kesalahan yang muncul saat tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher
  - tambahkan unavailableActions ke koleksi sql dan koleksi tampilan ([#6765](https://github.com/nocobase/nocobase/pull/6765)) oleh @katherinehhh
- **[create-nocobase-app]** Perbaiki sementara masalah mariadb dengan menurunkan versi ke 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) oleh @chenos
- **[Otentikasi]** Larang mengubah nama authenticator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile
- **[Cetak template]** Perbaiki: Perbaiki logika validasi izin untuk mencegah aksi yang tidak sah. oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]** kedaluwarsa url akses tidak valid oleh @jiannx
- **[Blok: Pohon]** Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong oleh @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Tanggal rilis: 2025-04-24*

#### 🚀 Peningkatan

- **[cli]** Optimalkan logika internal perintah `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) oleh @chenos

#### 🐛 Perbaikan Bug

- **[client]** masalah tampilan dengan aturan tautan dalam data asosiasi multi-level ([#6755](https://github.com/nocobase/nocobase/pull/6755)) oleh @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Tanggal rilis: 2025-04-24*

#### 🎉 Fitur Baru

- **[Aksi: Permintaan kustom]** dukung variabel respons dalam pesan sukses dari aksi permintaan kustom ([#6694](https://github.com/nocobase/nocobase/pull/6694)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[client]** Sesuaikan pesan unggah ([#6757](https://github.com/nocobase/nocobase/pull/6757)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**
  - Data yang diambil tidak benar untuk bidang array banyak-ke-banyak dari tabel terkait dalam formulir ([#6744](https://github.com/nocobase/nocobase/pull/6744)) oleh @2013xile
  - hanya aksi ekspor di koleksi tampilan yang didukung saat writableView bernilai false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) oleh @katherinehhh
  - pembuatan data asosiasi yang tidak terduga saat menampilkan bidang asosiasi di bawah sub-formulir/sub-tabel dalam formulir buat ([#6727](https://github.com/nocobase/nocobase/pull/6727)) oleh @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Tanggal rilis: 2025-04-25*

#### 🎉 Fitur Baru

- **[client]** dukung konfigurasi aturan tautan di blok untuk tampil/sembunyi dinamis ([#6636](https://github.com/nocobase/nocobase/pull/6636)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[client]** pertahankan fungsionalitas template referensi ([#6743](https://github.com/nocobase/nocobase/pull/6743)) oleh @gchust
- **[Visualisasi data]** Tambahkan API yang diperluas untuk konfigurasi antarmuka bidang ([#6742](https://github.com/nocobase/nocobase/pull/6742)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[create-nocobase-app]** Perbaiki sementara masalah mariadb dengan menurunkan versi ke 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) oleh @chenos
- **[database]** tambahkan unavailableActions ke koleksi sql dan koleksi tampilan ([#6765](https://github.com/nocobase/nocobase/pull/6765)) oleh @katherinehhh
- **[client]** masalah operator parameter kueri url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) oleh @katherinehhh
- **[Blok: Panel aksi]** ikon panel aksi hilang saat hanya-ikon diaktifkan ([#6773](https://github.com/nocobase/nocobase/pull/6773)) oleh @katherinehhh
- **[Workflow: node perhitungan tanggal]** Perbaiki kesalahan di browser lama tanpa API `Intl` oleh @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Tanggal rilis: 2025-04-28*

#### 🎉 Fitur Baru

- **[Manajer file]** Fitur: Tambahkan API `getFileStream` untuk dukungan streaming file. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) oleh @sheldon66

#### 🚀 Peningkatan

- **[client]** tampilkan judul tombol dengan tooltip saat hover ikon aksi ([#6761](https://github.com/nocobase/nocobase/pull/6761)) oleh @katherinehhh
- **[WeCom]** Prioritaskan email perusahaan daripada email pribadi saat memperbarui email pengguna oleh @2013xile

#### 🐛 Perbaikan Bug

- **[Penyimpanan file: S3(Pro)]** kedaluwarsa url akses tidak valid oleh @jiannx
- **[Cetak template]** Perbaiki: Perbaiki logika validasi izin untuk mencegah aksi yang tidak sah. oleh @sheldon66
- **[Blok: Pohon]** Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong oleh @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Tanggal rilis: 2025-04-28*

#### 🎉 Fitur Baru

- **[undefined]** tambahkan publish ci untuk license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) oleh @jiannx

#### 🚀 Peningkatan

- **[utils]** Tingkatkan tinggi daftar bidang tombol filter dan urutkan/kategorikan bidang ([#6779](https://github.com/nocobase/nocobase/pull/6779)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[client]**
  - Di blok collapse, mengklik tombol hapus di kotak pencarian bidang relasi tidak boleh menghapus rentang data ([#6782](https://github.com/nocobase/nocobase/pull/6782)) oleh @zhangzhonghe
  - Di formulir filter, mengganti operator bidang lalu menyegarkan halaman menyebabkan kesalahan ([#6781](https://github.com/nocobase/nocobase/pull/6781)) oleh @zhangzhonghe
  - Blok tabel menampilkan data duplikat saat memfilter ([#6792](https://github.com/nocobase/nocobase/pull/6792)) oleh @zhangzhonghe
  - masalah perataan tombol tambah rekaman anak di tabel pohon ([#6791](https://github.com/nocobase/nocobase/pull/6791)) oleh @katherinehhh
  - Larang memindahkan menu sebelum atau sesudah tab halaman ([#6777](https://github.com/nocobase/nocobase/pull/6777)) oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Tanggal rilis: 2025-04-24*

#### 🚀 Peningkatan

- **[cli]** Optimalkan logika internal perintah `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) oleh @chenos
- **[create-nocobase-app]** Tingkatkan dependensi dan hapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos
- **[Seluler]** Optimalkan kecepatan pembukaan popup pemilih tanggal seluler ([#6735](https://github.com/nocobase/nocobase/pull/6735)) oleh @zhangzhonghe
- **[Blok: template]** dukung konversi blok template menjadi blok normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) oleh @gchust
- **[Manajer file]** Ekspos API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher
- **[Editor tema]** Izinkan pengaturan lebar sidebar dalam konfigurasi tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) oleh @chenos
- **[Workflow]** Tambahkan tipe tanggal ke set tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher
- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah tampilan dengan aturan tautan dalam data asosiasi multi-level ([#6755](https://github.com/nocobase/nocobase/pull/6755)) oleh @katherinehhh
  - Aturan tautan tombol 'Tambah Anak' pada tabel pohon kehilangan 'rekaman saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh
  - Masalah dengan menyegarkan blok data setelah pengiriman berhasil ([#6748](https://github.com/nocobase/nocobase/pull/6748)) oleh @zhangzhonghe
  - Masalah tombol collapse di menu kiri yang terhalang oleh jendela pop-up workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe
  - Masalah ikon bilah navigasi atas seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe
  - tampilan nilai yang salah untuk "Aktifkan kolom indeks" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) oleh @katherinehhh
  - kondisi bidang tanggal waktu tidak berfungsi dalam aturan tautan ([#6728](https://github.com/nocobase/nocobase/pull/6728)) oleh @katherinehhh
  - batasan opsi aksi yang hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh
  - Bidang wajib yang disembunyikan oleh aturan tautan tidak boleh mempengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe
  - filter yang hilang untuk data yang sudah diasosiasikan saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh
- **[server]** appVersion yang dihasilkan secara tidak benar oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos
- **[cli]** Perbarui package.json secara otomatis saat upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos
- **[build]** Perbaiki kesalahan yang muncul dalam perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher
- **[Blok: Gantt]** Blok diagram gantt bulan yang tumpang tindih di header kalender untuk tampilan bulan ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh
- **[Aksi: Impor rekaman]** Perbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie
- **[Blok: template]** template blok tidak dapat digunakan di lingkungan mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) oleh @gchust
- **[Workflow]** Perbaiki kesalahan yang muncul saat menjalankan event terjadwal di subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher
- **[Workflow: Event aksi kustom]** Dukung untuk dieksekusi dalam mode beberapa rekaman oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]**

  - Perbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie
  - Tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh
- **[Penyimpanan file: S3(Pro)]**

  - Perbaiki data respons dari file yang diunggah oleh @mytharcher
  - Tambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher
- **[Workflow: Persetujuan]** Perbaiki bidang asosiasi pramuat untuk rekaman oleh @mytharcher
