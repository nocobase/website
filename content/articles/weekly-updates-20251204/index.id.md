---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: menambahkan opsi `error message transformer` dalam konfigurasi sumber data api restful, Memungkinkan untuk memilih apakah akan menampilkan snapshot atau catatan terbaru di UI proses persetujuan, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Tanggal rilis: 04-12-2025*

### 🐛 Perbaikan Bug

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah ketika daftar persetujuan OOM terjadi oleh @mytharcher
  - Memperbaiki masalah di mana jendela pop-up pemberi persetujuan tidak menampilkan judul oleh @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Tanggal rilis: 04-12-2025*

### 🐛 Perbaikan Bug

- **[Aksi: Impor rekaman]** Bidang yang diimpor tidak cocok dengan bidang yang diatur dalam pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile
- **[Alur Kerja]** Memperbaiki masalah di mana halaman eksekusi melempar kesalahan ketika pekerjaan pada node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher
- **[Kontrol akses]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah kesalahan izin yang dilemparkan ketika memuat rekaman terkait persetujuan di laci detail oleh @mytharcher
  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil pekerjaan di cabang pengembalian oleh @mytharcher
  - Memperbaiki masalah di mana proses tidak benar ketika bercabang dengan urutan dan tanda tangan bersama oleh @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Tanggal rilis: 02-12-2025*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah kedipan pada kotak pilih dropdown aturan tautan ([#8018](https://github.com/nocobase/nocobase/pull/8018)) oleh @zhangzhonghe
- **[acl]** Memperbaiki masalah di mana info meta ACL salah ketika lingkup izin sumber data eksternal menggunakan variabel terkait pengguna saat ini ([#8013](https://github.com/nocobase/nocobase/pull/8013)) oleh @2013xile
- **[Editor tema]** Mengaktifkan pengalih tema pada perangkat seluler ([#8046](https://github.com/nocobase/nocobase/pull/8046)) oleh @zhangzhonghe
- **[Manajer multi-aplikasi]** Pengaturan level log tidak diterapkan ke sub-aplikasi ([#8045](https://github.com/nocobase/nocobase/pull/8045)) oleh @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Tanggal rilis: 02-12-2025*

### 🎉 Fitur Baru

- **[Sumber data: REST API]** menambahkan opsi `pengubah pesan kesalahan` dalam konfigurasi sumber data api restful oleh @cgyrock

### 🚀 Peningkatan

- **[klien]**

  - menampilkan opsi yang diciutkan saat diarahkan pada komponen Pilih ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh
  - mengoptimalkan pesan validasi untuk sub-tabel ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh
- **[Alur Kerja]** Menambahkan konteks sumber data "utama" untuk UserSelect, untuk menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menggunakan komponen umum untuk mengurangi kode duplikat oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki bug muat lambat di Variable.Input, yang akan menyebabkan menu opsi variabel di-render ulang secara tidak benar ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana kesalahan dilemparkan ketika bidang dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher
- **[Alur Kerja: Sub-alur]** Memperbaiki masalah alur kerja yang dipilih menampilkan "N/A" ketika jumlah alur kerja lebih besar dari 200 oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah izin ketika mendapatkan `approvalRecords.reassignee` karena `RemoteSelect` berubah oleh @mytharcher
  - Memperbaiki masalah di mana aksi cetak tidak berfungsi ketika menyegarkan halaman dengan modal terbuka oleh @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Tanggal rilis: 28-11-2025*

### 🐛 Perbaikan Bug

- **[klien]**

  - Menghindari kesalahan yang dilemparkan ketika membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher
  - menyelesaikan kesalahan ketika menambahkan rekaman anak di blok tabel pohon asosiasi ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh
- **[Departemen]** Memperbaiki masalah di mana bidang terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang
- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian bidang induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana bidang array m2m di sub-tabel tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki tidak ada data pemohon dalam konteks eksekusi setelah pengguna mengirimkan ulang oleh @mytharcher
  - Memperbaiki masalah di mana komentar dalam hasil pekerjaan adalah null setelah pengguna mengirimkan persetujuan dengan komentar oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Tanggal rilis: 02-12-2025*

### 🚀 Peningkatan

- **[klien]**

  - mendukung pengaturan Izinkan Banyak di komponen unggah lampiran ([#8052](https://github.com/nocobase/nocobase/pull/8052)) oleh @katherinehhh
  - menampilkan opsi yang diciutkan saat diarahkan pada komponen Pilih ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh
  - menampilkan opsi yang diciutkan saat diarahkan pada komponen Pilih ([#8030](https://github.com/nocobase/nocobase/pull/8030)) oleh @katherinehhh
- **[Karyawan AI]** menambahkan bidang penyedia yang hilang ke formulir Tambah LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) oleh @heziqiang
- **[Alur Kerja]** Menambahkan konteks sumber data "utama" untuk UserSelect, untuk menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana N/A ditampilkan setelah menonaktifkan allowMultiple di pilih rekaman asosiasi banyak-ke-banyak ([#8050](https://github.com/nocobase/nocobase/pull/8050)) oleh @katherinehhh
  - Memperbaiki masalah kedipan pada kotak pilih dropdown aturan tautan ([#8018](https://github.com/nocobase/nocobase/pull/8018)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengalihkan bidang tanggal ke bidang waktu di aksi filter menyebabkan kesalahan rendering. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) oleh @gchust
  - Memperbaiki masalah di mana menu rekaman saat ini muncul ketika menambahkan blok komentar. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) oleh @gchust
  - Memperbaiki gagal menghapus rekaman di blok pemilih rekaman ([#8023](https://github.com/nocobase/nocobase/pull/8023)) oleh @katherinehhh
  - Memperbaiki masalah di mana gaya default bidang JS di blok detail salah. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) oleh @gchust
  - memperbaiki blok tabel pohon tidak dapat memperluas node anak ([#8011](https://github.com/nocobase/nocobase/pull/8011)) oleh @katherinehhh
  - memperbaiki seret kolom sub-tabel tidak berfungsi ([#8026](https://github.com/nocobase/nocobase/pull/8026)) oleh @katherinehhh
  - memperbaiki lebar kolom sub-tabel tidak diterapkan ([#8027](https://github.com/nocobase/nocobase/pull/8027)) oleh @katherinehhh
  - Menyelesaikan masalah yang menyebabkan kesalahan saat memuat data untuk bidang asosiasi di jendela popup, memastikan tampilan data dan fungsionalitas yang lebih lancar. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) oleh @gchust
  - memperbaiki masalah gaya popover bidang tampilan markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) oleh @katherinehhh
  - Memperbaiki masalah di mana judul default dari popup aksi edit dan buat baru salah. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) oleh @gchust
  - Memperbaiki bug muat lambat di Variable.Input, yang akan menyebabkan menu opsi variabel di-render ulang secara tidak benar ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher
  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dengan benar di popup yang dibuka oleh bidang asosiasi. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) oleh @gchust
- **[acl]** Memperbaiki masalah di mana info meta ACL salah ketika lingkup izin sumber data eksternal menggunakan variabel terkait pengguna saat ini ([#8013](https://github.com/nocobase/nocobase/pull/8013)) oleh @2013xile
- **[mesin-aliran]**

  - memperbaiki rekaman komentar gagal disimpan setelah diedit ([#8035](https://github.com/nocobase/nocobase/pull/8035)) oleh @katherinehhh
  - Memperbaiki masalah di mana blok data tidak disegarkan ketika menutup popup dengan mengklik tombol kirim formulir di dalam popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) oleh @gchust
- **[Editor tema]** Mengaktifkan pengalih tema pada perangkat seluler ([#8046](https://github.com/nocobase/nocobase/pull/8046)) oleh @zhangzhonghe
- **[Manajer multi-aplikasi (usang)]** Pengaturan level log tidak diterapkan ke sub-aplikasi ([#8045](https://github.com/nocobase/nocobase/pull/8045)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki kesalahan saat memperbarui kata sandi untuk sumber data eksternal ([#8024](https://github.com/nocobase/nocobase/pull/8024)) oleh @cgyrock
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana kesalahan dilemparkan ketika bidang dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher
- **[Komentar]**

  - Memperbaiki gagal menghapus rekaman di blok komentar oleh @katherinehhh
  - Memperbaiki menampilkan peringatan ketika blok komentar digunakan pada koleksi non-komentar oleh @katherinehhh
- **[Multi-ruang]** Perangkat seluler mendukung peralihan ruang oleh @jiannx
- **[Alur Kerja: Sub-alur]** Memperbaiki masalah alur kerja yang dipilih menampilkan "N/A" ketika jumlah alur kerja lebih besar dari 200 oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki kesalahan yang dilemparkan ketika membuat blok informasi persetujuan oleh @mytharcher
  - Menambahkan migrasi untuk menghindari kesalahan rekaman duplikat ketika menambahkan indeks oleh @mytharcher
  - Memperbaiki masalah di mana aksi cetak tidak berfungsi ketika menyegarkan halaman dengan modal terbuka oleh @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Tanggal rilis: 29-11-2025*

### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Mengizinkan untuk memilih apakah akan menampilkan snapshot atau rekaman terbaru di UI proses persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** mengoptimalkan pesan validasi untuk sub-tabel ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh
- **[Telemetri: Prometheus]** Memutakhirkan `@opentelemetry/exporter-prometheus` oleh @2013xile
- **[Aksi: Impor rekaman Pro]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan pengguna alasan spesifik untuk kegagalan tugas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[mesin-aliran]** Memperbaiki masalah di mana variabel rekaman saat ini tidak dapat dipicu dengan benar untuk diselesaikan di blok detail. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) oleh @gchust
- **[klien]** Memperbaiki masalah pemilihan dan penghapusan blok tabel untuk kunci komposit ([#7978](https://github.com/nocobase/nocobase/pull/7978)) oleh @katherinehhh
- **[Aksi: Ekspor rekaman]** memperbaiki bidang sistem yang hilang dalam daftar bidang yang dapat diekspor ([#8002](https://github.com/nocobase/nocobase/pull/8002)) oleh @katherinehhh
- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian bidang induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana bidang array m2m di sub-tabel tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock
- **[Departemen]** Memperbaiki masalah di mana bidang terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah izin ketika mendapatkan `approvalRecords.reassignee` karena `RemoteSelect` berubah oleh @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Tanggal rilis: 28-11-2025*

### 🎉 Fitur Baru

- **[Blok: Peta]** menambahkan blok peta 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) oleh @katherinehhh
- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO ketika tidak diautentikasi oleh @heziqiang

### 🐛 Perbaikan Bug

- **[klien]**

  - Menghindari kesalahan yang dilemparkan ketika membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher
  - menyelesaikan kesalahan ketika menambahkan rekaman anak di blok tabel pohon asosiasi ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh
  - memperbaiki masalah tampilan ketika bidang markdown di-ellipsis dalam mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) oleh @katherinehhh
  - memperbaiki hasil pencarian yang tidak lengkap di pemilih kaskade ([#7990](https://github.com/nocobase/nocobase/pull/7990)) oleh @katherinehhh
  - Memperbaiki masalah di mana status tab halaman dan rute tidak sesuai ([#7991](https://github.com/nocobase/nocobase/pull/7991)) oleh @zhangzhonghe
  - memperbaiki remote select jarak jauh tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh
- **[database]** Memperbaiki: menghapus pemrosesan UTC dalam konversi waktu untuk bidang hanya-waktu untuk mencegah pergeseran yang disebabkan oleh zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu
- **[Alur Kerja]**

  - Memperbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum berhenti ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher
  - Memperbaiki masalah di mana beberapa menu tugas alur kerja tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher
  - Memperbaiki masalah di mana tautan tugas mengarah ke halaman kesalahan ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher
- **[Visualisasi data]** Pengaturan bidang filter untuk koleksi sumber data eksternal tidak menampilkan properti tertentu ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki kegagalan pembaruan kata sandi sumber data ketika kata sandi database diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock
- **[Aksi: Impor rekaman]** Memperbaiki masalah ketika mengimpor data di tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock
- **[Alur Kerja: Node manual]** Memperbaiki masalah di mana jumlah tugas manual tidak benar ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki tidak ada data pemohon dalam konteks eksekusi setelah pengguna mengirimkan ulang oleh @mytharcher
  - Memperbaiki masalah di mana komentar dalam hasil pekerjaan adalah null setelah pengguna mengirimkan persetujuan dengan komentar oleh @mytharcher
