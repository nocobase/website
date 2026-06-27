---
title: "Pembaruan Mingguan NocoBase: Optimalkan Tampilan Seluler"
description: "Pembaruan minggu ini meliputi: optimalkan tampilan seluler, dukung konfigurasi formulir pendaftaran, sesuaikan lebar kolom default di blok tabel, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**Minggu ini kami melakukan penyesuaian pada rilis versi. Pembaruan versi selanjutnya akan mencakup tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Tanggal rilis: 2024-11-14*

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah yang mencegah judul aturan tautan dibersihkan selama pengeditan ([#5644](https://github.com/nocobase/nocobase/pull/5644)) oleh @katherinehhh
- **[Komentar]** Perbaiki pengaturan cakupan data tidak berfungsi di blok komentar oleh @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Tanggal rilis: 2024-11-19*

### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki pemeriksaan izin bidang tidak terpengaruh oleh konteks bidang asosiasi ([#5672](https://github.com/nocobase/nocobase/pull/5672)) oleh @katherinehhh
  - Perbaiki aturan tautan menyimpan perubahan nilai kosong ke nilai kosong statis ([#5667](https://github.com/nocobase/nocobase/pull/5667)) oleh @katherinehhh
- **[Bidang Koleksi: Banyak ke banyak (array)]** Perbaiki masalah di mana mengambil catatan dalam koleksi asosiasi dengan bidang banyak ke banyak (array) menyebabkan kesalahan ([#5661](https://github.com/nocobase/nocobase/pull/5661)) oleh @2013xile
- **[Blok: Gantt]** Perbaiki template blok gantt salah memanggil blok kalender saat menambahkan ([#5673](https://github.com/nocobase/nocobase/pull/5673)) oleh @katherinehhh
- **[Visualisasi data]** Perbaiki masalah di mana transformasi data tidak berfungsi pada tooltip di bagan sumbu ganda ([#5649](https://github.com/nocobase/nocobase/pull/5649)) oleh @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Tanggal rilis: 2024-11-14*

### 🎉 Fitur Baru

- **[Otentikasi]** Memungkinkan untuk mengonfigurasi bidang nama pengguna dan email dari formulir pendaftaran ([#5639](https://github.com/nocobase/nocobase/pull/5639)) oleh @2013xile
- **[Alur Kerja]** mendukung kunci gabungan dalam acara koleksi ([#5627](https://github.com/nocobase/nocobase/pull/5627)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** sesuaikan lebar kolom default menjadi 100 di blok tabel ([#5625](https://github.com/nocobase/nocobase/pull/5625)) oleh @katherinehhh
- **[Manajer notifikasi]** perbarui ikon pesan dalam aplikasi menjadi ikon lonceng ([#5638](https://github.com/nocobase/nocobase/pull/5638)) oleh @sheldon66
- **[Blok: Panel tindakan]** tambahkan dukungan untuk pengaturan tinggi blok di panel tindakan ([#5628](https://github.com/nocobase/nocobase/pull/5628)) oleh @katherinehhh
- **[Seluler]** Gaya: optimalkan gaya seluler: kurangi jarak bidang, dan tingkatkan kekompakan tampilan bidang ([#5605](https://github.com/nocobase/nocobase/pull/5605)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[build]** Memperbaiki masalah gagal membangun plugin jika berisi file .less ([#5646](https://github.com/nocobase/nocobase/pull/5646)) oleh @gchust
- **[klien]** Perbaiki kolom rata kanan-tetap di tabel ([#5636](https://github.com/nocobase/nocobase/pull/5636)) oleh @katherinehhh
- **[Alur Kerja: Node loop]** perbaiki pemeriksaan kondisi yang salah di node loop ([#5634](https://github.com/nocobase/nocobase/pull/5634)) oleh @mytharcher
- **[Manajer notifikasi]** perbaiki template tidak dikompilasi di api notifikasi ([#5630](https://github.com/nocobase/nocobase/pull/5630)) oleh @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Tanggal rilis: 2024-11-14*

### 🚀 Peningkatan

- **[klien]** sesuaikan beberapa api dari inti klien, dan perbaiki peringatan ([#5651](https://github.com/nocobase/nocobase/pull/5651)) oleh @mytharcher
- **[Seluler]** ganti komponen tertentu dengan komponen seluler ([#5590](https://github.com/nocobase/nocobase/pull/5590)) oleh @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Tanggal rilis: 2024-11-15*

### 🐛 Perbaikan Bug

- **[klien]** kembalikan modifikasi props `openSize` di tombol tindakan ([#5656](https://github.com/nocobase/nocobase/pull/5656)) oleh @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Tanggal rilis: 2024-11-16*

### 🐛 Perbaikan Bug

- **[klien]**

  - perbaiki pencocokan tipe file ketika file atau properti adalah null ([#5659](https://github.com/nocobase/nocobase/pull/5659)) oleh @mytharcher
  - Perbaiki jumlah halaman tidak diperbarui setelah menghapus data di sub-tabel ([#5648](https://github.com/nocobase/nocobase/pull/5648)) oleh @katherinehhh
- **[Alur Kerja]** perbaiki node menghilang setelah menambahkan kondisi tanpa cabang sebelumnya ([#5658](https://github.com/nocobase/nocobase/pull/5658)) oleh @mytharcher
- **[Seluler]** masalah gaya saat menggunakan teks panjang sebagai bidang judul di bidang asosiasi ([#5655](https://github.com/nocobase/nocobase/pull/5655)) oleh @katherinehhh
- **[Alur Kerja: Acara tindakan kustom]** Perbaiki kesalahan saat menggunakan bidang URL lampiran dengan sumber data eksternal oleh @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Tanggal rilis: 2024-11-16*

### 🐛 Perbaikan Bug

- **[Seluler]** perbaiki: gunakan komponen desktop untuk pilih dalam mode konfigurasi seluler & perbaiki kesalahan saat menggunakan variabel sebagai nilai default di datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) oleh @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Tanggal rilis: 2024-11-17*

### 🐛 Perbaikan Bug

- **[Seluler]** Perbaiki penugasan bidang untuk mendukung nilai variabel sebagai 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) oleh @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Tanggal rilis: 2024-11-18*

### 🐛 Perbaikan Bug

- **[build]** Perbaiki masalah di mana yarn dev melaporkan kesalahan ketika sudah ada plugin yang dibangun di sistem ([#5671](https://github.com/nocobase/nocobase/pull/5671)) oleh @gchust
- **[Seluler]** perbaiki: masalah gaya di seluler ketika sub-tabel dikonfigurasi untuk hanya mengizinkan pemilihan data ([#5670](https://github.com/nocobase/nocobase/pull/5670)) oleh @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Tanggal rilis: 2024-11-19*

### 🚀 Peningkatan

- **[Alur Kerja]** dukungan untuk mendaftarkan variabel sistem di klien ([#5676](https://github.com/nocobase/nocobase/pull/5676)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki pemeriksaan izin bidang tidak terpengaruh oleh konteks bidang asosiasi ([#5672](https://github.com/nocobase/nocobase/pull/5672)) oleh @katherinehhh
- **[Blok: Gantt]** Perbaiki template blok gantt salah memanggil blok kalender saat menambahkan ([#5673](https://github.com/nocobase/nocobase/pull/5673)) oleh @katherinehhh
- **[Kalender]** Perbaiki opsi bidang tanggal yang hilang dengan dan tanpa zona waktu di blok kalender ([#5674](https://github.com/nocobase/nocobase/pull/5674)) oleh @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Tanggal rilis: 2024-11-19*

### 🚀 Peningkatan

- **[Seluler]** Dukung properti dinamis `hidden` untuk komponen `Tabs.TabPan` untuk mengontrol rendering ([#5687](https://github.com/nocobase/nocobase/pull/5687)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**
  - Perbaiki penghapusan nilai input tanggal saat mengganti operator di tombol filter dan mengirimkan bidang tanggal ([#5684](https://github.com/nocobase/nocobase/pull/5684)) oleh @katherinehhh
  - Perbaiki kondisi aturan tautan dengan variabel tanggal tidak berfungsi ([#5675](https://github.com/nocobase/nocobase/pull/5675)) oleh @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Tanggal rilis: 2024-11-19*

### 🎉 Fitur Baru

- **[Adaptor pub sub Redis]** Tambahkan plugin adaptor sinkronisasi Redis oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
