---
title: "Pembaruan Mingguan NocoBase: Cetak Template Mendukung Gambar dan Barcode"
description: "Pembaruan minggu ini meliputi: dukungan untuk gambar dinamis dan rendering barcode di template dokumen, dukungan variabel di judul dan konten konfirmasi sekunder, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Tanggal rilis: 2025-05-07*

#### 🎉 Fitur Baru

- **[Blok: iframe]** Blok iframe mendukung konfigurasi atribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) oleh @zhangzhonghe
- **[Cetak template]** Fitur: Mendukung opsi Pilih `{ label, value }` dalam pencetakan template. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[client]**

  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat mengarahkan mouse ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe
  - Ketika komponen bidang relasi dari formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan beberapa pilihan" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe
  - beberapa pesan kesalahan ditampilkan ketika aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh
  - masalah dengan mengonfigurasi aturan tautan di subform (popup) dalam subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh
  - Perbaiki masalah di mana sub-bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe
  - masalah gaya bilah paginasi subtable dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh
  - Pemilih tabel di formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe
- **[database]**

  - Perbaiki asosiasi belongs-to tidak dimuat di appends ketika foreign key adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher
  - Perbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher
- **[Bidang Koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh
- **[Alur Kerja: Tindakan khusus acara]** masalah tautan tindakan alur kerja yang dipicu oleh @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Tanggal rilis: 2025-05-08*

#### 🐛 Perbaikan Bug

- **[client]**
  - tidak dapat menyeret tombol lain ke tombol duplikat ([#6822](https://github.com/nocobase/nocobase/pull/6822)) oleh @katherinehhh
  - beberapa bidang asosiasi gagal dikirim saat menampilkan bidang dari koleksi asosiasi ([#6833](https://github.com/nocobase/nocobase/pull/6833)) oleh @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Tanggal rilis: 2025-05-04*

#### 🎉 Fitur Baru

- **[client]** mendukung variabel dalam judul dan konten konfirmasi sekunder ([#6787](https://github.com/nocobase/nocobase/pull/6787)) oleh @katherinehhh
- **[Cetak template]**

  - Dukungan untuk rendering gambar dinamis dan barcode dalam template dokumen. oleh @sheldon66
  - Fitur: Mendukung opsi Pilih `{ label, value }` dalam pencetakan template. oleh @sheldon66
- **[Blok: Pohon]** blok pohon filter mendukung aturan tautan oleh @katherinehhh
- **[Visualisasi data: ECharts]** Tambahkan pengaturan "Balik Sumbu Y" untuk diagram batang oleh @2013xile

#### 🚀 Peningkatan

- **[client]** optimalkan gaya tombol tambah subtable dan ratakan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh
- **[Manajer file]** Tambahkan opsi batas waktu OSS default ke 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher
- **[Kebijakan kata sandi]** Ubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile

#### 🐛 Perbaikan Bug

- **[database]**

  - Perbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher
  - Hindari kesalahan yang dilemparkan ketika tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher
- **[client]**

  - ketika pemilihan variabel memerlukan pemuatan asinkron, menu yang terakhir dipilih hilang. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) oleh @gchust
  - Perbaiki masalah di mana sub-bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe
  - masalah dengan mengonfigurasi aturan tautan di subform (popup) dalam subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh
  - beberapa pesan kesalahan ditampilkan ketika aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh
  - bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) oleh @katherinehhh
- **[Otentikasi]** Jangan izinkan mengubah nama autentikator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile
- **[Tindakan: Permintaan khusus]** respons permintaan khusus yang disetel ke variabel tidak ditampilkan dengan benar ([#6793](https://github.com/nocobase/nocobase/pull/6793)) oleh @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Tanggal rilis: 2025-05-06*

#### 🚀 Peningkatan

- **[client]** Komponen RichText mendukung modul dan format props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) oleh @jiannx

#### 🐛 Perbaikan Bug

- **[Verifikasi]** Perbaiki masalah skrip migrasi ([#6820](https://github.com/nocobase/nocobase/pull/6820)) oleh @2013xile
- **[Alur Kerja: Tindakan khusus acara]** masalah tautan tindakan alur kerja yang dipicu oleh @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Tanggal rilis: 2025-05-07*

#### 🎉 Fitur Baru

- **[Blok: iframe]** Blok iframe mendukung konfigurasi atribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) oleh @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Tanggal rilis: 2025-05-08*

#### 🐛 Perbaikan Bug

- **[client]**

  - Ketika komponen bidang relasi dari formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan beberapa pilihan" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe
  - Pemilih tabel di formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe
  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat mengarahkan mouse ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe
  - beberapa bidang asosiasi gagal dikirim saat menampilkan bidang dari koleksi asosiasi ([#6833](https://github.com/nocobase/nocobase/pull/6833)) oleh @katherinehhh
  - tidak dapat menyeret tombol lain ke tombol duplikat ([#6822](https://github.com/nocobase/nocobase/pull/6822)) oleh @katherinehhh
  - masalah gaya bilah paginasi subtable dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh
- **[database]** Perbaiki asosiasi belongs-to tidak dimuat di appends ketika foreign key adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher
- **[Bidang Koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Tanggal rilis: 2025-05-08*

#### 🎉 Fitur Baru

- **[client]**

  - mendukung variabel dalam judul dan konten konfirmasi sekunder ([#6787](https://github.com/nocobase/nocobase/pull/6787)) oleh @katherinehhh
  - mendukung konfigurasi aturan tautan di blok untuk tampil/sembunyi dinamis ([#6636](https://github.com/nocobase/nocobase/pull/6636)) oleh @katherinehhh
- **[undefined]** tambahkan ci publikasi untuk kit lisensi ([#6786](https://github.com/nocobase/nocobase/pull/6786)) oleh @jiannx
- **[Blok: iframe]** Blok iframe mendukung konfigurasi atribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) oleh @zhangzhonghe
- **[Otentikasi]** Dukung fungsi "Lupa Kata Sandi" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) oleh @zhangzhonghe
  Referensi: [Lupa kata sandi](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Manajer file]** Fitur: Tambahkan API `getFileStream` untuk dukungan streaming file. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) oleh @sheldon66
- **[Tindakan: Permintaan khusus]** mendukung variabel respons dalam pesan sukses dari tindakan permintaan khusus ([#6694](https://github.com/nocobase/nocobase/pull/6694)) oleh @katherinehhh
- **[Cetak template]** Fitur: Mendukung opsi Pilih `{ label, value }` dalam pencetakan template. oleh @sheldon66
- **[Blok: Pohon]** blok pohon filter mendukung aturan tautan oleh @katherinehhh
- **[Visualisasi data: ECharts]** Tambahkan pengaturan "Balik Sumbu Y" untuk diagram batang oleh @2013xile

#### 🚀 Peningkatan

- **[client]**

  - Komponen RichText mendukung modul dan format props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) oleh @jiannx
  - optimalkan gaya tombol tambah subtable dan ratakan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh
  - tampilkan judul tombol dengan tooltip saat hover pada ikon tindakan ([#6761](https://github.com/nocobase/nocobase/pull/6761)) oleh @katherinehhh
  - pertahankan fungsionalitas template referensi ([#6743](https://github.com/nocobase/nocobase/pull/6743)) oleh @gchust
  - Sesuaikan pesan unggah ([#6757](https://github.com/nocobase/nocobase/pull/6757)) oleh @mytharcher
- **[utils]** Tingkatkan tinggi daftar bidang tombol filter dan urutkan/kategorikan bidang ([#6779](https://github.com/nocobase/nocobase/pull/6779)) oleh @zhangzhonghe
- **[Manajer file]** Tambahkan opsi batas waktu OSS default ke 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher
- **[Visualisasi data]** Tambahkan API yang diperluas untuk konfigurasi antarmuka bidang ([#6742](https://github.com/nocobase/nocobase/pull/6742)) oleh @2013xile
- **[Kebijakan kata sandi]** Ubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile
- **[WeCom]** Prioritaskan email perusahaan daripada email pribadi saat memperbarui email pengguna oleh @2013xile

#### 🐛 Perbaikan Bug

- **[database]**

  - Impor gagal karena nilai bidang teks. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) oleh @aaaaaajie
  - Perbaiki asosiasi belongs-to tidak dimuat di appends ketika foreign key adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher
  - Perbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher
  - Hindari kesalahan yang dilemparkan ketika tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher
  - tambahkan unavailableActions ke koleksi sql dan koleksi tampilan ([#6765](https://github.com/nocobase/nocobase/pull/6765)) oleh @katherinehhh
- **[client]**

  - beberapa bidang asosiasi gagal dikirim saat menampilkan bidang dari koleksi asosiasi ([#6833](https://github.com/nocobase/nocobase/pull/6833)) oleh @katherinehhh
  - tidak dapat menyeret tombol lain ke tombol duplikat ([#6822](https://github.com/nocobase/nocobase/pull/6822)) oleh @katherinehhh
  - Pemilih tabel di formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe
  - Ketika komponen bidang relasi dari formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan beberapa pilihan" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe
  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat mengarahkan mouse ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe
  - masalah gaya bilah paginasi subtable dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh
  - masalah dengan mengonfigurasi aturan tautan di subform (popup) dalam subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh
  - ketika pemilihan variabel memerlukan pemuatan asinkron, menu yang terakhir dipilih hilang. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) oleh @gchust
  - beberapa pesan kesalahan ditampilkan ketika aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh
  - Perbaiki masalah di mana sub-bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe
  - Berikan props lain ke komponen Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) oleh @sheldon66
  - bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh
  - Di formulir filter, mengganti operator bidang lalu menyegarkan halaman menyebabkan kesalahan ([#6781](https://github.com/nocobase/nocobase/pull/6781)) oleh @zhangzhonghe
  - Di blok runtuh, mengklik tombol hapus di kotak pencarian bidang relasi tidak boleh menghapus rentang data ([#6782](https://github.com/nocobase/nocobase/pull/6782)) oleh @zhangzhonghe
  - masalah perataan tombol tambah catatan anak di tabel pohon ([#6791](https://github.com/nocobase/nocobase/pull/6791)) oleh @katherinehhh
  - Larang memindahkan menu sebelum atau sesudah tab halaman ([#6777](https://github.com/nocobase/nocobase/pull/6777)) oleh @zhangzhonghe
  - Blok tabel menampilkan data duplikat saat memfilter ([#6792](https://github.com/nocobase/nocobase/pull/6792)) oleh @zhangzhonghe
  - masalah operator parameter kueri url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) oleh @katherinehhh
  - hanya tindakan ekspor dalam koleksi tampilan yang didukung ketika writableView salah ([#6763](https://github.com/nocobase/nocobase/pull/6763)) oleh @katherinehhh
  - Data yang salah diambil untuk bidang array banyak-ke-banyak dari tabel terkait dalam formulir ([#6744](https://github.com/nocobase/nocobase/pull/6744)) oleh @2013xile
  - pembuatan data asosiasi yang tidak terduga saat menampilkan bidang asosiasi di bawah sub-form/sub-table dalam formulir buat ([#6727](https://github.com/nocobase/nocobase/pull/6727)) oleh @katherinehhh
- **[create-nocobase-app]** Perbaiki sementara masalah mariadb dengan menurunkan versi ke 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) oleh @chenos
- **[Tindakan: Ekspor catatan]** Perbaiki kesalahan mengekspor teks panjang. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) oleh @aaaaaajie
- **[Bidang Koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh
- **[Verifikasi]** Perbaiki masalah skrip migrasi ([#6820](https://github.com/nocobase/nocobase/pull/6820)) oleh @2013xile
- **[Otentikasi]** Jangan izinkan mengubah nama autentikator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile
- **[Tindakan: Permintaan khusus]** respons permintaan khusus yang disetel ke variabel tidak ditampilkan dengan benar ([#6793](https://github.com/nocobase/nocobase/pull/6793)) oleh @katherinehhh
- **[Blok: Panel tindakan]** ikon panel tindakan hilang ketika hanya-ikon diaktifkan ([#6773](https://github.com/nocobase/nocobase/pull/6773)) oleh @katherinehhh
- **[Alur Kerja: Tindakan khusus acara]** masalah tautan tindakan alur kerja yang dipicu oleh @katherinehhh
- **[Alur Kerja: simpul perhitungan tanggal]** Perbaiki kesalahan di browser lama tanpa API `Intl` oleh @mytharcher
- **[Cetak template]** Perbaiki: Perbaiki logika validasi izin untuk mencegah tindakan yang tidak sah. oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]** url akses kedaluwarsa tidak valid oleh @jiannx
- **[Blok: Pohon]** Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong oleh @zhangzhonghe
