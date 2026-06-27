---
title: "Pembaruan Mingguan｜Dukung tempel file di obrolan AI"
description: "Ini adalah ringkasan pembaruan fitur dan perbaikan NocoBase dari 22 Januari hingga 28 Januari 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Tanggal rilis: 2026-01-25*

### 🚀 Peningkatan

- **[Pratinjau File Office]** Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki bidang nanoid yang tidak dibuat ulang setelah pengiriman formulir ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh
  - Memperbaiki pesan validasi wajib duplikat saat membersihkan bidang kaskade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh
- **[basis data]**

  - Memperbaiki kesalahan saat memfilter dengan operator `empty` setelah memuat ulang koleksi ([#8496](https://github.com/nocobase/nocobase/pull/8496)) oleh @2013xile
  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos
- **[Manajer File]** Memperbaiki masalah di mana nama file yang didapat dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher
- **[Sumber data: Utama]** Memperbaiki masalah di mana menghapus rekaman dari blok tabel asosiasi banyak-ke-banyak tidak menghormati batasan `onDelete: 'restrict'` bidang asosiasi ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile
- **[Blok: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher
- **[Cetak template]** Memperbaiki logika izin tombol cetak yang salah ketika peran digabungkan. oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher
  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Tanggal rilis: 2026-01-29*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah yang diketahui terkait pemfilteran ([#8514](https://github.com/nocobase/nocobase/pull/8514)) oleh @zhangzhonghe
- **[Karyawan AI]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah pembangunan ([#8523](https://github.com/nocobase/nocobase/pull/8523)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah pembangunan oleh @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Tanggal rilis: 2026-01-27*

### 🎉 Fitur Baru

- **[klien]** menambahkan komponen bidang subtabel (pengeditan popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) oleh @katherinehhh
- **[Alur Kerja]** Menambahkan API untuk memindahkan node ([#8507](https://github.com/nocobase/nocobase/pull/8507)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]**

  - mencegah render ulang seluruh tabel saat memperbarui sel ([#8349](https://github.com/nocobase/nocobase/pull/8349)) oleh @katherinehhh
  - Meningkatkan subform ke-banyak untuk diinisialisasi dengan item default dan menghindari pembuatan rekaman saat dibiarkan kosong ([#8458](https://github.com/nocobase/nocobase/pull/8458)) oleh @katherinehhh
- **[Manajer File]** Menambahkan pratinjau yang dapat diperluas untuk manajer file ([#8501](https://github.com/nocobase/nocobase/pull/8501)) oleh @mytharcher
- **[Alur Kerja]** Mengubah jalur rute subhalaman alur kerja, untuk membuat semua halaman alur kerja di bawah prefiks `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki waktu duplikat dalam nilai DateTime filter ([#8506](https://github.com/nocobase/nocobase/pull/8506)) oleh @zhangzhonghe
  - Memperbaiki masalah yang mencegah penggunaan variabel formulir untuk menetapkan nilai dalam aturan tautan untuk bidang subform ke-banyak multi-level. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) oleh @gchust
  - Memperbaiki masalah di mana data tidak disegarkan setelah perubahan di beberapa popup multi-level dan di beberapa blok. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) oleh @gchust
  - memperbaiki masalah di mana data sub-detail dalam mode hanya-baca tidak dapat ditampilkan dengan benar di formulir edit ([#8469](https://github.com/nocobase/nocobase/pull/8469)) oleh @katherinehhh
  - memperbaiki logika refine untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh
  - memperbaiki parameter filter yang salah untuk bidang Pilih relasi di subtabel yang dapat diedit ([#8335](https://github.com/nocobase/nocobase/pull/8335)) oleh @katherinehhh
- **[mesin-aliran]** memperbaiki masalah FilterByTK ketika filterTargetKey adalah array elemen tunggal di sumber data eksternal ([#8522](https://github.com/nocobase/nocobase/pull/8522)) oleh @katherinehhh
- **[Karyawan AI]** memperbaiki masalah konfigurasi bidang yang dapat dipilih yang tidak konsisten antara pemodelan AI dan manajemen sumber data ([#8488](https://github.com/nocobase/nocobase/pull/8488)) oleh @cgyrock
- **[Manajer Email]** body tidak menutup saat teks dipilih. perbaiki unduh lampiran gagal oleh @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Tanggal rilis: 2026-01-25*

### 🚀 Peningkatan

- **[Pratinjau File Office]** Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[basis data]** Memperbaiki kesalahan saat memfilter dengan operator `empty` setelah memuat ulang koleksi ([#8496](https://github.com/nocobase/nocobase/pull/8496)) oleh @2013xile
- **[Cetak template]** Memperbaiki logika izin tombol cetak yang salah ketika peran digabungkan. oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana kesalahan muncul di popup rekaman persetujuan 1.x oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Tanggal rilis: 2026-01-23*

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung tempel file di obrolan AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) oleh @heziqiang

### 🚀 Peningkatan

- **[klien]**

  - Meningkatkan subform ke-banyak untuk diinisialisasi dengan item default dan menghindari pembuatan rekaman saat dibiarkan kosong ([#8473](https://github.com/nocobase/nocobase/pull/8473)) oleh @katherinehhh
  - Meningkatkan tombol unggah dan edit untuk bidang lampiran di sub-tabel untuk memandu pengguna mengklik unggah dengan lebih baik. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) oleh @katherinehhh
- **[mesin-aliran]** Meningkatkan ctx.libs di runjs untuk mendukung pemuatan sesuai permintaan, dan menambahkan pustaka yang telah ditentukan sebelumnya: lodash, math, dan formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) oleh @gchust
- **[Penangan kesalahan]** Membersihkan kesalahan referensi SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) oleh @2013xile
- **[Alur Kerja: Persetujuan]** Menerapkan kontrol akses untuk API guna mencegah operasi data yang tidak sah oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana popover editor teks kaya terhalang ([#8443](https://github.com/nocobase/nocobase/pull/8443)) oleh @zhangzhonghe
  - Memperbaiki waktu duplikat dalam nilai DateTime filter ([#8484](https://github.com/nocobase/nocobase/pull/8484)) oleh @zhangzhonghe
  - memperbaiki bidang nanoid yang tidak dibuat ulang setelah pengiriman formulir ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh
  - Memperbaiki pesan validasi wajib duplikat saat membersihkan bidang kaskade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh
  - filter daftar untuk menghapus duplikat ([#8431](https://github.com/nocobase/nocobase/pull/8431)) oleh @jiannx
  - Memperbaiki masalah di mana menu konfigurasi tidak ditampilkan di Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) oleh @zhangzhonghe
- **[basis data]**

  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos
- **[server]** Memperbaiki versi `mathjs` dalam dependensi umum ([#8475](https://github.com/nocobase/nocobase/pull/8475)) oleh @mytharcher
- **[mesin-aliran]** Memperbaiki masalah di mana menutup popup tersemat menyebabkan kesalahan setelah membuka konfigurasi aturan tautan dan popup konfigurasi aliran peristiwa secara berurutan. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) oleh @gchust
- **[Sumber data: Utama]** Memperbaiki masalah di mana menghapus rekaman dari blok tabel asosiasi banyak-ke-banyak tidak menghormati batasan `onDelete: 'restrict'` bidang asosiasi ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile
- **[Manajer tugas asinkron]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) oleh @mytharcher
- **[Blok: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe
- **[Template UI]** Memperbaiki masalah di mana blok template referensi tidak dapat mengatur lingkup data melalui pengaturan aliran peristiwa. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) oleh @gchust
- **[Manajer File]** Memperbaiki masalah di mana nama file yang didapat dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher
- **[Cetak template]** hapus tombol footer dari konfigurasi template cetak oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher
  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher
  - Memperbaiki masalah di mana bidang tidak ditampilkan di kartu tugas persetujuan oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Tanggal rilis: 2026-01-27*

### 🎉 Fitur Baru

- **[Alur Kerja]** Menambahkan API untuk memindahkan node ([#8507](https://github.com/nocobase/nocobase/pull/8507)) oleh @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Tanggal rilis: 2026-01-26*

### 🎉 Fitur Baru

- **[server]** Memfaktorkan ulang supervisor aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario ([#8043](https://github.com/nocobase/nocobase/pull/8043)) oleh @2013xile
- **[klien]** menambahkan komponen bidang subtabel (pengeditan popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) oleh @katherinehhh
- **[Karyawan AI]** Mendukung tempel file di obrolan AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) oleh @heziqiang

### 🚀 Peningkatan

- **[klien]**

  - Meningkatkan tombol unggah dan edit untuk bidang lampiran di sub-tabel untuk memandu pengguna mengklik unggah dengan lebih baik. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) oleh @katherinehhh
  - Meningkatkan subform ke-banyak untuk diinisialisasi dengan item default dan menghindari pembuatan rekaman saat dibiarkan kosong ([#8473](https://github.com/nocobase/nocobase/pull/8473)) oleh @katherinehhh
- **[mesin-aliran]** Meningkatkan ctx.libs di runjs untuk mendukung pemuatan sesuai permintaan, dan menambahkan pustaka yang telah ditentukan sebelumnya: lodash, math, dan formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) oleh @gchust
- **[server]** Mendukung konfigurasi daftar putih asal CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) oleh @2013xile
- **[Manajer File]** Menambahkan pratinjau yang dapat diperluas untuk manajer file ([#8501](https://github.com/nocobase/nocobase/pull/8501)) oleh @mytharcher
- **[Pratinjau File Office]** Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) oleh @mytharcher
- **[Penangan kesalahan]** Membersihkan kesalahan referensi SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) oleh @2013xile
- **[Aksi: Ekspor rekaman]** Meningkatkan lingkup data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya ([#8442](https://github.com/nocobase/nocobase/pull/8442)) oleh @katherinehhh
- **[Aksi: Ekspor rekaman Pro]** Meningkatkan lingkup data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Menerapkan kontrol akses untuk API guna mencegah operasi data yang tidak sah oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki waktu duplikat dalam nilai DateTime filter ([#8484](https://github.com/nocobase/nocobase/pull/8484)) oleh @zhangzhonghe
  - memperbaiki bidang nanoid yang tidak dibuat ulang setelah pengiriman formulir ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh
  - Memperbaiki masalah di mana popover editor teks kaya terhalang ([#8443](https://github.com/nocobase/nocobase/pull/8443)) oleh @zhangzhonghe
  - filter daftar untuk menghapus duplikat ([#8431](https://github.com/nocobase/nocobase/pull/8431)) oleh @jiannx
  - Memperbaiki pesan validasi wajib duplikat saat membersihkan bidang kaskade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh
  - Memperbaiki masalah di mana menu konfigurasi tidak ditampilkan di Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) oleh @zhangzhonghe
  - memperbaiki masalah di mana data sub-detail dalam mode hanya-baca tidak dapat ditampilkan dengan benar di formulir edit ([#8469](https://github.com/nocobase/nocobase/pull/8469)) oleh @katherinehhh
  - Memperbaiki masalah di mana popup "Variabel Kustom" terhalang ([#8463](https://github.com/nocobase/nocobase/pull/8463)) oleh @zhangzhonghe
  - memperbaiki masalah di mana pengaturan pengurutan grup bidang koleksi tidak berlaku. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) oleh @katherinehhh
  - Memperbaiki masalah di mana tombol "Pengaturan Kolom" tabel tidak berfungsi ([#8441](https://github.com/nocobase/nocobase/pull/8441)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana popup pemilih bidang asosiasi file memiliki z-index yang salah, dan konfigurasi popup tidak dapat disimpan dengan benar. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) oleh @gchust
  - memperbaiki masalah saat mengedit koleksi di antarmuka grafis ([#8451](https://github.com/nocobase/nocobase/pull/8451)) oleh @katherinehhh
- **[basis data]**

  - Memperbaiki kesalahan saat memfilter dengan operator `empty` setelah memuat ulang koleksi ([#8496](https://github.com/nocobase/nocobase/pull/8496)) oleh @2013xile
  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos
- **[server]** Memperbaiki versi `mathjs` dalam dependensi umum ([#8475](https://github.com/nocobase/nocobase/pull/8475)) oleh @mytharcher
- **[mesin-aliran]**

  - Memperbaiki masalah di mana menutup popup tersemat menyebabkan kesalahan setelah membuka konfigurasi aturan tautan dan popup konfigurasi aliran peristiwa secara berurutan. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) oleh @gchust
  - Memperbaiki masalah di mana mengklik menu konfigurasi berulang kali dapat membuka beberapa popup konfigurasi. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) oleh @gchust
  - Memperbaiki masalah di mana variabel dalam params kode runjs diselesaikan sebelum eksekusi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) oleh @gchust
  - Memperbaiki masalah di mana variabel popup tidak dapat dipilih di popup pembuatan cepat pemilih data. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) oleh @gchust
- **[Karyawan AI]** memperbaiki masalah konfigurasi bidang yang dapat dipilih yang tidak konsisten antara pemodelan AI dan manajemen sumber data ([#8488](https://github.com/nocobase/nocobase/pull/8488)) oleh @cgyrock
- **[Sumber data: Utama]** Memperbaiki masalah di mana menghapus rekaman dari blok tabel asosiasi banyak-ke-banyak tidak menghormati batasan `onDelete: 'restrict'` bidang asosiasi ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile
- **[Blok: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) oleh @mytharcher
- **[Manajer File]** Memperbaiki masalah di mana nama file yang didapat dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher
- **[Template UI]** Memperbaiki masalah di mana blok template referensi tidak dapat mengatur lingkup data melalui pengaturan aliran peristiwa. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) oleh @gchust
- **[Seluler (usang)]** Plugin seluler yang tidak digunakan lagi (digantikan oleh plugin ui-layout dari versi 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) oleh @chenos
- **[Aksi: Impor rekaman Pro]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher
- **[Cetak template]**

  - Memperbaiki logika izin tombol cetak yang salah ketika peran digabungkan. oleh @jiannx
  - hapus tombol footer dari konfigurasi template cetak oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana bidang tidak ditampilkan di kartu tugas persetujuan oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher
  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul di popup rekaman persetujuan 1.x oleh @mytharcher
- **[Manajer Email]**

  - Memperbaiki masalah di mana popup konfigurasi email terhalang oleh @zhangzhonghe
  - Memperbaiki masalah email di kotak surat yang sama antara beberapa pengguna dan mengoptimalkan kinerja oleh @jiannx
- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
