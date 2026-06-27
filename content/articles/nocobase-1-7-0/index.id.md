---
title: "NocoBase v1.7.0 Resmi Dirilis"
description: "Peningkatan manajemen izin, optimalisasi kinerja sistem, dan plugin sumber terbuka untuk meningkatkan fungsionalitas dan pengalaman pengguna secara komprehensif"
---

## Fitur Baru

### Penggabungan Peran

Penggabungan Peran adalah mode manajemen izin. Berdasarkan pengaturan sistem, pengembang sistem dapat memilih untuk menggunakan `Peran mandiri`, `Izinkan penggabungan peran`, atau `Izinkan penggabungan peran`, untuk memenuhi kebutuhan izin yang berbeda.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Referensi: [Penggabungan Peran](https://docs.nocobase.com/handbook/acl/manual)

### Verifikasi dan Autentikasi Dua Faktor (2FA)

Fitur kode verifikasi asli telah ditingkatkan menjadi sistem manajemen verifikasi yang komprehensif, mendukung beberapa metode autentikasi (seperti TOTP). Sistem ini juga mendukung autentikasi dua faktor (2FA), yang memerlukan langkah verifikasi tambahan saat masuk, selain kata sandi, sehingga meningkatkan keamanan akun secara signifikan.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Referensi:

* [Verifikasi](https://docs.nocobase.com/handbook/verification)
* [Autentikasi Dua Faktor](https://docs.nocobase.com/handbook/two-factor-authentication)
* [TOTP Authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Pencetakan Templat

Pencetakan templat sekarang mendukung rendering gambar dan kode batang secara dinamis.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Referensi: [Pencetakan Templat](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Filter Kata Kunci Ganda

Plugin filter multi-kata kunci menambahkan kemampuan pemfilteran teks yang kuat ke platform NocoBase, memungkinkan Anda memfilter data menggunakan beberapa kata kunci dan sangat meningkatkan fleksibilitas dan efisiensi kueri data.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Referensi: [Filter kata kunci ganda](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Filter Tanggal Mendukung Pemilihan Rentang Tanggal Relatif

Mendukung pemfilteran berdasarkan offset waktu kustom (hari/minggu/bulan/kuartal/tahun) dan tanggal tertentu, memungkinkan kueri rentang waktu yang lebih fleksibel.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Variabel Sisi Kiri

Variabel sisi kiri dalam suatu kondisi digunakan untuk mendefinisikan "objek yang dinilai" dalam aturan tautan, yaitu kondisi akan mengevaluasi nilai variabel ini untuk menentukan apakah perilaku tautan harus dipicu.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Referensi: [Variabel Sisi Kiri](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Templat Warisan

Templat warisan sangat ideal ketika Anda ingin blok mengikuti pembaruan dasar templat tetapi juga mengizinkan perubahan spesifik. Blok mewarisi pengaturan templat dan dapat memperluas atau menimpanya. Pengaturan yang tidak diubah di blok akan diperbarui secara otomatis dengan templat.

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

Referensi: [Templat Warisan](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Aturan Tautan Blok

Aturan tautan blok memungkinkan pengguna untuk mengontrol visibilitas blok secara dinamis, memungkinkan pengelolaan tampilan elemen di tingkat blok.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Referensi: [Aturan Tautan Blok](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Setelah Pengiriman Berhasil

Setelah pengiriman berhasil, mendukung penyegaran data di blok lain dan navigasi ke halaman detail dengan parameter.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Referensi: [Setelah Pengiriman Berhasil](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Manajemen Kategori Alur Kerja

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Plugin Sumber Terbuka untuk Departemen dan URL Lampiran

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Peningkatan

### Peningkatan Properti Aturan Tautan

* Bidang yang dapat dipilih sekarang mendukung opsi yang dapat dikonfigurasi
* Bidang tanggal sekarang mendukung pengaturan rentang tanggal

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Referensi: [Aturan Tautan Bidang](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Impor Pro

Konfigurasi impor sekarang mendukung penggunaan beberapa bidang untuk mengidentifikasi catatan secara unik, serta opsi untuk menimpa atau mengabaikan sel kosong selama impor.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Referensi:[Impor Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Optimasi Kinerja untuk Mengekspor XLSX

* Kehabisan memori dan pembekuan aplikasi saat mengekspor tabel data besar
* Ada kemungkinan data duplikat dalam data yang diekspor
* Optimasi kueri untuk data yang diekspor berdasarkan indeks, batasan unik, dan strategi indeks
* Tambahkan antrian ekspor bersamaan dan atur jumlah konkurensi melalui variabel lingkungan.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Referensi:

* [Ekspor Bersamaan](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [Tentang Kinerja](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Optimasi Kinerja untuk Mengimpor File XLSX

* Ubah strategi impor baris tunggal asli menjadi penyisipan batch
* Rekonstruksi mekanisme identifikasi duplikat. Ubah dari pemrosesan baris tunggal menjadi pemrosesan batch sambil menjaga logika pembaruan dan pemicu alur kerja tidak berubah

Referensi: [Tentang Kinerja](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Efisiensi Eksekusi Alur Kerja Meningkat 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
