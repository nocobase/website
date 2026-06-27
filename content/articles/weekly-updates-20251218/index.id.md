---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Saat membuat koleksi, tipe field id preset dapat diubah, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk terdepan, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Tanggal rilis: 2025-12-17*

### 🚀 Peningkatan

- **[server]** Menambahkan toleransi kesalahan ketika instance aplikasi yang hilang menyebabkan kesalahan saat mengambil pesan pemeliharaan aplikasi ([#8196](https://github.com/nocobase/nocobase/pull/8196)) oleh @2013xile
- **[Penanganan kesalahan]** Tidak mengekspos pesan kesalahan database mentah pada kesalahan sintaks SQL, untuk menghindari pengungkapan tipe database ([#8195](https://github.com/nocobase/nocobase/pull/8195)) oleh @2013xile
- **[Alur kerja]** Mendukung penggunaan konfigurasi lama untuk membuat yang baru dalam alur kerja yang diduplikasi ([#8165](https://github.com/nocobase/nocobase/pull/8165)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Alur kerja]** Memperbaiki masalah di mana hanya satu catatan yang ditampilkan dalam daftar catatan untuk dieksekusi secara manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) oleh @mytharcher
- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki kesalahan pemicu saat menghubungkan ke tabel dengan nama huruf kapital oleh @2013xile
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana status catatan persetujuan yang tidak terkait salah diubah menjadi `UNPROCESSED` oleh tindakan menyetujui oleh @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Tanggal rilis: 2025-12-16*

### 🚀 Peningkatan

- **[acl]** Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi cuplikan ([#8155](https://github.com/nocobase/nocobase/pull/8155)) oleh @mytharcher
- **[Kontrol akses]** Melarang penugasan peran root kepada pengguna ([#8180](https://github.com/nocobase/nocobase/pull/8180)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Pengaturan lisensi]**

  - memperbaiki pengecualian build ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) oleh @jiannx
  - optimasi lisensi dan penambahan informasi petunjuk ([#7993](https://github.com/nocobase/nocobase/pull/7993)) oleh @jiannx
- **[Manajer file]** Memperbaiki masalah di mana pratinjau file `.txt` di OSS mendapatkan charset yang salah ([#8161](https://github.com/nocobase/nocobase/pull/8161)) oleh @mytharcher
- **[Aksi: Impor catatan]** Menunggu secara sinkronis agar event `afterCreate` yang dipicu oleh impor selesai. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) oleh @2013xile
- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki masalah di mana pemuatan gagal untuk tabel dengan nama huruf kapital oleh @2013xile
- **[Sumber data: SQL Server Eksternal]** Memperbaiki masalah di mana opsi `encrypt` dan `trustServerCertificate` tidak tersedia oleh @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Tanggal rilis: 2025-12-12*

### 🚀 Peningkatan

- **[Alur kerja]**
  - Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor, untuk menghindari eksekusi menggantung ([#8156](https://github.com/nocobase/nocobase/pull/8156)) oleh @mytharcher
  - Menggunakan lazy load untuk data asosiasi di kanvas alur kerja untuk meningkatkan kinerja ([#8142](https://github.com/nocobase/nocobase/pull/8142)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[acl]** Memperbaiki masalah di mana API `acl.can` mengembalikan `null` ketika peran adalah `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) oleh @mytharcher
- **[Alur kerja: Node manual]** Memperbaiki masalah daftar tugas manual menggunakan API yang salah ([#8144](https://github.com/nocobase/nocobase/pull/8144)) oleh @mytharcher
- **[Enkripsi permintaan HTTP]** Menggunakan tanda kurung untuk format array dalam penguraian qs oleh @chenos
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi ketika alur kerjanya dihapus oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki masalah di mana baris baru dalam data hilang selama migrasi. oleh @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Tanggal rilis: 2025-12-17*

### 🚀 Peningkatan

- **[server]** Menambahkan toleransi kesalahan ketika instance aplikasi yang hilang menyebabkan kesalahan saat mengambil pesan pemeliharaan aplikasi ([#8196](https://github.com/nocobase/nocobase/pull/8196)) oleh @2013xile
- **[Blok: Daftar]** menambahkan tombol Tautan untuk blok Tabel, Daftar, dan Kartu Kisi ([#8194](https://github.com/nocobase/nocobase/pull/8194)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana memilih "Tidak" untuk filter kotak centang masih menerapkan filter "Ya". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) oleh @gchust
- **[Manajer migrasi]** Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Tanggal rilis: 2025-12-17*

### 🎉 Fitur Baru

- **[klien]** Saat membuat koleksi, tipe bidang id preset dapat diubah ([#8129](https://github.com/nocobase/nocobase/pull/8129)) oleh @cgyrock

### 🚀 Peningkatan

- **[klien]**

  - mengubah lebar kolom tabel untuk menggunakan opsi yang dapat dipilih ([#8188](https://github.com/nocobase/nocobase/pull/8188)) oleh @katherinehhh
  - meningkatkan gaya recordPicker dengan maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) oleh @katherinehhh
  - mengoptimalkan opsi konfigurasi (Blok, Bidang, Aksi) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) oleh @katherinehhh
- **[Penanganan kesalahan]** Tidak mengekspos pesan kesalahan database mentah pada kesalahan sintaks SQL, untuk menghindari pengungkapan tipe database ([#8195](https://github.com/nocobase/nocobase/pull/8195)) oleh @2013xile
- **[Blok: Peta]** mendukung elipsis teks overflow untuk bidang peta dalam mode tampilan teks ([#8189](https://github.com/nocobase/nocobase/pull/8189)) oleh @katherinehhh
- **[Alur kerja]** Mendukung penggunaan konfigurasi lama untuk membuat yang baru dalam alur kerja yang diduplikasi ([#8165](https://github.com/nocobase/nocobase/pull/8165)) oleh @mytharcher
- **[Kontrol akses]** Melarang penugasan peran root kepada pengguna ([#8180](https://github.com/nocobase/nocobase/pull/8180)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki tombol kirim tidak ditampilkan di formulir buat ketika peran memiliki izin buat ([#8190](https://github.com/nocobase/nocobase/pull/8190)) oleh @katherinehhh
  - mencegah data sub-tabel/sub-formulir yang ada agar tidak dibersihkan saat mengirim tanpa memilih item apa pun ([#8172](https://github.com/nocobase/nocobase/pull/8172)) oleh @katherinehhh
  - mencegah pengaturan Cakupan data muncul di konfigurasi formulir buat ([#8176](https://github.com/nocobase/nocobase/pull/8176)) oleh @katherinehhh
  - Gagal menyimpan alur event tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) oleh @chenos
  - menghapus spasi ekstra setelah tab disembunyikan ([#8167](https://github.com/nocobase/nocobase/pull/8167)) oleh @chenos
  - memperbaiki pemfilteran yang salah dari opsi yang dipilih di pilih catatan asosiasi ([#8151](https://github.com/nocobase/nocobase/pull/8151)) oleh @katherinehhh
  - Memperbaiki masalah rendering bidang tableoid di blok formulir ([#8177](https://github.com/nocobase/nocobase/pull/8177)) oleh @katherinehhh
- **[server]**

  - Memperbarui license-kit ke versi terbaru ([#8173](https://github.com/nocobase/nocobase/pull/8173)) oleh @jiannx
  - Mendukung bidang ID Snowflake (53-bit) untuk sumber data eksternal ([#8185](https://github.com/nocobase/nocobase/pull/8185)) oleh @2013xile
- **[Blok: Peta]** memperbaiki tingkat zoom peta yang salah setelah peralihan menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) oleh @katherinehhh
- **[Alur kerja]** Memperbaiki masalah di mana hanya satu catatan yang ditampilkan dalam daftar catatan untuk dieksekusi secara manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) oleh @mytharcher
- **[Visualisasi data]** Menyelesaikan masalah tentang mode SQL memilih sumber data eksternal; <br/>Menyelesaikan masalah tentang status pemuatan blok bagan selama pengambilan data; <br/> Menyelesaikan masalah tentang blok bagan kosong membatalkan konfigurasi; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) oleh @heziqiang
- **[Karyawan AI]** Menyelesaikan masalah tentang pemutusan baris pesan ai ([#8096](https://github.com/nocobase/nocobase/pull/8096)) oleh @heziqiang
- **[Pengaturan lisensi]**

  - memperbaiki pengecualian build ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) oleh @jiannx
  - optimasi lisensi dan penambahan informasi petunjuk ([#7993](https://github.com/nocobase/nocobase/pull/7993)) oleh @jiannx
- **[Manajer file]** Memperbaiki masalah di mana pratinjau file `.txt` di OSS mendapatkan charset yang salah ([#8161](https://github.com/nocobase/nocobase/pull/8161)) oleh @mytharcher
- **[Sumber data: SQL Server Eksternal]** Memperbaiki masalah di mana opsi `encrypt` dan `trustServerCertificate` tidak tersedia oleh @2013xile
- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki masalah di mana pemuatan gagal untuk tabel dengan nama huruf kapital oleh @2013xile
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana status catatan persetujuan yang tidak terkait salah diubah menjadi `UNPROCESSED` oleh tindakan menyetujui oleh @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Tanggal rilis: 2025-12-12*

### 🚀 Peningkatan

- **[acl]** Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi cuplikan ([#8155](https://github.com/nocobase/nocobase/pull/8155)) oleh @mytharcher
- **[klien]** mendukung pemformatan angka untuk bidang persentase ([#8123](https://github.com/nocobase/nocobase/pull/8123)) oleh @katherinehhh
- **[flow-engine]** mendukung menyembunyikan menu konfigurasi langkah secara dinamis ([#7924](https://github.com/nocobase/nocobase/pull/7924)) oleh @gchust
- **[Blok: GridCard]** Mengoptimalkan gaya blok Kartu Kisi untuk tata letak yang lebih ringkas ([#8152](https://github.com/nocobase/nocobase/pull/8152)) oleh @katherinehhh
- **[Karyawan AI]** Mengaktifkan fungsionalitas pengeditan untuk prompt sistem asisten AI bawaan.<br/>Mengoptimalkan prompt sistem untuk asisten AI Nathan.<br/>Memperbaiki masalah dengan server gagal membaca file statis. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) oleh @heziqiang
- **[Alur kerja]**

  - Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor, untuk menghindari eksekusi menggantung ([#8156](https://github.com/nocobase/nocobase/pull/8156)) oleh @mytharcher
  - Menggunakan lazy load untuk data asosiasi di kanvas alur kerja untuk meningkatkan kinerja ([#8142](https://github.com/nocobase/nocobase/pull/8142)) oleh @mytharcher
- **[Bidang koleksi: Markdown(Vditor)]** Menonaktifkan penguraian variabel di bidang Markdown secara default dalam mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki unduhan file yang salah untuk lampiran ([#8154](https://github.com/nocobase/nocobase/pull/8154)) oleh @katherinehhh
- **[klien]**

  - memperbaiki dropdown bidang asosiasi menjadi dinonaktifkan ketika bidang opsi ada ([#8153](https://github.com/nocobase/nocobase/pull/8153)) oleh @katherinehhh
  - Memperbaiki masalah di mana memasukkan teks bahasa Cina menghapus opsi yang ada saat menggunakan operator multi-pilih pada bidang pilih tunggal di blok formulir filter. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) oleh @gchust
  - Memperbaiki masalah di mana mengganti bidang label menyebabkan konfigurasi popup hilang. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) oleh @gchust
- **[acl]** Memperbaiki masalah di mana API `acl.can` mengembalikan `null` ketika peran adalah `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) oleh @mytharcher
- **[database]** `filterByTk` sekarang mendukung array saat menanyakan koleksi dengan beberapa kunci target filter ([#7986](https://github.com/nocobase/nocobase/pull/7986)) oleh @chenos
- **[Aksi: Impor catatan]** Menunggu secara sinkronis agar event `afterCreate` yang dipicu oleh impor selesai. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) oleh @2013xile
- **[Bidang koleksi: Urutan]** Meningkatkan ketahanan plugin-field-sequence saat menangani perintah perbaikan ([#8139](https://github.com/nocobase/nocobase/pull/8139)) oleh @cgyrock
- **[Alur kerja: Node manual]** Memperbaiki masalah daftar tugas manual menggunakan API yang salah ([#8144](https://github.com/nocobase/nocobase/pull/8144)) oleh @mytharcher
- **[Enkripsi permintaan HTTP]** Menggunakan tanda kurung untuk format array dalam penguraian qs oleh @chenos
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi ketika alur kerjanya dihapus oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki masalah di mana baris baru dalam data hilang selama migrasi. oleh @cgyrock
