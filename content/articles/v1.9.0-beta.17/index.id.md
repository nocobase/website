---
title: "NocoBase v1.9.0-beta.17: Menambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan"
description: "Catatan Rilis v1.9.0-beta.17"
---

### 🚀 Perbaikan

- **[database]** Menambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher

- **[Kontrol akses]**
  - Mengurangi izin default untuk peran anggota ([#7921](https://github.com/nocobase/nocobase/pull/7921)) oleh @2013xile

  - Mengoptimalkan logika kontrol izin untuk operasi bidang asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile

- **[Visualisasi data]** Menambahkan dukungan bahasa Rusia untuk antarmuka plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) oleh @sembaev-a-a

- **[Workflow]** Mendukung blok data dalam workflow untuk menggunakan menu pengaturan detail yang terkonsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher

- **[Workflow: Webhook]** Menambahkan ikon untuk tipe node respons oleh @mytharcher

- **[Workflow: JavaScript]** Memperbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi atas oleh @mytharcher

- **[Auth: OIDC]** Meningkatkan batas waktu permintaan oleh @2013xile

- **[Workflow: Persetujuan]** Menambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki antarmuka bidang yang menampilkan many-to-one alih-alih one-to-one untuk belongsTo dalam konfigurasi sumber data eksternal ([#7936](https://github.com/nocobase/nocobase/pull/7936)) oleh @cgyrock

  - Memperbaiki error: Tidak dapat menyelesaikan 'antd-mobile' dan Tidak dapat menyelesaikan 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana template duplikat tidak muncul, yang disebabkan oleh menyeret lalu menghapus template yang direferensikan ([#7847](https://github.com/nocobase/nocobase/pull/7847)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe

  - Memperbaiki masalah halaman berikutnya kosong di blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh

  - Memperbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe

- **[server]**
  - Memperbaiki masalah dalam mode pemisahan layanan di mana pesan antrian yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher

  - Mengisolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher

  - Memperbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses pekerja yang mengirim pesan melalui antrian pesan akan menyebabkan error ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher

- **[utils]** Mengaktifkan penggabungan objek dalam strategi intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) oleh @chenos

- **[database]** Deteksi bidang indeks yang salah ketika nama bidang menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile

- **[Bidang koleksi: Many to many (array)]** Memperbaiki masalah bidang M2M (array) saat membuat/memperbarui data terkait ([#7926](https://github.com/nocobase/nocobase/pull/7926)) oleh @cgyrock

- **[Sumber data: Utama]** Memperbaiki masalah di mana bidang one-to-many yang baru ditambahkan tidak dapat dipilih sebagai kunci asing sebelum memulai ulang aplikasi. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) oleh @cgyrock

- **[Workflow]**
  - Memperbaiki masalah di mana memperbarui jumlah tugas secara tidak sengaja akan mengatur ulang status formulir yang sedang diisi ([#7937](https://github.com/nocobase/nocobase/pull/7937)) oleh @mytharcher

  - Menggunakan eventQueue alih-alih backgroundJob bersama untuk mencegah antrian bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher

  - Memperbaiki masalah di mana plugin workflow masih mengonsumsi event antrian ketika tidak dalam mode pekerja di bawah mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher

  - Memperbaiki error yang disebabkan oleh mendengarkan event sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher

  - Memperbaiki masalah di mana, dalam mode pemisahan layanan, menjalankan workflow secara manual yang berisi node interupsi akan tetap macet dalam status tertunda ([#7767](https://github.com/nocobase/nocobase/pull/7767)) oleh @mytharcher

  - Menambahkan `workflowId` sebagai data identitas untuk log workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher

  - Menyelesaikan masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi event antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher

- **[Kontrol akses]**
  - Mendukung pembatasan lingkup data untuk operasi asosiasi. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) oleh @2013xile

  - Masalah di mana cuplikan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile

- **[Workflow: Node manual]** Memperbaiki namespace bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher

- **[Pengguna]** Refresh indeks yang salah ketika nama bidang menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile

- **[Seluler (usang)]** Memperbaiki masalah di mana popup nilai default bidang tanggal di perangkat seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe

- **[Workflow: Variabel kustom]** Memperbaiki error yang muncul ketika tidak ada konfigurasi di node variabel oleh @mytharcher

- **[Workflow: Event aksi kustom]** Memperbaiki error yang disebabkan oleh mendengarkan event sumber data eksternal yang tidak ada oleh @mytharcher

- **[Cetak template]** mengurai variabel dalam filter oleh @jiannx

- **[Visualisasi data: ECharts]** Memperbaiki masalah di mana konfigurasi tipe Label dalam opsi Echarts tidak berpengaruh. oleh @heziqiang

- **[Workflow: Persetujuan]**
  - Memperbaiki format tanggal pada kartu daftar persetujuan di pusat tugas untuk menampilkan tanggal dan waktu lengkap oleh @mytharcher

  - Memperbaiki masalah di mana ukuran halaman saluran notifikasi pemuatan tidak cukup besar, dan menyebabkan daftar tidak dimuat sepenuhnya oleh @mytharcher

  - Memperbaiki masalah kinerja yang terjadi saat menanyakan daftar catatan persetujuan selama pengajuan persetujuan oleh @mytharcher

  - Memperbaiki masalah di mana bidang koleksi utama tidak dikecualikan saat memuat ulang data asosiasi oleh @mytharcher

  - Memperbaiki masalah di mana kondisi balapan yang terjadi selama pemrosesan persetujuan bersamaan oleh beberapa penyetuju dapat menyebabkan node workflow dieksekusi lebih dari satu kali oleh @mytharcher

  - Membuat node persetujuan di cabang paralel tidak lagi didukung untuk menghindari masalah yang disebabkan oleh status proses oleh @mytharcher

  - Memperbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi oleh @zhangzhonghe

  - Memperbaiki error yang muncul ketika workflow persetujuan duplikat oleh @mytharcher

- **[Manajer email]**
  - menambahkan log sinkronisasi oleh @jiannx

  - menyinkronkan status baca email microsoft tanpa stempel waktu oleh @jiannx

  - koleksi mailMessages menambahkan indeks oleh @jiannx

  - menambahkan migrasi untuk indeks oleh @jiannx

  - Memperbaiki masalah gambar yang dicadangkan dan sinkronisasi di outlook oleh @jiannx
