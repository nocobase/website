---
title: "Pembaruan Mingguan｜Tambahkan variabel JS ke alur peristiwa"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 27 Maret hingga 2 April 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Tanggal rilis: 2026-04-01*

### 🚀 Peningkatan

- **[Karyawan AI]** Mengoptimalkan prompt untuk deepseek saat menangani jenis file yang tidak didukung ([#9003](https://github.com/nocobase/nocobase/pull/9003)) oleh @cgyrock
- **[Alur Kerja]** Mengubah ukuran sakelar aktif menjadi kecil ([#9010](https://github.com/nocobase/nocobase/pull/9010)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana salinan bidang terkait dalam tabel tidak ditampilkan dengan benar pada rendering pertama. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) oleh @jiannx
- **[flow-engine]** Memperbaiki menu pengaturan yang terpotong di popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) oleh @gchust
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki daftar putih tindakan untuk pembaruan pesan dalam aplikasi untuk mencegah pembaruan tidak sah oleh bukan pemilik. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) oleh @mytharcher
- **[Karyawan AI]** Memperbaiki masalah perilaku pencarian web yang tidak normal saat menggunakan LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) oleh @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Tanggal rilis: 2026-03-30*

### 🚀 Peningkatan

- **[Alur Kerja: JavaScript]** Menambahkan `isolated-vm` sebagai mesin eksekusi JavaScript default untuk node JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) oleh @mytharcher
  Referensi: [Node JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki pesan konfirmasi sekunder yang salah saat menutup popup bertingkat setelah memodifikasi data formulir. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) oleh @gchust
- **[Alur Kerja: node SQL]** Memperbaiki masalah keamanan di node SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) oleh @mytharcher
- **[Karyawan AI]** Menambahkan verifikasi kepemilikan ke API percakapan AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]** Memperbaiki batas versi migrasi lama untuk menghindari kesalahan yang muncul saat memulai di deployment versi terbaru oleh @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Tanggal rilis: 2026-03-30*

### 🚀 Peningkatan

- **[tidak ditentukan]** Mengurangi kebisingan log selama startup server dengan membungkam perintah unzip untuk LibreOffice dan Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) oleh @Rishabh1925

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana spasi dalam ekspresi variabel menyebabkan label tidak ditampilkan ([#8988](https://github.com/nocobase/nocobase/pull/8988)) oleh @mytharcher
- **[flow-engine]** Memperbaiki masalah di mana item menu tidak dapat dipilih ketika lebar komponen UI dalam status konfigurasi terlalu kecil. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) oleh @gchust
- **[Visualisasi Data]** Saat menggunakan filter berbasis variabel, grafik gagal menyelesaikan nilai variabel dengan benar pada render awal ([#8964](https://github.com/nocobase/nocobase/pull/8964)) oleh @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Tanggal rilis: 2026-03-27*

### 🐛 Perbaikan Bug

- **[Aksi: Impor rekaman]** memperbaiki masalah kegagalan impor setelah membuka plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) oleh @jiannx
- **[Visualisasi Data]** memperbaiki statistik data grafik peran root yang tidak normal setelah mengaktifkan plugin ruang ([#8969](https://github.com/nocobase/nocobase/pull/8969)) oleh @jiannx
- **[Alur Kerja: JavaScript]** Memperbaiki masalah keamanan ([#8967](https://github.com/nocobase/nocobase/pull/8967)) oleh @mytharcher
- **[Karyawan AI]** Menyesuaikan jarak antara komponen kartu alat dalam Percakapan AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) oleh @cgyrock
- **[Aksi: Ekspor rekaman]** Membatasi konfigurasi impor dan ekspor bidang terkait multi-lapisan ([#8893](https://github.com/nocobase/nocobase/pull/8893)) oleh @jiannx
- **[Aksi: Impor rekaman Pro]** membatasi konfigurasi impor dan ekspor bidang terkait multi-lapisan oleh @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Tanggal rilis: 2026-03-26*

### 🚀 Peningkatan

- **[Alur Kerja]** Menambahkan variabel untuk parameter ukuran halaman ([#8951](https://github.com/nocobase/nocobase/pull/8951)) oleh @mytharcher
- **[Alur Kerja: Subflow]** Menambahkan logika defensif untuk menghindari alur kerja macet saat terjadi pengecualian oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki pengecualian saat menambahkan node anak ke tabel pohon di jendela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) oleh @jiannx
- **[server]** Menghindari penanganan sync-message setelah aplikasi berhenti ([#8940](https://github.com/nocobase/nocobase/pull/8940)) oleh @mytharcher
- **[Flow engine]** Menghapus event lama yang disalin dari repositori uiSchema untuk menghindari kesalahan yang muncul saat dipicu ([#8957](https://github.com/nocobase/nocobase/pull/8957)) oleh @mytharcher
- **[Otentikasi]** memperbaiki acl untuk mendukung parameter pemfilteran status kustom ([#8918](https://github.com/nocobase/nocobase/pull/8918)) oleh @jiannx
- **[Manajer Email]** Memperbaiki tanda tangan yang ditimpa saat menggunakan template oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Tanggal rilis: 2026-03-27*

### 🎉 Fitur Baru

- **[klien]** Menambahkan variabel JS ke alur peristiwa ([#8938](https://github.com/nocobase/nocobase/pull/8938)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]** mendukung pengaturan gaya bidang melalui runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) oleh @jiannx
- **[flow-engine]** Meningkatkan validasi skema untuk api pembuatan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust
- **[Alur Kerja: Peristiwa pra-tindakan]** Menambahkan aturan validasi untuk pemicu dan node ([#8971](https://github.com/nocobase/nocobase/pull/8971)) oleh @mytharcher
- **[Alur Kerja]** Menambahkan variabel untuk parameter ukuran halaman ([#8951](https://github.com/nocobase/nocobase/pull/8951)) oleh @mytharcher
- **[Alur Kerja: Webhook]** Menambahkan validasi untuk membuat API pemicu / node oleh @mytharcher
- **[Alur Kerja: Subflow]**

  - Menambahkan validasi untuk membuat API node oleh @mytharcher
  - Menambahkan logika defensif untuk menghindari alur kerja macet saat terjadi pengecualian oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menambahkan validasi untuk API pemicu / node oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki pengecualian saat menambahkan node anak ke tabel pohon di jendela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) oleh @jiannx
- **[server]** Menghindari penanganan sync-message setelah aplikasi berhenti ([#8940](https://github.com/nocobase/nocobase/pull/8940)) oleh @mytharcher
- **[Aksi: Ekspor rekaman]** Membatasi konfigurasi impor dan ekspor bidang terkait multi-lapisan ([#8893](https://github.com/nocobase/nocobase/pull/8893)) oleh @jiannx
- **[Visualisasi Data]** memperbaiki statistik data grafik peran root yang tidak normal setelah mengaktifkan plugin ruang ([#8969](https://github.com/nocobase/nocobase/pull/8969)) oleh @jiannx
- **[Aksi: Impor rekaman]** memperbaiki masalah kegagalan impor setelah membuka plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) oleh @jiannx
- **[Alur Kerja: JavaScript]** Memperbaiki masalah keamanan ([#8967](https://github.com/nocobase/nocobase/pull/8967)) oleh @mytharcher
- **[Karyawan AI]** Menyesuaikan jarak antara komponen kartu alat dalam Percakapan AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) oleh @cgyrock
- **[Flow engine]** Menghapus event lama yang disalin dari repositori uiSchema untuk menghindari kesalahan yang muncul saat dipicu ([#8957](https://github.com/nocobase/nocobase/pull/8957)) oleh @mytharcher
- **[Otentikasi]** memperbaiki acl untuk mendukung parameter pemfilteran status kustom ([#8918](https://github.com/nocobase/nocobase/pull/8918)) oleh @jiannx
- **[Aksi: Impor rekaman Pro]** membatasi konfigurasi impor dan ekspor bidang terkait multi-lapisan oleh @jiannx
- **[Manajer Email]** Memperbaiki tanda tangan yang ditimpa saat menggunakan template oleh @jiannx
