---
title: "Pembaruan Mingguan NocoBase: Dukungan Variabel di Sisi Kiri Kondisi Aturan Tautan"
description: "Pembaruan minggu ini meliputi: penambahan antarmuka kode, dukungan untuk gambar dinamis dan rendering barcode dalam templat dokumen, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*Tanggal rilis: 2025-04-17*

#### 🚀 Peningkatan

- **[client]** Menambahkan API penundaan untuk skenario yang terbuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher
- **[create-nocobase-app]** Memutakhirkan beberapa dependensi ke versi terbaru ([#6673](https://github.com/nocobase/nocobase/pull/6673)) oleh @chenos

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki error yang muncul saat kursor mouse diarahkan ke blok template yang direferensikan dalam konfigurasi node persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher
  - bidang asosiasi kustom tidak menampilkan pengaturan komponen bidang ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh
  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher
  - lazy load komponen ui yang hilang akan menyebabkan error render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust
  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher
  - bidang warisan ditampilkan dalam daftar penugasan bidang koleksi saat ini ([#6666](https://github.com/nocobase/nocobase/pull/6666)) oleh @katherinehhh
- **[database]** Memperbaiki error build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie
- **[build]** output build salah ketika plugin bergantung pada beberapa library AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) oleh @gchust
- **[Aksi: Impor catatan]** memperbaiki error saat mengimpor bidang waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie
- **[Workflow: Node manual]** Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher
- **[Blok: iframe]** scrollbar vertikal muncul ketika blok iframe diatur ke tinggi penuh ([#6675](https://github.com/nocobase/nocobase/pull/6675)) oleh @katherinehhh
- **[Workflow: Event aksi kustom]** Memperbaiki kasus uji oleh @mytharcher
- **[Manajer cadangan]** error timeout terjadi saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*Tanggal rilis: 2025-04-22*

#### 🚀 Peningkatan

- **[create-nocobase-app]** Memutakhirkan dependensi dan menghapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos
- **[Manajer file]** Mengekspos API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher
- **[Workflow]** Menambahkan tipe tanggal ke set tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Masalah ikon bilah navigasi atas seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe
  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe
  - Masalah peralihan pemilih di bidang tanggal tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh
  - Masalah tombol ciutkan di menu kiri yang terhalang oleh jendela pop-up workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe
  - batasan opsi aksi yang hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh
  - tombol ekspor ditampilkan tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh
  - Bidang wajib yang disembunyikan oleh aturan tautan tidak boleh mempengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe
- **[server]** appVersion yang dihasilkan salah oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos
- **[build]** Memperbaiki error yang muncul di perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher
- **[Workflow]** Memperbaiki error yang muncul saat menjalankan event terjadwal di subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher
- **[Workflow: Event aksi kustom]** Mendukung eksekusi dalam mode beberapa catatan oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Menambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*Tanggal rilis: 2025-04-17*

#### 🎉 Fitur Baru

- **[client]** mendukung variabel di sisi kiri kondisi aturan tautan ([#6609](https://github.com/nocobase/nocobase/pull/6609)) oleh @katherinehhh
- **[Workflow: node kalkulasi tanggal]** Menambahkan fungsi `changeTimezone` untuk mengubah nilai zona waktu untuk pemformatan oleh @mytharcher

#### 🚀 Peningkatan

- **[client]**
  - mendukung catatan tabel yang dipilih dalam permintaan kustom ([#6647](https://github.com/nocobase/nocobase/pull/6647)) oleh @katherinehhh
  - Menambahkan API penundaan untuk skenario yang terbuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]** Memperbaiki error build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie
- **[client]**

  - Memperbaiki error yang muncul saat kursor mouse diarahkan ke blok template yang direferensikan dalam konfigurasi node persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher
  - masalah tampilan deskripsi bidang di workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) oleh @katherinehhh
  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher
  - bidang asosiasi kustom tidak menampilkan pengaturan komponen bidang ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh
  - kompatibilitas aturan tautan dengan data lama ([#6686](https://github.com/nocobase/nocobase/pull/6686)) oleh @katherinehhh
  - lazy load komponen ui yang hilang akan menyebabkan error render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust
  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher
- **[Workflow: Node manual]** Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher
- **[Aksi: Impor catatan]** memperbaiki error saat mengimpor bidang waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie
- **[Workflow: Event aksi kustom]** Memperbaiki kasus uji oleh @mytharcher
- **[Manajer cadangan]** error timeout terjadi saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*Tanggal rilis: 2025-04-18*

#### 🚀 Peningkatan

- **[Manajer cadangan]** mengizinkan pemulihan aplikasi utama dari cadangan sub aplikasi oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki error yang muncul di node buat / perbarui workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) oleh @mytharcher
- **[Workflow: Node manual]** Memperbaiki error ACL di pusat tugas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki error ACL di pusat tugas oleh @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*Tanggal rilis: 2025-04-23*

#### 🚀 Peningkatan

- **[create-nocobase-app]** Memutakhirkan dependensi dan menghapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos
- **[Seluler]** Mengoptimalkan kecepatan pembukaan popup pemilih tanggal seluler ([#6735](https://github.com/nocobase/nocobase/pull/6735)) oleh @zhangzhonghe
- **[Blok: template]** mendukung konversi blok template menjadi blok normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) oleh @gchust
- **[Editor tema]** Mengizinkan pengaturan lebar sidebar dalam konfigurasi tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) oleh @chenos
- **[Manajer file]** Mengekspos API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher
- **[Workflow]** Menambahkan tipe tanggal ke set tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher
- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[client]**

  - Masalah dengan menyegarkan blok data setelah pengiriman berhasil ([#6748](https://github.com/nocobase/nocobase/pull/6748)) oleh @zhangzhonghe
  - filter yang hilang untuk data yang sudah diasosiasikan saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh
  - Masalah tombol ciutkan di menu kiri yang terhalang oleh jendela pop-up workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe
  - aturan tautan tombol 'Tambah Anak' tabel pohon kehilangan 'catatan saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh
  - kondisi bidang tanggal waktu tidak berfungsi dalam aturan tautan ([#6728](https://github.com/nocobase/nocobase/pull/6728)) oleh @katherinehhh
  - Masalah ikon bilah navigasi atas seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe
  - tampilan nilai yang salah untuk "Aktifkan kolom indeks" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) oleh @katherinehhh
  - Bidang wajib yang disembunyikan oleh aturan tautan tidak boleh mempengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe
  - konversi variabel dalam kondisi aturan tautan sub-tabel/sub-formulir ([#6702](https://github.com/nocobase/nocobase/pull/6702)) oleh @katherinehhh
  - tombol ekspor ditampilkan tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh
  - batasan opsi aksi yang hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh
  - Masalah peralihan pemilih di bidang tanggal tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh
  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe
- **[cli]** Memperbarui package.json secara otomatis pada upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos
- **[server]** appVersion yang dihasilkan salah oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos
- **[build]** Memperbaiki error yang muncul di perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher
- **[Blok: Gantt]** bagan gantt bulan yang tumpang tindih di header kalender untuk tampilan bulan ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh
- **[Aksi: Impor catatan]** Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie
- **[Blok: template]** template blok tidak dapat digunakan di lingkungan mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) oleh @gchust
- **[Workflow]** Memperbaiki error yang muncul saat menjalankan event terjadwal di subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher
- **[Visualisasi data]** Opsi bidang Enum kosong di blok filter ([#6706](https://github.com/nocobase/nocobase/pull/6706)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Memastikan data permintaan kustom harus JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) oleh @chenos
- **[Aksi: Ekspor catatan Pro]**

  - Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie
  - tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh
- **[Workflow: Event aksi kustom]** Mendukung eksekusi dalam mode beberapa catatan oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Menambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher
  - Memperbaiki data respons dari file yang diunggah oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki bidang asosiasi pramuat untuk catatan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/en/blog/v1.7.0-alpha.11)

*Tanggal rilis: 2025-04-19*

#### 🎉 Fitur Baru

- **[client]** mendukung variabel di sisi kiri kondisi aturan tautan ([#6609](https://github.com/nocobase/nocobase/pull/6609)) oleh @katherinehhh
- **[Departemen]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Workflow gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos
- **[Aksi: Pembaruan batch]**

  - Mendukung penyegaran data di blok data lain setelah memperbarui data di blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe
  - Mendukung penyegaran data di blok data lain setelah memperbarui data di blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe
- **[Penyimpanan skema UI]** Menambahkan modul lokalisasi untuk UISchema, memungkinkan terjemahan kustom untuk judul dan deskripsi skema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) oleh @chenos
- **[Blok: Panel aksi]** menambahkan callback onScanSuccess untuk menangani pemindaian yang berhasil dan keluar dari UI kamera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) oleh @sheldon66
- **[Bidang koleksi: Kode]** Menambahkan antarmuka kode oleh @mytharcher
- **[Workflow: node kalkulasi tanggal]** Menambahkan fungsi `changeTimezone` untuk mengubah nilai zona waktu untuk pemformatan oleh @mytharcher
- **[Cetak template]** Mendukung gambar dinamis dan rendering barcode dalam template dokumen. oleh @sheldon66

#### 🚀 Peningkatan

- **[client]**

  - Menambahkan API penundaan untuk skenario yang terbuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher
  - mendukung catatan tabel yang dipilih dalam permintaan kustom ([#6647](https://github.com/nocobase/nocobase/pull/6647)) oleh @katherinehhh
  - Menambahkan API fallback tipe default untuk `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) oleh @mytharcher
  - Mengoptimalkan prompt untuk halaman yang tidak dikonfigurasi ([#6641](https://github.com/nocobase/nocobase/pull/6641)) oleh @zhangzhonghe
  - Mendukung pencarian bidang di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher
  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher
  - Menentukan apakah akan menampilkan komponen seluler berdasarkan jenis perangkat daripada lebar halaman ([#6611](https://github.com/nocobase/nocobase/pull/6611)) oleh @zhangzhonghe
  - Menentukan apakah akan menampilkan tata letak seluler berdasarkan jenis perangkat daripada lebar halaman ([#6600](https://github.com/nocobase/nocobase/pull/6600)) oleh @zhangzhonghe
  - mendukung konfigurasi visibilitas titik dua dalam label bidang formulir berdasarkan tata letak ([#6561](https://github.com/nocobase/nocobase/pull/6561)) oleh @katherinehhh
- **[create-nocobase-app]** Memutakhirkan beberapa dependensi ke versi terbaru ([#6673](https://github.com/nocobase/nocobase/pull/6673)) oleh @chenos
- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher
- **[database]**

  - Menambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher
  - Menambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher
- **[Workflow]**

  - Mendukung URL popup tetap untuk tugas workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) oleh @mytharcher
  - Mengoptimalkan logika simpan pekerjaan ([#6613](https://github.com/nocobase/nocobase/pull/6613)) oleh @mytharcher
  - Meningkatkan kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher
- **[Workflow: Node penundaan]** Mendukung penggunaan variabel untuk durasi ([#6621](https://github.com/nocobase/nocobase/pull/6621)) oleh @mytharcher
- **[Penangan error]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66
- **[Manajer file]** Menambahkan opsi trim untuk bidang teks dari koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher
- **[Manajer tugas asinkron]** mengoptimalkan tombol impor/ekspor di Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) oleh @chenos
- **[Workflow: Event aksi kustom]** Menambahkan pengaturan penyegaran untuk tombol pemicu workflow oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** mengoptimalkan tombol impor/ekspor di Pro oleh @katherinehhh
- **[Pembatasan IP]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher
- **[Manajer cadangan]** mengizinkan pemulihan aplikasi utama dari cadangan sub aplikasi oleh @gchust
- **[Workflow: Persetujuan]** Mendukung penggunaan blok template untuk formulir proses persetujuan oleh @mytharcher
- **[Manajer migrasi]** mengizinkan melewatkan cadangan dan pemulihan otomatis untuk migrasi oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]**

  - Masalah peralihan pemilih di bidang tanggal tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh
  - konversi variabel dalam kondisi aturan tautan sub-tabel/sub-formulir ([#6702](https://github.com/nocobase/nocobase/pull/6702)) oleh @katherinehhh
  - tombol ekspor ditampilkan tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh
  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe
  - Memperbaiki error yang muncul di node buat / perbarui workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) oleh @mytharcher
  - Memperbaiki error yang muncul saat kursor mouse diarahkan ke blok template yang direferensikan dalam konfigurasi node persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher
  - bidang asosiasi kustom tidak menampilkan pengaturan komponen bidang ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh
  - kompatibilitas aturan tautan dengan data lama ([#6686](https://github.com/nocobase/nocobase/pull/6686)) oleh @katherinehhh
  - lazy load komponen ui yang hilang akan menyebabkan error render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust
  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher
  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher
  - masalah tampilan deskripsi bidang di workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) oleh @katherinehhh
  - bidang warisan ditampilkan dalam daftar penugasan bidang koleksi saat ini ([#6666](https://github.com/nocobase/nocobase/pull/6666)) oleh @katherinehhh
  - masalah gaya di input variabel saat mengatur nilai default ([#6668](https://github.com/nocobase/nocobase/pull/6668)) oleh @katherinehhh
  - Beralih ke menu grup tidak boleh melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe
  - Formulir filter tidak boleh menampilkan prompt "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe
  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lulus validasi, pemfilteran masih dipicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe
  - opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh
  - Memperbaiki masalah gambar pratinjau yang terhalang ([#6651](https://github.com/nocobase/nocobase/pull/6651)) oleh @zhangzhonghe
  - Di blok formulir, nilai default dari konfigurasi bidang akan ditampilkan terlebih dahulu sebagai string variabel asli dan kemudian menghilang ([#6649](https://github.com/nocobase/nocobase/pull/6649)) oleh @zhangzhonghe
  - gaya input variabel yang salah ([#6645](https://github.com/nocobase/nocobase/pull/6645)) oleh @gchust
  - judul drawer edit node workflow menampilkan [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) oleh @katherinehhh
  - deskripsi sub-tabel tumpang tindih dengan tombol tambah baru ([#6646](https://github.com/nocobase/nocobase/pull/6646)) oleh @katherinehhh
  - garis bawah putus-putus yang disebabkan oleh tata letak formulir horizontal di modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) oleh @katherinehhh
  - aturan dengan kondisi 'apa pun' tidak berlaku ketika daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh
  - kegagalan penguraian variabel ketika parameter URL mengandung karakter Cina ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh
  - area kosong antara judul halaman konfigurasi blok template dan menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) oleh @gchust
  - Bidang relasi di formulir filter melaporkan error setelah halaman disegarkan karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe
  - masalah data dengan blok Gantt di koleksi pohon ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh
  - masalah tampilan label bidang untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh
  - properti x-disabled tidak berpengaruh pada bidang formulir ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh
  - Memperbaiki properti `disabled` tidak berfungsi ketika `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher
  - bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh
  - tombol kirim dan segarkan tidak menampilkan mode hanya ikon dengan benar ([#6592](https://github.com/nocobase/nocobase/pull/6592)) oleh @katherinehhh
  - masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh
  - konflik tautan antara bidang asosiasi bernama sama di sub-tabel yang berbeda dalam formulir yang sama ([#6577](https://github.com/nocobase/nocobase/pull/6577)) oleh @katherinehhh
- **[database]**

  - Memperbaiki error build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie
  - Saat menghapus catatan satu-ke-banyak, baik `filter` dan `filterByTk` diteruskan dan `filter` menyertakan bidang asosiasi, `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile
  - Menghindari perubahan bidang "datetimeNoTz" ketika nilai tidak berubah dalam memperbarui catatan ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher
- **[build]** output build salah ketika plugin bergantung pada beberapa library AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) oleh @gchust
- **[Visualisasi data]** Opsi bidang Enum kosong di blok filter ([#6706](https://github.com/nocobase/nocobase/pull/6706)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Memastikan data permintaan kustom harus JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) oleh @chenos
- **[Workflow: Node manual]**

  - Memperbaiki error ACL di pusat tugas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) oleh @mytharcher
  - Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher
- **[Aksi: Impor catatan]** memperbaiki error saat mengimpor bidang waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie
- **[Kontrol akses]**

  - Memperbaiki error yang muncul saat membuat serial model peran ke cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) oleh @mytharcher
  - Memperbaiki logika kalkulasi gabungan peran ([#6605](https://github.com/nocobase/nocobase/pull/6605)) oleh @aaaaaajie
  - Penugasan peran saat ini yang salah selama login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) oleh @aaaaaajie
- **[Blok: iframe]** scrollbar vertikal muncul ketika blok iframe diatur ke tinggi penuh ([#6675](https://github.com/nocobase/nocobase/pull/6675)) oleh @katherinehhh
- **[Workflow]**

  - Memperbaiki error migrasi yang muncul dari MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) oleh @mytharcher
  - Memperbaiki informasi statistik workflow yang tidak dimuat saat aplikasi dimulai ([#6642](https://github.com/nocobase/nocobase/pull/6642)) oleh @mytharcher
  - Memperbaiki OOM saat membuat pekerjaan dengan id integer tidak aman ([#6637](https://github.com/nocobase/nocobase/pull/6637)) oleh @mytharcher
  - Memperbaiki opsi sinkronisasi yang ditampilkan salah ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher
- **[Bidang koleksi: Lampiran(URL)]** hanya mengizinkan koleksi file dengan akses URL publik ([#6664](https://github.com/nocobase/nocobase/pull/6664)) oleh @katherinehhh
- **[Blok: template]**

  - ketika template yang direferensikan yang digunakan oleh blok halaman telah dihapus, menyimpan sebagai template gagal ([#6638](https://github.com/nocobase/nocobase/pull/6638)) oleh @gchust
  - Memodifikasi dan menghapus bidang yang sama dari template dan blok, setelah membuat blok dari template, dapat menyebabkan error render ([#6626](https://github.com/nocobase/nocobase/pull/6626)) oleh @gchust
- **[Pengguna]** Masalah dengan mengurai skema formulir profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile
- **[Aksi: Ekspor catatan]** parameter filter yang hilang saat mengekspor data setelah mengubah paginasi ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh
- **[Seluler]** bidang pilih tunggal dengan filter 'berisi' di seluler tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh
- **[Bidang koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang dalam koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile
- **[Formulir publik]** Izin tampilan termasuk daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos
- **[Otentikasi]** penugasan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile
- **[Kalender]** data yang hilang pada tanggal batas di tampilan kalender mingguan ([#6587](https://github.com/nocobase/nocobase/pull/6587)) oleh @katherinehhh
- **[Blok: Peta]** validasi manajemen peta tidak boleh lulus dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh
- **[Aksi: Edit batch]** Klik tombol edit batch, konfigurasikan jendela pop-up, lalu buka lagi, jendela pop-up kosong ([#6578](https://github.com/nocobase/nocobase/pull/6578)) oleh @zhangzhonghe
- **[Workflow: Event aksi kustom]** Memperbaiki kasus uji oleh @mytharcher
- **[Manajer email]**

  - perbaiki tidak bisa sinkron, tidak ada tampilan subjek dan bug kecil lainnya oleh @jiannx
  - perbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx
  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx
  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx
  - Melempar error ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (diatur ke default) oleh @mytharcher
  - Mengatur bahasa oleh @jiannx
- **[Auth: OIDC]** Pengalihan yang salah terjadi ketika jalur callback adalah string 'null' oleh @2013xile
- **[Blok: Formulir multi-langkah]**

  - tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx
  - memperbaiki bug bahwa reset formulir tidak valid ketika bidang dikaitkan dengan bidang lain oleh @jiannx
- **[Manajer cadangan]** error timeout terjadi saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust
- **[Workflow: Persetujuan]**

  - Memperbaiki error ACL di pusat tugas oleh @mytharcher
  - Mendukung URL tetap untuk item persetujuan di pusat tugas oleh @mytharcher
  - Memperbaiki mode cabang ketika `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher
  - Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher
  - Memperbaiki konfigurasi node persetujuan salah setelah skema berubah oleh @mytharcher
  - Memperbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher
- **[Manajer migrasi]**

  - waktu pembuatan log migrasi ditampilkan salah di beberapa lingkungan oleh @gchust
  - opsi lewati cadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust
