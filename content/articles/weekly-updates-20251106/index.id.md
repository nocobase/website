---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Dukungan mode pemicu \"Sebelum data disimpan\", menambahkan dukungan paginasi ke sub tabel, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Tanggal rilis: 2025-11-05*

### 🚀 Peningkatan

- **[database]** Menambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher
- **[Workflow]** Mendukung blok data dalam workflow untuk menggunakan menu pengaturan detail konsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Mengisolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher
- **[client]** Memperbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe
- **[database]** Deteksi bidang indeks yang salah saat nama bidang menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile
- **[Workflow]** Memperbaiki masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi acara antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher
- **[Mobile (usang)]** Memperbaiki masalah di mana popup nilai default bidang tanggal di perangkat seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe
- **[Workflow: Persetujuan]** Memperbaiki kesalahan yang muncul saat menduplikasi workflow persetujuan oleh @mytharcher
- **[Manajer Email]** koleksi mailMessages menambahkan indeks oleh @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Tanggal rilis: 2025-11-04*

### 🚀 Peningkatan

- **[Workflow: Persetujuan]** Menambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki masalah di mana, dalam mode pemisahan layanan, menjalankan workflow secara manual yang berisi node interupsi akan tetap macet dalam status tertunda ([#7767](https://github.com/nocobase/nocobase/pull/7767)) oleh @mytharcher
- **[Manajer Email]** menambahkan migrasi untuk indeks oleh @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Tanggal rilis: 2025-11-04*

### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]** Membuat node persetujuan di cabang paralel tidak lagi didukung untuk menghindari masalah yang disebabkan oleh status proses oleh @mytharcher
- **[Manajer Email]** menambahkan log sinkronisasi oleh @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Tanggal rilis: 2025-11-03*

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung mode pemicu "Sebelum data disimpan" oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Menambahkan log gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) oleh @2013xile
- **[Workflow: node notifikasi]** Menambahkan opsi `ignoreFail` untuk node notifikasi, yang memungkinkan untuk melanjutkan workflow ketika pengiriman notifikasi gagal ([#7736](https://github.com/nocobase/nocobase/pull/7736)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki konfigurasi aturan tautan pemindaian kode QR di panel tindakan ([#7693](https://github.com/nocobase/nocobase/pull/7693)) oleh @katherinehhh
  - Memperbaiki kegagalan aturan tautan blok iframe di dalam modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) oleh @katherinehhh
- **[database]** Melewati sinkronisasi nilai default untuk kolom JSON MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) oleh @2013xile
- **[Workflow]**

  - Memperbaiki masalah di mana, dalam mode pemisahan layanan, penanganan antrian tertunda di memori yang tidak tepat menyebabkan beberapa workflow tidak dijalankan ([#7692](https://github.com/nocobase/nocobase/pull/7692)) oleh @mytharcher
  - Memperbaiki nilai status eksekusi saat membuat dengan deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) oleh @mytharcher
  - Memperbaiki masalah di mana, setelah menghapus node yang memulai percabangan, kunci dari node pertama yang dipertahankan di dalam cabang salah diubah ke nilai baru ([#7665](https://github.com/nocobase/nocobase/pull/7665)) oleh @mytharcher
- **[Kontrol akses]** Memperbaiki urutan middleware dari `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) oleh @2013xile
- **[Manajer File]** Memperbaiki masalah file `.msg` tidak dapat diunggah dengan benar ([#7662](https://github.com/nocobase/nocobase/pull/7662)) oleh @mytharcher
- **[Workflow: Node manual]** Memperbaiki masalah di mana tugas manual menghilang setelah workflow dinonaktifkan ([#7687](https://github.com/nocobase/nocobase/pull/7687)) oleh @mytharcher
- **[Bidang koleksi: divisi administratif China]** Impor data gagal ketika kota dan area memiliki nama yang sama ([#7673](https://github.com/nocobase/nocobase/pull/7673)) oleh @2013xile
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah terjemahan teks status dalam notifikasi penyelesaian persetujuan, menggunakan bahasa default sistem untuk terjemahan ketika pengguna belum mengatur preferensi bahasa oleh @mytharcher
  - Memperbaiki lokal oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Tanggal rilis: 2025-11-05*

### 🚀 Peningkatan

- **[database]** Menambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana tombol tindakan di blok tabel tidak diperbarui dengan benar setelah mengganti halaman, memastikan fungsinya cocok dengan data halaman saat ini. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) oleh @gchust
- **[client]**

  - Memperbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe
  - memperbaiki elipsis judul bidang asosiasi tidak diterapkan ([#7778](https://github.com/nocobase/nocobase/pull/7778)) oleh @katherinehhh
  - aturan tautan tindakan perbarui catatan tidak berfungsi ([#7774](https://github.com/nocobase/nocobase/pull/7774)) oleh @gchust
- **[database]** Deteksi bidang indeks yang salah saat nama bidang menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile
- **[Mobile (usang)]** Memperbaiki masalah di mana popup nilai default bidang tanggal di perangkat seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Tanggal rilis: 2025-11-05*

### 🎉 Fitur Baru

- **[client]** menambahkan dukungan paginasi ke sub tabel ([#7754](https://github.com/nocobase/nocobase/pull/7754)) oleh @katherinehhh

### 🚀 Peningkatan

- **[undefined]** memperbarui dokumentasi bahasa Inggris dari plugin grafik ([#7748](https://github.com/nocobase/nocobase/pull/7748)) oleh @heziqiang
- **[telemetri]** Menambahkan metrik telemetri untuk jumlah sub-aplikasi online, dll ([#7743](https://github.com/nocobase/nocobase/pull/7743)) oleh @2013xile
- **[Workflow]** Mendukung blok data dalam workflow untuk menggunakan menu pengaturan detail konsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher
- **[Manajer multi-aplikasi (usang)]** Mengaktifkan startup asinkron untuk sub-aplikasi menggunakan antrian ([#7749](https://github.com/nocobase/nocobase/pull/7749)) oleh @2013xile
- **[Visualisasi data]** menambahkan opsi format waktu data grafik ([#7763](https://github.com/nocobase/nocobase/pull/7763)) oleh @heziqiang
- **[Workflow: Persetujuan]** Menambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana label dari tipe enum di komponen terkait variabel tidak ditampilkan dalam bahasa yang benar. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) oleh @gchust
  - Memperbaiki indikator bidang wajib yang hilang setelah mengatur validasi frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) oleh @katherinehhh
  - memperbaiki masalah dengan menghapus tanggal non-timezone di formulir edit ([#7759](https://github.com/nocobase/nocobase/pull/7759)) oleh @katherinehhh
  - Memperbaiki validasi bidang wajib untuk aturan tautan ([#7756](https://github.com/nocobase/nocobase/pull/7756)) oleh @zhangzhonghe
  - menyelesaikan masalah Tanggal Tidak Valid saat menghapus Tanggal Tertentu di filter… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) oleh @katherinehhh
  - Memperbaiki kegagalan validasi wajib untuk bidang Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) oleh @katherinehhh
  - Menambahkan konfigurasi lingkup data untuk bidang hubungan di formulir filter ([#7761](https://github.com/nocobase/nocobase/pull/7761)) oleh @zhangzhonghe
  - memperbaiki masalah format waktu di bidang sub tabel ([#7750](https://github.com/nocobase/nocobase/pull/7750)) oleh @katherinehhh
- **[flow-engine]**

  - ketika nilai filter bidang diatur ke false, permintaan dengan lingkup data salah ([#7766](https://github.com/nocobase/nocobase/pull/7766)) oleh @gchust
  - tidak dapat menyelesaikan nilai bidang asosiasi variabel objek saat ini dari subform ([#7751](https://github.com/nocobase/nocobase/pull/7751)) oleh @gchust
  - perbaikan: menyelesaikan masalah parameter permintaan halaman setelah menghapus data di halaman terakhir ([#7755](https://github.com/nocobase/nocobase/pull/7755)) oleh @katherinehhh
- **[server]** Mengisolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher
- **[Blok: GridCard]** memperbaiki masalah duplikasi data antara blok daftar dan grid card ([#7773](https://github.com/nocobase/nocobase/pull/7773)) oleh @katherinehhh
- **[Manajer multi-aplikasi (usang)]** Koleksi yang salah untuk metrik status sub-aplikasi ([#7772](https://github.com/nocobase/nocobase/pull/7772)) oleh @2013xile
- **[Workflow]**

  - Memperbaiki masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi acara antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher
  - Memperbaiki masalah di mana, dalam mode pemisahan layanan, menjalankan workflow secara manual yang berisi node interupsi akan tetap macet dalam status tertunda ([#7767](https://github.com/nocobase/nocobase/pull/7767)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki kesalahan yang muncul saat menduplikasi workflow persetujuan oleh @mytharcher
  - Membuat node persetujuan di cabang paralel tidak lagi didukung untuk menghindari masalah yang disebabkan oleh status proses oleh @mytharcher
- **[Manajer Email]**

  - menambahkan log sinkronisasi oleh @jiannx
  - menambahkan migrasi untuk indeks oleh @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Tanggal rilis: 2025-11-03*

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung mode pemicu "Sebelum data disimpan" oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** tidak dapat memuat bidang variabel formulir saat ini ([#7745](https://github.com/nocobase/nocobase/pull/7745)) oleh @gchust
- **[Workflow: Persetujuan]** Memperbaiki lokal oleh @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Tanggal rilis: 2025-11-02*

### 🚀 Peningkatan

- **[Workflow: node notifikasi]** Menambahkan opsi `ignoreFail` untuk node notifikasi, yang memungkinkan untuk melanjutkan workflow ketika pengiriman notifikasi gagal ([#7736](https://github.com/nocobase/nocobase/pull/7736)) oleh @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Tanggal rilis: 2025-11-02*

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana variabel bidang asosiasi dalam formulir saat ini tidak dapat diidentifikasi dengan benar, memastikan pemrosesan data yang akurat dalam formulir. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) oleh @gchust
  - Memperbaiki masalah di mana menetapkan array sebagai nilai atau nilai default ke bidang "toOne" menghasilkan kesalahan. Ini memastikan penanganan hasil resolusi variabel yang tepat, meningkatkan stabilitas dan akurasi sistem. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) oleh @gchust
- **[Kontrol akses]** Memperbaiki urutan middleware dari `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) oleh @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Tanggal rilis: 2025-11-01*

### 🚀 Peningkatan

- **[flow-engine]** Menyempurnakan pesan kesalahan yang ditampilkan saat menyalin UID gagal, memberikan instruksi yang lebih jelas untuk menyelesaikan masalah. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) oleh @gchust

### 🐛 Perbaikan Bug

- **[flow-engine]** langkah-langkah alur peristiwa tidak boleh ditampilkan di menu konfigurasi ([#7723](https://github.com/nocobase/nocobase/pull/7723)) oleh @gchust
- **[client]** Memperbaiki masalah di mana bidang yang tidak dapat difilter salah terdaftar di opsi filter, memastikan hanya bidang yang berlaku yang muncul untuk dipilih. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) oleh @gchust
- **[Workflow]** Memperbaiki nilai status eksekusi saat membuat dengan deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) oleh @mytharcher
- **[Karyawan AI]** Mengoptimalkan perilaku pencarian web dan petunjuk pengguna untuk Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) oleh @cgyrock
- **[Tindakan: Ekspor catatan]** menyelesaikan masalah dengan tampilan daftar bidang yang dapat diekspor dalam tindakan ekspor ([#7714](https://github.com/nocobase/nocobase/pull/7714)) oleh @katherinehhh
- **[Tindakan: Impor catatan]** menyelesaikan masalah dengan tampilan daftar bidang di Bidang yang dapat diimpor ([#7710](https://github.com/nocobase/nocobase/pull/7710)) oleh @katherinehhh
- **[Tindakan: Impor catatan Pro]** menyelesaikan masalah dengan tampilan daftar bidang di Bidang yang dapat diimpor oleh @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Tanggal rilis: 2025-10-31*

### 🎉 Fitur Baru

- **[client]** Alur Peristiwa: Memperkenalkan tindakan yang telah ditentukan sebelumnya untuk meningkatkan opsi kustomisasi untuk penanganan peristiwa, memungkinkan pengguna untuk merampingkan alur kerja dan meningkatkan efisiensi ([#7672](https://github.com/nocobase/nocobase/pull/7672)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[Karyawan AI]** Meningkatkan logika interaksi karyawan AI dan mengoptimalkan alur konfigurasi tugas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]** menyelesaikan masalah UI saat menghapus bidang asosiasi di koleksi ([#7706](https://github.com/nocobase/nocobase/pull/7706)) oleh @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Tanggal rilis: 2025-10-30*

### 🚀 Peningkatan

- **[undefined]** memperbarui dokumen ringkasan grafik ([#7702](https://github.com/nocobase/nocobase/pull/7702)) oleh @heziqiang
- **[client]** mendukung jsx di editor kode JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) oleh @gchust
- **[Karyawan AI]** Karyawan AI dapat menanyakan data secara otonom berdasarkan metadata blok tabel ([#7703](https://github.com/nocobase/nocobase/pull/7703)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki kegagalan aturan tautan blok iframe di dalam modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) oleh @katherinehhh
  - Memperbaiki konfigurasi aturan tautan pemindaian kode QR di panel tindakan ([#7693](https://github.com/nocobase/nocobase/pull/7693)) oleh @katherinehhh
- **[database]** Melewati sinkronisasi nilai default untuk kolom JSON MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) oleh @2013xile
- **[Workflow]** Memperbaiki masalah di mana, dalam mode pemisahan layanan, penanganan antrian tertunda di memori yang tidak tepat menyebabkan beberapa workflow tidak dijalankan ([#7692](https://github.com/nocobase/nocobase/pull/7692)) oleh @mytharcher
