---
title: "NocoBase v1.7.0-alpha.13: mendukung variabel dalam judul dan konten konfirmasi sekunder"
description: "Catatan Rilis v1.7.0-alpha.13"
---

### 🎉 Fitur Baru

- **[client]**
  - Mendukung variabel pada judul dan konten konfirmasi sekunder ([#6787](https://github.com/nocobase/nocobase/pull/6787)) oleh @katherinehhh

  - Mendukung konfigurasi aturan tautan di blok untuk tampil/sembunyi dinamis ([#6636](https://github.com/nocobase/nocobase/pull/6636)) oleh @katherinehhh

- **[undefined]** Menambahkan publish ci untuk license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) oleh @jiannx

- **[Blok: iframe]** Blok Iframe mendukung konfigurasi atribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) oleh @zhangzhonghe

- **[Autentikasi]** Mendukung fungsi "Lupa Kata Sandi" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) oleh @zhangzhonghe
Referensi: [Lupa kata sandi](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Manajer Berkas]** Fitur: Menambahkan API `getFileStream` untuk dukungan streaming berkas. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) oleh @sheldon66

- **[Aksi: Permintaan Kustom]** Mendukung variabel respons dalam pesan sukses aksi permintaan kustom ([#6694](https://github.com/nocobase/nocobase/pull/6694)) oleh @katherinehhh

- **[Cetak Templat]** Fitur: Mendukung opsi Pilih `{ label, value }` dalam pencetakan templat. oleh @sheldon66

- **[Blok: Pohon]** blok filter pohon mendukung aturan tautan oleh @katherinehhh

- **[Visualisasi Data: ECharts]** Menambahkan pengaturan "Balik Sumbu Y" untuk diagram batang oleh @2013xile

### 🚀 Peningkatan

- **[client]**
  - Komponen RichText mendukung props modules dan formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) oleh @jiannx

  - Mengoptimalkan gaya tombol tambah sub-tabel dan menyelaraskan paginator pada baris yang sama ([#6790](https://github.com/nocobase/nocobase/pull/6790)) oleh @katherinehhh

  - Menampilkan judul tombol dengan tooltip saat hover pada ikon aksi ([#6761](https://github.com/nocobase/nocobase/pull/6761)) oleh @katherinehhh

  - Mempertahankan fungsionalitas templat referensi ([#6743](https://github.com/nocobase/nocobase/pull/6743)) oleh @gchust

  - Menyesuaikan pesan unggah ([#6757](https://github.com/nocobase/nocobase/pull/6757)) oleh @mytharcher

- **[utils]** Meningkatkan tinggi daftar bidang tombol filter dan mengurutkan/mengkategorikan bidang ([#6779](https://github.com/nocobase/nocobase/pull/6779)) oleh @zhangzhonghe

- **[Manajer Berkas]** Menambahkan opsi batas waktu OSS default 10 menit ([#6795](https://github.com/nocobase/nocobase/pull/6795)) oleh @mytharcher

- **[Visualisasi Data]** Menambahkan API yang diperluas untuk konfigurasi antarmuka bidang ([#6742](https://github.com/nocobase/nocobase/pull/6742)) oleh @2013xile

- **[Kebijakan Kata Sandi]** Mengubah kedaluwarsa kata sandi default menjadi tidak pernah kedaluwarsa oleh @2013xile

- **[WeCom]** Mengutamakan email perusahaan daripada email pribadi saat memperbarui email pengguna oleh @2013xile

### 🐛 Perbaikan Bug

- **[database]**
  - Impor gagal karena nilai bidang teks. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) oleh @aaaaaajie

  - Memperbaiki asosiasi belongs-to tidak dimuat di appends ketika foreign key adalah bigInt di MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) oleh @mytharcher

  - Memperbaiki kasus uji ([#6811](https://github.com/nocobase/nocobase/pull/6811)) oleh @mytharcher

  - Menghindari kesalahan yang muncul ketika tipe data bukan string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) oleh @mytharcher

  - menambahkan unavailableActions ke koleksi sql dan koleksi tampilan ([#6765](https://github.com/nocobase/nocobase/pull/6765)) oleh @katherinehhh

- **[client]**
  - bidang asosiasi ganda gagal dikirim saat menampilkan bidang dari koleksi asosiasi ([#6833](https://github.com/nocobase/nocobase/pull/6833)) oleh @katherinehhh

  - tidak dapat menyeret tombol lain ke tombol duplikat ([#6822](https://github.com/nocobase/nocobase/pull/6822)) oleh @katherinehhh

  - Pemilih tabel di formulir filter, gaya tidak normal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) oleh @zhangzhonghe

  - Ketika komponen bidang relasi dari formulir filter diubah menjadi pemilih data, tidak ada item konfigurasi "Izinkan pemilihan ganda" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) oleh @zhangzhonghe

  - Di subhalaman bersarang, daftar blok tidak ditampilkan saat mengarahkan mouse ke tombol "Tambah blok" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) oleh @zhangzhonghe

  - masalah gaya bilah paginasi sub-tabel dalam mode hanya-baca ([#6830](https://github.com/nocobase/nocobase/pull/6830)) oleh @katherinehhh

  - masalah dengan konfigurasi aturan tautan di subform (popup) dalam sub-tabel ([#6803](https://github.com/nocobase/nocobase/pull/6803)) oleh @katherinehhh

  - ketika pemilihan variabel memerlukan pemuatan asinkron, menu yang terakhir dipilih hilang. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) oleh @gchust

  - beberapa pesan kesalahan ditampilkan ketika aturan validasi dilanggar di bidang formulir ([#6805](https://github.com/nocobase/nocobase/pull/6805)) oleh @katherinehhh

  - Memperbaiki masalah di mana sub-bidang bidang satu-ke-banyak tidak dapat dipilih sebagai opsi pemfilteran di formulir filter ([#6809](https://github.com/nocobase/nocobase/pull/6809)) oleh @zhangzhonghe

  - Meneruskan props lain ke komponen Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) oleh @sheldon66

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) oleh @katherinehhh

  - bidang asosiasi tidak mengirimkan data saat menampilkan bidang dari koleksi terkait ([#6798](https://github.com/nocobase/nocobase/pull/6798)) oleh @katherinehhh

  - Di formulir filter, mengganti operator bidang lalu menyegarkan halaman menyebabkan kesalahan ([#6781](https://github.com/nocobase/nocobase/pull/6781)) oleh @zhangzhonghe

  - Di blok collapse, mengklik tombol hapus di kotak pencarian bidang relasi tidak boleh menghapus rentang data ([#6782](https://github.com/nocobase/nocobase/pull/6782)) oleh @zhangzhonghe

  - masalah perataan tombol tambah catatan anak di tabel pohon ([#6791](https://github.com/nocobase/nocobase/pull/6791)) oleh @katherinehhh

  - Melarang memindahkan menu sebelum atau sesudah tab halaman ([#6777](https://github.com/nocobase/nocobase/pull/6777)) oleh @zhangzhonghe

  - Blok tabel menampilkan data duplikat saat memfilter ([#6792](https://github.com/nocobase/nocobase/pull/6792)) oleh @zhangzhonghe

  - masalah operator parameter kueri url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) oleh @katherinehhh

  - hanya aksi ekspor di koleksi tampilan yang didukung ketika writableView adalah false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) oleh @katherinehhh

  - Data yang diambil tidak benar untuk bidang array banyak-ke-banyak dari tabel terkait di formulir ([#6744](https://github.com/nocobase/nocobase/pull/6744)) oleh @2013xile

  - pembuatan data asosiasi yang tidak terduga saat menampilkan bidang asosiasi di bawah sub-form/sub-tabel di formulir buat ([#6727](https://github.com/nocobase/nocobase/pull/6727)) oleh @katherinehhh

- **[create-nocobase-app]** Memperbaiki sementara masalah mariadb dengan menurunkan versi ke 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) oleh @chenos

- **[Aksi: Ekspor Rekaman]** Memperbaiki kesalahan mengekspor teks panjang. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) oleh @aaaaaajie

- **[Bidang Koleksi: Lampiran(URL)]** bidang lampiran (URL) tidak boleh mengizinkan konfigurasi nilai dalam aturan tautan ([#6831](https://github.com/nocobase/nocobase/pull/6831)) oleh @katherinehhh

- **[Verifikasi]** Memperbaiki masalah skrip migrasi ([#6820](https://github.com/nocobase/nocobase/pull/6820)) oleh @2013xile

- **[Autentikasi]** Melarang mengubah nama autentikator ([#6808](https://github.com/nocobase/nocobase/pull/6808)) oleh @2013xile

- **[Aksi: Permintaan Kustom]** respons permintaan kustom yang disetel ke variabel tidak ditampilkan dengan benar ([#6793](https://github.com/nocobase/nocobase/pull/6793)) oleh @katherinehhh

- **[Blok: Panel Aksi]** ikon panel aksi hilang ketika hanya-ikon diaktifkan ([#6773](https://github.com/nocobase/nocobase/pull/6773)) oleh @katherinehhh

- **[Alur Kerja: Aksi peristiwa kustom]** masalah tautan aksi alur kerja yang dipicu oleh @katherinehhh

- **[Alur Kerja: simpul perhitungan tanggal]** Memperbaiki kesalahan di browser lama tanpa API `Intl` oleh @mytharcher

- **[Cetak Templat]** Perbaikan: Memperbaiki logika validasi izin untuk mencegah aksi yang tidak sah. oleh @sheldon66

- **[Penyimpanan Berkas: S3(Pro)]** url akses kedaluwarsa tidak valid oleh @jiannx

- **[Blok: Pohon]** Setelah terhubung melalui foreign key, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong oleh @zhangzhonghe
