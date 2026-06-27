---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Menambahkan variabel sistem baru dalam alur kerja, termasuk `instanceId` dan `genSnowflakeId`, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Tanggal rilis: 2025-12-24*

### 🎉 Fitur Baru

- **[Alur Kerja]** Menambahkan variabel sistem baru dalam alur kerja, termasuk `instanceId` dan `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki stack overflow yang disebabkan oleh infinite loop dalam menampilkan lazy loading bidang asosiasi ([#8262](https://github.com/nocobase/nocobase/pull/8262)) oleh @zhangzhonghe
- **[Aksi: Impor catatan]** Memperbaiki masalah di mana indeks baris dalam pesan kesalahan selalu 1 ketika kesalahan terjadi dalam aksi impor ([#8244](https://github.com/nocobase/nocobase/pull/8244)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Memperbaiki masalah di mana kesalahan terjadi ketika membatalkan eksekusi alur kerja yang telah dihapus ([#8258](https://github.com/nocobase/nocobase/pull/8258)) oleh @mytharcher
- **[Bidang koleksi: Urutan]** Memperbaiki kesalahan ketika perintah perbaikan bidang-urutan menemukan koleksi yang tidak ada di lingkungan saat ini. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki logika pemeriksaan unik yang akan menimbulkan kesalahan ketika nilai bidang unik adalah null oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki rollback duplikat dari transaksi yang sama oleh @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Tanggal rilis: 2025-12-22*

### 🚀 Peningkatan

- **[Manajer tugas asinkron]** Peningkatan penanganan kesalahan selama tugas pembersihan dengan menambahkan mekanisme penangkapan pengecualian untuk mencegah kerusakan aplikasi ([#8215](https://github.com/nocobase/nocobase/pull/8215)) oleh @mytharcher
- **[Alur Kerja]** Menambahkan instance alur kerja asli ke API duplikat ([#8225](https://github.com/nocobase/nocobase/pull/8225)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Menangani aturan tautan kosong untuk mencegah kesalahan ([#8239](https://github.com/nocobase/nocobase/pull/8239)) oleh @zhangzhonghe
- **[Departemen]** Memperbaiki masalah di mana pencarian agregat tidak dapat menemukan pengguna ([#8222](https://github.com/nocobase/nocobase/pull/8222)) oleh @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Tanggal rilis: 2025-12-19*

### 🚀 Peningkatan

- **[Alur Kerja]** Meningkatkan deskripsi bidang `changed` dalam acara koleksi ([#8216](https://github.com/nocobase/nocobase/pull/8216)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[cli]** license-kit kompatibel dengan kasus di mana DB_PASSWORD kosong ([#8220](https://github.com/nocobase/nocobase/pull/8220)) oleh @jiannx
- **[database]** Memperbaiki inkonsistensi kueri bidang tanggal antara sumber data utama dan eksternal ([#8181](https://github.com/nocobase/nocobase/pull/8181)) oleh @cgyrock
- **[Pengaturan lisensi]** Memperbaiki tampilan abnormal dari plugin berlisensi ([#8214](https://github.com/nocobase/nocobase/pull/8214)) oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana menyetujui membuat asosiasi ke catatan baru oleh @mytharcher
  - Memperbaiki masalah di mana menyetujui membuat asosiasi ke-banyak ke catatan baru oleh @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Tanggal rilis: 2025-12-18*

### 🐛 Perbaikan Bug

- **[Alur Kerja]** Memperbaiki masalah di mana kesalahan terjadi ketika menghapus versi alur kerja yang bukan saat ini ([#8203](https://github.com/nocobase/nocobase/pull/8203)) oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Tanggal rilis: 2025-12-24*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki masalah di mana konten pesan node llm tidak ditampilkan ([#8257](https://github.com/nocobase/nocobase/pull/8257)) oleh @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Tanggal rilis: 2025-12-24*

### 🎉 Fitur Baru

- **[Alur Kerja]** Menambahkan variabel sistem baru dalam alur kerja, termasuk `instanceId` dan `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** menggunakan select untuk konfigurasi lebar kolom operasi ([#8218](https://github.com/nocobase/nocobase/pull/8218)) oleh @katherinehhh
- **[Karyawan AI]** Memperbaiki AI karyawan tidak merespons pada pengiriman edit pertama<br/>Menghapus AI karyawan bawaan yang tidak perlu "Avery Form Assistant"<br/>Menambahkan izin peran awal default untuk AI karyawan bawaan<br/>Meningkatkan penanganan kesalahan dan perilaku output AI karyawan<br/>Menambahkan dukungan untuk AI mengakses variabel konteks modal<br/>Menambahkan dukungan untuk sumber data eksternal untuk AI<br/>Memperbaiki pemotongan percakapan yang salah ketika AI memproses volume data besar ([#8191](https://github.com/nocobase/nocobase/pull/8191)) oleh @heziqiang
- **[Alur Kerja]**

  - Menambahkan instance alur kerja asli ke API duplikat ([#8225](https://github.com/nocobase/nocobase/pull/8225)) oleh @mytharcher
  - Meningkatkan deskripsi bidang `changed` dalam acara koleksi ([#8216](https://github.com/nocobase/nocobase/pull/8216)) oleh @mytharcher
- **[Manajer tugas asinkron]** Peningkatan penanganan kesalahan selama tugas pembersihan dengan menambahkan mekanisme penangkapan pengecualian untuk mencegah kerusakan aplikasi ([#8215](https://github.com/nocobase/nocobase/pull/8215)) oleh @mytharcher
- **[Blok: Panel aksi]** meningkatkan tampilan blok, aksi, dan bidang yang tersembunyi dalam mode konfigurasi ([#8174](https://github.com/nocobase/nocobase/pull/8174)) oleh @katherinehhh
- **[Template UI]** Menambahkan plugin template UI, menyediakan kemampuan untuk menggunakan kembali template blok dan template popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) oleh @gchust
- **[Aksi: Ekspor catatan Pro]** impor pro & ekspor pro aksi mendukung kontrol izin oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Memperbarui `approval.data` ke versi terbaru dari catatan yang disetujui ketika eksekusi berakhir, untuk mencocokkan mode tampilan catatan "Terbaru" oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]**

  - memperbaiki masalah pemeriksaan izin untuk menambahkan catatan anak di tabel pohon ([#8240](https://github.com/nocobase/nocobase/pull/8240)) oleh @katherinehhh
  - Memperbaiki masalah di mana beberapa variabel terkait catatan popup blok ditampilkan secara tidak benar. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) oleh @gchust
  - Memperbaiki masalah di mana aksi atau tab yang ditambahkan setelah menyeret aksi atau tab tidak ditampilkan. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) oleh @gchust
  - masalah pemeriksaan izin di sumber data eksternal ([#8221](https://github.com/nocobase/nocobase/pull/8221)) oleh @katherinehhh
  - memperbaiki aksi sumber data eksternal yang disembunyikan meskipun memiliki izin ([#8217](https://github.com/nocobase/nocobase/pull/8217)) oleh @katherinehhh
- **[klien]**

  - Menangani aturan tautan kosong untuk mencegah kesalahan ([#8239](https://github.com/nocobase/nocobase/pull/8239)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana kolom operasi blok tabel tidak dapat dihapus. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) oleh @gchust
  - Memperbaiki masalah di mana eksekusi pratinjau menulis output JSX yang dikompilasi kembali ke stepParams, menyebabkan kode sumber yang disimpan ditulis ulang. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) oleh @gchust
  - Memperbaiki kesalahan unggahan lampiran S3 Pro dan meningkatkan pratinjau file ([#8211](https://github.com/nocobase/nocobase/pull/8211)) oleh @katherinehhh
- **[cli]** license-kit kompatibel dengan kasus di mana DB_PASSWORD kosong ([#8220](https://github.com/nocobase/nocobase/pull/8220)) oleh @jiannx
- **[database]** Memperbaiki inkonsistensi kueri bidang tanggal antara sumber data utama dan eksternal ([#8181](https://github.com/nocobase/nocobase/pull/8181)) oleh @cgyrock
- **[Bidang koleksi: Urutan]** Memperbaiki kesalahan ketika perintah perbaikan bidang-urutan menemukan koleksi yang tidak ada di lingkungan saat ini. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) oleh @cgyrock
- **[Alur Kerja: Node manual]** Memperbaiki masalah di mana kesalahan terjadi ketika membatalkan eksekusi alur kerja yang telah dihapus ([#8258](https://github.com/nocobase/nocobase/pull/8258)) oleh @mytharcher
- **[Template UI]** Memperbaiki kesalahan di mana membuka popup bidang asosiasi akan salah menggunakan template popup bidang non-asosiasi. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) oleh @gchust
- **[Departemen]** Memperbaiki masalah di mana pencarian agregat tidak dapat menemukan pengguna ([#8222](https://github.com/nocobase/nocobase/pull/8222)) oleh @2013xile
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana bidang banyak-ke-banyak (array) tidak dapat dibuat ketika tipe kunci target adalah Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) oleh @2013xile
- **[Pengaturan lisensi]** Memperbaiki tampilan abnormal dari plugin berlisensi ([#8214](https://github.com/nocobase/nocobase/pull/8214)) oleh @jiannx
- **[Aksi: Impor catatan]** Memperbaiki masalah di mana indeks baris dalam pesan kesalahan selalu 1 ketika kesalahan terjadi dalam aksi impor ([#8244](https://github.com/nocobase/nocobase/pull/8244)) oleh @mytharcher
- **[Cetak template]** Memperbaiki permintaan cetak template tidak berfungsi dengan sumber data eksternal oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki rollback duplikat dari transaksi yang sama oleh @mytharcher
  - Memperbaiki masalah di mana menyetujui membuat asosiasi ke catatan baru oleh @mytharcher
  - Memperbaiki masalah di mana menyetujui membuat asosiasi ke-banyak ke catatan baru oleh @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Tanggal rilis: 2025-12-18*

### 🚀 Peningkatan

- **[klien]** mendukung lebar kolom kustom untuk kolom tabel ([#8200](https://github.com/nocobase/nocobase/pull/8200)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]** Mencegah overflow lebar total baris selama pengubahan ukuran kolom ([#8166](https://github.com/nocobase/nocobase/pull/8166)) oleh @zhangzhonghe
- **[flow-engine]** Memperbaiki masalah di mana mengirimkan formulir dalam modal yang digunakan kembali melalui uid popup tidak menyegarkan data blok. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) oleh @gchust
- **[Bidang koleksi: Rumus]** Memperbaiki masalah di mana bidang BigInt tidak dapat ditambahkan ke blok Detail dan Formulir ([#8201](https://github.com/nocobase/nocobase/pull/8201)) oleh @katherinehhh
- **[Alur Kerja]** Memperbaiki masalah di mana kesalahan terjadi ketika menghapus versi alur kerja yang bukan saat ini ([#8203](https://github.com/nocobase/nocobase/pull/8203)) oleh @mytharcher
