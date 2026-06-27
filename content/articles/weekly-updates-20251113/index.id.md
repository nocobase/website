---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Dukungan seret untuk tindakan kolom tabel, tambahkan sumber data SQL bagan, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Tanggal rilis: 2025-11-12*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana templat duplikat tidak muncul, yang disebabkan oleh menyeret lalu menghapus templat yang direferensikan ([#7847](https://github.com/nocobase/nocobase/pull/7847)) oleh @zhangzhonghe
- **[utils]** Mengaktifkan penggabungan objek dalam strategi intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) oleh @chenos
- **[Visualisasi data: ECharts]** memperbaiki masalah dengan konfigurasi ECharts labelType oleh @heziqiang
- **[Manajer email]** menyinkronkan status baca email microsoft tanpa stempel waktu oleh @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Tanggal rilis: 2025-11-10*

### 🐛 Perbaikan Bug

- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana bidang koleksi utama tidak dikecualikan saat memuat ulang data asosiasi oleh @mytharcher
- **[Manajer email]** Memperbaiki masalah gambar yang dicadangkan dan sinkronisasi di outlook oleh @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Tanggal rilis: 2025-11-10*

### 🚀 Peningkatan

- **[Kontrol akses]** Mengoptimalkan logika kontrol izin untuk operasi bidang asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile
- **[Alur kerja: JavaScript]** Memperbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi atas oleh @mytharcher
- **[Auth: OIDC]** Menambah batas waktu permintaan oleh @2013xile

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses pekerja yang mengirim pesan melalui antrian pesan akan menyebabkan kesalahan ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher
- **[klien]** memperbaiki masalah halaman berikutnya kosong di blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh
- **[Alur kerja]**

  - Menambahkan `workflowId` sebagai data identitas untuk log alur kerja ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher
  - Memperbaiki masalah di mana plugin alur kerja masih menggunakan acara antrian ketika tidak dalam mode pekerja di bawah mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher
- **[Pengguna]** Penyegaran indeks yang salah ketika nama bidang menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile
- **[Alur kerja: Variabel kustom]** Memperbaiki kesalahan yang muncul ketika tidak ada konfigurasi di node variabel oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Tanggal rilis: 2025-11-12*

### 🎉 Fitur Baru

- **[klien]** Mendukung penyeretan untuk tindakan kolom tabel ([#7842](https://github.com/nocobase/nocobase/pull/7842)) oleh @zhangzhonghe
- **[Visualisasi data]** menambahkan sumber data SQL bagan ([#7830](https://github.com/nocobase/nocobase/pull/7830)) oleh @heziqiang

### 🚀 Peningkatan

- **[klien]** Menambahkan dukungan untuk pustaka Day.js dalam konteks skrip RunJS, memungkinkan manipulasi tanggal dan waktu yang lebih mudah. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) oleh @gchust

### 🐛 Perbaikan Bug

- **[utils]**

  - Memperbaiki kesalahan "Invalid filter item type" pada tombol filter ([#7838](https://github.com/nocobase/nocobase/pull/7838)) oleh @zhangzhonghe
  - Mengaktifkan penggabungan objek dalam strategi intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) oleh @chenos
  - Memperbaiki kesalahan 'Unrecognized operation' dalam alur peristiwa ([#7835](https://github.com/nocobase/nocobase/pull/7835)) oleh @zhangzhonghe
- **[klien]**

  - Memperbaiki masalah di mana aturan tautan untuk tombol tindakan baris di blok tabel tidak dijalankan ulang setelah data baris diperbarui, memastikan aturan sekarang diterapkan kembali dengan benar ketika perubahan terjadi. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) oleh @gchust
  - Memperbaiki kesalahan ketika melihat pratinjau kode di editor kode jika kode berisi sintaks jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) oleh @gchust
- **[tidak terdefinisi]** Memperbaiki masalah gaya yang salah pada halaman beranda dokumentasi plugin dalam mode gelap. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) oleh @gchust
- **[Manajer file]** memperbaiki masalah konfigurasi bidang blok tabel ([#7843](https://github.com/nocobase/nocobase/pull/7843)) oleh @katherinehhh
- **[Karyawan AI]** Menyembunyikan tombol obrolan karyawan AI di halaman v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) oleh @cgyrock
- **[Visualisasi data: ECharts]** memperbaiki masalah dengan konfigurasi ECharts labelType oleh @heziqiang
- **[Manajer email]**

  - memperbaiki bug draf oleh @jiannx
  - menyinkronkan status baca email microsoft tanpa stempel waktu oleh @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Tanggal rilis: 2025-11-11*

### 🚀 Peningkatan

- **[klien]**

  - menambahkan versi info halaman ke konteks mesin alur ([#7826](https://github.com/nocobase/nocobase/pull/7826)) oleh @gchust
  - meningkatkan Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) oleh @katherinehhh
  - beradaptasi dengan bidang tableoid di 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) oleh @katherinehhh
- **[Visualisasi data]** memperbarui tips peringatan dan anotasi templat kode peristiwa ([#7814](https://github.com/nocobase/nocobase/pull/7814)) oleh @heziqiang
- **[Kontrol akses]** Mengoptimalkan logika kontrol izin untuk operasi bidang asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile
- **[Auth: OIDC]** Menambah batas waktu permintaan oleh @2013xile

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses pekerja yang mengirim pesan melalui antrian pesan akan menyebabkan kesalahan ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher
- **[klien]**

  - variabel koleksi saat ini tidak boleh dipilih dari pemilih variabel komponen filter ([#7818](https://github.com/nocobase/nocobase/pull/7818)) oleh @gchust
  - Memperbaiki kesalahan 'value.replace is not a function' di bidang hubungan formulir filter ([#7824](https://github.com/nocobase/nocobase/pull/7824)) oleh @zhangzhonghe
  - Memperbaiki parameter yang salah di panggilan balik onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) oleh @zhangzhonghe
- **[mesin-alur]** Memperbaiki masalah di mana perubahan pada alur peristiwa hanya akan berlaku setelah menyegarkan halaman. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) oleh @gchust
- **[Alur kerja]** Memperbaiki masalah di mana plugin alur kerja masih menggunakan acara antrian ketika tidak dalam mode pekerja di bawah mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher
- **[Alur kerja: Persetujuan]** Memperbaiki masalah di mana bidang koleksi utama tidak dikecualikan saat memuat ulang data asosiasi oleh @mytharcher
- **[Manajer email]** Memperbaiki masalah gambar yang dicadangkan dan sinkronisasi di outlook oleh @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Tanggal rilis: 2025-11-10*

### 🚀 Peningkatan

- **[mesin-alur]** Mengoptimalkan gaya toolbar untuk tab halaman ([#7795](https://github.com/nocobase/nocobase/pull/7795)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[mesin-alur]**

  - Memperbaiki masalah di mana variabel di bidang asosiasi subform tidak diselesaikan dengan benar ketika bidang dimodifikasi melalui antarmuka pengguna. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) oleh @gchust
  - kesalahan dalam formulir edit untuk catatan kunci utama multi ([#7798](https://github.com/nocobase/nocobase/pull/7798)) oleh @gchust
  - Memperbaiki masalah di mana konfigurasi tertentu untuk tindakan "Buka Tampilan" tidak diterapkan, memastikan tindakan sekarang berfungsi sebagaimana mestinya untuk semua konfigurasi yang ditentukan. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) oleh @gchust
- **[klien]**

  - Memperbaiki bidang pemilih koleksi tidak dapat memilih koleksi dengan benar ([#7794](https://github.com/nocobase/nocobase/pull/7794)) oleh @katherinehhh
  - tidak dapat menyembunyikan kolom tindakan blok tabel ([#7804](https://github.com/nocobase/nocobase/pull/7804)) oleh @gchust
  - mendukung pemilihan seluruh objek variabel di prompt karyawan AI ([#7791](https://github.com/nocobase/nocobase/pull/7791)) oleh @gchust
- **[Pengguna]** Penyegaran indeks yang salah ketika nama bidang menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Tanggal rilis: 2025-11-06*

### 🚀 Peningkatan

- **[mesin-alur]** mendukung operasi tertunda dalam model alur ([#7786](https://github.com/nocobase/nocobase/pull/7786)) oleh @gchust
- **[Alur kerja: JavaScript]** Memperbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi atas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki masalah halaman berikutnya kosong di blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh
  - memperbaiki lebar tindakan tabel dan jsColumn tidak diterapkan ([#7777](https://github.com/nocobase/nocobase/pull/7777)) oleh @katherinehhh
  - lingkup data blok tidak berfungsi jika diatur oleh alur peristiwa halaman ([#7788](https://github.com/nocobase/nocobase/pull/7788)) oleh @gchust
- **[Alur kerja]** Menambahkan `workflowId` sebagai data identitas untuk log alur kerja ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher
- **[Alur kerja: Variabel kustom]** Memperbaiki kesalahan yang muncul ketika tidak ada konfigurasi di node variabel oleh @mytharcher
- **[Manajer email]** koleksi MailMessages menambahkan indeks oleh @jiannx
