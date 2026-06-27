---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk template blok dalam formulir proses persetujuan, peningkatan pada alur kerja, dan perbaikan bug."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Tanggal rilis: 27-03-2025*

#### 🚀 Peningkatan

- **[klien]**

  - Optimalkan pesan error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) oleh @chenos
  - Hanya mendukung pratinjau file teks biasa ([#6563](https://github.com/nocobase/nocobase/pull/6563)) oleh @mytharcher
- **[Bidang Koleksi: Urutan]** mendukung pengaturan urutan sebagai bidang judul untuk blok kalender ([#6562](https://github.com/nocobase/nocobase/pull/6562)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Mendukung untuk melewati validator di pengaturan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - masalah dengan tampilan bidang tanggal dalam pemfilteran lingkup data ([#6564](https://github.com/nocobase/nocobase/pull/6564)) oleh @katherinehhh
  - Opsi 'Konten overflow elipsis' memerlukan penyegaran halaman agar status toggle berlaku ([#6520](https://github.com/nocobase/nocobase/pull/6520)) oleh @zhangzhonghe
  - Tidak dapat membuka modal lain di dalam modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) oleh @zhangzhonghe
- **[Dokumentasi API]** Halaman dokumentasi API tidak dapat di-scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) oleh @zhangzhonghe
- **[Alur Kerja]** Pastikan kunci alur kerja dibuat sebelum disimpan ([#6567](https://github.com/nocobase/nocobase/pull/6567)) oleh @mytharcher
- **[Alur Kerja: Peristiwa pasca-tindakan]** Beberapa catatan dalam tindakan massal harus memicu beberapa kali ([#6559](https://github.com/nocobase/nocobase/pull/6559)) oleh @mytharcher
- **[Otentikasi]** Masalah lokalisasi untuk bidang halaman pendaftaran ([#6556](https://github.com/nocobase/nocobase/pull/6556)) oleh @2013xile
- **[Formulir publik]** masalah dengan judul halaman formulir publik yang menampilkan 'Memuat...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) oleh @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Tanggal rilis: 27-03-2025*

#### 🐛 Perbaikan Bug

- **[Blok: Formulir multi-langkah]**

  - tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx
  - memperbaiki bug bahwa reset formulir tidak valid ketika bidang dikaitkan dengan bidang lain oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki nilai formulir persetujuan untuk dikirim oleh @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Tanggal rilis: 28-03-2025*

#### 🚀 Peningkatan

- **[Manajer tugas asinkron]** optimalkan tombol impor/ekspor di Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) oleh @chenos
- **[Aksi: Ekspor catatan Pro]** optimalkan tombol impor/ekspor di Pro oleh @katherinehhh
- **[Manajer migrasi]** izinkan melewati pencadangan dan pemulihan otomatis untuk migrasi oleh @gchust

#### 🐛 Perbaikan Bug

- **[klien]** konflik tautan antara bidang asosiasi bernama sama di sub-tabel berbeda dalam formulir yang sama ([#6577](https://github.com/nocobase/nocobase/pull/6577)) oleh @katherinehhh
- **[Aksi: Edit batch]** Klik tombol edit batch, konfigurasikan jendela pop-up, lalu buka lagi, jendela pop-up kosong ([#6578](https://github.com/nocobase/nocobase/pull/6578)) oleh @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Tanggal rilis: 29-03-2025*

#### 🐛 Perbaikan Bug

- **[Kalender]** data hilang pada tanggal batas di tampilan kalender mingguan ([#6587](https://github.com/nocobase/nocobase/pull/6587)) oleh @katherinehhh
- **[Auth: OIDC]** Pengalihan yang salah terjadi ketika jalur callback adalah string 'null' oleh @2013xile
- **[Alur Kerja: Persetujuan]** Perbaiki konfigurasi node persetujuan yang salah setelah skema berubah oleh @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Tanggal rilis: 01-04-2025*

#### 🚀 Peningkatan

- **[database]**

  - Tambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher
  - Tambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher
- **[Manajer file]** Tambahkan opsi trim untuk bidang teks dari koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher
- **[Alur Kerja]** Tingkatkan kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Mendukung penggunaan template blok untuk formulir proses persetujuan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]** Hindari perubahan bidang "datetimeNoTz" ketika nilai tidak berubah dalam memperbarui catatan ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher
- **[klien]**

  - bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh
  - Perbaiki properti `disabled` tidak berfungsi ketika `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher
  - masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh
- **[Bidang Koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang dalam koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile
- **[Formulir publik]** Izin tampilan termasuk daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos
- **[Otentikasi]** penugasan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile
- **[Alur Kerja]** Perbaiki tampilan opsi sinkronisasi yang salah ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher
- **[Blok: Peta]** validasi manajemen peta tidak boleh lulus dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Perbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher
  - Perbaiki mode cabang ketika `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Tanggal rilis: 27-03-2025*

#### 🎉 Fitur Baru

- **[klien]** Mendukung konfigurasi variabel setelah pengiriman, memungkinkan pengalihan dengan ID data saat ini ([#6465](https://github.com/nocobase/nocobase/pull/6465)) oleh @katherinehhh
- **[Bidang Koleksi: Markdown(Vditor)]** Vditor mendukung S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) oleh @zhangzhonghe

#### 🚀 Peningkatan

- **[klien]**

  - Hanya mendukung pratinjau file teks biasa ([#6563](https://github.com/nocobase/nocobase/pull/6563)) oleh @mytharcher
  - Optimalkan pesan error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) oleh @chenos
  - Batasi tindakan yang tersedia untuk properti bidang yang berbeda dalam aturan tautan ([#6548](https://github.com/nocobase/nocobase/pull/6548)) oleh @katherinehhh
- **[Manajer file]** Sesuaikan API `getFileData` penyimpanan ([#6553](https://github.com/nocobase/nocobase/pull/6553)) oleh @mytharcher
- **[Kontrol akses]** Optimalkan urutan dan gaya peralihan peran ([#6555](https://github.com/nocobase/nocobase/pull/6555)) oleh @aaaaaajie
- **[Bidang Koleksi: Urutan]** mendukung pengaturan urutan sebagai bidang judul untuk blok kalender ([#6562](https://github.com/nocobase/nocobase/pull/6562)) oleh @katherinehhh
- **[Alur Kerja]** Pisahkan kolom yang dieksekusi ke tabel statistik ([#6534](https://github.com/nocobase/nocobase/pull/6534)) oleh @mytharcher
- **[Alur Kerja: Peristiwa tindakan kustom]** Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher
  - Mendukung untuk melewati validator di pengaturan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Versi browser yang lebih lama akan menampilkan halaman kosong ([#6571](https://github.com/nocobase/nocobase/pull/6571)) oleh @zhangzhonghe
  - Opsi 'Konten overflow elipsis' memerlukan penyegaran halaman agar status toggle berlaku ([#6520](https://github.com/nocobase/nocobase/pull/6520)) oleh @zhangzhonghe
  - masalah dengan tampilan bidang tanggal dalam pemfilteran lingkup data ([#6564](https://github.com/nocobase/nocobase/pull/6564)) oleh @katherinehhh
  - Tidak dapat membuka modal lain di dalam modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) oleh @zhangzhonghe
  - Tindakan simpan sebagai template akan gagal jika berisi bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust
  - Menu atas halaman menampilkan kosong ([#6551](https://github.com/nocobase/nocobase/pull/6551)) oleh @zhangzhonghe
  - penugasan bidang dengan nilai null tidak efektif ([#6549](https://github.com/nocobase/nocobase/pull/6549)) oleh @katherinehhh
- **[Alur Kerja]**

  - Pastikan kunci alur kerja dibuat sebelum disimpan ([#6567](https://github.com/nocobase/nocobase/pull/6567)) oleh @mytharcher
  - Perbaiki error yang muncul saat mengonfigurasi opsi hapus otomatis ([#6560](https://github.com/nocobase/nocobase/pull/6560)) oleh @mytharcher
- **[Formulir publik]** masalah dengan judul halaman formulir publik yang menampilkan 'Memuat...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) oleh @katherinehhh
- **[Seluler]** Sesuaikan ukuran font yang ditampilkan di ponsel menjadi 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) oleh @zhangzhonghe
- **[Variabel dan rahasia]** tombol filter ikon hilang, jumlah filter tidak ditampilkan, dan data tidak disegarkan setelah memfilter saat berpindah halaman ([#6568](https://github.com/nocobase/nocobase/pull/6568)) oleh @katherinehhh
- **[Otentikasi]** Masalah lokalisasi untuk bidang halaman pendaftaran ([#6556](https://github.com/nocobase/nocobase/pull/6556)) oleh @2013xile
- **[Dokumentasi API]** Halaman dokumentasi API tidak dapat di-scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) oleh @zhangzhonghe
- **[Alur Kerja: Peristiwa pasca-tindakan]** Beberapa catatan dalam tindakan massal harus memicu beberapa kali ([#6559](https://github.com/nocobase/nocobase/pull/6559)) oleh @mytharcher
- **[Blok: template]**

  - aturan tautan blok formulir belum disinkronkan dengan benar dari template ([#6550](https://github.com/nocobase/nocobase/pull/6550)) oleh @gchust
  - duplikat menu simpan sebagai template di blok detail ([#6558](https://github.com/nocobase/nocobase/pull/6558)) oleh @gchust
- **[Alur Kerja: Persetujuan]** Perbaiki nilai formulir persetujuan untuk dikirim oleh @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Tanggal rilis: 27-03-2025*

#### 🐛 Perbaikan Bug

- **[Blok: Formulir multi-langkah]** tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Tanggal rilis: 28-03-2025*

#### 🎉 Fitur Baru

- **[Blok: Panel tindakan]** tambahkan callback onScanSuccess untuk menangani pemindaian yang berhasil dan keluar dari UI kamera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) oleh @sheldon66

#### 🚀 Peningkatan

- **[Manajer tugas asinkron]** optimalkan tombol impor/ekspor di Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) oleh @chenos
- **[Aksi: Ekspor catatan Pro]** optimalkan tombol impor/ekspor di Pro oleh @katherinehhh
- **[Manajer migrasi]** izinkan melewati pencadangan dan pemulihan otomatis untuk migrasi oleh @gchust

#### 🐛 Perbaikan Bug

- **[klien]** konflik tautan antara bidang asosiasi bernama sama di sub-tabel berbeda dalam formulir yang sama ([#6577](https://github.com/nocobase/nocobase/pull/6577)) oleh @katherinehhh
- **[Kalender]** data hilang pada tanggal batas di tampilan kalender mingguan ([#6587](https://github.com/nocobase/nocobase/pull/6587)) oleh @katherinehhh
- **[Kontrol akses]** Penugasan peran saat ini yang salah selama login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) oleh @aaaaaajie
- **[Aksi: Edit batch]** Klik tombol edit batch, konfigurasikan jendela pop-up, lalu buka lagi, jendela pop-up kosong ([#6578](https://github.com/nocobase/nocobase/pull/6578)) oleh @zhangzhonghe
- **[Blok: Formulir multi-langkah]** memperbaiki bug bahwa reset formulir tidak valid ketika bidang dikaitkan dengan bidang lain oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki konfigurasi node persetujuan yang salah setelah skema berubah oleh @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Tanggal rilis: 01-04-2025*

#### 🚀 Peningkatan

- **[database]**

  - Tambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher
  - Tambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher
- **[klien]** mendukung konfigurasi visibilitas titik dua di label bidang formulir berdasarkan tata letak ([#6561](https://github.com/nocobase/nocobase/pull/6561)) oleh @katherinehhh
- **[Manajer file]** Tambahkan opsi trim untuk bidang teks dari koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher
- **[Alur Kerja]** Tingkatkan kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Mendukung penggunaan template blok untuk formulir proses persetujuan oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]**

  - Hindari perubahan bidang "datetimeNoTz" ketika nilai tidak berubah dalam memperbarui catatan ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher
  - Saat menghapus catatan satu-ke-banyak, baik `filter` dan `filterByTk` diteruskan dan `filter` menyertakan bidang asosiasi, `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile
- **[klien]**

  - Perbaiki properti `disabled` tidak berfungsi ketika `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher
  - masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh
  - bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh
  - tombol kirim dan segarkan tidak menampilkan mode hanya ikon dengan benar ([#6592](https://github.com/nocobase/nocobase/pull/6592)) oleh @katherinehhh
- **[Formulir publik]** Izin tampilan termasuk daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos
- **[Otentikasi]** penugasan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile
- **[Bidang Koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang dalam koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile
- **[Alur Kerja]** Perbaiki tampilan opsi sinkronisasi yang salah ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher
- **[Blok: Peta]** validasi manajemen peta tidak boleh lulus dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh
- **[Auth: OIDC]** Pengalihan yang salah terjadi ketika jalur callback adalah string 'null' oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Perbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher
  - Perbaiki mode cabang ketika `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Tanggal rilis: 25-03-2025*

#### 🎉 Fitur Baru

- **[klien]** Mendukung konfigurasi variabel setelah pengiriman, memungkinkan pengalihan dengan ID data saat ini ([#6465](https://github.com/nocobase/nocobase/pull/6465)) oleh @katherinehhh
- **[Bidang Koleksi: Markdown(Vditor)]** Vditor mendukung S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) oleh @zhangzhonghe

#### 🚀 Peningkatan

- **[klien]**

  - Hanya mendukung pratinjau file teks biasa ([#6563](https://github.com/nocobase/nocobase/pull/6563)) oleh @mytharcher
  - Optimalkan pesan error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) oleh @chenos
  - Batasi tindakan yang tersedia untuk properti bidang yang berbeda dalam aturan tautan ([#6548](https://github.com/nocobase/nocobase/pull/6548)) oleh @katherinehhh
- **[Alur Kerja]** Pisahkan kolom yang dieksekusi ke tabel statistik ([#6534](https://github.com/nocobase/nocobase/pull/6534)) oleh @mytharcher
- **[Seluler]** Sesuaikan gaya pop-up notifikasi untuk perangkat seluler ([#6557](https://github.com/nocobase/nocobase/pull/6557)) oleh @zhangzhonghe
- **[Bidang Koleksi: Urutan]** mendukung pengaturan urutan sebagai bidang judul untuk blok kalender ([#6562](https://github.com/nocobase/nocobase/pull/6562)) oleh @katherinehhh
- **[Manajer file]** Sesuaikan API `getFileData` penyimpanan ([#6553](https://github.com/nocobase/nocobase/pull/6553)) oleh @mytharcher
- **[Kontrol akses]** Optimalkan urutan dan gaya peralihan peran ([#6555](https://github.com/nocobase/nocobase/pull/6555)) oleh @aaaaaajie
- **[Formulir publik]** atur judul halaman formulir publik ke judul yang dikonfigurasi saat pembuatan ([#6538](https://github.com/nocobase/nocobase/pull/6538)) oleh @katherinehhh
- **[Alur Kerja: Peristiwa tindakan kustom]** Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Mendukung untuk melewati validator di pengaturan oleh @mytharcher
  - Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Versi browser yang lebih lama akan menampilkan halaman kosong ([#6571](https://github.com/nocobase/nocobase/pull/6571)) oleh @zhangzhonghe
  - Tidak dapat membuka modal lain di dalam modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) oleh @zhangzhonghe
  - Opsi 'Konten overflow elipsis' memerlukan penyegaran halaman agar status toggle berlaku ([#6520](https://github.com/nocobase/nocobase/pull/6520)) oleh @zhangzhonghe
  - masalah dengan tampilan bidang tanggal dalam pemfilteran lingkup data ([#6564](https://github.com/nocobase/nocobase/pull/6564)) oleh @katherinehhh
  - Menu atas halaman menampilkan kosong ([#6551](https://github.com/nocobase/nocobase/pull/6551)) oleh @zhangzhonghe
  - Tindakan simpan sebagai template akan gagal jika berisi bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust
  - Tidak dapat menggunakan variabel 'Pengguna Saat Ini' saat menambahkan halaman tautan ([#6536](https://github.com/nocobase/nocobase/pull/6536)) oleh @zhangzhonghe
  - penugasan bidang dengan nilai null tidak efektif ([#6549](https://github.com/nocobase/nocobase/pull/6549)) oleh @katherinehhh
  - Tindakan simpan sebagai template akan gagal jika berisi bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust
  - Hapus opsi 'Izinkan pemilihan ganda' dari bidang pilih tunggal dropdown di formulir filter ([#6515](https://github.com/nocobase/nocobase/pull/6515)) oleh @zhangzhonghe
  - Rentang data bidang relasional tidak efektif ([#6530](https://github.com/nocobase/nocobase/pull/6530)) oleh @zhangzhonghe
  - Error perintah `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) oleh @gchust
  - masalah seret dan lepas tombol baris tabel ([#6544](https://github.com/nocobase/nocobase/pull/6544)) oleh @katherinehhh
- **[Seluler]** Sesuaikan ukuran font yang ditampilkan di ponsel menjadi 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Perbaiki error yang muncul saat mengonfigurasi opsi hapus otomatis ([#6560](https://github.com/nocobase/nocobase/pull/6560)) oleh @mytharcher
  - Pastikan kunci alur kerja dibuat sebelum disimpan ([#6567](https://github.com/nocobase/nocobase/pull/6567)) oleh @mytharcher
- **[Variabel dan rahasia]** tombol filter ikon hilang, jumlah filter tidak ditampilkan, dan data tidak disegarkan setelah memfilter saat berpindah halaman ([#6568](https://github.com/nocobase/nocobase/pull/6568)) oleh @katherinehhh
- **[Formulir publik]** masalah dengan judul halaman formulir publik yang menampilkan 'Memuat...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) oleh @katherinehhh
- **[Dokumentasi API]** Halaman dokumentasi API tidak dapat di-scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) oleh @zhangzhonghe
- **[Alur Kerja: Peristiwa pasca-tindakan]** Beberapa catatan dalam tindakan massal harus memicu beberapa kali ([#6559](https://github.com/nocobase/nocobase/pull/6559)) oleh @mytharcher
- **[Blok: template]**

  - duplikat menu simpan sebagai template di blok detail ([#6558](https://github.com/nocobase/nocobase/pull/6558)) oleh @gchust
  - aturan tautan blok formulir belum disinkronkan dengan benar dari template ([#6550](https://github.com/nocobase/nocobase/pull/6550)) oleh @gchust
- **[Otentikasi]** Masalah lokalisasi untuk bidang halaman pendaftaran ([#6556](https://github.com/nocobase/nocobase/pull/6556)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Tidak dapat mengunduh file yang disandikan UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) oleh @2013xile
- **[Koleksi: Pohon]** Masalah migrasi untuk plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) oleh @2013xile
- **[Blok: Formulir multi-langkah]** tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki nilai formulir persetujuan untuk dikirim oleh @mytharcher
